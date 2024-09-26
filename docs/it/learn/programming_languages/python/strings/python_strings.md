# Stringhe in Python

Le stringhe sono sequenze di caratteri. 

In Python, le stringhe sono **immutabili**, il che significa che non possono essere modificate dopo la creazione.

Per vedere il [code point](ASCII.md#code-point) di un carattere, è possibile utilizzare la funzione `ord()`.

```python
print(ord('A')) # Output: 65
```

Viceversa, per ottenere il carattere corrispondente a un [code point](ASCII.md#code-point), è possibile utilizzare la funzione `chr()`.

```python
print(chr(65)) # Output: A
```

## Creare una stringa

Per creare una stringa in Python, è sufficiente inserire i caratteri all'interno di apici singoli (`'`) o doppi (`"`).

```python
stringa1 = 'Ciao, mondo!'
stringa2 = "Hello, world!"
```

## Concatenare stringhe

Per concatenare due stringhe, è possibile utilizzare l'operatore `+`.

```python
stringa1 = 'Ciao,'
stringa2 = ' mondo!'
stringa3 = stringa1 + stringa2
print(stringa3) # Output: Ciao, mondo!
```

## Ripetere una stringa

Per ripetere una stringa, è possibile utilizzare l'operatore `*`.

```python
stringa = 'Ciao,'
stringa = stringa * 3
print(stringa) # Output: Ciao,Ciao,Ciao,
```

## Indici delle stringhe

Le stringhe in Python sono **sequenze** di caratteri, quindi è possibile accedere a ciascun carattere utilizzando un indice.

Questo le rende, almeno in parte, simili alle liste.

```python
stringa = 'Hello, world!'
print(stringa[0]) # Output: H
print(stringa[7]) # Output: w
```

Se si tenta di accedere a un indice che non esiste, verrà generato un errore `IndexError`.

```python
stringa = 'Hello, world!'
print(stringa[13]) # IndexError: string index out of range
```

## Iterare una stringa

Poiché le stringhe sono sequenze, è possibile iterarle utilizzando un ciclo `for`.

```python
stringa = 'Hello, world!'
for carattere in stringa:
    print(carattere)
```

## Slice

È possibile estrarre una sottostringa da una stringa utilizzando la notazione slice.

```python
stringa = 'Hello, world!'
print(stringa[7:12]) # Output: world
```

## In and Not In

L'operatore `in` può essere utilizzato per verificare se una stringa contiene un'altra stringa.

In particolare, restituisce `True` se la stringa a sinistra è contenuta è contenuta in qualsiasi punto della stringa a destra.

```python
stringa = 'Hello, world!'
print('world' in stringa) # Output: True
```

L'operatore `not in` restituisce `True` se la stringa a sinistra non è contenuta in qualsiasi punto della stringa a destra.

```python
stringa = 'Hello, world!'
print('world' not in stringa) # Output: False
```

## Immutevolezza delle stringhe

Poiché le stringhe sono immutabili, non è possibile modificare una stringa dopo la creazione.

Da questo punto di vista, la somiglianza tra **stringhe** e **liste** termina.

```python
stringa = 'Hello, world!'
stringa[7] = 'W' # TypeError: 'str' object does not support item assignment
```

Infatti, se si tenta di modificare un carattere all'interno di una stringa, verrà generato un errore `TypeError`.

Non è possibile nemmeno eliminare un carattere all'interno di una stringa.

```python
stringa = 'Hello, world!'
del stringa[7] # TypeError: 'str' object doesn't support item deletion
```

Non è possibile nemmeno aggiungere un carattere all'interno di una stringa.

```python
stringa = 'Hello, world'
stringa.append('!') # AttributeError: 'str' object has no attribute 'append'
```

Così come non è possibile inserire un carattere in una posizione specifica all'interno di una stringa.

```python
stringa = 'Hello, world!'
stringa.insert(7, 'W') # AttributeError: 'str' object has no attribute 'insert'
```

L'unico modo per modificare una stringa è crearne una nuova.

```python
stringa = 'Hello'
stringa = stringa + ', world!'
print(stringa) # Output: Hello, world!
```

Potresti chiederti se creare una copia di una stringa è un'operazione dispendiosa in termini di risorse.

Fortunatamente Python è intelligente e utilizza un meccanismo chiamato **interning** per ottimizzare l'utilizzo della memoria.

## Min e Max

La funzione `min()` restituisce il carattere con il valore ASCII più basso all'interno di una stringa.

```python
stringa = 'Hello, world!'
print(min(stringa)) # Output: ' '
```

In questo caso, il carattere con il valore ASCII più basso è lo spazio.

La funzione `max()` restituisce il carattere con il valore ASCII più alto all'interno di una stringa.

```python
stringa = 'Hello, world!'
print(max(stringa)) # Output: w
```

In questo caso, il carattere con il valore ASCII più alto è la `w`.

## Index

Il metodo `index()` cerca nella sequenza un valore specifico e restituisce la posizione della prima occorrenza di tale valore.

```python
stringa = 'Hello, world!'
print(stringa.index('w')) # Output: 7
```

La sua assenza genererà un errore `ValueError`.

```python
stringa = 'Hello, world!'
print(stringa.index('z')) # ValueError: substring not found
```

## List

Il metodo `list()` restituisce una lista di caratteri.

```python
stringa = 'Hello'
lista = list(stringa)

print(lista)
# lista = ['H', 'e', 'l', 'l', 'o']
```

## Count

Il metodo `count()` restituisce il numero di occorrenze di un valore specifico all'interno di una stringa.

```python
stringa = 'Hello, world!'
print(stringa.count('l')) # Output: 3
```