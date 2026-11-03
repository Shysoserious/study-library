# Lecture Note 1012/1014 — Recursion（递归：Fibonacci、汉诺塔、归并排序、Catalan 数、动态规划与生成函数）

> 原始材料：CUHK-Shenzhen CSC3001 离散数学手写课堂笔记扫描件，共 27 页（p01–p27），蓝笔为主、红笔批注/强调，米色纸，中英混写（以英文为主）。
> 记号约定：原笔记中生成函数的 $F$ 顶部大多带一横线（或为花体写法），本文统一转写为 $\overline{F}(x)$；p20 首次定义处原样为 $F(x)$。

## 第 1 页
（空白页，无手写内容。）

## 第 2 页
**Recursion**（标题，蓝笔，加框下划线）

Solving（原字迹 "Solvi'g"）a problem where the solution depends on solutions to smaller instance of the same problem.
（即：求解一个问题，其解依赖于同一问题更小实例的解。）

---

**Fibonacci Sequence**（标题，加框）

The sequence: $0,\ 1,\ 1,\ 2,\ 3,\ 5,\ 8,\ 13,\ 21,\ \dots$

左半页（分栏线隔开）：

$$f(n)=\begin{cases}0, & n=0\\ 1, & n=1\\ f(n-1)+f(n-2), & \text{（第三行）}\end{cases}$$

- 递推那一行（$f(n-1)+f(n-2)$）下方有红色横线强调；其下有红色向下的双箭头 $\Downarrow$，指向：
- $f(n)=\underbrace{\bigcirc}_{\text{红笔圈出的空白}}$，红笔标注："closed form solution"（封闭解，加引号）。

右半页：

```
def f(n):
    if n=0:        ┐
        return 0   │ ← 此整块被红笔框住，右侧红笔标注 "Base case"
    if n=1:        │
        return 1   ┘
    return f(n-1)+f(n-2)
```

## 第 3 页
（递归展开树示意图，蓝色为主、底部红色补充。）

树结构（自上而下）：
- 根节点：$f(n)$（节点画为实心点）。
- 第 2 层：左子 $f(n-1)$，右子 $f(n-2)$。
- 第 3 层：$f(n-1)$ 的两个子节点为 $f(n-2)$、$f(n-3)$；$f(n-2)$ 的两个子节点为 $f(n-3)$、$f(n-4)$。
- 中部有纵向虚线省略号（表中间层略），左侧沿最左分支一路向下延伸（虚线节点）至 $f(2)$。
- $f(2)$ 的两个子节点（蓝色）：$f(1)$、$f(0)$；$f(1)$、$f(0)$ 下方各有一条红色横线强调。
- 红色补充部分（在 $f(1)$、$f(0)$ 之下，用红色箭头继续展开）：$f(1)$ 之下画 $f(0)$、$f(-1)$；$f(0)$ 之下画 $f(-1)$、$f(-2)$（示意按递推式会递归到负数下标）。
- 页面右侧大字：$O(2^n)$。
- 右下角：红色纵向虚线省略号 + 红色向下箭头（示意可无限继续展开/没有底）。

## 第 4 页
**Tower of Hanoi**（标题，加框）

示意图：三根杆，杆顶分别画圆圈标号 ①、②、③；杆 1 上画有一摞圆盘（叠成塔形，数层矩形），杆 2、杆 3 为空杆。

规则（编号列表）：
1. Three Rods（三根杆）
2. One pile of disks（一摞圆盘）
3. Move from 1 to 3（从杆 1 移到杆 3）
4. Large disk cannot be on top of the smaller one.（大盘不能放在小盘上面。）

## 第 5 页
$f(n)$ : number of steps we need to solve the task.
（$f(n)$：解决该任务所需的步数。）

---

**n = 2**（框出）

$f(2) = 3$

示意图：三根空杆，杆 1 上有 2 个圆盘（小盘在上、大盘在下），杆 2、杆 3 为空。

---

**n = 3**（框出）

示意图：三根空杆，杆 1 上有 3 个圆盘（由小到大叠成塔），杆 2、杆 3 为空。

## 第 6 页
（n=3 的移动步骤演示，每行一组三杆状态图，红色箭头表示本步移动方向。）

**Step 1**
状态图：杆 1 上有 2 个圆盘，杆 2 为空，杆 3 上有 1 个小盘。
红色长箭头从杆 1 上方横跨至杆 3 上方（表示：把最小的盘从杆 1 移到杆 3）。

**Step 2**
状态图：杆 1 上有 1 个盘，杆 2 上有 1 个盘，杆 3 上有 1 个小盘。
红色短箭头从杆 1 上方弯向杆 2 上方（表示：把中间盘从杆 1 移到杆 2）。

**Step 3**
状态图：杆 1 上有 1 个大盘，杆 2 上有 2 个圆盘，杆 3 为空。
红色箭头从杆 3 上方指向杆 2 上方（箭头朝左；表示：把小盘从杆 3 移到杆 2）。

## 第 7 页
**Step 4**
状态图：杆 1 为空，杆 2 上有 2 个圆盘，杆 3 上有 1 个大盘。
红色长箭头从杆 1 上方弯向杆 3 上方（表示：把最大盘从杆 1 移到杆 3）。

$$f(3) = 4 + 3 = 7$$

---

**General case: $f(n)$**（一般情形）

示意图：杆 1 上画一个三角形塔堆，其旁用大括号标注 $n-1$；杆 2、杆 3 为空。

## 第 8 页
（一般情形 $f(n)$ 的三段分解示意图，每行一组三杆状态图，配红色箭头与方框标注代价。）

- 第一行：杆 1 上只剩 1 个最大盘，杆 2 上是 $n-1$ 个盘叠成的三角塔，杆 3 为空；杆 2 的塔下方用方框标注 $[f(n-1)]$；红色箭头从杆 1 上方弯向杆 2（表示：先把上面 $n-1$ 个盘从杆 1 移到杆 2，代价 $f(n-1)$）。
- 第二行：杆 1 为空，杆 2 上是 $n-1$ 个盘的塔，杆 3 上有最大盘；塔与盘之间方框标注 $[1]$；红色箭头从左侧横跨至杆 3 上方（表示：把最大盘移到杆 3，代价 1 步）。
- 第三行：杆 1 为空，杆 2 上是 $n-1$ 个盘的塔，杆 3 上有最大盘；下方方框标注 $[f(n-1)]$；红色箭头从杆 2 上方弯向杆 3（表示：再把 $n-1$ 个盘从杆 2 移到杆 3，代价 $f(n-1)$）。

## 第 9 页
$$f(n) = f(n-1) + 1 + f(n-1)$$
$$=\ 2f(n-1) + 1$$

---

**Exercise: palindrome.**（练习：回文）

A string that reads the same forward and backward.
（一个正读反读都相同的字符串。）

蓝笔方框框住：`racecar`（框内写作 "ra ce c ar" 分隔）

右侧旁注：assume that the empty string is a palindrome（假设空串是回文）。

## 第 10 页
```
def is_palindrome(s):
    if len(s) <= 1:
        return True
    return s[0] == s[-1] and
           is_palindrome(s[1:-1])
```

---

**Merge Sort**（标题，加框下划线）

$$3\ 8\ 4\ 7\ 2\ 1\ 6\ 5\ \Longrightarrow\ 1\ 2\ 3\ 4\ 5\ 6\ 7\ 8$$

红笔把左边序列分成两个框：$[\,3\ 8\ 4\ 7\,]$ 和 $[\,2\ 1\ 6\ 5\,]$。

## 第 11 页
Suppose we have sorted each group:（假设每组已排好序：）

红笔框：$[\,3\ 4\ 7\ 8\,]$　红笔框：$[\,1\ 2\ 5\ 6\,]$

**Merge**（归并）

以下四行为归并过程，每行左侧为两个输入序列（当前待比较的元素用红笔小框框住），右侧竖线后为已归并输出：

| 左序列 | 右序列 | 输出 |
|---|---|---|
| $[\,3\,]\,4\ 7\ 8$ | $[\,1\,]\,2\ 5\ 6$ | $1$ |
| $[\,3\,]\,4\ 7\ 8$ | $1\,[\,2\,]\,5\ 6$ | $1\ 2$ |
| $[\,3\,]\,4\ 7\ 8$ | $1\ 2\,[\,5\,]\,6$ | $1\ 2\ 3$ |
| $3\,[\,4\,]\,7\ 8$ | $1\ 2\,[\,5\,]\,6$ | $1\ 2\ 3\ 4$ |

（红框逐行移动：先比 $3$ 与 $1$ 取 $1$，再比 $3$ 与 $2$ 取 $2$，再比 $3$ 与 $5$ 取 $3$，再比 $4$ 与 $5$ 取 $4$。）

## 第 12 页
（接上页归并过程，格式同前：红框为当前比较元素，竖线后为输出。）

| 左序列 | 右序列 | 输出 |
|---|---|---|
| $3\ 4\,[\,7\,]\,8$ | $1\ 2\,[\,5\,]\,6$ | $1\ 2\ 3\ 4\ 5$ |
| $3\ 4\,[\,7\,]\,8$ | $1\ 2\ 5\,[\,6\,]$ | $1\ 2\ 3\ 4\ 5\ 6$ |
| $3\ 4\ 7\ 8$ | $1\ 2\ 5\ 6$ | $1\ 2\ 3\ 4\ 5\ 6\ 7\ 8$ |

---

Suppose we can sort $k$ numbers in $f(k)$ steps. $\Longrightarrow$ we can sort $2k$ numbers in $2f(k) + 2k$.

$\therefore \Longrightarrow f(2k) = 2f(k) + 2k$

$$f(n)=\begin{cases}2f\!\left(\dfrac{n}{2}\right)+n, & n\ \text{is even（}n\text{ 为偶数）}\\[2mm] f\!\left(n/2\right)+f\!\left(n/2+1\right)+n, & n\ \text{is odd（}n\text{ 为奇数）}\end{cases}$$

## 第 13 页
```
def merge_sort(x):
    if len(x) <= 1:
        return x
    mid = len(x) // 2
    left  = merge_sort(x[:mid])
    right = merge_sort(x[mid:])
    return merge(left, right)
```

右上角示意图（红字 "mid" + 红色向下箭头指向分界处）：
一个数组条被分成两段：左段为绿色实线框，内写 $x_0\ x_1\ x_2$；右段为橙色虚线框，内写 $\cdots\cdots x_n$。红色 "mid" 与箭头标在两段交界处（即 $x_2$ 与 $\cdots x_n$ 之间）。

---

（递归调用树示意图，蓝色。）
- 根：$f(n)$。
- 第 2 层：两个子节点 $f(n/2)$、$f(n/2)$〔原字迹分母形似 3，结合 `mid = len(x)//2` 应为 $n/2$〕；该层右侧标注 $n$（每层的合并代价）。
- 第 3 层：四个子节点 $f(n/4)$、$f(n/4)$、$f(n/4)$、$f(n/4)$；该层右侧标注 $n$。
- 其下纵向省略号 $\vdots$（表示树继续向下）。

## 第 14 页
$$f(n) \approx n\log n$$

---

**Matching Parenthesis**（标题，加框）

顶部示例：$(\ (\ )\ )$，其中前半个部分 "(( " 下方有红色波浪线；其左下方有一红色潦草小字批注〔字迹不清：形似 "OK" 或 "no"，示意图串的合法性判定〕。

How many $\boxed{\text{valid}}$（"valid" 一词被红笔框住）ways to add $n$-pairs of parenthesis.
（添加 $n$ 对括号有多少种合法方式。）

- $(\ )$　—— 下方标注：1-pair
- $(\ )\ (\ )$　$(\ (\ )\ )$　—— 下方标注：2-pairs

## 第 15 页
（3 对括号的全部合法情形，两行列举：）

第一行：$((()))$、$(\ (\ )\ (\ )$〔字迹不清：形如 "( ( ) ( )"，应为 $(()())$〕、$()\ ()\ (\ )$（即 $()()()$）
第二行：$()\ (\ (\ ))$（即 $()(())$）、$(\ (\ ))\ (\ )$（即 $(())()$）

下方标注：3-pairs

$f(n)$ : how many valid ways for $n$-pairs.
（$f(n)$：$n$ 对括号的合法方式数。）

（按"第一对括号内部含多少对"分类的展开草图，蓝色，配大括号与波浪线标注其余对数：）

- $(\ )\ \cdots\cdots\cdots$　（点号下方有波浪线，标注 $n-1$）　右侧：$f(n-1)$
- $(\underset{1}{\cdot})\ \cdots\cdots\cdots$　（括号内画一点、其下小大括号标注 $1$；点号下波浪线标注 $n-2$）　右侧：$f(1) \times f(n-2)$

## 第 16 页
（接上页分类列举：）

- $(\ (\cdots)\ )\ \cdots\cdots\cdots$　（内层大括号标注 $2$，点号下波浪线标注 $n-3$）　右侧：$f(2) \times f(n-3)$
- 纵向省略号 $\vdots$

---

$A, B$ : valid sequence（$A,B$：合法（括号）序列）

$|A|$ : number of pairs of $A$.（$|A|$：$A$ 的括号对数。）

$$|A| + |B| = n-1$$

结构形式：$(A)B$（即：一个合法序列 = “( A ) B”，$A$ 被第一对括号包住，$B$ 跟在后面）

逐行列举（$|A|$ 递增，$|B|$ 相应递减）：
- $|A| = 0$，$|B| = n-1$，$f(0)\cdot f(n-1)$
- $|A| = 1$，$|B| = n-2$，$f(1)\cdot f(n-2)$
- $|A| = 2$，$|B| = n-3$，$f(2)\cdot f(n-3)$

## 第 17 页
（接上页，顶部纵向省略号 $\vdots$）

- $|A| = n-1$，$|B| = 0$，$f(n-1)\cdot f(0)$

$$f(n) = \sum_{i=0}^{n-1} f(i)\cdot f(n-1-i)$$

$$=\ \sum_{i=1}^{n} f(i-1)\cdot f(n-i)$$

（以上两行整体左侧有一条大弧线括起，弧线左端有向下的大箭头，指向下式；弧线中间夹着初值条件：）

$$f(0) = 1,\quad f(1) = 1$$

$$\Downarrow$$

$$f(n) = \frac{1}{n+1}\binom{2n}{n}$$

右侧红笔标注（带引号）："Catalan Number"

## 第 18 页
**Revisit Fibonacci Sequence**（标题，加框下划线）

$$f(n)=\begin{cases}0, & n=0\\ 1, & n=1\\ f(n-1)+f(n-2), & n\ge 2\end{cases}$$

左侧代码：
```
def f(n):
    if n=0:
        return 0
    if n=1:
        return 1
    return f(n-1)+f(n-2)
```

右侧：红笔画的 $f(5)$ 递归树：
- 根：$f(5)$。
- 第 2 层：$f(4)$、$f(3)$。
- 第 3 层：$f(4)$ 之子：$f(3)$、$f(2)$；$f(3)$ 之子：$f(2)$、$f(1)$。
- 第 4 层：左 $f(3)$ 之子：$f(2)$、$f(1)$；中间 $f(2)$ 之子：$f(1)$、$f(0)$；右 $f(2)$ 之子：$f(1)$、$f(0)$。其中一处 $f(1)$ 上有红笔涂改/划记。
- 第 5 层：底部 $f(2)$ 之子：$f(1)$、$f(0)$。
（树上节点间的"^"形连线表示父子关系，重复子问题大量出现。）

## 第 19 页
红笔（顶部）：
- cache : array $(n)$（cache：长度为 $n$ 的数组）
- $cache[i] \leftarrow f(i)$

蓝笔代码：
```
def f_cache(n):
    if n in cache:
        return cache[n]

    if n<=1:
        cache[n] = n
    else:
        cache[n] = f_cache(n-1)
               + f_cache(n-2)

    return cache[n]
```

右侧红笔标注：$O(n)$

## 第 20 页
（红笔双线大框标题：）**Dynamic Programming**

（蓝笔框标题：）**Generating Function**

$$F(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \cdots\cdots$$

$$=\ \sum_{i=0}^{\infty} a_i x^i$$

## 第 21 页
$$\left(\ a_0,\ a_1,\ a_2,\ a_3,\ \cdots\cdots\ \right)$$

$$\Downarrow$$

$$\overline{F}(x)$$

---

（生成函数的运算规则，编号列表，部分系数用红笔标红，"⟺"原笔迹写作"$\Subset$"/"$\Leftarrow$"形：）

① $\left(\ ca_0,\ ca_1,\ ca_2,\ ca_3,\ \cdots\cdots\ \right) \Longleftrightarrow c\,\overline{F}(x)$　（各系数前的 $c$ 为红笔）

② $\left(a_0, a_1, a_2, \cdots\cdots\right) \Longleftrightarrow \overline{F}(x)$

　$\left(a_0',\ a_1',\ a_2',\ \cdots\cdots\right) \Longleftrightarrow G(x)$

　$\left(a_0+a_0',\ a_1+a_1',\ \cdots\cdots\cdots\right) \Longleftrightarrow \overline{F}(x) + G(x)$

③ $\left(\underbrace{0,0,0,\cdots}_{k-\text{zeros（红笔标注）}},\ a_0,\ a_1,\ a_2,\ \cdots\cdots\right)$
（"k-zeros" 为红笔字，其上红色波浪线标在前几个零上；此条的对应函数结论写在下一页顶部。）

## 第 22 页
（接上页 ③ 的结论：）

$$0\cdot x^0 + 0\cdot x^1 + \cdots + 0\cdot x^{k-1} + a_0\cdot x^{k} + a_1\cdot x^{k+1} + \cdots$$

$$= 0 + x^k\left(a_0 + a_1 x + a_2 x^2 + \cdots\cdots\right)$$

$$= x^k\cdot \overline{F}(x)$$

④ $\left(a_0,\ a_1,\ a_2,\ \cdots\cdots\right) \Longleftrightarrow \overline{F}(x)$

$$\overline{F}(x) = \sum_{i=0}^{\infty} a_i\cdot x^i$$

$$\overline{F}'(x) = \sum_{i=0}^{\infty} a_i\cdot i\cdot x^{i-1} = 0 + a_1 x^0 + 2a_2 x^1 + \cdots$$

$$\Longleftrightarrow \left(\ a_1,\ 2a_2,\ 3a_3,\ 4a_4,\ \cdots\cdots\ \right)$$

---

（红笔写的本讲主线，页面底部：）

$$f_0,\ f_1,\ f_2,\ f_3,\ \cdots\cdots\cdots\ \Longrightarrow\ f_i = a_i$$

$$\Longleftrightarrow\ \overline{F}(x) = \sum_{i=0}^{\infty} a_i x^i$$

## 第 23 页
Fibonacci Sequence:（此行颜色偏深）

$$f_0,\ f_1,\ f_2,\ f_3,\ \cdots\cdots\ \Longleftrightarrow\ \overline{F}(x)$$

（红笔大框把下列三行整体框住——"整体右移一位/两位"及单位序列：）

- $0,\ f_0,\ f_1,\ f_2,\ \cdots\ \Longleftrightarrow x\,\overline{F}(x)$
- $0,\ 0,\ f_0,\ f_1,\ f_2\ \cdots\cdots \Longleftrightarrow x^2\,\overline{F}(x)$
- $0,\ 1,\ 0,\ 0,\ 0\ \cdots\cdots \Longleftrightarrow x$

（红框左侧有向下回指的红色箭头；由框内三行相加得到：）

$$0,\ f_0,\ f_0+f_1,\ f_1+f_2,\ f_2+f_3\ \Longleftrightarrow$$

（红笔续写，表示上列序列正是 Fibonacci 序列本身：）

$$f_0,\ f_1,\ f_2,\ f_3,\ f_4,\ \cdots\cdots \Longleftrightarrow \overline{F}(x)$$

$$\Downarrow$$

$$x + x\,\overline{F}(x) + x^2\,\overline{F}(x) = \overline{F}(x)$$

## 第 24 页
$$\overline{F}(x)\left(\ 1 - x - x^2\ \right) = x$$

$$\therefore\ \overline{F}(x) = \frac{x}{1-x-x^2}$$

$$(\ 1-x-x^2\ ) = \left(\ 1-\alpha x\ \right)\left(\ 1-\beta x\ \right)$$

$$RHS = 1 - (\alpha+\beta)x + \alpha\beta x^2$$

$$\therefore\ \begin{cases}\alpha+\beta = 1\\ \alpha\beta = -1\end{cases}\ \Longrightarrow\ \alpha,\ \beta\ \text{are root of}\ y^2 - y - 1 = 0$$
（原笔迹拼写近似 "are root/rot of"。）

$$\Longrightarrow\ \begin{cases}\alpha = \dfrac{1+\sqrt{5}}{2}\\[2mm] \beta = \dfrac{1-\sqrt{5}}{2}\end{cases}$$

## 第 25 页
$$\frac{x}{(1-\alpha x)(1-\beta x)} = \frac{A}{1-\alpha x} + \frac{B}{1-\beta x}$$

$$A(\ 1-\beta x\ ) + B(\ 1-\alpha x\ ) = x$$

$$A + B\ -\ A\beta x\ - B\alpha x\ = x$$

$$\therefore\ \begin{cases}A + B = 0\\ A\beta + B\alpha = -1\end{cases}$$

$$\Longrightarrow\ A = \frac{1}{\sqrt{5}}\ ,\quad B = -\frac{1}{\sqrt{5}}$$

## 第 26 页
$$\therefore\ \overline{F}(x) = \frac{1}{\sqrt{5}}\cdot\frac{1}{1-\alpha x}\ -\ \frac{1}{\sqrt{5}}\cdot\frac{1}{1-\beta x}$$
（两个分式分母 $1-\alpha x$、$1-\beta x$ 下方各有红笔双横线强调。）

（红笔写的几何级数展开：）

$$\frac{1}{1-\alpha x} = \sum_{i=0}^{\infty}\left(\alpha x\right)^i\qquad\qquad \frac{1}{1-\beta x} = \sum_{i=0}^{\infty}\left(\beta x\right)^i$$

$$\overline{F}(x) = \sum_{i=0}^{\infty}\ \underbrace{\frac{1}{\sqrt{5}}\left(\alpha^i - \beta^i\right)}_{\text{（红色下划线 + 红色箭头指向）}\ f_i}\ x^i$$

---

$$f_0,\ f_1,\ f_2,\ \cdots\cdots\ \Longleftrightarrow\ \overline{F}(x)$$

$$\overline{F}(x) = \frac{x}{1-x-x^2}$$

## 第 27 页
（本页仅顶部一行，其余空白：）

$$\overline{F}(x) = \sum_{i=0}^{\infty}\ \frac{1}{\sqrt{5}}\left(\alpha^i - \beta^i\right)x^i$$
（系数部分 $\frac{1}{\sqrt{5}}(\alpha^i-\beta^i)$ 下方有红笔双横线强调，即 Fibonacci 通项 $f_i$。）

## 转录说明
- **总页数**：27 页（p01–p27），全部逐页读取转录，无跳过。
- **主题**：递归（Recursion）——Fibonacci 序列与递归树复杂度 $O(2^n)$、Tower of Hanoi（$f(n)=2f(n-1)+1$，$f(3)=7$）、回文递归判定、归并排序（递推式与 $f(n)\approx n\log n$）、合法括号序列计数（Catalan 数 $f(n)=\frac{1}{n+1}\binom{2n}{n}$）、记忆化缓存（$O(n)$）、动态规划、生成函数及其运算规则（数乘/平移/求和/求导）、用生成函数推导 Fibonacci 通项 $\frac{1}{\sqrt5}(\alpha^i-\beta^i)$，$\alpha=\frac{1+\sqrt5}{2},\beta=\frac{1-\sqrt5}{2}$。
- **空白页**：第 1 页为空白页；第 27 页仅顶部一行公式，其余空白。
- **无法辨认/存疑之处**：
  - 第 3 页：右侧 $O(2^n)$ 下方红笔虚线与箭头含义按原样描述，无文字。
  - 第 8 页：三行示意图表示一般情形的三步分解，方框标注 $[f(n-1)]$、$[1]$、$[f(n-1)]$。
  - 第 13 页：递归树第 2 层节点分母字迹形似 3，按上下文（`mid = len(x)//2`）应为 $n/2$。
  - 第 14 页："(( ))" 示例下的红色潦草小字〔形似 "OK" 或 "no"，字迹不清〕。
  - 第 15 页：3-pairs 第二个括号串字迹潦草，形如 "( ( ) ( )"，按五 种合法序列推断为 $(()())$。
  - 第 22 页：底部红笔行 "$f_i = a_i$" 的系数字形介于 $a$ 与 $\alpha$ 之间，按上下文取 $a_i$。
  - 第 24 页：原笔迹 "are root of"（拼写潦草，应为 "are roots of"）。
  - 全篇生成函数 $F$ 顶部多带横线（花体写法），统一转写为 $\overline{F}(x)$（p20 首次定义处为 $F(x)$）；"⟺" 原笔迹常写成 "$\Subset$"/$"\Leftarrow$"形状，均按原意转写为 $\Longleftrightarrow$。
