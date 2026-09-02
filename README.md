<div align="center">

# Playhub Metadata

### Anche un gioco non-Steam può sentirsi a casa nella tua libreria.

Descrizioni, dettagli, media e achievement per giochi PC, Game Pass ed emulatori, integrati direttamente nelle pagine di Steam Big Picture.

[![Release](https://img.shields.io/github/v/release/LoZazaMastro/Playhub-Metadata?style=for-the-badge&label=Release&labelColor=111111&color=ffffff)](https://github.com/LoZazaMastro/Playhub-Metadata/releases/latest)
[![Licenza GPL-3.0](https://img.shields.io/badge/Licenza-GPL--3.0-EA4335?style=for-the-badge&labelColor=111111)](LICENSE)

</div>

## Una scheda completa per ogni gioco

Playhub Metadata arricchisce i collegamenti non-Steam senza creare un'interfaccia parallela. Le informazioni appaiono nelle normali pagine di Big Picture, così giochi PC, titoli Microsoft Store e ROM restano coerenti con il resto della libreria.

- ricerca automatica dei metadati mancanti;
- descrizione, sviluppatore, editore, data di uscita, valutazione e campi informativi;
- modifica manuale per singolo gioco;
- screenshot e contenuti della community quando disponibili;
- metadati IGN con lingua globale o dedicata al gioco;
- traduzione automatica delle descrizioni con Google Translate e fallback MyMemory;
- notizie Steam nell'area Attività per i collegamenti associabili a una pagina dello Store.

## Achievement e trofei

Il plugin può mostrare tre sorgenti nelle pagine dei giochi non-Steam:

- **RetroAchievements** per ROM e collegamenti agli emulatori;
- **Xbox / OpenXBL** per giochi Xbox PC, Game Pass e Microsoft Store importati con UWPHook;
- **RPCS3** per i trofei PS3 letti direttamente dai dati locali dell'emulatore.

Per ogni titolo puoi scegliere rilevamento automatico, una sorgente precisa oppure disattivare gli achievement. I dati vengono mostrati in Steam, ma non diventano achievement ufficiali del tuo account Steam.

## Configurazione delle sorgenti

### RetroAchievements

Inserisci nome utente e Web API key dalle impostazioni del tuo account RetroAchievements, quindi accedi dal QAM. Il plugin prova ad associare automaticamente la ROM e permette comunque una ricerca manuale.

### Xbox / OpenXBL

Crea una chiave su [OpenXBL](https://xbl.io), inseriscila nelle impostazioni e avvia la scansione. I limiti OpenXBL vengono rispettati tramite cache e aggiornamenti conservativi. Per riconoscere correttamente i giochi Microsoft è necessario importarli in Steam con UWPHook.

### RPCS3

I trofei vengono letti da `dev_hdd0/home/<utente>/trophy/<NPCOMMID>/`, incluse icone, grado e data di sblocco. Non servono account o API. Le cartelle RPCS3 comuni, le installazioni EmuDeck e i percorsi definiti in `vfs.yml` vengono rilevati automaticamente; puoi anche indicare manualmente la cartella dati.

Avvia almeno una volta ogni gioco in RPCS3, poi usa **Rileva automaticamente i trofei** nella pagina del titolo o la scansione globale dal QAM.

## Cache e aggiornamenti

Puoi aggiornare gli achievement ogni ora, giorno, settimana, sessione PC oppure soltanto manualmente. L'aggiornamento dopo il gioco riguarda esclusivamente il titolo appena chiuso e non avvia una scansione completa della libreria.

## Installazione

Puoi installare e aggiornare Playhub Metadata dal Plugin Store di [Playhub](https://github.com/LoZazaMastro/Playhub), oppure scaricare lo ZIP dall'[ultima release](https://github.com/LoZazaMastro/Playhub-Metadata/releases/latest) e installarlo da **Decky → Impostazioni → Sviluppatore → Installa plugin da ZIP**.

## Sviluppo

```powershell
pnpm install
pnpm run build
python -m py_compile main.py
.\package-win.ps1
```

## Licenza e riconoscimenti

Playhub Metadata è distribuito con licenza [GNU GPL-3.0-or-later](LICENSE). Il progetto usa il Decky Plugin Template; l'integrazione del menu contestuale in `src/contextMenuPatch.tsx` deriva da [decky-steamgriddb](https://github.com/SteamGridDB/decky-steamgriddb), anch'esso GPL-3.0. Dettagli e attribuzioni sono raccolti in [NOTICE](NOTICE).

<div align="center">

Creato e mantenuto da **[LoZazaMastro](https://github.com/LoZazaMastro)**.

</div>
