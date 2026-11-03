# Lecture Note 0914（命题逻辑的论证与推理规则 → 集合论基础）

## 第 1 页

（本页为空白页：米色横线纸，纸上无任何手写内容。仅扫描件左侧有一道深蓝色竖条与顶部一道横线，属扫描/纸张边缘，非笔记内容。）

## 第 2 页

（本页整页为蓝笔，分三部分：上部为"Last Time"复习框，中部为 Argument 的定义，下部为 valid 的定义。）

### Last Time
（这一段被一个手绘方框整个圈住，方框上边与左边为直线，右下角为圆弧）

- conditional operator

$$p \to q \equiv \neg p \lor q$$

- IFF

$$p \leftrightarrow q$$

### Argument

An argument is a sequence of statements

$$p_1 \wedge p_2 \wedge p_3 \cdots \wedge p_n \to q$$

- 左侧 $p_1$ 被红笔圈出，从该圈引出一条红色箭头，向下弯到左下方红笔写的单词 **premise**。
- 式子左半部分（$p_1 \wedge p_2 \wedge p_3 \cdots \wedge p_n$）下方画有一个大括号，括号正下方写着带引号的 **“Assumption”**，该词下方有蓝色下划线。
- 式子右端的 $q$ 下方画有一个小波浪号，其下写着带引号的 **“conclusion”**。

### 定义（写在页脚区域，字迹较大）

An argument is valid `if` whenever all assumptions are true, then the conclusion is true.

- 说明：单词 `if` 是补写在 `valid` 与 `whenever` 之间的上方（插入符形式插在行间），原句中间留有插入空位。

## 第 3 页

（本页分三段，段与段之间用蓝色手绘横线分隔。）

### 第一段：一个论证的实例

If it is raining, then I will need an umbrella.

It is raining.

$\therefore$ I will need an umbrella.

### 第二段：两条基本推理规则（左右并列）

左栏：

**Modus Ponens**
（下方红笔写）**“Methods of Affirming”**

$$p \to q$$
$$p$$
$$\therefore q$$

右栏：

**Modus Tollens**
（下方红笔写）**“Methods of denying”**

$$p \to q$$
$$\neg q$$
$$\therefore \neg p$$

两栏下方（居中偏左）：

$$(p \to q) \wedge p \to q \quad (MP)$$

$$(p \to q) \wedge \neg q \to \neg p \quad (MT)$$

### 第三段：Example

**Example**

$$p \to q$$
$$q \to r$$
$$r \to p$$
$$\therefore p \wedge q \wedge r$$

（本页到此结束，该例的证明接在第 4 页。）

## 第 4 页

（本页上半为推理规则汇总，共五组，分两行排列；下半为传递律的等价变形证明。）

### 上半：推理规则（蓝笔标题，红笔补充）

**第一行，左→右：**

**Elimination**（消去律，两种形式并列）

$$\begin{array}{cc} p \lor q & p \lor q \\ \neg q & \neg p \\ \hline \therefore p & \therefore q \end{array}$$

**Generalization**（附加律）

$$p$$
$$\therefore p \lor q$$

**Specialization**（红笔在标题下补写 **(Simplification)**）

$$p \wedge q$$
$$\therefore p$$

**第二行，左→右：**

**Contradiction**（归谬）

$$\neg p \to c$$
$$\therefore p$$

**Transitivity**（传递律）

$$p \to q$$
$$q \to r$$
$$\therefore p \to r$$

**Transitivity 右侧的示意图（红色笔迹）：**

- 三个实心红点，在同一水平线上自左至右排列，依次标注为 $p$、$q$、$r$（标签写在各点正上方）。
- 相邻点之间各画一条直线箭头：$p$ 点 → $q$ 点，$q$ 点 → $r$ 点（箭头头部为空心大箭头）。
- 在两点连线下方，另画一条向下弯的弧线箭头，从 $p$ 点一侧出发绕过下方，箭头指向 $r$ 点（表示由两步推出的直连结论 $p \to r$）。

### 下半：传递律的证明

待证式（左侧括号下方画有一个大括号，标明所处理的主体）：

$$\big((p \to q) \wedge (q \to r)\big) \to (p \to r)$$

$$\equiv (\neg p \lor q) \wedge (\neg q \lor r) \qquad \circledast$$

（上式右侧画有一个被圆圈圈住的星号 $\circledast$，作为后文引用的标记。）

**① If $p$ is T.**（① 为圈起的序号）

$$\circledast \equiv (q \lor c) \wedge (\neg q \lor r)$$

$$\equiv q \wedge (\neg q \lor r)$$

$$\equiv c \lor (q \wedge r)$$

$$\equiv q \wedge r$$

- 说明：式中的 $c$ 为小写字母 c，与上文 Contradiction 规则中的 $c$（矛盾式/永假）用法一致。

## 第 5 页

（上接第 4 页的证明，本页给出 ② 分支，随后为一套习题演练。）

**② If $p$ is F.**

$$\circledast \equiv t \wedge (\neg q \lor r) \equiv \neg q \lor r$$

- 上式的右下方（第二行偏右下）补写了 **$q \to r$**，表示该结果即为 $q \to r$。
- 说明：式中的 $t$ 为小写字母 t（与第 4 页的 $c$ 相对，指永真）。

（蓝色手绘横线分节）

### Exercise：

1. $(\neg p \lor \neg q) \to (s \wedge r)$

2. $s \to w$

3. $\neg w$

（第 1～3 条的右侧空白处写着两行说明：）

Show that from these 3 premises we can conclude $P$.

（蓝色手绘横线分节，以下是解答，序号接排；每行右侧注明所用规则与依据的步骤号）

4. $\neg s$ 　　　　　　　　$2, 3.\ MT$

5. $\neg(s \wedge r) \to \neg(\neg p \lor \neg q)$ 　　　　$1.\ $ Contrapositive（该词在纸面右边缘处被截断，作 "Contrapositi…"）

6. $\neg s \lor \neg r \to p \wedge q$ 　　　　　　　$5.\ $ De Morgan's law

7. $p \wedge q$ 　　　　　　　$4, 6,\ MP.$

8. $p$ 　　　　　　　　　　$7.\ $ Specialization

（第 8 行的 $p$ 只露出上半部分，被页面下边缘截断。）

## 第 6 页

### Set

（标题下画双下划线）

A set is an **unordered** collection of **distinct** objects.

- 红笔下划线：`unordered` 与 `distinct` 两词下方各有红笔双线强调。

① $A = \{2, 4, 5, 6\}$ 　　　$\{2, 6, 5, 4\}$

（两组元素相同的集合并排书写，中间未写等号，用意是说明集合元素无序；见下条 ② 说明元素互异。）

② $A = \{2, 3, 3\}$

（写出含重复元素的写法，用意是说明集合中元素互异、不可重复。）

$$x \in A \qquad x \notin A$$

（蓝色手绘横线分节）

We use $\{x \in A \mid p(x)\}$

（集合的概括表示法／set-builder notation）

$$S = \{x \in \mathbb{R} \mid -2 < x < 5\}$$

- $\mathbb{R}$ 下方有红笔双下划线（"＝" 形式的下划线），并在其下用红笔写：**Set of real number**

（蓝色手绘横线分节）

### Size：

$|A|$ ： number of elements in $A$.

$$|\emptyset| = 0$$

## 第 7 页

### Subset

$$A \subseteq B \quad (\ A \text{ is a subset of } B\ )$$

For any $x \in A$, $x \in B$

$$A = B \quad , \quad A \subseteq B \ \text{and}\ B \subseteq A.$$

（"and" 在纸面上缩写为 "ad" 字形。）

（蓝色手绘横线分节）

### Operations

（标题下画多重下划线）

#### Intersection

$$A \cap B = \{x \in U \mid x \in A\ \text{and}\ x \in B\}$$

- 式中的 $U$ 下方有红笔短横线，并在其下用红笔写：**“Universe”**

**文氏图（第一个）：**

- 一个长方形框表示全集，框内左上角标注 $U$。
- 框内画两个互相重叠的椭圆（扁圆形）：左边椭圆内部左上标 $A$，右边椭圆内部右上标 $B$。
- 两椭圆相交的透镜形（中间重叠）区域用红笔斜线（///）涂满，表示 $A \cap B$。

#### Union

$$A \cup B = \{x \in U \mid x \in A\ \text{or}\ x \in B\}$$

**文氏图（第二个）：**

- 同样是长方形全集框，框内左上角有 $U$ 的痕迹；框内两个重叠椭圆，左上标 $A$、右上标 $B$。
- 两个椭圆的全部内部（含重叠部分）都用红笔斜线（///）涂满，表示 $A \cup B$。

图右侧写出：

$$|A \cup B|$$

$$= |A| + |B| - |A \cap B|$$

## 第 8 页

### Complement

$$\bar{A} = A^{c} = \{x \in U \mid x \notin A\}$$

**文氏图（补集）：**

- 一个长方形框表示全集 $U$。
- 框内偏右处画一个椭圆，椭圆内部标 $A$。
- 椭圆**之外**、长方形**之内**的全部区域用红笔斜线（///）涂满，表示 $\bar{A}$。

（蓝色手绘横线分节）

### Difference

$$A - B = \{x \in U \mid x \in A\ \text{and}\ x \notin B\}$$

**文氏图（差集）：**

- 长方形全集框；框内两个重叠椭圆，左椭圆标 $A$（内部左侧），右椭圆标 $B$（内部右侧）。
- 只把左椭圆中**不与 $B$ 重叠**的月牙形区域用红笔斜线（///）涂满，表示 $A - B$。

图右侧写出：

$$|A - B| = |A| - |A \cap B|$$

（蓝色手绘横线分节）

### Example

$$A = \{1, 3, 6, 8, 10\} \qquad B = \{2, 4, 6, 7, 10\}$$

（以下四问分左右两栏，左栏 ①②③，右栏 ⑤）

① $|A| = 5$ , $|B| = 5$

② $|A \cap B| = 2$

③ $|A \cup B| = 8$

⑤（右栏，序号写作带圈的 5）$|A - B| = 5 - 2$

　　　　　　　　$= 3$

- 说明：纸面上序号依次为 ①②③ 与 ⑤（右侧另起一栏，序号笔迹为圈 5；纸面未出现 ④）。

## 第 9 页

### Partition of Sets.

A collection of non-empty sets $\{A_1, A_2, \ldots, A_n\}$ is a partition of set $A$ iff

$$A = A_1 \cup A_2 \cup \ldots \cup A_n \quad \text{and}$$

$A_1, A_2, \ldots, A_n$ are mutually disjoint.

（"iff" 写作连笔 iff；整段为连续手写，分行如纸面。）

（蓝色手绘横线分节）

### E.g.

$$A = \{x \in \mathbb{Z} \mid x\ \text{is divisible by } 6\}$$

$$A_1 = \{x \in \mathbb{Z} \mid x\ \text{is divisible by } 2\}$$

$$A_2 = \{x \in \mathbb{Z} \mid x\ \text{is divisible by } 3\}$$

- 说明：本页写到 $A_2$ 处即到页底，后续未见续写（第 10 页直接转入 Cartesian Products）。

## 第 10 页

### Cartesian Products

（标题被一个手绘椭圆圈住，标题下画多重下划线）

Given two sets $A$ and $B$, $A \times B$ is the set of all **ordered pairs** $(a, b)$ where $a \in A$, $b \in B$:

- "ordered pairs" 一词下方有红笔双下划线（线延伸到词的两端），强调有序。

$$A \times B = \{(a, b) \mid a \in A,\ b \in B\}$$

（下方红笔写：）

$$(a, b) \neq (b, a)$$

$$|A \times B| = |A| \cdot |B|$$

$$\emptyset \times A = \emptyset$$

$$A_1 \times A_2 \times \cdots \times A_n =$$

$$\{(a_1, a_2, \ldots, a_n) \mid \begin{array}{l} a_1 \in A_1,\ a_2 \in A_2,\\ \cdots\ a_n \in A_n \end{array}\}$$

- 说明：末式右端条件写在两层：第一行 $a_1 \in A_1,\ a_2 \in A_2,$，第二行 $\cdots\ a_n \in A_n$，整体用一个大花括号收束。

## 第 11 页

### Example:

If $|A| = n$, $|B| = m$, then

$$\left| B^{32} \times A^{19} \right| = n^{19} \times m^{32}$$

下方用展开式说明（两组乘积并列相加，各自下方标注个数）：

$$\underbrace{B \times B \times \cdots \times B}_{32} \quad \times \quad \underbrace{A \times A \times \cdots \times A}_{19}$$

- 两个大括号分别标注：左侧 32 个 $B$，右侧 19 个 $A$。

（蓝色手绘横线分节）

### Power Set

（右侧另写记号 $p(A)$）

A power set of $A$, $pow(A)$, is the set containing all possible subsets of $A$.

- 说明：页面上三处记号并存——标题栏右侧的 $p(A)$、定义中的 $pow(A)$、以及后文使用的 $p(\cdot)$ / $pow(\cdot)$ 混写。

## 第 12 页

### E.g.

$$A = \{a, b\} \qquad\qquad A = \{a, b, c\}$$

（两个例子并排写在同一条线上）

$$pow(A) = \{\emptyset, \{a\}, \{b\}, \{a, b\}\}$$

- 该式对应左侧例子 $A=\{a,b\}$（三个元素的子集加空集，共 4 个）。

If $|A| = n$, then $|pow(A)| = 2^{n}$

**下方示意图（用二进制串说明）：**

- 左串：$000 \cdots 0$（若干个 0），串下方画大括号，标注 **n-bits**
- 右串：$1000 \cdots 0$（一个 1 后跟若干个 0），串下方画大括号，标注 **n-bits**

（即每个子集对应一个 n 位 0/1 串，每位表示该元素取或不取。）

（蓝色手绘横线分节）

### Exercise.

① $pow(\emptyset) = \{\emptyset\}$

② $pow(\{\emptyset\}) = \{\emptyset, \{\emptyset\}\}$

③ $|A| = x$, $|B| = y$

$$|pow(A \times B)| = 2^{|A \times B|} = 2^{xy}$$

（本页以 ③ 结束，④ 接在下页。）

## 第 13 页

（本页只有一道题的解答，其余为空白纸面。）

④ If $|A| = m$, $\left| p(p(p(A))) \right| = ?$

$$= 2^{\left| p(p(A)) \right|}$$

$$= 2^{2^{\left| p(A) \right|}}$$

$$= 2^{2^{2^{m}}}$$

- 说明：页面上幂次逐层向右上堆叠书写，第 2 行指数为 $2^{|p(A)|}$，第 3 行指数再嵌套一层，最终为三重指数 $2^{2^{2^m}}$；各行均以 "＝" 起首（承接上一行左侧的待求式）。

## 转录说明

- 总页数：13 页（p01–p13），全部逐页阅读并转录。
- 主题概述：本讲前半部分承接上节课的命题逻辑（条件联结词、双条件），引入**论证（argument）**的定义与有效性（validity），列举基本推理规则——Modus Ponens、Modus Tollens、Elimination、Generalization、Specialization/Simplification、Contradiction、Transitivity，并用命题等价演算证明传递律 $\big((p\to q)\wedge(q\to r)\big)\to(p\to r)$，随后做一道由三个前提推出 $p$ 的八步习题；后半部分转入**集合论基础**：集合的定义（无序、互异）、属于/不属于、概括表示法、基数、子集与相等、交/并/补/差及其文氏图与计数公式、集合的划分、笛卡尔积、幂集及其基数 $2^n$（含 n 位 0/1 串的直观解释与嵌套幂集的指数塔计算）。
- 空白页：第 1 页为空白（仅扫描边缘的深色条，无任何手写内容）。第 13 页除顶部一道题外其余为空白。
- 无法辨认／需注意之处：
  1. 第 4、5 页证明中的 $c$ 与 $t$ 为小写字母，分别指矛盾式（永假）与永真式；字迹较小，但结合同页 Contradiction 规则可确认。
  2. 第 5 页解答第 5 步右侧的 "Contrapositive" 被纸面右边缘截断（仅见 "Contrapositi…"），第 6 步 "De Morgan's law" 末尾亦略被截断。
  3. 第 6 页 ① 中两组集合 $\{2,4,5,6\}$ 与 $\{2,6,5,4\}$ 之间纸面上没有等号，仅并排书写。
  4. 第 8 页例题的四个小问编号为 ①②③ 与 ⑤，纸面未出现 ④（右侧另起一栏处笔迹为带圈的 5）。
  5. 第 3 页右下 "∴ p∧q∧r" 一行的三个字母笔画相连，$q$ 与 $r$ 的写法与常规手写略有差异，已按形状转录为 $p \wedge q \wedge r$。
  6. 第 2 页 "premise" 一词为红笔连笔小写，笔画略有粘连，依位置（指向假设部分的箭头末端）转录。
  7. 第 9 页 "mutually disjoint" 中 "mutually" 一词行末被压缩书写，字距很紧，按可辨字形转录。
- 全篇蓝笔书写，红笔用于强调、批注与补充（下划线、圈注、箭头、补充词），均已在文中标注颜色与位置。
