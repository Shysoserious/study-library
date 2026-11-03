# Lecture Note 1019/1021 — GCD（最大公约数、辗转相除 Euclidean Algorithm、线性组合、扩展 GCD、算术基本定理、Die Hard 水壶问题）

## 第 1 页
（空白页。米色纸面，仅见纸上极淡的印刷横线，无任何手写内容。）

## 第 2 页
（蓝色笔，米色纸。）

**Greatest Common Divisor**（大标题，下有横线）

**Multiples and Divisors**（副标题，下划线，其下另有一条横线）

For non-zero $b$, $b$ is a divisor of $a$ iff there is an integer $k$ such that $a = k \cdot b$.
（$a$ is a multiple of $b$）.

$b \mid a$ ， "b divides a"
　　　　 "a is divided by b"

## 第 3 页
（本页为上一讲 Fibonacci 生成函数推导的收尾。左列为主推导，右侧为初始值列表，右下有蓝笔涂鸦框。）

左列推导（红/深色笔）：

$$F(x) = \sum_{i=0}^{\infty} f_i \cdot x^i$$

$$= x + \sum_{i=2}^{\infty} f_i \cdot x^i$$

$$= x + \sum_{i=2}^{\infty} \left( f_{i-1} + f_{i-2} \right) x^i$$

$$= x + \sum_{i=2}^{\infty} f_{i-1} \cdot x^i + \sum_{i=2}^{\infty} f_{i-2} \, x^i$$

（第四、五行中，把求和下标换元：第一个和式中令 $i-1 \to i$，第二个和式中令 $i-2 \to i$：）

$$= x + x \cdot \sum_{i=0}^{\infty} f_i \cdot x^i + x^2 \sum_{i=0}^{\infty} f_i \cdot x^i$$

（注意：第一个 $\sum$ 的下标 $i=0$ 处有涂改圈画的痕迹。）

$$= x + x F(x) + x^2 F(x)$$

右侧（从上到下）：

$$t_0 = 0$$

$$f_1 = 1$$

$$f_2 = f_0 + f_1$$

$$f_3 = f_1 + f_2$$

（其下为竖排的省略点 ⋮ ∶ 两层小点，表示以此类推。）

右下方：蓝色笔手绘的圆角方框，框内涂鸦文字："grabbing"〔字迹潦草：框内一词形似 "grobking"/"grabbing"，为随手涂鸦注记〕。

## 第 4 页
（蓝色笔。）

E.g. 　$a = 5$ ， $b = 10$ ， $a \mid b$

　　　$a = 0$ ， $b = 100$ ， $b \mid a$

（其下有一条横向分隔线）

**Common Divisor**（标题，下划线）

$c$ is a common divisor of $a$ and $b$ if

$c \mid a$ and $c \mid b$.

## 第 5 页
（蓝色笔为主，红色批注。）

The greatest common divisor $\gcd(a, b)$ is defined as the greatest common divisor of $a$ and $b$.

E.g. 　$a = 10$ ， $b = 30$ ， $\gcd(10, 30) = ?$

$\{\, 1, 2, 5, 10 \,\}$ 　 $\therefore \gcd(10, 30) = 10$

（横向分隔线）

**The Quotient–Remainder Theorem**（标题，下划线）

For $b > 0$ and any $a$, there are unique integers $q$ and $r$ such that:

$$a = q \cdot b + r \qquad 0 \le r < b$$

（$q$ 下方有波浪线并标注 "quotient"；$r$ 下方有波浪线并标注 "Remainder"；右下角红笔框注：）

$$r = a \bmod b$$

（红笔，外有方框圈起。）

## 第 6 页
（蓝色笔为主，数轴示意图为红色笔。）

$$a = q \cdot b + r$$

$q$ : the block $a$ is in
$r$ : the shift in this block

**红色数轴示意图**（文字还原）：一条水平的红色带箭头数轴（箭头指向右端）。数轴上方右侧标有 $a$，$a$ 处有一条弯曲箭头指向数轴上某一点；再往右上方标有 $r$，从数轴接近右端处有一个向上再折弯的箭头指向 $r$，示意 $a$ 落在第 $q$ 个"块"内、$r$ 是块内的偏移。数轴下方从左到右依次标注刻度：

$$\cdots \quad -2b \quad -b \quad 0 \quad b \quad 2b \quad \cdots \quad qb \quad (q+1)b$$

（其中每个刻度处数轴上画有短竖线标记；在 $\cdots qb$ 与 $(q+1)b$ 之间的位置附近有向下的两个小箭头，示意 $a$ 的落点与 $r$ 的偏移。数轴最左端下方标 $-\infty$（红色），最右端下方标 $\infty$（红色）。）

（横向分隔线）

**How to compute GCD?** 　$\gcd(a, b)$（"compute" 一词下有手绘下划线，标题下另有双下划线）

（蓝笔大方框圈起：）

Suppose that $a \ge b > 0$ .

$$\gcd(a, b) = \gcd(|a|, |b|)$$

## 第 7 页
（蓝色笔。）

def gcd1(a, b):

　　cd = [ ]　　$\Longrightarrow$ List of common divisors we find（"List of common divisors we find" 为右侧两行小字注释）

　　for d = 1 to b :

　　　　if d | a and d | b

　　　　　　cd.append(d)

　　return max(cd)

Running Time ?　　Depends on $b$ .

（横向分隔线）

**Euclid's GCD Algorithm**（标题，下划线）

Euclid's Thm :

$$\gcd(a, b) = \gcd(b, r)$$

（右侧红笔方框：$a = q \cdot b + r$，方框左下有一条红色弯箭头指回上式，示意该定理依赖此等式。）

## 第 8 页
（蓝色笔为主，红色笔写除式。）

E.g.

① $a = 12$ ， $b = 8$ 　　（红字：）$12 = 8 + 4$

　$\gcd(12, 8) = \gcd(8, 4)$

② $a = 21$ ， $b = 9$ .　　（红字：）$21 = 2 \times 9 + 3$

　$\gcd(21, 9) = \gcd(9, 3)$

**proof of Euclid's Thm :**

（蓝笔方框：）$0 \le r < b$

① $r = 0$ . 　Then $a = q \cdot b$ ， $\gcd(a, b) = b$

　$\gcd(b, 0) = b$ 　$\Longrightarrow \gcd(a, b) = \gcd(b, r)$

② $r > 0$ . 　Let $d \mid a$ and $d \mid b$ . 　Then

## 第 9 页
（蓝色笔，接第 8 页 ② 的证明。）

$a = k \cdot d$ ， $b = j \cdot d$ .

$\therefore r = a - qb = k \cdot d - q \cdot j \cdot d = (k - qj)d$

$\therefore d \mid r$ 　　$\therefore d$ is a common divisor of $b$ and $r$.

Let $d \mid b$ and $d \mid r$ .

$\therefore b = x \cdot d$ and $r = y \cdot d$ .

Then $a = q \cdot b + r = q \cdot x \cdot d + y d$

$$= (qx + y)d$$

$\therefore d \mid a$ ， $\therefore d$ is a common divisor of $a$ and $b$.

（页面底部为两个大花括号集合的等式：）

$$\Big\{ \text{common divisor} \atop \text{of } a \text{ and } b \Big\} \;=\; \Big\{ \text{common divisor} \atop \text{of } b \text{ and } r \Big\}$$

（即：$a,b$ 的公因数集合 = $b,r$ 的公因数集合。）

## 第 10 页
（蓝色笔。）

$\therefore \gcd(a, b) = \gcd(b, r)$

（横向分隔线）

**Euclid's Algorithm for GCD**（标题，下划线）

def gcd2(a, b):

　　if b == 0 :

　　　　return a

　　else :

　　　　a = q·b + r

　　　　return gcd2(b, r)

（下方为递归调用链示意：）

$$(a, b) \;\longrightarrow\; (b, r) \;\longrightarrow\; (r, r') \to$$

（第一个箭头下方小字注：$a = qb + r$；第二个箭头下方小字注：$b = q' \cdot r + r'$；末尾 "..." 下方注 "...."，示意链继续。）

① $a = qb + r \ge b + r > 2r$

② $b = q' r + r' \ge r + r' > 2r'$

## 第 11 页
（蓝色笔，横向分隔线上方为复杂度讨论。）

Every 2 recursively call, the size of the input are descresed by half.　$\Longrightarrow$（蓝笔方框：）$2 \cdot \log b$

（"descresed" 为原笔记拼写，照抄。）

（横向分隔线）

Exercise :　$\gcd(662, 414)$

$\gcd(662, 414)$ 　　（右侧对应除式：）$662 = 414 + 248$

$= \gcd(414, 248)$ 　　$414 = 248 + 166$

$= \gcd(248, 166)$ 　　$248 = 166 + 82$

$= \gcd(166, 82)$ 　　$166 = 2 \times 82 + 2$

$= \gcd(82, 2)$ 　　$82 = 41 \times 2 + 0$

## 第 12 页
（蓝色笔为主，红色笔批注。）

$= \gcd(2, 0) = 2$

（横向分隔线，接第 11 页练习的最终结果。）

**Linear Combination and Common Divisor**（标题，下划线）

$a$ and $b$ ，　$sa + tb$

$\mathrm{spc}(a, b) =$ Smallest positive linear combination of $a$ and $b$.

$$\mathrm{spc}(a, b) = \min \{\, sa + tb > 0 \;:\; s, t \in \mathbb{Z} \,\}$$

Thm : 　$\gcd(a, b) = \mathrm{spc}(a, b)$ .

proof :　（红字：）$\gcd \le \mathrm{spc}$ and $\gcd \ge \mathrm{spc}$

① $\gcd(a, b) \le \mathrm{spc}(a, b)$

（蓝笔大方框：）$\gcd(a, b) \mid \mathrm{spc}(a, b)$ ?

## 第 13 页
（蓝色笔，接第 12 页证明。）

Let $d \mid a$ and $d \mid b$.

$\therefore a = k_1 d$ ， $b = k_2 d$

$\therefore sa + tb = s \cdot k_1 d + t \cdot k_2 d = (sk_1 + tk_2)d$

$\therefore d \mid sa + tb$ .

② $\gcd(a, b) \ge \mathrm{spc}(a, b)$

（蓝笔大方框，框内文字：）$\mathrm{spc}(a, b)$ is a common divisor of $a$ and $b$ ?

By the QR Theorem ,

$$a = q \cdot \mathrm{spc}(a, b) + r \qquad (0 \le r < \mathrm{spc})$$

$$= q \cdot (sa + tb) + r$$

$\therefore r = a - q\,sa - q\,t\,b$

$$= (1 - qs)a - q t b$$

## 第 14 页
（蓝色笔，接第 13 页证明。）

$\therefore$ If $r > 0$ , $r$ is linear combination of $a$ and $b$.

$\therefore r > \mathrm{spc}(a, b)$ , which conflicts with the fact that $r < \mathrm{spc}$ .

$\therefore r = 0$ , $\mathrm{spc} \mid a$ .

$\therefore \mathrm{spc}$ is common divisor of $a$ and $b$.

$\therefore$ Combine ① and ② , we have

$$\gcd(a, b) \ge \mathrm{spc}(a, b) \,.$$

## 第 15 页
（蓝色笔为主，红色笔作框注与下划线。）

**Exercise 1 :**

Lemma : 　If $\gcd(a, b) = 1$ and $\gcd(a, c) = 1$, then $\gcd(a, bc) = 1$

proof :

$\gcd(a, b) = 1$ ， $\gcd(a, c) = 1$

$$\Big\{ \; xa + yb = 1$$
$$\Big\{ \; sa + tc = 1$$

$\therefore (xa + yb)(sa + tc) = 1$

$$xasa + ybsa + xatc + ybtc = 1$$

（下一行中，$a$ 与 $bc$ 分别用红色方框框起，$(xas + ybs + xtc)$ 下方有红色波浪下划线，$yt$ 下方有红色短下划线：）

$$(xas + ybs + xtc)\,\boxed{a} + y\underline{t}\,\boxed{bc} = 1$$

$\therefore \mathrm{spc}(a, bc) = 1$〔此处关系符字迹不清：形似 "≥ 1" 或 "= 1"；按证明逻辑为由上述线性组合等于 1 得 $\mathrm{spc}(a,bc) \le 1$，从而 $=1$〕　$\therefore \gcd(a, bc) = 1$ .

## 第 16 页
（蓝色笔为主，红色笔批注。）

**Exercise 2 :** 　If $p$ is prime and $p \mid ab$, then $p \mid a$ or $p \mid b$.

proof : Without Loss of Generality ,

assume $p \nmid a$ , then $\gcd(p, a) = 1$

$\therefore \mathrm{spc}(p, a) = 1$　$\therefore xp + ya = 1$

$$xpb + yab = b$$

（上式中 $xp$ 与 $ya$（即 $yp\cdot b$ 中的 $xp$ 与 $ya$ 项）下方各有一条红色波浪下划线；其下红色小字注释两处："p divides this"、"p divides this"，分别指向 $xp$ 与 $ya$ 项。）

（右侧红字：）$\Longrightarrow \therefore p \mid b$

**Corollary :** 　If $p$ is prime, and

$p \mid a_1 a_2 \cdots a_m$ , then $p \mid a_i$ for some $i$.

（"some" 写于行末上方小字；$i$ 下方有两层小点 ⋮ 记号。）

## 第 17 页
（蓝色笔为主，红色框注与红圈记号。）

**Fundamental Theorem of Arithmetic**（大标题，下有长横线）

Every integer $n > 1$ has a unique factorization into primes :

（"unique" 一词用红色方框框起强调。）

$$n = p_0 p_1 p_2 \cdots p_k \,,\quad (p_0 \le p_1 \le p_2 \cdots p_k) \,.$$

proof : Suppose that there are numbers with two different factorizations.

By the well ordering principle, we choose the smallest such $n > 1$ :

$$n = p_0 p_1 \cdots p_k = q_0 q_1 \cdots q_m$$

Since $n$ is the smallest, we must have $p_i \neq q_j$ for all $(i, j)$ . 　（句末带圈红笔星号：*）

## 第 18 页
（蓝色笔为主，红色/橙色批注，右侧有红色流程框图。）

Since $p_0 \mid n = q_0 q_1 \cdots q_m$, then by the corollary, $p_0 \mid q_i$ for some $i$.

Then since $p_0$ and $q_i$ are prime, we must have $p_0 = q_i$ . 　（句末橙色圈星号：*）

（右侧红色箭头与红字：）$\Longrightarrow$ contradiction

（横向分隔线）

**Extended GCD Algorithm**（标题，下划线）

$$\gcd = \mathrm{spc} \,.$$

$a = 259$ ， $b = 70$

$$259 = 3 \times 70 + 49 \;\Longrightarrow\; 49 = a - 3b$$

$$70 = 1 \times 49 + 21 \;\Longrightarrow\; 21 = 70 - 49$$

$$= b - (a - 3b)$$

$$= 4b - a$$

**右侧红色流程框图**（文字还原）：位于页面右半部、由红色竖线与底线围出的区域。区域顶部红字 "$\gcd(a, b)$"，其右侧紧邻小字 "$a = q \cdot b + r$"（该行最右端紧贴页边，末尾似有字符略被裁切）；从 "$\gcd(a,b)$" 处有红色弯箭头向下指向 "$\gcd(b, 0)$"；再有一条红色弯箭头指向下方红笔方框，框内红字 "return b"。整体示意递归终点：除到余数 0 时返回 $b$。

## 第 19 页
（蓝色笔为主，红色标题与问题。）

$$49 = 2 \times 21 + 7 \;\Longrightarrow\; 7 = 49 - 2 \times 21$$

$$= a - 3b - 2 \times (4b - a)$$

$$= 3a - 11b$$

$$21 = 3 \times 7 + 0 \;\Longrightarrow\; \gcd = 7$$

（横向分隔线）

**Die Hard**（红色标题，双下划线）

Two jugs : 　Goal : Get exact $k$ （$k$ 上方小字注：$\le b$）gallons of water using these two jugs . 　($a \le b$)

**容器示意图**（文字还原）：页面左下方画有两个开口向上的 U 形槽（纵剖面，形如 "⊔"）。左边的 U 形槽稍大（宽而深），其正下方标注 $b$；右边的 U 形槽稍小，其正下方标注 $a$。表示容量分别为 $b$ 和 $a$ 的两个水壶。

（红色笔，行首标 "Q1"（形似 ℚ1）与 "Q2"（形似 ℚ2）：）

Q1 : Is it solvable ? 　Q2 : How ?

页面底部：

$N_b$ : "How much water in jug $b$" .

## 第 20 页
（蓝色笔为主，红色笔批注。）

① pour in . 　 $+b$ ， $+a$ .

② pour out . 　 $-b$ ， $-a$.

So $N_b$ must be a linear combination of $a$ and $b$.

（红色笔：）$\gcd \mid$ any linear combination of $a$ and $b$

（红色笔：）$\Longrightarrow$ if $\gcd \nmid k$, then it's impossible .

Theorem : 　It is possible to have exactly $k$ ($\le b$) gallons of water in one jug. iff $k$ is a multiple of $\gcd(a, b)$.

① Only if : 　If possible, $k$ is a multiple of $\gcd(a, b)$ . 　$k = sa + tb$ . 　Then we must have $\gcd \mid k$ .

## 第 21 页
（蓝色笔为主，红色笔为推导旁注。）

② If : 　If $k$ is a multiple of gcd, then it's possible.

（蓝笔大方框：）$\gcd = sa + tb$　（红/笔箭头指向右侧）$\Longrightarrow$ $c \cdot \gcd = csa + ctb$

（上式 "$= k$" 为其上方小字标注，即 $c \cdot \gcd = k$；其下红色笔：）

$$\Longrightarrow k = csa + ctb$$

① 3, 9, 　$k = 4$ .

$\gcd(3, 9) = 3$ . 　$3 \nmid 4$〔原笔迹为 "3 X 4"，X 为手写"不整除"记号〕 . 　 ✗（末尾画一个大叉，表示不可行）

② 21, 26, 　$k = 3$ . 　　（右侧红色小字旁注，自上而下：）

（红色小字：）$5 = 26 - 21$

$\gcd(21, 26) = 1$ 　　（红色小字：）$26 = 21 + 5$

（红色小字：）$21 = 4 \times 5 + 1$

$$\Longrightarrow 5 \times 21 - 4 \times 26 = 1$$

（右侧红色小字推导：）$1 = 21 - 4 \times 5$；$= 21 - 4 \times (26 - 21)$；$= 5 \times 21 - 4 \times 26$

$$\Longrightarrow 15 \times 21 - 12 \times 26 = 3$$

（即把上式两边同乘 3，得到 $k = 3$ 的线性组合表示。）

## 转录说明

- **总页数**：21 页（p01 ~ p21），全部逐页读取转录，无跳过。
- **主题**：GCD（最大公约数）：倍数与因数、公因数、商余定理（Quotient–Remainder Theorem）、暴力求 GCD 伪代码、Euclid 定理及其证明、Euclid 辗转相除算法及复杂度（$2\log b$）、线性组合与公因数（spc = gcd 定理及证明）、Exercise 1（互素引理）、Exercise 2（素数整除引理及推论）、算术基本定理（唯一分解）证明、Extended GCD 算法（259/70 例，回代得 $\gcd = 7 = 3a - 11b$）、Die Hard 水壶问题（两壶量水与 gcd 的关系定理及例 3,9 / 21,26）。
- **空白页**：第 1 页为空白页（仅有纸面印刷横线，无手写内容）。
- **衔接说明**：第 3 页为上一讲 Fibonacci 生成函数推导 $F(x) = x + xF(x) + x^2F(x)$ 的收尾内容，右侧为 Fibonacci 初始值列表。
- **无法辨认/存疑之处**：
  - 第 3 页右下蓝笔涂鸦框内一词，形似 "grabbing"/"grobking"，为随手涂鸦，不能完全确定拼写。
  - 第 15 页倒数第一行第一个关系符（$\mathrm{spc}(a,bc)$ 与 $1$ 之间）字迹不清，形似 "≥" 或 "="；按证明逻辑应为得出 $\mathrm{spc}(a,bc)=1$。
  - 第 21 页 "3 ∤ 4" 处原笔迹为 "3 X 4"，X 为手写不整除记号。
  - 第 18 页右侧流程图顶部小字 "$a = q\cdot b + r$" 紧贴页边，末尾似有字符略被裁切。
- **颜色说明**：正文以蓝笔为主；红色笔用于：除法竖式旁注（p08）、$r = a \bmod b$（p05）、强调与批注（p12、p15、p16）、"contradiction"（p18）、Extended GCD 流程框图（p18）、Die Hard 标题与问题（p19）、水壶问题关键结论（p20）、第 21 页回代推导旁注。橙色仅用于 p18 的带圈星号。
- 数学式均已按原意转为 LaTeX；竖式除法均以"被除数 = 商×除数 + 余数"及逐行回代的形式完整呈现；数轴、流程框图、水壶示意图均以文字描述结构，可直接还原。
