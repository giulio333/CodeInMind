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

## Operazioni sulle stringhe

## #Concatenare stringhe

Per concatenare due stringhe, è possibile utilizzare l'operatore `+`.

```python
stringa1 = 'Ciao,'
stringa2 = ' mondo!'
stringa3 = stringa1 + stringa2
print(stringa3) # Output: Ciao, mondo!
```

### Ripetere una stringa

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