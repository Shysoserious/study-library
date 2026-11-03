# Lecture Note 1026/1028/1102 — Modular Arithmetic（模运算：同余、模加/模乘、乘法逆元、消去律、费马小定理、威尔逊定理、中国剩余定理、模线性方程）

> 来源：CUHK-Shenzhen CSC3001 离散数学手写课堂笔记（蓝笔为主，红笔/橙笔为批注强调，米色纸）。

## 第 1 页

（空白页：仅有页面左侧的深色竖向装饰边条，纸面为米色，无任何手写文字、公式或图形。）

## 第 2 页

（标题）**Modular Arithmetic**（蓝色手写，下方画双横线强调）

（右上角红字条件）$b > 0,\quad 0 \le r < b$

Partition of Integers:（蓝字）$\left(a = q \cdot b + r\right)$

Given $b > 0$, we can partition the integers into blocks of size $b$, then for any integer $a$, there is a unique "position" of this number.

（红笔长框圈注）Group all integers with the same "shift $r$"

（示意图，蓝色数轴 + 红色标记，文字描述如下：）
一条水平数轴，从左到右标出刻度点：$\cdots$（省略号，数轴向左无限延伸）、$-2b$、$-b$、$0$、$b$、$2b$、$3b$、（中间一段未标号的刻度）、$qb$、$(q+1)b$，右端箭头指向无限。
在每个 $rb$ 间隔内，从刻度点向右画出红色小拱形括弧并标红字 $r$：具体在 $-b$ 与 $0$ 之间的区间上方标 $r$、在 $0$ 与 $b$ 之间标 $r$（连续相邻两个红色小拱），最右侧在 $qb$ 与 $(q+1)b$ 之间标红字 $r$；该最右侧拱形处有红色箭头向上指，旁边红字 $a$，表示整数 $a = qb + r$ 位于 $qb$ 右侧偏移 $r$ 的位置。左侧另有一条红色大括号/箭头从框注向下指向数轴左端。

（红字）Congruence class of $r$ modulo $b$.

$$[r]_b = \{ kb + r \mid k \in \mathbb{Z} \}$$

（红笔方框强调）$a = q \cdot b + r$

（例）E.g.（蓝字）
$$[0]_3 \cup [1]_3 \cup [2]_3 = \mathbb{Z}$$

## 第 3 页

（标题）**Equivalence**（蓝字，下画横线）

（蓝字）Definition: $a \equiv b \pmod{n}$ iff $n \mid a - b$.

（三行例，蓝字）
$12 \equiv 2 \pmod{10}$

$7 \equiv 1 \pmod{2}$

$13 \equiv -1 \pmod{7}$

（横线分隔）

（标题）**Modular Addition**（蓝字，下画横线）

（蓝字）Lemma: If $a \equiv c \pmod{n}$, and $b \equiv d \pmod{n}$, then $a + b \equiv c + d \pmod{n}$（"mod n" 中的 n 写在行末括号下方）。

（横线分隔）

（蓝字）E.x.
$12 \equiv 2 \pmod{10}$
$25 \equiv 5 \pmod{10}$

## 第 4 页

（承接上页例子，左上角红字上标 $37$，即 $12+25=37$：）
$$37 \equiv 12 + 25 \equiv 2 + 5 \pmod{10}$$
$$\equiv 7 \pmod{10}$$

（横线分隔）

（蓝字）Proof: $\exists\, x, y \in \mathbb{Z}$, such that
$$a - c = x \cdot n, \quad b - d = y \cdot n$$

（蓝字，∴ 用三点「∵∴」符号照抄为 $\therefore$）
$$\therefore\ a + b - (c + d) = xn + yn = (x+y)n$$
$$\therefore\ n \mid a + b - (c + d)$$
$$\therefore\ a + b \equiv c + d \pmod{n}$$

（横线分隔）

（标题）**Modular Multiplication**（蓝字，下画横线；本页以下空白）

## 第 5 页

（蓝字）Lemma: If $a \equiv c \pmod{n}$, $b \equiv d \pmod{n}$, then $ab \equiv cd \pmod{n}$.

（横线分隔）

（蓝字）E.x.
$$999 \equiv 5 \pmod{7}$$
$$674 \equiv 2 \pmod{7}$$
$$\therefore\ 999 \times 674 \equiv 10 \pmod{7} \equiv 3 \pmod{7}$$
（右侧 $3 \pmod 7$ 的括号略超出页面右缘。）

（横线分隔）

（蓝字）Proof: $\exists\, x, y \in \mathbb{Z}$，右侧红括号联立两式：
$$\begin{cases} a - c = nx \\ b - d = ny \end{cases}$$
（红括号为竖向大花括号，位于两式左侧。）

（蓝字）
$$ab - cd = (c + nx)(d + ny) - cd$$
$$= nxd + nyc + n^2xy$$
$$= n(xd + yc + nxy)$$

## 第 6 页

（承接上页证明，蓝字）
$$\therefore\ n \mid ab - cd \qquad \therefore\ ab \equiv cd \pmod{n}$$

（横线分隔）

（标题，蓝字方框）**Example 1**：$144^4 \pmod{713}$

（红笔方框）$144^2 = 20736$（红框旁有蓝色括弧与箭头指向下一行，表示代入。）

（蓝字）
$$\equiv 20736 \times 20736 \pmod{713}$$

（红字）
$$20736 = 29 \times 713 + 59$$
$$\Rightarrow\ 20736 \equiv 59 \pmod{713}$$

（蓝字）
$$\equiv 59 \times 59 \pmod{713}$$
$$\equiv 3481 \pmod{713}$$

（红字）
$$3481 = 4 \times 713 + 629$$

（蓝字）
$$\equiv 629 \pmod{713}$$

## 第 7 页

（标题，蓝字方框）**Example 2**：A number is divisible by 9 iff the sum of its digits is divisible by 9.（旁有蓝框批注）How to prove this?

（红字示例）$5839$，$5 + 8 + 3 + 9$（"5839" 竖写并从下方引竖线到加式，示意逐位拆开。）

（蓝字）Proof: Let $n = d_k d_{k-1} d_{k-2} \cdots d_0$（十进制各位数字）
$$n = d_k \cdot 10^k + d_{k-1} \cdot 10^{k-1} + \cdots + d_0 \cdot 10^0$$

（蓝字）$d_i \cdot 10^i \pmod 9$

（左侧一条蓝色长箭头从上往下指，表示推导方向；旁边红字给出两条依据：）
$$a \equiv (a \bmod n) \pmod{n}$$
$$ab \equiv (a \bmod n)(b \bmod n) \pmod{n}$$

（蓝字，承接）
$$\equiv\ d_i \cdot \underbrace{(10 \bmod 9) \cdots (10 \bmod 9)}_{i\ \text{个}} \pmod 9$$
（页面底部另有一行被截断的蓝色式子 "…(mod 9)"，与下页衔接。）

## 第 8 页

（承接上页，蓝色大花括号下标 $i$，红笔波浪线在上页末行下强调：）
$$\equiv\ d_i \cdot \underbrace{(1 \bmod 9) \cdots (1 \bmod 9)}_{i\ \text{个}} \pmod 9$$
$$\equiv\ d_i \pmod 9$$

（蓝色方框强调）
$$n \equiv \sum_{i=0}^{k-1} d_i \pmod 9$$

（横线分隔）

（标题）**Multiplicative Inverse (MI)**（蓝字，下画横线）

（蓝字）The MI of $a \neq 0 \pmod n$ is an integer $a'$, such that（本页到此为止，接下页。）

## 第 9 页

（承接上页，蓝字）
$$a \cdot a' \equiv 1 \pmod n$$

（蓝字，下画蓝色波浪线强调）Every integer has a MI?

（蓝字）Does 2 have a MI mod 6?

（蓝字）Suppose it has: $2x \equiv 1 \pmod 6$

（蓝字）
$$\therefore\ \exists\, y \in \mathbb{Z},\quad 2x - 1 = 6y \Rightarrow 2x - 6y = 1 \times$$
（行末红色 ✗ 记号，表示矛盾/否定。）

（横线分隔）

（蓝字）Lemma: If integers $k, n$ are not co-prime ($\gcd(k, n) \ge 2$), then $k$ does not have a MI modulo $n$.

（蓝字）Proof: Suppose it has, $k \cdot x \equiv 1 \pmod n$

（蓝字）
$$\therefore\ \exists\, y \in \mathbb{Z},\ 1 - kx = ny \Rightarrow ny + kx = 1.$$
（行末蓝色小箭头向下指。）

（蓝字）But $\text{spc}(k,n) = \gcd(k, n) \ge 2$（右上角红字批注）contradiction!
（注：原笔记写 "spc(k,n) = gcd(k,n)"，照原样转录；"contradiction" 为红字并带下划线。）

## 第 10 页

（蓝字）Theorem 1: If $\gcd(k, n) = 1$, then have $k'$ such that $k \cdot k' \equiv 1 \pmod n$.

（蓝字）Proof: Since $\gcd(k, n) = 1$, $\exists\, x, y \in \mathbb{Z}$,
$$xk + yn = 1 \quad \therefore\ n \mid 1 - xk \quad \therefore\ xk \equiv 1 \pmod n$$
$$\therefore\ \text{we can let}\ k' = x,\ \text{be the MI of } k \bmod n$$
（"mod n" 中 n 写在行末下方。）

（横线分隔）

（蓝字）Theorem 2: If there is $k'$ such that $k \cdot k' \equiv 1 \pmod n$, then $k'$ is unique mod $n$.（"mod n" 中 n 写在行末下方。）

（蓝字）Proof: Suppose that there are 2 MIs of $k$ mod $n$, $k_1 \neq k_2$
$$k \cdot k_1 \equiv k \cdot k_2 \pmod n$$
$$\therefore\ k(k_1 - k_2) \equiv 0 \pmod n$$
$$\therefore\ k_1 k(k_1 - k_2) \equiv 0 \pmod n$$

## 第 11 页

（承接上页，蓝字）
$$\text{Since } k_1 k \equiv 1 \pmod n, \text{ then } k_1 - k_2 \equiv 0 \pmod n$$
$$\therefore\ k_1 \equiv k_2 \pmod n$$

（蓝字）E.x. $k = 3$, $n = 11$
$$k_1 = 4, \qquad 3 \times 4 \equiv 1 \pmod{11}$$
$$k_2 = 15, \qquad 3 \times 15 \equiv 1 \pmod{11}$$
$$k_1 \equiv k_2 \pmod{11}$$

（蓝色方框强调）$4 + 11x.$

（横线分隔）

（标题）**Cancellation**（蓝字，下画横线；标题右侧原有普通乘法算式被红/蓝斜线划掉：$a \cdot b = c \cdot b$ 两侧的 $b$ 上画斜叉，示意"不能随便约去"。）

（蓝字）
$$a \cdot b \equiv c \cdot b \pmod n$$
Can we always cancel $b$?（右侧红笔圈内画 ✗，表示"不可以"。）

（蓝字）
$$4 \times 2 \equiv 1 \times 2 \pmod 6,\ \text{But}\ 4 \not\equiv 1 \pmod 6$$

（蓝字）Theorem: If $i \cdot k \equiv j \cdot k \pmod n$ and $\gcd(k, n) = 1$, then $i \equiv j \pmod n$.

## 第 12 页

（蓝字）Proof: Since $\gcd(k, n) = 1$（"then" 一词被蓝笔划掉），$\exists\, k' \in \mathbb{Z}$, $k \cdot k' \equiv 1 \pmod n$

（蓝字）
$$\therefore\ \text{Since } i \cdot k \equiv j \cdot k \pmod n,$$
$$\text{then } i \cdot k \cdot k' \equiv j \cdot k \cdot k' \pmod n$$
（$i \cdot \underline{k}$ 与 $j \cdot \underline{k}$ 下的 $k$ 有蓝色波浪线标记，其下方红字分别标注 $1 \pmod n$、$1 \pmod n$。）

（蓝字）
$$\therefore\ i \equiv j \pmod n.$$

（横线分隔）

（标题，红笔框）**Summary**（红字）

（红字）
① $a \equiv b \pmod n$

② If $a \equiv c \pmod n$, $b \equiv d \pmod n$:
$$ab \equiv cd \pmod n$$
$$a + b \equiv c + d \pmod n$$

③ $k \cdot k' \equiv 1 \pmod n \qquad \gcd(k, n) = 1$

## 第 13 页

（标题）**Fermat's Little Theorem**（蓝字，下画横线）

（蓝字）Let $p$ be a prime number and $\gcd(p, k) = 1$. Then
$$k^{p-1} \equiv 1 \pmod p.$$

（红色大框圈住整段例子，红字）E.x. Let's consider $p = 5$, $k = 2$.
$$2^4 \equiv 1 \pmod 5, \quad 2^8 \equiv 1 \pmod 5.$$

（红色横向链条图，文字还原：）
第一行：$1 \rightarrow 2 \rightarrow 4 \rightarrow 8 \rightarrow 16 \rightarrow 32 \rightarrow 64 \rightarrow 128 \rightarrow 256 \rightarrow \cdots$（右下角"⋯"表示继续）。
第二行对应写在每个数下方（即各数 mod 5 的值）：$1\ \ 2\ \ 4\ \ 3\ \ 1\ \ 2\ \ 4\ \ 3\ \ 1$。

（蓝字）Proof: Consider the integers:
$$S = \{\, k,\ 2k,\ 3k,\ 4k,\ \cdots,\ (p-1)k \,\}$$
$$S' = \{\, x \bmod p \mid x \in S \,\}$$
$$= \{\, 1, 2, 3, 4, 5, 6, \cdots\cdots, (p-1) \,\}$$

## 第 14 页

（蓝字）Let $A = \{\, 1, 2, 3, \cdots\cdots, p-1 \,\}$

（蓝字）① $\forall\, i \in A$, $i \cdot k \bmod p \neq 0$.

（蓝字）Assume that $\exists\, i \in A$, $i \cdot k \equiv 0 \pmod p$.
Then $p \mid i \cdot k$.
But $p \nmid k$ since $\gcd(p, k) = 1$, and $p \nmid i$. $\Rightarrow$ contradiction（红字下划线。）

（蓝字）② For any $i, j \in A$, such that
$$i \cdot k \equiv j \cdot k \pmod p, \quad \text{we must have } i = j.$$

（蓝字）Since $\gcd(k, p) = 1$, if $i \cdot k \equiv j \cdot k \pmod p$（其中两处 $k$ 上有红色斜划线，示意将 $k$ 约去）then
$$i \equiv j \pmod p. \quad \therefore\ i = j.$$

## 第 15 页

（蓝色方框）We need to show $k^{p-1} \equiv 1 \pmod p$

（蓝字）We have
$$k \cdot 2k \cdot 3k \cdot \cdots \cdot (p-1)k$$
$$\equiv 1 \cdot 2 \cdot 3 \cdot \cdots\cdots (p-1) \pmod p$$

（蓝字）Then: $k^{p-1} \cdot (p-1)! \equiv (p-1)! \pmod p$

（蓝字）Since $\gcd\big(p,\ (p-1)!\big) = 1$,
then $k^{p-1} \equiv 1 \pmod p$.

（横线分隔）

（蓝字）Example: $7^{2026} \bmod 5$.

（红色方框）$7^4 \equiv 1 \pmod 5$（右侧红字）$2026 = 4 \times 506 + 2$

（红字）
$$7^{2026} \equiv \left(7^4\right)^{506} \cdot 7^2 \pmod 5$$

## 第 16 页

（承接上页，红字）
$$\equiv\ 1^{506} \cdot 7^2 \pmod 5$$
$$\equiv\ 49 \pmod 5$$
$$\equiv\ 4 \pmod 5$$

（横线分隔）

（标题）**Wilson's Theorem**（蓝字，下画横线）

（蓝字）Thm: $p$ is a prime number iff
$$(p-1)! \equiv -1 \pmod p.$$

（蓝字）Proof:

（蓝字方框）[If]（方框内写 "If"）If $(p-1)! \equiv -1 \pmod p$, then $p$ is prime.

（蓝字）Assume that $p$ is not prime, then
$$\exists\ 1 < r < p,\ \text{such that } r \mid p.$$

## 第 17 页

（蓝字）Note that $r \mid (p-1)!$, then
$$(p-1)! \equiv 0 \pmod r.$$

（蓝字）Since $(p-1)! \equiv -1 \pmod p$, then
$$p \mid (p-1)! + 1. \quad \text{Since } r \mid p,$$
then $r \mid (p-1)! + 1 \Rightarrow$
$$(p-1)! \equiv -1 \pmod r$$

（蓝字）Combine above we have:（左侧竖向大花括号联立两式）
$$\begin{cases} (p-1)! \equiv 0 \pmod r \\ (p-1)! \equiv -1 \pmod r \end{cases}$$

（蓝字）
$$\therefore\ 0 \equiv -1 \pmod r$$
$$\therefore\ r \mid 1. \quad \text{But } r > 1. \quad \text{contradiction!}$$
（"contradiction!" 为蓝字带下划线。）

## 第 18 页

（蓝字）②（蓝笔方框）Only If

（蓝字）If $p$ is prime, then $(p-1)! \equiv -1 \pmod p$.

（蓝字）
$$(p-1)! = 1 \cdot 2 \cdot 3 \cdot \cdots\cdots (p-1).$$

（红字）Lemma: Let $p$ be prime. Then
$$x^2 \equiv 1 \pmod p \ \text{iff}\ x \equiv 1 \pmod p \ \text{or}\ x \equiv -1 \pmod p.$$

（红字）Proof: $x^2 \equiv 1 \pmod p$. Then $p \mid x^2 - 1$
$$\therefore\ p \mid (x-1)(x+1)$$
$$\Rightarrow\ p \mid x-1 \ \text{or}\ p \mid x+1 \quad (p \text{ is prime})$$
$$\therefore\ x \equiv 1 \pmod p \ \text{or}\ x \equiv -1 \pmod p.$$

## 第 19 页

（橙笔方框两个：左边框住 $1$，右边框住 $(p-1)$，中间横排）$1 \cdot 2 \cdot 3 \cdot 4 \cdot \cdots\cdots \cdot (p-1)$（两个方框下有橙色大括号与弧线相连，示意首尾两数单独取出。）

（蓝字）By the Lemma, for $i \in \{2, 3, \cdots, p-2\}$,
its multiplicative inverse $i'$ is also in $\{2, 3, \cdots, p-2\}$. $i \neq i'$

（蓝字）
$$\therefore\ (p-1)! \equiv 1 \cdot (p-1) \cdot 2 \cdot 3 \cdot \cdots\cdots (p-2)$$
（$2 \cdot 3 \cdots (p-2)$ 下方有蓝色波浪线强调。）

（蓝字）
$$\equiv 1 \cdot (p-1)\,(i_1, i_1') \cdot \cdots\cdots (i_m, i_m')$$
（红字批注）$m = \dfrac{p-3}{2}$

（蓝字）
$$\equiv 1 \cdot (p-1) \equiv -1 \pmod p.$$

## 第 20 页

（标题）**Chinese Reminder Theorem**（蓝字，下画双横线强调；原笔记将 "Remainder" 写作 "Reminder"，照原样转录。）

（蓝字）Modular Equations:
$$x \equiv 2 \pmod 3$$
$$x \equiv 4 \pmod 5$$
$$x \equiv 6 \pmod 7$$

（蓝字）How to solve this?

（横线分隔）

（蓝字方框）**One Equation**：$ax \equiv b \pmod n$

（蓝字）Case 1: $\gcd(a, n) = 1$

（蓝字）Then $\exists\, a' \in \mathbb{Z}$, $a \cdot a' \equiv 1 \pmod n$

（蓝字）
$$\therefore\ \text{If } ax \equiv b \pmod n, \text{ then } a \cdot a' \cdot x \equiv b \cdot a' \pmod n$$
$$\Rightarrow\ x \equiv b \cdot a' \pmod n$$

## 第 21 页

（蓝字）Case 2: $\gcd(a, n) = c > 1$.

（蓝色竖向大花括号联立）
$$\begin{cases} a = a_1 \cdot c \\ n = n_1 \cdot c \end{cases} \qquad \exists\, a_1,\ n_1$$
（行末另有红点记号。）

（蓝笔方框）2①:（框内写 "2①"）$c \mid b$.（右侧）$b = b_1 \cdot c$，$\exists\, b_1$

（蓝字）
$$ax \equiv b \pmod n$$
$$\Rightarrow\ n \mid ax - b \ \Rightarrow\ \exists\, k \in \mathbb{Z},\ ax = n \cdot k + b.$$
$$\Rightarrow\ a_1 \cdot c \cdot x = n_1 \cdot c \cdot k + b_1 c$$
$$\Rightarrow\ a_1 x = n_1 k + b_1$$
$$\Rightarrow\ n_1 \mid a_1 x - b_1 \ \Rightarrow\ a_1 x \equiv b_1 \pmod{n_1}$$

（蓝字）
$$\because\ \gcd(a_1, n_1) = 1 \qquad \therefore\ \text{Same as Case 1}.$$

（红色大框，红字反驳批注）Assume that $\gcd(a_1, n_1) = d > 1$.
$$\therefore\ d \mid a_1, \quad d \mid n_1$$
$$\therefore\ cd \mid c \cdot a_1, \quad cd \mid c \cdot n_1$$

## 第 22 页

（承接上页红框，红字）
$$\therefore\ cd \mid a, \quad cd \mid n$$
$$\therefore\ cd\ \text{is common divisor of}\ a\ \text{and}\ n$$
$$\text{Since } d > 1, \quad cd > c \ \Rightarrow\ \text{contradiction}$$
（红框到此结束。）

（蓝字）2②: $\gcd(a, n) = c > 1$, and $c \nmid b$.

（蓝字）Since $ax \equiv b \pmod n$, then
$$\exists\, k \in \mathbb{Z},\ ax = b + kn.$$

（蓝字）
$$\Rightarrow\ a_1 \cdot c \cdot x = b + k\, n_1 \cdot c$$
$$\Rightarrow\ b = (a_1 x - k\, n_1) \cdot c$$

（蓝字）But $c$ doesn't divide $b$, so ② is impossible. $\therefore$ For 2②, there is no solution.

## 第 23 页

（蓝字）Theorem: Given integers $a, b, n$, the equation
$$ax \equiv b \pmod n$$
has a solution iff $\gcd(a, n) \mid b$.

（蓝字）Moreover, the solutions are all of the form
$$x \equiv y \left(\bmod\ \frac{n}{\gcd(a, n)}\right).$$

（横线分隔）

（蓝字方框）**General Case**

（蓝字）联立方程组（左侧）与箭头 ⟹ 转化结果（右侧红框）：
左：
$$c_1 x \equiv d_1 \pmod n$$
$$c_2 x \equiv d_2 \pmod n$$
$$\vdots$$
$$c_k x \equiv d_k \pmod n$$
（中间蓝色 ⟹ 箭头。）
右（红色大框内）：
$$x \equiv a_1 \pmod{n_1}$$
$$x \equiv a_2 \pmod{n_2}$$
$$\vdots$$
$$x = a_k \pmod{n_k}$$
（注：末行原笔记写作 "$x = a_k \pmod{n_k}$"，等号照原样转录。）

## 第 24 页

（页首红字）$X = a_1 z_1 + a_2 \cdot z_2 + \cdots\cdots + a_k \cdot z_k$

（蓝字）Theorem: Let $n_1, n_2, \cdots\cdots, n_k$ be mutually co-prime. Then
$$x \equiv a_1 \pmod{n_1}$$
$$x \equiv a_2 \pmod{n_2}$$
$$\vdots$$
$$x \equiv a_k \pmod{n_k}$$
has a unique solution modulo $N$, where $N = n_1 n_2 \cdots\cdots n_k$.

（蓝字）Proof:

（蓝字）Let $m_i = \dfrac{N}{n_i} = n_1 n_2 \cdots n_{i-1}\, n_{i+1} \cdots n_k$

（蓝字）Then since $\gcd(n_i, m_i) = 1$

## 第 25 页

（承接上页，蓝字）
$$\therefore\ \exists\, y_i, \quad m_i \cdot y_i \equiv 1 \pmod{n_i}$$

（蓝字）Let $x_0 = a_1 m_1 y_1 + \cdots\cdots + a_k m_k y_k$
$$= \sum_{i=1}^{k} a_i\, m_i\, y_i$$

（蓝字）Since for $i \neq j$, $m_i$ contains $n_j$
$$\therefore\ m_i \equiv 0 \pmod{n_j}$$

（蓝字）
$$x_0 \equiv \sum_{i=1}^{k} a_i\, m_i\, y_i \pmod{n_i}$$
$$\equiv a_i\, m_i\, y_i \pmod{n_i}$$
$$\equiv a_i \pmod{n_i}$$

（蓝字）$\therefore\ x_0$ is a solution.

## 第 26 页

（蓝字）Now let's show $x_0$ is unique modulo $N$.

（蓝字）Let's assume that there are 2 solutions:（左侧竖向大花括号联立）
$$\begin{cases} x \equiv a_i \pmod{n_i} \\ y \equiv a_i \pmod{n_i} \end{cases} \qquad \text{for all } i.$$

（蓝字）
$$\therefore\ n_i \mid x - a_i, \quad n_i \mid y - a_i$$
$$\therefore\ n_i \mid x - y, \quad \forall\, i \in \{1, 2, \cdots, k\}$$
$$\therefore\ n_1 n_2 \cdots n_k \mid x - y \quad (\text{Lemma})$$
（"Lemma" 为红字。）

（蓝字）
$$\therefore\ x \equiv y \pmod N$$

（红字）Lemma: If $a \mid m$, $b \mid m$, $\gcd(a, b) = 1$, then $ab \mid m$.

（红字）Proof: $\exists\, x \in \mathbb{Z}$, $m = ax$
$$\because\ b \mid m, \quad ax \equiv 0 \pmod b$$

## 第 27 页

（承接上页，红字）
$$\because\ \gcd(a, b) = 1, \quad \therefore\ \exists\, a' \in \mathbb{Z},\ a \cdot a' \equiv 1 \pmod b$$
$$\therefore\ a' \cdot a \cdot x \equiv 0 \pmod b$$
$$\therefore\ x \equiv 0 \pmod b \qquad \therefore\ b \mid x$$
Let $x = b \cdot y, \quad \therefore\ m = ax = a \cdot b \cdot y$
$$\therefore\ ab \mid m.$$

（本页以下约三分之二为空白。）

## 转录说明

- **总页数**：27 页（p01 ~ p27），全部逐页读取图像后转录，无跳页。
- **主题**：模运算（Modular Arithmetic）—— 整数划分与同余类、同余定义、模加法/模乘法引理及证明、乘法逆元（MI）的存在性与唯一性、消去律、费马小定理（含 $7^{2026} \bmod 5$ 例）、威尔逊定理（含引理 $x^2 \equiv 1 \pmod p \Rightarrow x \equiv \pm 1$ 及配对证明）、模线性方程 $ax \equiv b \pmod n$ 的解（Case 1 / Case 2、2①/2②）、中国剩余定理（笔记标题写作 "Chinese Reminder Theorem"）及其存在性、唯一性证明与引理 $ab \mid m$。
- **空白页**：第 1 页为空白页（仅有左侧深色竖向装饰边条与米色纸底，无任何手写内容；经像素分析确认）。
- **无法辨认之处**：无整段无法辨认的内容。个别小处说明：
  - 第 9 页 "spc(k, n)"：原笔记如此书写（疑为口误或笔误，实指 $\gcd$），照原样转录。
  - 第 5 页行末 $3 \pmod 7$ 的括号略被页缘截断，按上下文补全。
  - 第 7 页末行有一行被页缘截断的 "(mod 9)" 式子，与第 8 页开头衔接，已在第 7/8 页分别注明。
  - 第 20 页标题 "Chinese Reminder Theorem" 为原笔记拼写（应为 Remainder），照原样保留。
  - 第 23 页红框内末行 "$x = a_k \pmod{n_k}$" 用等号（应为同余号），照原样转录。
  - 第 11 页 Cancellation 标题旁被划掉的普通等式（$a \cdot b = c \cdot b$，b 上画斜叉）已用文字描述其划除方式。
  - 第 22 页 "doesn't" 一词中 "n" 与 "'t" 书写挤在一起（形似 "doesu-t"），按上下文转录为 "doesn't"。
- **颜色约定**：蓝色为正文笔迹；红色为批注、强调框、关键结论与补充证明；橙色仅出现在第 19 页首尾两数方框；划除线、✗、圈注等均已在对应位置用文字说明。
