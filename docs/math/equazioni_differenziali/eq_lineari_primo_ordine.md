# Equazioni Lineari del Primo Ordine

## Definizione

Dati un intervallo $I \subseteq \mathbb{R}$ e due funzioni $a, b \in C(I)$ e l'**equazione differenziale lineare del primo ordine** data da:

$$
y' = ay + b \text{ in } I
$$

Allora una funzione $y \in C^1(I)$ si dice **soluzione** se

$$
y'(x) = a(x)y(x) + b(x) \text{ per } x \in I
$$

::: info Notazione
$y \in C^1(I)$ Significa che y è **continua** in $I$, y è **derivabile** in $I$ e la sua derivata $y'$ è **continua** in $I$.
:::

::: tip Esempio
Consideriamo l'equazione differenziale:

$$
y'(x) = 2y(x)
$$

dove

- $a(x) = 2$
- $b(x) = 0$

**Una funzione $y(x)$ è soluzione di questa equazione se, sostituendo $y(t)$ e le sue derivate nell'equazione, l'uguaglianza è soddisfatta.**

Supponiamo che la soluzione sia $y(t) = Ce^{2x}$ con $C \in \mathbb{R}$.

Allora

$y'(x) = 2Ce^{2x}$

Sostituendo

$
2Ce^{2x} = 2Ce^{2x}
$

L'equazione è verificata quindi $y(x) = Ce^{2x}$ è una soluzione.
:::

::: tip Esempio
Consideriamo l'equazione differenziale:

$$ 
y'(x) = 0
$$

dove

- $a(x) = 0$
- $b(x) = 0$

Supponiamo che la soluzione sia $y(x) = 2$.

Allora

$y'(x) = 0$

Sostituendo

$
0 = 0
$

L'equazione è verificata quindi $y(x) = 2$ è una soluzione.
:::

Dagli esempi precedenti emerge che le soluzioni proposte in realtà non sono unichè, bensì infinite.

Per selezionarne una occorre imporre delle condizioni ulteriori, come mostra il prossimo teorema.

## Problema di Cauchy

Dati $x_0 \in I$ e $y_0 \in \mathbb{R}$, una soluzione $y$ che verifica $y(x_0) = y_0$ si dice **soluzione del problema di Cauchy**:

$$
\begin{cases}
y' = a(x)y + b(x) \text{ in } I \\
y(x_0) = y_0
\end{cases}
$$

::: tip Equazione Omogenea Associata
Sappiamo che l'equazione è **omogenea** se $b(x) = 0 \quad \forall x \in I$ e **non omogenea** altrimenti.

Quindi

$$
y' = ay \text{ in } I
$$


si dice **equazione omogenea associata** di $y' = ay + b \text{ in } I $.
:::

## Soluzione (o integrale) generale
Siano 

- $I \subset \mathbb{R}$ un intervallo
- $a(x) \in C(I)$
- $A(x)$ una primitiva di $a(x)$ in $I$.

Tutte le soluzioni di $y'(x) = a(x)y(x)$ in $I$ sono 

$$
y(x) = Ce^{A(x)} \text{ con } C \in \mathbb{R}
$$ 


Se sono noti anche $x_0 \in I$ e $y_0 \in \mathbb{R}$, la funzione

$$
y(x) = y_0e^{A(x) - A(x_0)}
$$

è l'unica soluzione del problema di Cauchy 

$$
\begin{cases}
y' = ay + b \text{ in } I \\
y(x_0) = y_0
\end{cases}
$$

Quindi $Ce^{A(x)} \text{ con } C \in \mathbb{R}$ si dice **soluzione generale** o l'**integrale generale** di $y'(x) = a(x)y(x)$

::: tip Studio dell'omogenea associata
Studiamo l'equazione omogenea associata, supponendo che $y$ sia soluzione di $y'=ay$ in $I$ e che $y(x) \neq 0 \quad \forall x \in I$ 
.

Allora

$$
\frac{y'(x)}{y(x)} = a(x)
$$

$
\int \frac{y'(x)}{y(x)} dx = \int a(x) dx + C_0 \text{ con } C_0 \in \mathbb{R}
$

$
\log|y(x)| = \int a(x) dx + C_0
$

$
|y(x)| = e^{\int a(x)dx + C_0}
$

$
y(x) = e^{\int a(x)dx + C_0} = e^{C_0}e^{\int a(x)dx}
$

Ponendo $C = \pm e^{C_0}$ 
si ottiene

$$
y(x) = \pm e^{C_0}e^{\int a(x)dx} = Ce^{\int a(x)dx}
$$

Quindi 

$$
y(x) = Ce^{\int a(x)dx} \text{ è soluzione } \forall C \in \mathbb{R}
$$
:::

## Soluzione Particolare

Siano $I \subset \mathbb{R}$ un intervallo, $a$ e $b$ $\in C(I)$ e $A(x)$ una primitiva di $a$ in $I$.

Se $\tilde{y}(x)$ è una soluzione di

$$
y'(x) = a(x)y(x) + b(x)
$$

allora tutte le soluzioni sono

$$
y(x) = \tilde{y}(x) + Ce^{A(x)} \text{ con } C \in \mathbb{R}
$$

::: tip Studo della non omogenea

$$
y'(x) = a(x)y(x) + b(x) \text{ in } I
$$

Siano $y(x)$ e $\tilde{y}(x)$ due soluzioni.

Posto $z(x) := y(x) - \tilde{y}(x)$ si ha

$$
z'(x) = y'(x) - \tilde{y}'(x) = a(x)y(x) + b(x) - a(x)\tilde{y}(x) - b(x) = a(y(x) - \tilde{y}(x)) = az(x)
$$

Ma l'equazione differenziale $z'(x) = az(x)$ sappiamo che ha come soluzione

$$
z(x) = Ce^{A(x)}
$$

Quindi

$$
y(x) = z(x) + \tilde{y}(x) = \tilde{y}(x) + Ce^{A(x)}
$$
:::

Rimane il problema di determinare una soluzione $\tilde{y}(x)$ detta **soluzione particolare** dell'**equazione non omogenea**.

> Esistono 2 possibili metodi: Variazione della costante, ad hoc.

### Variazione della costante

Si cerca una soluzione nella forma $K(x)e^{A(x)}$, dove $A(x)$ è una primitiva di $a$ in $I$.

Sostituendo nell'equazione $y'(x) = a(x)y(x) + b(x)$ si ha

$$
K'(x)e^{A(x)} + a(x)K(x)e^{A(x)} = a(x)K(x)e^{A(x)} + b(x)
$$

Quindi

$$
K'(x) = b(x)e^{-A(x)}
$$

Allora se $K(x)$ è una primitiva di $b(x)e^{-A(x)}$ in $I$, la funzione

$$
\tilde{y}(x) = K(x)e^{A(x)}
$$

è la soluzione cercata.

::: tip Teorema
Siano $I \subset \mathbb{R}$ un intervallo, $a, b \in C(I)$ e $A(x)$ una primitiva di $a$ in $I$.

- Tutte le **soluzioni dell'equazione non omogenea** $y'(x) = a(x)y(x) + b(x)$ sono

$$
y(x) = (C + K(x))e^{A(x)} \text{ con } C \in \mathbb{R}
$$

dove $K(x)$ è una primitiva di $b(x)e^{-A(x)}$ in $I$.

- Dati $x_0 \in I$ e $y_0 \in \mathbb{R}$, la funzione

$$
y(x) = (y_0 + K(x) - K(x_0))e^{A(x) - A(x_0)}
$$

è l'unica **soluzione del problema di cauchy**.
:::

::: tip Esempio
Determinare le soluzioni dell'equazione

$$
y'(x) = -2y(x) + 3 \text{ in } \mathbb{R}
$$

Studiamo prima l'equazione omogenea associata

$$
y'(x) = -2y(x)
$$

che ha come **soluzione generale** $y(x) = Ce^{\int a(x)dx}$ con $a(x) = -2$

$$
Ce^{-2x} \text{ con } C \in \mathbb{R}
$$

Seguendo il metodo della variazione della costante si pone 

$$
\tilde{y}(x) = K(x)e^{-2x}
$$

Sostituendo $\tilde{y}(x)$ nell'equazione non omogenea, otteniamo $K'(x)e^{-2x} = 3$, ovvero

$$
K'(x) = 3e^{2x}
$$

Integrando si ottiene

$$
K(x) = \frac{3}{2}e^{2x} + C
$$

Scegliendo quindi $K(x) = \frac{3}{2}e^{2x}$ si ottiene la soluzione dell'equazione non omogenea

$$
\tilde{y}(x) = \frac{3}{2}e^{2x}e^{-2x} = \frac{3}{2} 
$$

Tutte le soluzioni sono

$$
y(x) = \frac{3}{2} +Ce^{-2x} \text{, con } C \in \mathbb{R}
$$
:::