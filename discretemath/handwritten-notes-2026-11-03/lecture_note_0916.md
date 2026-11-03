# Lecture Note 0916（Set Identities → First-Order Logic）

> 说明：本文件为 9 页手写笔记的逐页忠实转录。原笔记用蓝色笔写于米色稿纸，p03 与 p05 有少量红色笔迹（已注明）。原稿的括号、方框、下划线、箭头均在文中以文字说明保留。

## 第 1 页

（页面几乎空白，只有稿纸本身的横线格。纸张左侧有一条从上到下的深色竖边，为扫描/装订边缘；页面靠上有一条横线，右下角有四条短短的横线，是稿纸的印刷格线，没有手写内容。）

## 第 2 页

右上角标题「Last Time」，右侧用一条竖线加下方横线框住，框内列出上次课内容：

- ① Argument
- ② set

（两个项目符号原稿画成小圆圈/实心点样式。）

---

**Set Identities**

（标题下方有**双下划线**强调。）

**1. Distributive Law**

$$
A \cup (B \cap C) = (A \cup B) \cap (A \cup C)
$$

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C)
$$

**2. De Morgan's Law**

$$
\overline{(A \cup B)} = \overline{A} \cap \overline{B}
$$

$$
\overline{(A \cap B)} = \overline{A} \cup \overline{B}
$$

（第一式右侧空白处有旁注，写出命题变量：）

$$
p: x \in A
$$

$$
q: x \in B
$$

**3. Set Difference :** $A - B = A \cap \overline{B}$

**页面底部的文氏图（红色笔迹）：**

- 外框：一个手绘矩形，代表全集（universe）。
- 矩形内有两个左右并排、互相重叠的椭圆：左椭圆标 **A**（字母 a 写在椭圆左上方），右椭圆标 **B**（字母 b 写在椭圆右上方）。
- 两椭圆中间重叠出一块透镜形区域（即 $A \cap B$）。
- 左椭圆 A 的内部（含与 B 重叠的透镜区）用蓝色竖线排线涂满；右椭圆 B 的右半部分内部**没有**涂色，是空的。
- 红色笔以短斜线排线（类似阴影线）涂在矩形内、两个椭圆之外的空白处：椭圆上方一条横带、下方一条横带、左侧边缘、右侧边缘都有红色斜线。
- 此外有一条较长的红色斜线自图的左上方穿过两椭圆的交叠区（透镜区）一直划到右下方，像是把交集部分划掉/排除的意思。
- 整幅图配合上方的 $A-B = A \cap \overline{B}$，表达"取 A 中不属于 B 的部分"。

## 第 3 页

左上角标题被一条横线（右端向上折起，形成直角框）框住：

**Example : Q1**

（横线下方是待证命题，横线相当于把它圈起来。）

$$
A - (B \cap C) \subseteq (A - B) \cup (A - C)
$$

**Suppose that** $x \in A - (B \cap C)$ **,**

$$
x \in A \quad \text{and} \quad x \notin B \cap C .
$$

左侧页边有一个用弧线括号括起来的旁注，列出三个命题变量：

$$
\begin{aligned}
r &: x \in A \\
p &: x \in B \\
q &: x \in C
\end{aligned}
$$

（同一高度、偏右侧另有一条旁注，是德摩根律的命题形式：）

$$
\neg(p \wedge q) \equiv \neg p \vee \neg q
$$

**主体推导（逐行）：**

$$
r \wedge (\neg p \vee \neg q)
$$

$$
\equiv (r \wedge \neg p) \vee (r \wedge \neg q)
$$

（第一项 $(r \wedge \neg p)$ 下方画了**双下划线**，并由一个向左下的箭头指向下面写的）

$$
x \in A - B
$$

（第二项 $(r \wedge \neg q)$ 下方也画了**双下划线**，并由一个向下的箭头指向下面写的）

$$
x \in A - C
$$

**结论行（行首为推出符号 $\implies$）：**

$$
\implies x \in (A - B) \cup (A - C)
$$

页面底部画了一条横线，作为本节结束的分隔线。

## 第 4 页

（承接上页，本题标号 Q2。）

**Q2 :**

$$
(A \cap B) \times C = (A \times C) \cap (B \times C)
$$

**① LHS $\subseteq$ RHS**

$$
(A \cap B) \times C \subseteq A \times C
$$

（第一个包含式右下方、两行之间用小字写了 **and**，接到下一行）

$$
(A \cap B) \times C \subseteq B \times C
$$

**② RHS $\subseteq$ LHS**

**Let** $(x,y) \in (A \times C) \cap (B \times C)$

**Then** $(x,y) \in A \times C$ **and** $(x,y) \in B \times C$

（本页到此处为止，句子在页脚处断开，续于第 5 页。）

## 第 5 页

（承接上页的证明，页首第一行：）

$$
\therefore\ x \in A \qquad y \in C \qquad x \in B
$$

（在 $x \in A$ 与 $y \in C$ 之间、$y \in C$ 与 $x \in B$ 之间，各用**红色笔**在上方写了小字 **and**。）

$$
\therefore\ (x,y) \in (A \cap B) \times C
$$

（下面画一条横线，作为本题结束。）

---

**Q3 :** $A - (A \cap B) = A - B$

**推导（等号对齐，逐行）：**

$$
\begin{aligned}
A - (A \cap B) &= A \cap \overline{(A \cap B)} \\
&= A \cap (\overline{A} \cup \overline{B}) \\
&= (A \cap \overline{A}) \cup (A \cap \overline{B}) \\
&= \varnothing \cup (A \cap \overline{B})
\end{aligned}
$$

（最后一行的空集符号手写为带斜杠的圆圈 "ø" 形状。）

## 第 6 页

（承接第 5 页最后一式，页首补上收尾：）

$$
= A \cap \overline{B} = A - B
$$

（下面画一条横线。）

---

**First-Order Logic**

（标题右侧有一条竖线加下横线，把标题框住。）

**Logic on quantified statements**

（此行下方画了**两条波浪形下划线**。）

**Predicates**

（下方也画了双波浪形下划线。）

**Predicates are propositions with variables.**

$$
P(x,y): x + y = 2
$$

## 第 7 页

（页首承接上页的例子，给出两个取值检验，两式之间用逗号隔开：）

$$
x = 1,\ y = 1 \quad \checkmark \qquad\qquad x = 2,\ y = 3 \quad ,\ \times
$$

（第一个赋值后画对勾 ✓，第二个赋值后画叉 ✗。此式下方画一条横线。）

---

**Quantifier**

**Universal Quantifier :**

$$
\forall x \in A , \quad \text{for all } x \text{ in } A
$$

**Existential Quantifier :**

$$
\exists x \in A , \quad \text{there exists some } x \text{ in } A
$$

（再往下两行，把量词展开成合取/析取形式：）

$$
\forall x \in \mathbb{Z}^{+} ,\ P(x) \Longleftrightarrow P(1) \wedge P(2) \wedge \cdots
$$

$$
\exists x \in \mathbb{Z}^{+} ,\ P(x) \Longleftrightarrow P(1) \vee P(2) \vee \cdots
$$

## 第 8 页

**Example :**

**If an integer $n$ is greater than 2 , then the equation $a^{n} + b^{n} = c^{n}$ has no solutions in positive integers $a , b , c$ .**

（以上英文句子分四行书写，本页照原顺序排列。）

**用逻辑符号写出（第一版）：**

$$
\forall a,b,c \in \mathbb{Z}^{+} ,\ (n > 2) \wedge (n \in \mathbb{Z}) \rightarrow a^{n} + b^{n} \neq c^{n}
$$

（其中 $a^{n} + b^{n} \neq c^{n}$ 写在箭头下方的第二行，作为箭头所指的结论。）

**再写出其等价（取反后）形式：**

$$
\forall a,b,c \in \mathbb{Z}^{+} ,\ (n \le 2) \vee (n \notin \mathbb{Z}) \vee (a^{n} + b^{n} \neq c^{n})
$$

## 第 9 页

（页面几乎空白，只有左上角写了一个词：）

**Learn**

（词下方画了一条波浪形下划线。除此之外整页无其他内容。）

---

## 转录说明

- **总页数**：9 页（p01–p09），全部逐页读取并转录。
- **主题**：前半为集合恒等式（Set Identities：分配律、德摩根律、集合差）及三个证明例题 Q1–Q3（含笛卡尔积的相等证明）；后半转入 First-Order Logic（谓词 Predicates、全称/存在量词 Quantifier、量词的合取/析取展开，以及费马大定理的符号化例题）。
- **近乎空白的页面**：第 1 页（只有稿纸印刷格线与左侧扫描黑边，无手写内容）；第 9 页（只有左上角单词 "Learn" 及其波浪下划线）。
- **无法完全辨认之处**：
  1. 第 2 页底部文氏图：红、蓝两种涂色的边界是手绘排线，涂色范围本身清晰（A 内部有蓝色竖线、B 右半部空白、椭圆外区域有红色斜线、一条长红斜线穿过交集区），但"这条长斜线是阴影线还是刻意的划除线"从笔迹上无法确定；本转录按"划除交集"记，并同时保留了两种涂色的原始描述。
  2. 第 2 页 "Last Time" 下方的两个项目符号：原稿是两个手绘小圆圈，圈内看不清是否有数字，转录为 ①②。
  3. 第 5 页末行的空集符号写成带斜杠的高瘦圆圈（ø），确认为空集 $\varnothing$，但笔画与他人书写的 $\phi$ 形似，若原意是 $\phi$ 请对照。
  4. 第 7 页页首第二个赋值 $x = 2,\ y = 3$：该处 "y" 后的符号为一短横加一个弯钩状的字符，最接近 "=3"；不能完全排除写成 "$\neq$" 的可能（即 $y \neq 3$）。结合上文 $P(x,y): x+y=2$ 与后面的 ✗，按 $y=3$ 记录。
  5. 第 8 页首式中量词写作 $\forall a,b,c \in \mathbb{Z}^{+}$（把 $a,b,c$ 并列在同一个 $\forall$ 之后），原稿未分别写三个 $\forall$，转录照原样保留。
- **红色笔迹**：仅第 2 页（文氏图排线）与第 5 页（两处小字 "and"）出现红笔，其余均为蓝笔。
- 原稿的框线、波浪下划线、双下划线、箭头指向关系均已在对应位置用文字说明，未作删减或合并。
