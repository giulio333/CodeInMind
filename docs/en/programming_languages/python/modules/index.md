# Moduli in Python

Il codice tende a crescere, e con esso aumentano anche le difficoltà nella sua manutenzione. Un codice grande è più complesso da gestire e debugare, e per progetti di grandi dimensioni è indispensabile suddividere il lavoro tra più sviluppatori.

Per farlo, è necessario dividere il codice in parti più piccole e indipendenti che possano collaborare tra loro. In Python, questa suddivisione si realizza tramite i **moduli**.

## Perché usare i Moduli?

I moduli consentono di organizzare il codice in unità più gestibili, ognuna con una funzione specifica. Questo approccio porta diversi vantaggi:

- **Manutenibilità**: Il codice è più semplice da leggere, aggiornare e testare.
- **Collaborazione**: Più sviluppatori possono lavorare contemporaneamente su parti diverse del progetto.
- **Riutilizzabilità**: I moduli possono essere riutilizzati in altri progetti o in altre parti dello stesso progetto.

## Esempio di decomposizione

Un grande progetto, come un'applicazione con interfaccia grafica, potrebbe essere suddiviso in:

1. **Interfaccia utente**: La parte che interagisce con l'utente tramite schermate e widget.
2. **Logica**: La parte che elabora i dati e produce risultati.

Ciascuna di queste parti può essere ulteriormente suddivisa in moduli più piccoli.

<NoteComponent title="Decomposizione" text="La decomposizione in informatica, nota anche come factoring, consiste nel suddividere un problema o un sistema complesso in parti più semplici." />

## Come utilizzare un modulo?

Cos'è un modulo? Il tutorial di Python lo definisce come un file contenente definizioni e istruzioni Python, che può essere successivamente importato e utilizzato quando necessario.

La gestione dei moduli consiste in due situazioni distinte:

- **Utente del modulo**: La prima (probabilmente la più comune) si verifica quando vuoi usare un modulo già esistente, scritto da qualcun altro o creato da te stesso durante il lavoro su un progetto complesso. In questo caso sei l'utente del modulo.
  
- **Fornitore del modulo**: La seconda situazione si verifica quando vuoi creare un modulo completamente nuovo, sia per il tuo uso personale, sia per rendere più facile la vita di altri programmatori. In questo caso, sei il fornitore del modulo.

## Identificazione di un modulo

Un modulo è identificato dal suo nome. 

Python fornisce un certo numero di moduli quando viene installato.

Tutti questi moduli, insieme alle **built-in functions**, formano la **Python Standard Library** - una sorta di biblioteca speciale. 

::: tip Python Standard Library
Dagli un'occhiata: [Python Standard Library](https://docs.python.org/3/library/index.html)
:::

Ogni modulo è composto da **entità** (come un libro è composto da capitoli). Queste entità possono essere **funzioni**, **variabili**, **costanti**, **classi** e **oggetti**. 

Se sai come accedere a un determinato modulo, puoi utilizzare tutte le **entità** che contiene.

## Importare un Modulo

Prima di usare un modulo devi importarlo tramite la **keyword** `import`.

Ad esempio per importare il modulo `math`

``` python
import math
```

L'istruzione `import` può trovarsi ovunque nel tuo codice, a patto che sia prima dell'utilizzo delle **entità** del modulo.

E' possibile anche importare più di un modulo alla volta

``` python
import math, random
```