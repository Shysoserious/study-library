# Lecture Note 0923（Induction as a way of Thinking —— 数学归纳法、强归纳法、良序原理）

## 第 1 页

（空白页：整页为米色纸张，无任何手写内容。仅页面最左边缘有一条贯穿上下的深色竖条，为扫描阴影/装订边痕迹，非字迹。）

## 第 2 页

**Induction as a way of Thinking**（标题，标题下有两条横线强调，即双下划线）

**Gray Code**（"Gray Code" 二字带双下划线强调）: find an ordering of all $n$-bit strings in a way such that two consecutive $n$-bit strings differed by only one bit.

（其下为一个三列对照的列表，列与列之间上下对齐；每行左列为序号数字，中列为按数值顺序排列的 $n$-bit 串，右列为另一串。逐行如下：）

| 序号 | 中列 | 右列 |
|---|---|---|
| $0$ | $000$ | $000$ |
| $1$ | $001$ | $001$ |
| $2$ | $010$ | $011$ |
| $3$ | $011$ | $010$ |
| $4$ | $100$ | $110$ |

（即：右列从 $000, 001, 011, 010, 110$ 开始，是中列 $000,001,010,011,100$ 的重新排序，相邻两串只差一位。）

2-bit（左下方标注"2-bit"，其下竖排一列 2-bit 串：）

- $00$
- $01$
- $11$
- $10$

3-bit（页面中部偏右标注"3-bit"；页面右下角与之对应竖排一列 8 个 3-bit 串，即完整 3-bit Gray code 排列：）

- $000$
- $001$
- $011$
- $010$
- $110$
- $111$
- $101$
- $100$

## 第 3 页

（本页上半部为一幅示意图，下半部为文字。）

示意图结构描述：
- 左边一个蓝色矩形框，框上方标注 "n bit"。
- 右边一个蓝色矩形框，框上方标注 "reversed order"。
- 左框左侧沿竖直方向自上而下标注：顶部 "00"，中间一串省略点 "……"，底部 "0"（表示框内列表首行以 $00\cdots$ 开头、末行以 $\cdots 0$ 结尾的位串）。
- 右框左边缘为一条虚线，虚线旁有一列短的竖直刻度线（表示列表的行界；刻度处未见可辨认的数字标签）。
- 左框底部一行画有红色波浪下划线；右框顶部一行也画有红色波浪下划线。
- 两条红色箭头在两框之间交叉成 "X" 形：一条从左框底部（红波浪线处）连到右框顶部（红波浪线处），另一条从右上方连向左下方，示意两列表在突出显示的行处相衔接（即 n-bit 列表的末尾与 reversed order 列表的开头相接）。

---

Strong Induction（"Strong Induction" 带双下划线强调）　　$(\forall\, n \ge 0,\ P(n))$

Base: Prove $P(0)$.

Induction Step: Prove $P(n+1)$ assuming that all of

$P(0),\ P(1),\ \cdots\cdots,\ P(n)$ are true.

## 第 4 页

**Prime Factorization**（标题，带双下划线强调）

Theorem: Every integer $> 1$ is a product of primes.

Proof: Base case $(n=2)$. ✓（句末有一个对勾记号，表示基例显然成立）

Inductive Step: Assume that:

$\forall\ 2 \le k \le n$, $k$ can be factorized as product of primes.

Prove $n+1$ can be factorized as product of prime numbers.

Case 1: $n+1$ is prime.

## 第 5 页

Case 2: $n+1$ is not prime.

$\exists\ a, b,\ 2 \le a, b < n+1$, $(n+1) = a \cdot b$

By Strong Induction Hypothesis,

$$a = x_1 x_2 \cdots x_m$$

$$b = y_1 y_2 \cdots y_n$$

$$(n+1) = a \cdot b = x_1 x_2 \cdots x_m\ y_1 y_2 \cdots y_n$$

（此处有一条横线分隔上下两部分内容。）

---

**Why Induction Works?**（此行下有单横线，再下又有双横线强调）

Well ordering principle (WOP):

（以下一句用方框圈起，为框内强调内容：）

Every non-empty set of positive integers has a least element

## 第 6 页

$\forall\ n \ge 1,\ P(n)$

Suppose that after induction proof, there are some (counter-example)

$$S = \{\ n \in \mathbb{Z}^{+} \mid P(n)\ \text{is False}\ \}$$

By WOP, $S$ has a least integer $n$, which is the first integer when $P(n)$ is False.

But, $P(n-1)$ is true, and our induction step has shown that $P(n)$ is also true by assuming $P(n-1)$.

## 第 7 页

$\forall\ n \ge n_0\ ,\ P(n)$

$$q(m) = P(m + n_0 - 1) \quad m \ge 1$$

$$q(1) = P(n_0)$$

$$q(2) = P(n_0 + 1)$$

（其下为一列竖排省略号 "⋮"，表示依此类推；此后本页剩余部分为空白。）

## 转录说明

- 总页数：7 页（p01.png ~ p07.png），全部逐页读取转录。
- 主题：数学归纳法（Induction as a way of Thinking）——Gray code 例子、强归纳法（Strong Induction）、素数分解定理（Prime Factorization）的强归纳证明、归纳法为何成立（Well Ordering Principle 良序原理）、以及起点为 $n_0$ 的归纳法平移技巧。
- 空白页：第 1 页为空白页（无字迹）；第 7 页下半页空白。
- 无法辨认之处：
  - 第 3 页示意图：右框左边缘虚线旁的一列竖直刻度线处未见可辨认的数字/文字标签，仅能确认其为虚线与刻度标记，含义无法从笔迹确认（推测与列表各行分界有关）。
  - 第 3 页示意图中两条红色交叉箭头的确切指向端点（左框底部行与右框顶部行为红色波浪线所强调处）已按所见描述，箭头笔迹略有重叠，交叉形态按 "X" 形记录。
- 其余文字与符号均已逐字转录，无删减、无概括。
