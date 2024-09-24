# Namespace

In Python, il concetto di **namespace** è fondamentale per comprendere come le **variabili**, le **funzioni** e altri **oggetti** vengono gestiti e risolti all`interno di un programma. 

Un **namespace** è semplicemente uno spazio 



## Cos'è un namespace?

Un **namespace** è come uno **spazio** (dizionario) in cui i **nomi** (variabili, funzioni, classi, ecc.) vengono mappati ai rispettivi **oggetti**. 

::: tip Esempio

Qui vengono mostrati due Namespace ciascuno con i propri nomi.

``` mermaid
graph TD
    subgraph Namespace A
    A1["math.sqrt()"]
    A2["math.pi"]
    A3["math.factorial()"]
    end

    subgraph Namespace B
    B1["random.randint()"]
    B2["random.random()"]
    B3["random.choice()"]
    end
```
:::

Python mantiene più namespace attivi contemporaneamente:

- **Namespace globale**: contiene i nomi definiti a livello del **modulo**.
- **Namespace locale**: contiene i nomi definiti all`interno di una **funzione**.
- **Namespace integrato**: contiene i nomi delle funzioni e delle eccezioni **predefinite di Python**.

Ogni volta che accedi a una variabile o a una funzione, Python cerca il nome nel namespace attuale, partendo da quello **locale** e passando al namespace **globale** e poi a quello **integrato**, se necessario.

::: details 
``` mermaid
graph TD
    A["Nome richiesto"] --> B["Namespace Locale"]
    B -->|Trovato| C["Usa Nome"]
    B -->|Non trovato| D["Namespace Globale"]
    D -->|Trovato| C["Usa Nome"]
    D -->|Non trovato| E["Namespace Integrato"]
    E -->|Trovato| C["Usa Nome"]
    E -->|Non trovato| F["Errore: NameError"]
```
:::

> Attenzione!
>   Quando Python importa il contenuto di un modulo, **tutti i nomi** definiti nel modulo diventano conosciuti, ma non entrano ancora nel **namespace**!

Questo significa che puoi avere le tue entità chiamate sin o pi, e non saranno influenzate dall’import in alcun modo.

## Importazione di un modulo

### Primo Metodo

Il primo modo per utilizzare un modulo è il seguente:

``` python
import math

print(math.pi)
```

In questo caso, non importa se i nomi nel tuo codice e quelli presenti nel namespace del modulo sono in conflitto. 

Per accedere agli elementi del namespace del modulo, devi comunque utilizzare il prefisso del modulo, in questo caso `math`.

### Secondo Metodo

Il secondo modo per utilizzare un modulo è:

``` python
from math import pi

print(pi)
```

In questo caso, viene importata solo l'**entità** `pi` e nient'altro dal modulo. 

Tuttavia, bisogna fare attenzione, poiché il nome `pi` non deve entrare in conflitto con altri nomi già presenti nel nostro namespace.

::: warning
L'utilizzo di questo metodo è sconsigliato.
:::

### Terzo Metodo

Il terzo metodo è il più aggressivo in quanto importa **tutte le entità** del modulo in un'unica operazione.

``` python
from math import *

print(pi)
```

Attenzione! Se si utilizza questo metodo risulta complicato evitare conflitti nel namespace.

::: warning
L'utilizzo di questo metodo è sconsigliato.
:::

## Alias

L'aliasing fa si che il modulo venga identificato con un nome diverso da quello originale.

``` python
import math as mt

print(mt.pi)
```

oppure

``` python
from math import pi as num_pi

print(num_pi)
```

## Best Practice

Abbiamo detto che è legittimo importare più moduli con

``` python
import mod1, mod2, mod2
```

Per motivi stilistici però si preferisce la forma

``` python
import mod1
import mod2
import mod3
```