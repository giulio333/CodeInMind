# Errors and Exceptions

## Gestione delle Eccezioni in Python

La gestione delle eccezioni è una parte fondamentale della programmazione. 

Permette di gestire situazioni impreviste, come errori di runtime, in modo elegante, prevenendo crash dell'applicazione e mantenendo un'esperienza utente fluida. 

A tal proposito esploreremo il blocco `try-except`, come utilizzarlo correttamente e come integrarlo con `finally` per gestire le risorse in modo sicuro.

## Introduzione alle Eccezioni in Python

::: tip Definizione
In Python, un'eccezione è un evento che interrompe il normale flusso di un programma. 
:::

Le eccezioni si verificano in presenza di errori come la **divisione per zero**, l'**accesso a un indice inesistente** di una lista o il tentativo di **aprire un file che non esiste**. 

Se non gestite, queste eccezioni causeranno la terminazione del programma.

### Esempio di Eccezione Non Gestita

``` py
numero = 10
divisore = 0
risultato = numero / divisore
```

Quando esegui questo codice, Python genera un errore [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError) e il programma si interrompe. 

::: tip exception ZeroDivisionError
Fa parte delle [ArithmeticError](https://docs.python.org/3/library/exceptions.html#ArithmeticError):

- [OverflowError](https://docs.python.org/3/library/exceptions.html#OverflowError)
- [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError)
- [FloatingPointError](https://docs.python.org/3/library/exceptions.html#FloatingPointError)
:::

Sollevata quando il secondo argomento di un'operazione di divisione o modulo è zero.

Per gestire questa eventualità, possiamo usare un blocco `try-except`.

## Il Blocco `try-except`

Il blocco `try-except` consente di catturare le eccezioni e gestirle senza interrompere l'esecuzione del programma. Ecco la sintassi di base:

``` py
try:
    # Codice che potrebbe sollevare un'eccezione
except TipoDiEccezione:
    # Codice che gestisce l'eccezione
```

### Esempio di Gestione delle Eccezioni

``` py
try:
    numero = int(input("Inserisci un numero: "))
    divisore = int(input("Inserisci il divisore: "))
    risultato = numero / divisore
except ZeroDivisionError:
    print("Errore: non è possibile dividere per zero.")
except ValueError:
    print("Errore: per favore inserisci solo numeri.")
```

In questo esempio, se il codice nel blocco `try` solleva una `ZeroDivisionError`, l'eccezione viene catturata e gestita nel blocco `except`, stampando un messaggio di errore invece di causare un crash.

## Gestire Più Eccezioni

A volte, è necessario gestire più tipi di eccezioni. Python permette di specificare più blocchi `except` per gestire diverse eccezioni in modi differenti.

### Esempio di Gestione di Più Eccezioni

``` py
try:
    numero = int(input("Inserisci un numero: "))
    divisore = int(input("Inserisci il divisore: "))
    risultato = numero / divisore
except ZeroDivisionError:
    print("Errore: non è possibile dividere per zero.")
except ValueError:
    print("Errore: per favore inserisci solo numeri.")
```

In questo esempio, il blocco `except` gestisce sia gli errori di divisione per zero che quelli derivanti dall'inserimento di valori non numerici.

## Il Blocco `finally`

Il blocco `finally` è opzionale e viene eseguito indipendentemente dal fatto che si verifichi un'eccezione o meno. È utile per rilasciare risorse o eseguire operazioni di pulizia.

### Esempio di Utilizzo di `finally`

``` py
try:
    file = open("dati.txt", "r")
    contenuto = file.read()
except FileNotFoundError:
    print("Errore: il file non esiste.")
finally:
    file.close()
    print("File chiuso.")
```

In questo esempio, il file viene chiuso correttamente indipendentemente dal fatto che si verifichi un'eccezione.

## Creazione di Eccezioni Personalizzate

In Python, è possibile creare eccezioni personalizzate per gestire errori specifici del proprio programma. Per farlo, basta definire una nuova classe che eredita da `Exception`.

### Esempio di Eccezione Personalizzata

``` py
class ErrorePersonalizzato(Exception):
    pass

try:
    raise ErrorePersonalizzato("Questo è un errore personalizzato.")
except ErrorePersonalizzato as e:
    print(e)
```

In questo esempio, viene sollevata e gestita un'eccezione personalizzata.

## Conclusioni

La gestione delle eccezioni è un aspetto cruciale per scrivere codice Python robusto e sicuro. Utilizzando `try`, `except`, e `finally`, puoi prevenire crash inaspettati e gestire le risorse in modo efficiente. Ricorda di utilizzare le eccezioni per trattare errori che non possono essere previsti e gestiti in altro modo, mantenendo il codice pulito e leggibile.