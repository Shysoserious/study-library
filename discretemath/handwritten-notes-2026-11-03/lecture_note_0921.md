# Lecture Note 0921（离散数学：量词否定、证明方法与数学归纳法）

## 第 1 页

（本页为笔记本封面/空白页，无手写内容。只有米色封面纸，左上方一条长横线，右下方五行短横线及一个笔形图标，均为印刷装饰线，无文字。）

## 第 2 页

标题（下划线强调）：**Negation of Quantified Statements**（量化命题的否定）

$$\neg\ \forall x,\ P(x)\ \equiv\ \exists x,\ \neg P(x)$$

左下批注（对应左边式子）："Not everyone likes Discrete Math"
右下批注（对应右边式子）："There exist some one who doesn't like Discrete Math"

$$\neg\big(P(1)\wedge P(2)\wedge P(3)\wedge\cdots\big)$$
$$\equiv\ \neg P(1)\wedge\neg P(2)\wedge \cdots$$

（两条式子之间有"≡"，即对全称量词的否定可化为每个命题否定的合取。）

---

标题（下划线强调）：**Order of Quantifiers**（量词的顺序）

$V$ : set of virus.（$V$：病毒的集合）
$P$ : set of anti-virus programs.（$P$：反病毒程序的集合）

## 第 3 页

（承接第 2 页，本页全部为关于 $V$（病毒集合）与 $P$（反病毒程序集合）的例句。）

蓝色笔书写：For any virus, there exists a program that kills it.（对任意病毒，存在一个程序能杀掉它。）

$$\forall v\in V,\ \exists p\in P,\ \text{kill}(v,p)$$

红色笔书写（强调对照）：There exists a program that kills all viruses.（存在一个程序能杀掉所有病毒。）

$$\exists p\in P,\ \forall v\in V,\ \text{kill}(v,p)$$

蓝色笔书写（对第二条做否定展开）：

$$\neg\big(\exists p\in P,\ \forall v\in V,\ \text{kill}(p,v)\big)$$
$$\equiv\ \forall p\in P,\ \neg\big(\forall v\in V,\ \text{kill}(p,v)\big)$$
$$\equiv\ \forall p\in P,\ \exists v\in V,\ \neg\,\text{kill}(p,v)$$

（注意：原手稿中各处参数顺序写作 kill(v,p) 与 kill(p,v) 混用，按原样转录。）

## 第 4 页

标题（加框并下划线强调）：**Proof Methods**（证明方法）

### Direct Proof（直接证明，双下划线强调）

Goal: $p \rightarrow q$.

引号强调："Assume $p$, then show $q$ logically follows".（假设 $p$，然后证明 $q$ 逻辑上随之成立。）

Example 1: The product of two odd numbers is odd.（两个奇数的乘积是奇数。）

Proof: Let $x, y \in \mathbb{Z}$, such that
$$\exists\ m, n \in \mathbb{Z},\quad x = 2m+1,\quad y = 2n+1$$

## 第 5 页

（承接第 4 页 Example 1 的证明。）

$$x\cdot y = (2m+1)(2n+1) = 4mn + 2n + 2m + 1$$
$$= 2\big(\underbrace{2mn + n + m}_{\in\ \mathbb{Z}}\big) + 1$$

$$\therefore\ xy\ \text{is odd}.$$

（横线分隔）

### Contrapositive（逆否证明，双下划线强调）

Goal: $p \rightarrow q$，即 $\neg q \rightarrow \neg p$.

Example 2.1: If $r$ is irrational, then $\sqrt{r}$ is irrational.（若 $r$ 是无理数，则 $\sqrt{r}$ 是无理数。）

旁边有蓝色双箭头 "$\Leftarrow$" 指向右侧批注：If $\sqrt{r}$ is rational, then $r$ is rational.（若 $\sqrt{r}$ 是有理数，则 $r$ 是有理数。）（即把原命题转化为其逆否命题来证。）

左侧框注（画了一个大括号框住以下假设）：
$$\exists\ a, b \in \mathbb{Z},\quad b \neq 0,\quad r = \frac{a}{b}$$
a and b don't have common divisor（$a$ 与 $b$ 没有公因子）

## 第 6 页

Example 2.2: For an integer $n$,
$$n\ \text{is even}\ \text{iff}\ n^2\ \text{is even}$$
（"n is even" 下方红色标注 $p$；"$n^2$ is even" 下方红色标注 $q$；两处均有下划线。）

Proof:
① $p \rightarrow q$

$$\exists\ k \in \mathbb{Z},\ n = 2k.\quad \text{Then}\ n^2 = 4k^2 = 2(2k^2)$$
（上方标注 $2k^2 \in \mathbb{Z}$）

$$\therefore\ n^2\ \text{is even}.$$

② $q \rightarrow p\ \equiv\ \neg p \rightarrow \neg q$.

$$\exists\ k \in \mathbb{Z},\ n = 2k+1.\quad n^2 = (2k+1)^2$$
$$= 4k^2 + 4k + 1$$
$$= 2(\underbrace{2k^2 + 2k}_{\in\ \mathbb{Z}}) + 1$$

$$\therefore\ n^2\ \text{is odd}.$$

## 第 7 页

### Contradiction（反证法，双下划线强调）

Goal: $p$。右侧写：$\neg p \rightarrow c$（$c$ 为矛盾），从而 $\therefore p$。

Example 3.1: $\sqrt{2}$ is irrational.（$\sqrt{2}$ 是无理数。）

Proof: Assume that $\sqrt{2}$ is rational.（假设 $\sqrt{2}$ 是有理数。）

Then $\exists\ a, b \in \mathbb{Z},\ b \neq 0$, a and b do not have common divisor（$a$ 与 $b$ 无公因子）。

$$\sqrt{2} = \frac{a}{b}.\quad \text{Then}\ 2 = \frac{a^2}{b^2},\quad \therefore\ a^2 = 2b^2$$

$$\therefore\ a^2\ \text{is even}.\quad \therefore\ a\ \text{is even}.$$

$$\exists\ k \in \mathbb{Z},\ a = 2k.$$

Then $4k^2 = a^2 = 2b^2$, $\therefore b^2 = 2k^2$

（注：原手稿此行写作 "Then $4k^2 = a^2 = 2b^2$ ∴ $b^2 = 2b^2$"，其中末项写作 $2b^2$，按推导应为 $b^2 = 2k^2$，此处照原稿字面转录为：Then $4k^2 = a^2 = 2b^2$ ∴ $b^2 = 2b^2$。）

$$\therefore\ b^2\ \text{is even}.\quad \therefore\ b\ \text{is even}.$$

## 第 8 页

（承接第 7 页反证法结论。）

$\therefore$ Contradiction（矛盾）. Then $\sqrt{2}$ is irrational.（故矛盾，所以 $\sqrt{2}$ 是无理数。）

（手稿此行写作 "∴ Contradiction . Then √2 is irrational."，其中一词字迹近似 "icthen"，意为 Then。）

（横线分隔）

### Proof by cases（分情形证明，下划线强调）

Goal: $p$.

Find set of cases, $C_1, C_2, C_3, \ldots C_n$, such that $C_1 \vee C_2 \vee \cdots \vee C_n$（Must cover all possibilities）.（找一组情形 $C_1,\dots,C_n$，使得 $C_1 \vee C_2 \vee \cdots \vee C_n$（必须覆盖所有可能）。）

$$\left.\begin{aligned}
&C_1 \rightarrow p\\
&C_2 \rightarrow p\\
&\vdots\\
&C_n \rightarrow p
\end{aligned}\right\}\ \Rightarrow\ p$$

（右侧一个花括号把 $C_1\rightarrow p$ 到 $C_n\rightarrow p$ 括起，指向 "$\Rightarrow p$"。）

Example 4.1: $\forall\ n \in \mathbb{Z},\ n^2 + n$ is even.（对任意整数 $n$，$n^2+n$ 是偶数。）

① $n$ is even.
Then $n^2$ is even, $n^2 + n$ is even.

## 第 9 页

（承接第 8 页 Example 4.1 的情形②。）

② $n$ is odd.

$$\exists\ k \in \mathbb{Z},\ n = 2k+1.$$

Then
$$n^2 + n = (2k+1)^2 + 2k + 1$$
$$= 4k^2 + 4k + 1 + 2k + 1$$
$$= 4k^2 + 6k + 2$$
$$= 2\big(\underbrace{2k^2 + 3k + 1}_{\in\ \mathbb{Z}}\big)\qquad \therefore\ n^2+n\ \text{is even}.$$

（右侧结论手稿写作 "∴ n is even"，按上下文指 $n^2+n$ is even，照原稿转录：∴ n is even.）

（页面下方画一条长横线，本页之后无更多内容。）

## 第 10 页

标题（加框强调）：**Mathematical Induction**（数学归纳法）

Goal: prove for integer $n$,
$$\forall\ n \geq 0,\ P(n).$$

This is to prove:
$$P(0) \wedge P(1) \wedge P(2) \wedge \cdots$$

the idea:（思路：）Let's prove $P(0)$ first.（先证 $P(0)$。）

Then use $P(0)$ to prove $P(1)$.
Then use $P(1)$ to prove $P(2)$.
$\vdots$

（右侧一个花括号概括以上递推步骤，旁注：use $P(k)$ to prove $P(k+1)$。即"用 $P(k)$ 证明 $P(k+1)$"。）

## 第 11 页

Example 1: Prove $\forall\ n \geq 1$,
$$1^3 + 2^3 + \cdots + n^3 = \left(\frac{n(n+1)}{2}\right)^2$$

Proof:

Base case: $n = 1$. $\quad$ LHS $= 1$
$$\text{RHS} = \left(\frac{1\cdot 2}{2}\right)^2 = 1$$
右侧标注：$\therefore$ LHS $=$ RHS

Induction Step:（归纳步骤）

（右侧红色笔标注："Induction Hypothesis"（归纳假设），前面有引号符号。）

Assume for $m \geq 1$,
$$1^3 + \cdots + m^3 = \left(\frac{m(m+1)}{2}\right)^2.$$

$$\text{LHS} = 1^3 + 2^3 + \cdots + m^3 + (m+1)^3$$
$$= \left(\frac{m(m+1)}{2}\right)^2 + (m+1)^3$$

（右侧红色笔标注："Apply ⊛ IH."，即"套用归纳假设"，⊛ 为圈起的星号标记。）

## 第 12 页

（承接第 11 页 Example 1 的归纳步骤计算。）

$$= (m+1)^2\left(\frac{m^2}{4} + m + 1\right)$$

$$= (m+1)^2\left(\frac{m^2 + 4m + 4}{4}\right)$$

$$= \frac{(m+1)^2 (m+2)^2}{4} \qquad = \left(\frac{(m+1)(m+2)}{2}\right)^2$$

（右侧标注：$=$ RHS）

$$\therefore\ \text{Proof done}.$$

（横线分隔）

Example 2: $\forall\ n \geq 1$, $2^{2n} - 1$ is divisible by 3.（对任意 $n \geq 1$，$2^{2n}-1$ 能被 3 整除。）

Proof:

Base ($n = 1$): $2^{2n} - 1 = 2^2 - 1 = 3$.（√ 打勾）

Induction Step:（上方标注 $(m \geq 1)$）Assume $2^{2m} - 1$ is divisible by 3.（假设 $2^{2m}-1$ 能被 3 整除。）

（末尾"divisible by 3"的"3"写到行末边缘。）

## 第 13 页

（承接第 12 页 Example 2 的归纳步骤计算。）

$$2^{2(m+1)} - 1 = 2^{2m}\cdot 2^2 - 1$$

$$= 4\cdot 2^{2m} - 1$$

$$= 3\cdot 2^{2m} + 2^{2m} - 1$$

（下方两处波浪下划线标注：$3\cdot 2^{2m}$ 下方标 "Divisible by 3"；$2^{2m}-1$ 下方标 "Divisible by 3 (IH)"，即由归纳假设可被 3 整除。）

$$\therefore\ 2^{2(m+1)} - 1\ \text{is divisible by 3}.$$

（横线分隔）

Example 3: Prove $\forall\ n \geq 2$,
$$\frac{1}{\sqrt{1}} + \frac{1}{\sqrt{2}} + \cdots + \frac{1}{\sqrt{n}} > \sqrt{n}.$$

Proof: Base case ($n = 2$):

$$\text{LHS} = \frac{1}{\sqrt{1}} + \frac{1}{\sqrt{2}} = \frac{1 + \sqrt{2}}{\sqrt{2}}.\qquad \text{RHS} = \sqrt{2}$$

$$\sqrt{2}\,\text{LHS} = 1 + \sqrt{2} > 2 = \sqrt{2}\cdot\text{RHS}\ (\surd)$$

（末尾 (√) 表示验证通过。）

## 第 14 页

（承接第 13 页 Example 3 的归纳步骤。）

Induction Step:

Assume $\dfrac{1}{\sqrt{1}} + \cdots + \dfrac{1}{\sqrt{m}} > \sqrt{m}$.（右上角标注 $(m \geq 2)$）

$$\frac{1}{\sqrt{1}} + \cdots + \frac{1}{\sqrt{m}} + \frac{1}{\sqrt{m+1}}$$

$$> \sqrt{m} + \frac{1}{\sqrt{m+1}} = \frac{\sqrt{m}\cdot\sqrt{m+1} + 1}{\sqrt{m+1}}$$

$$> \frac{\sqrt{m}\cdot\sqrt{m} + 1}{\sqrt{m+1}} = \frac{m+1}{\sqrt{m+1}} > \sqrt{m+1}$$

（推导说明：因 $\sqrt{m}\cdot\sqrt{m+1} > \sqrt{m}\cdot\sqrt{m}$，故分子变大，不等式保持。中间一处分母手稿写作 $\sqrt{m+1}$，其中一处字迹近似 $\sqrt{mt1}$，均为 $\sqrt{m+1}$。）

（横线分隔）

Example 4: Cauchy–Schwartz Inequality（柯西–施瓦茨不等式）

For any $a_1, a_2, \ldots a_n$ and $b_1, b_2, \ldots b_n$,

$$a_1 b_1 + a_2 b_2 + \cdots + a_n b_n \leq \sqrt{a_1^2 + \cdots + a_n^2}\cdot\sqrt{b_1^2 + b_2^2 + \cdots + b_n^2}$$

（右侧红色笔批注：$a^T b$、$\langle a,b\rangle$、$a\cdot b$，均为左端的记号；$||a||\cdot||b||$，为右端的记号。）

## 第 15 页

$$(a_1, a_2, \ldots, a_n) \in \mathbb{R}^n$$
$$(b_1, b_2, \ldots, b_n) \in \mathbb{R}^n$$

右上角红色示意图（几何直观）：两条从同一点出发的箭头向量，一条指向右上方的 $a = (a_1, a_2)$，一条沿水平方向指向右方的 $b = (b_1, b_2)$；从 $a$ 的终点向 $b$ 所在水平线画一条竖直虚线（垂线），表示夹角/投影关系。

Proof: Base ($n = 1$).

Induction Step:

Assume for $m \geq 1$,
$$a_1 b_1 + a_2 b_2 + \cdots + a_m b_m \leq \sqrt{a_1^2 + \cdots + a_m^2}\cdot\sqrt{b_1^2 + \cdots + b_m^2}$$

$$a_1 b_1 + \cdots + a_m b_m + a_{m+1}\cdot b_{m+1}$$

$$\leq \underbrace{\sqrt{a_1^2 + \cdots + a_m^2}}_{c}\cdot\underbrace{\sqrt{b_1^2 + \cdots + b_m^2}}_{d} + a_{m+1}b_{m+1}$$

（$c$、$d$ 为蓝色字母标注在对应根号式下方；右侧批注 $(c, a_{m+1})$、$(d, b_{m+1})$，表示把 $c$ 与 $a_{m+1}$、$d$ 与 $b_{m+1}$ 分别看作二元组的两个分量。）

⊛
$$\leq \sqrt{c^2 + a_{m+1}^2}\cdot\sqrt{d^2 + b_{m+1}^2}$$

（⊛ 为圈起的星号标记，与第 11 页呼应。）

## 第 16 页

（承接第 15 页。）

$$= \sqrt{a_1^2 + \cdots + a_{m+1}^2}\cdot\sqrt{b_1^2 + \cdots + b_{m+1}^2}$$

（右上角 ⊛ 处批注：we use that the statement is true for $n = 2$.（我们用到该命题对 $n=2$ 成立。）——即 ⊛ 一步使用了 $n=2$ 的情形。）

（方框强调）：**n = 2**

$$\left(a_1^2 + a_2^2\right)\left(b_1^2 + b_2^2\right) - \left(a_1 b_1 + a_2 b_2\right)^2 \geq 0$$

（此为 $n=2$ 情形的展开式，即柯西–施瓦茨不等式在二维时等价于该式非负。本页以下为空白。）

## 转录说明

- 总页数：16 页。
- 主题：CUHK-Shenzhen CSC3001 离散数学手写笔记。内容包括：量化命题的否定（Negation of Quantified Statements）、量词顺序（Order of Quantifiers，病毒/反病毒程序例子）、证明方法（Proof Methods）：直接证明（Direct Proof）、逆否证明（Contrapositive）、反证法（Contradiction）、分情形证明（Proof by Cases），以及数学归纳法（Mathematical Induction）及四个例题（立方和公式、$2^{2n}-1$ 被 3 整除、倒数平方根和不等式、柯西–施瓦茨不等式）。
- 空白页：第 1 页为笔记本封面空白页（仅印刷装饰线，无手写内容）；第 16 页下半页空白。
- 无法辨认之处：
  - 第 7 页反证法倒数第二行：原稿写作 "Then $4k^2 = a^2 = 2b^2$ ∴ $b^2 = 2b^2$"，末项字面照录；按上下文推导应为 $b^2 = 2k^2$（原稿疑似笔误或字迹把 k 写成 b）。
  - 第 8 页首行 "∴ Contradiction" 后有一词字迹潦草（近似 "icthen"），据上下文判读为 "Then"。
  - 第 9 页末行结论字迹为 "∴ n is even"，据上下文（证明 $n^2+n$ is even）疑为 "$n^2+n$ is even" 的简写，照原稿转录。
  - 第 3、5、14 页个别变量下标字迹（如 kill(v,p)/kill(p,v)、$\sqrt{m+1}$）写法前后不完全一致，均按可见字面转录并在相应位置注明。
