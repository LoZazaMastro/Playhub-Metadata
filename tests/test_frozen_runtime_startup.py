"""Start the real backend with the standard library missing in reported Decky builds."""
import builtins
import difflib
import importlib.util
import random
import sys
import types
import unittest
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]


def load_backend(without_difflib=False):
    original_import = builtins.__import__

    def frozen_import(name, *args, **kwargs):
        if without_difflib and (name == "difflib" or name.startswith("difflib.")):
            raise ModuleNotFoundError("No module named 'difflib'", name="difflib")
        return original_import(name, *args, **kwargs)

    decky = types.ModuleType("decky")
    spec = importlib.util.spec_from_file_location("playhub_metadata_startup_test", ROOT / "main.py")
    module = importlib.util.module_from_spec(spec)
    with patch.dict(sys.modules, {"decky": decky}), patch("builtins.__import__", side_effect=frozen_import):
        spec.loader.exec_module(module)
    return module


class FrozenRuntimeStartupTests(unittest.TestCase):
    def test_real_backend_starts_with_reported_missing_module(self):
        backend = load_backend(True)
        self.assertEqual(backend.difflib.__name__, "playhub_metadata_difflib")
        self.assertTrue(callable(backend.Plugin))
        self.assertTrue(callable(backend.Plugin.get_all_metadata))

    def test_normal_runtime_keeps_standard_library(self):
        self.assertIs(load_backend().difflib.SequenceMatcher, difflib.SequenceMatcher)

    def test_fallback_keeps_title_scores(self):
        normal, frozen = load_backend(), load_backend(True)
        pairs = [("Super Mario Odyssey", "Super Mario Odissey"), ("Doom 64", "Doom 64"),
                 ("Doom 64", "Doom Eternal"), ("Pokemon Gold", "Pokémon Gold"),
                 ("", ""), ("Half-Life 2", "Half Life 3"), ("ab" * 200, "ba" * 200)]
        for left, right in pairs:
            self.assertEqual(normal.Plugin._title_match_score(left, right), frozen.Plugin._title_match_score(left, right))

    def test_fallback_ratios_match_2000_deterministic_titles(self):
        frozen = load_backend(True)
        rng = random.Random(257)
        for index in range(2000):
            left = "".join(rng.choice("abcdef 123") for _ in range(rng.randrange(0, 350)))
            right = list(left)
            for _ in range(10):
                if right:
                    right[rng.randrange(len(right))] = rng.choice("abcdef 123")
            right = "".join(right)
            self.assertEqual(difflib.SequenceMatcher(None, left, right).ratio(),
                             frozen.difflib.SequenceMatcher(None, left, right).ratio(), index)

    def test_packaging_includes_fallback_and_complete_license(self):
        packaging = (ROOT / "package-win.ps1").read_text(encoding="utf-8-sig")
        self.assertIn('"difflib.py", "PYTHON-LICENSE.txt"', packaging)
        self.assertIn("PYTHON SOFTWARE FOUNDATION LICENSE", (ROOT / "vendor/PYTHON-LICENSE.txt").read_text())


if __name__ == "__main__":
    unittest.main()
