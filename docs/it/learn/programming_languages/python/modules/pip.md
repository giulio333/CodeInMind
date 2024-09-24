# PIP

**PIP** (Python Package Installer) è uno strumento che consente di installare e gestire i pacchetti Python. È il metodo più comune e semplice per accedere ai pacchetti pubblicati su [PyPI](https://pypi.org).

Per capire la differenza tra **PIP** e **PyPI**, considera quanto segue:

1. **Repository centralizzato**: Un luogo dove tutti i pacchetti disponibili possono essere archiviati e distribuiti. Il più famoso repository per Python è il **Python Package Index (PyPI)**.
2. **Strumento di gestione dei pacchetti**: Un sistema che consente agli sviluppatori di accedere facilmente a PyPI per scaricare, installare e gestire i pacchetti. Questo strumento si chiama **PIP**.

::: tip
PIP è preinstallato con Python 3.4 e versioni successive. Se stai utilizzando una versione precedente di Python, dovrai installare PIP manualmente.
:::

## Il Ciclo di Vita di un Pacchetto

L’ecosistema dei pacchetti Python funziona in questo modo:

1.	**Sviluppo**: Un programmatore scrive del codice per risolvere un problema specifico.

2.	**Condivisione**: Il codice viene pacchettizzato e pubblicato su un repository come **PyPI**, rendendolo disponibile per altri sviluppatori.

3.	**Utilizzo**: Un altro sviluppatore trova il pacchetto su **PyPI**, lo installa con **PIP** e lo utilizza nel proprio progetto.

4.	**Modifica e miglioramento**: Il nuovo sviluppatore può modificare il pacchetto per adattarlo alle sue necessità, creando una nuova versione o un progetto derivato.

## Ecosistema dei pacchetti Python

Il **repository** (o repo, in breve) si chiama **PyPI** (che sta per Python Package Index) ed è mantenuto da un gruppo di lavoro chiamato **Packaging Working Group**, che fa parte della **Python Software Foundation**, il cui compito principale è supportare gli sviluppatori Python nella distribuzione efficiente del codice.

Ovviamente non è l’unico repository Python esistente. Al contrario, ce ne sono molti altri, creati per progetti e gestiti da numerose comunità Python, grandi e piccole.

## Dove si trova Pip?

Quando installi Python, **pip** viene installato automaticamente nella stessa directory di Python. Di solito, **pip** si trova nella cartella Scripts all’interno della directory di installazione di Python. Ad esempio:

- Su **Windows**: `C:\Users\tuo_utente\AppData\Local\Programs\Python\PythonXX\Scripts\pip`
- Su **macOS** e **Linux**: `/usr/local/bin/pip` o `/usr/bin/pip`

::: tip
Per sapere esattamente dove si trova pip nel tuo sistema, puoi eseguire il comando:

```bash
which pip   # Su macOS o Linux
where pip   # Su Windows
```
:::

Quando installi **più versioni di Python**, avrai anche più comandi **pip** disponibili. Questo perché ogni versione di Python ha il suo pip **dedicato** per gestire i pacchetti per quella versione specifica.

Ad esempio, se hai installato sia Python 2.x che Python 3.x, potresti avere:

- **pip** o **pip2**: Si riferisce alla versione di **Python 2**.
- **pip3**: Si riferisce alla versione di P**ython 3**.

In generale, se esegui il comando pip senza specificare una versione, pip installerà i pacchetti per la versione di Python predefinita nel tuo sistema. Tuttavia, potresti voler utilizzare pip3 se desideri installare pacchetti specificamente per Python 3.

Come gestire le versioni multiple di pip

Se vuoi essere sicuro di usare il pip giusto per una specifica versione di Python, puoi eseguire pip direttamente usando il comando associato alla versione Python. Ad esempio:

## Comandi Utili

Ecco alcuni comandi utili per iniziare a lavorare con PIP

### Verifica la Versione di PIP

```bash
pip --version
```

### Installa un Pacchetto

```bash
pip install nome_pacchetto
```

### Installa una Versione Specifica di un Pacchetto

```bash
pip install nome_pacchetto==versione
```

### Disinstalla un Pacchetto

```bash
pip uninstall nome_pacchetto
```

### Mostra i Pacchetti Installati

```bash
pip list
```

### Aggiorna un Pacchetto

```bash
pip install --upgrade nome_pacchetto
```