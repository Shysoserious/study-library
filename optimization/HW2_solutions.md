# MAT3007 Homework 2 — Solutions

> 每题先给 **【思路】**（中文讲解），再给 **完整英文解答**（可直接用于 Blackboard 提交）。

---

## Problem 1 (15 pts) — True or False

**【思路】**

这一题考的是标准形 LP 与「最优解集合」的几何性质。

- (a) 说「最优解集合一定有界」。想想：如果目标函数是常数（`c = 0`），那**整个可行域里每个点都是最优的**。这时只要可行域无界，最优解集合就无界。所以 (a) 是假的。
- (b) 说「每个最优解的正分量个数都不超过 m」。注意教材里的「稀疏性推论」讲的是**存在**一个这样的最优解，而不是**每一个**都这样。反例很好造：`min −x1−x2`，约束 `x1+x2+s=1`（这里 m=1），解 `(1/2,1/2,0)` 有 2 个正分量 > m=1。
- (c) 说「若最优解不止一个，则有无穷多个（不可数个）」。因为可行域是凸集、目标函数线性，两个不同最优解连成的整条线段都是最优解，线段上有不可数个点。所以 (c) 是真的。

**English solution**

**(a) False.**

Consider the standard-form LP

minimize 0
subject to x1 − x2 = 0, x1, x2 ≥ 0.

Here m = 1. The constraint set is P = { (t, t) : t ≥ 0 }, which is an unbounded ray. Since the objective function is identically zero on P, *every* point of P is optimal, so the set of optimal solutions equals P and is unbounded. Hence the statement is false.

**(b) False.**

The sparsity theorem states that *there exists* an optimal solution with no more than m positive components; it does **not** say that every optimal solution has this property. Counterexample:

minimize −x1 − x2
subject to x1 + x2 + s = 1, x1, x2, s ≥ 0.

Here m = 1. The optimal value is −1. The point (x1, x2, s) = (1/2, 1/2, 0) is optimal (objective = −1) but has 2 positive components, which exceeds m = 1. Hence the statement is false.

**(c) True.**

Suppose x¹ and x² are two distinct optimal solutions. The feasible set P is convex and the objective function is linear, so for every λ ∈ [0,1] the point x(λ) = λx¹ + (1−λ)x² lies in P and satisfies c^T x(λ) = λ c^T x¹ + (1−λ) c^T x² = c^T x¹, i.e. x(λ) is optimal. The whole segment {x(λ) : λ ∈ [0,1]} consists of optimal solutions, and a nondegenerate segment contains uncountably many distinct points. Hence the statement is true.

---

## Problem 2 (20 pts) — The Graphical Method

**【思路】**

3 维的图解法不好画，所以先用等式 `x1 + x2 − x3 = 0` 消掉一维：令 `x3 = x1 + x2`。目标 `max x3` 就变成 `max (x1 + x2)`，约束全变成 (x1, x2) 平面上的不等式。在平面上画出可行域，逐条找顶点，再比较各顶点的目标值即可。最后把最优的 (x1, x2) 代回 `x3 = x1 + x2`。

**English solution**

Using the equality constraint, eliminate one dimension:

x3 = x1 + x2.

Then the objective becomes maximize (x1 + x2), and the constraints become

−x1 + x2 ≤ 2.5,
x1 + 2x2 ≤ 9,
0 ≤ x1 ≤ 4,
0 ≤ x2 ≤ 3.

Plotting the feasible region in the (x1, x2)-plane, the vertices (corners) are obtained by intersecting pairs of the boundary lines x1 = 0, x1 = 4, x2 = 0, x2 = 3, −x1 + x2 = 2.5, and x1 + 2x2 = 9:

(0, 0), (4, 0), (4, 2.5), (3, 3), (0.5, 3), (0, 2.5).

Using x3 = x1 + x2, the vertices of the original feasible region are

(0, 0, 0), (4, 0, 4), (4, 2.5, 6.5), (3, 3, 6), (0.5, 3, 3.5), (0, 2.5, 2.5).

Evaluating the objective x1 + x2 at these vertices:

| (x1, x2) | x1 + x2 |
|----------|---------|
| (0, 0)   | 0       |
| (4, 0)   | 4       |
| (4, 2.5) | 6.5     |
| (3, 3)   | 6       |
| (0.5, 3) | 3.5     |
| (0, 2.5) | 2.5     |

The maximum is 6.5, attained at (x1, x2) = (4, 2.5), so x3 = 6.5.

**Optimal solution:** (x1, x2, x3) = (4, 2.5, 6.5), **optimal value:** 6.5.

**Active constraints at the optimum:** x1 + x2 − x3 = 0 (the equality), x1 = 4, and x1 + 2x2 = 9. (The other constraints −x1 + x2 ≤ 2.5 and x2 ≤ 3 are inactive, since −4 + 2.5 = −1.5 < 2.5 and 2.5 < 3.)

---

## Problem 3 (30 pts) — Basic solutions and basic feasible solutions

**【思路】**

第一步：把 `max` 转成 `min −x1−2x2−4x3`，再给两条不等式各加一个松弛变量 `s1, s2`，得到标准形。这里有 m=2 个方程、n=5 个变量。

第二步：(b) 直接用「基本可行解 ⟺ 极点」+ 线性规划基本定理：最优解若存在，必在某极点（BFS）取到，而 BFS 最多有 m=2 个正分量。

###### 第三步：(c) 列基本解就是「从 5 列里选 2 列当基」，共 C(5,2)=10 组基。其中两组行列式为 0（奇异），剩下 8 个基本解；再筛掉有负分量的（不可行），得到 6 个 BFS。

第四步：(d) 把 6 个 BFS 代回目标函数比大小即可。

### **English solution**

**(a) Standard form.** Rewriting the maximization as a minimization,

minimize −x1 − 2x2 − 4x3
subject to x1 + x3 + s1 = 8
           x2 + 2x3 + s2 = 14
           x1, x2, x3, s1, s2 ≥ 0.

Here m = 2 equations and n = 5 variables, with

A = [[1, 0, 1, 1, 0],
     [0, 1, 2, 0, 1]],   b = (8, 14).

**(b) Existence of an optimal solution with ≤ 2 positive variables.**

In standard form a point is a basic feasible solution (BFS) if and only if it is an extreme point of the feasible region, and a BFS has at most m = 2 positive components. The feasible region is a polyhedron (closed) and bounded: from x1 + x3 ≤ 8, x2 + 2x3 ≤ 14 and x ≥ 0 each variable is bounded above (x1 ≤ 8, x2 ≤ 14, x3 ≤ 7). Since the objective is linear (continuous), it attains its minimum on this compact set, and by the fundamental theorem of linear programming the minimum is attained at some extreme point, i.e. at some BFS. Therefore there exists an optimal solution with no more than 2 positive variables.

**(c) All basic solutions and basic feasible solutions.**

A basis consists of 2 linearly independent columns of A. There are C(5,2) = 10 candidates; two of them ({x1, s1} and {x2, s2}) have linearly dependent columns (determinant 0), leaving 8 basic solutions. Computing each:

| Basis   | Basic solution (x1, x2, x3, s1, s2) | Feasible? |
|---------|-------------------------------------|-----------|
| {x1,x2} | (8, 14, 0, 0, 0)                    | yes       |
| {x1,x3} | (1, 0, 7, 0, 0)                     | yes       |
| {x1,s2} | (8, 0, 0, 0, 14)                    | yes       |
| {x2,x3} | (0, −2, 8, 0, 0)                    | no        |
| {x2,s1} | (0, 14, 0, 8, 0)                    | yes       |
| {x3,s1} | (0, 0, 7, 1, 0)                     | yes       |
| {x3,s2} | (0, 0, 8, 0, −2)                    | no        |
| {s1,s2} | (0, 0, 0, 8, 14)                    | yes       |

(The singular bases {x1,s1} and {x2,s2} yield no basic solution.)

Thus there are **8 basic solutions**, of which **6 are basic feasible solutions**:

(8,14,0,0,0), (1,0,7,0,0), (8,0,0,0,14), (0,14,0,8,0), (0,0,7,1,0), (0,0,0,8,14).

**(d) Optimal solution.** Evaluating the original objective x1 + 2x2 + 4x3 at the six BFS:

| (x1, x2, x3) | x1 + 2x2 + 4x3 |
|--------------|----------------|
| (8, 14, 0)   | 36             |
| (1, 0, 7)    | 29             |
| (8, 0, 0)    | 8              |
| (0, 14, 0)   | 28             |
| (0, 0, 7)    | 28             |
| (0, 0, 0)    | 0              |

The maximum value is **36**, attained at **(x1, x2, x3) = (8, 14, 0)**, with slacks s1 = s2 = 0.

---

## Problem 4 (25 pts) — Vertex Cover Problem

**【思路】**

图 1 是 **Petersen 图**：10 个顶点、15 条边、每个顶点度数都是 3、没有三角形。它正是教材里展示「顶点覆盖的 LP 松弛会产生分数解」的经典例子。

顶点覆盖问题写成整数规划：

min Σ x_i  s.t.  x_i + x_j ≥ 1 (每条边 (i,j)),  x_i ∈ {0,1}。

把整数约束换成 `0 ≤ x_i ≤ 1` 就是 LP 松弛。关键观察：取**每个 x_i = 1/2**，因为每个顶点度数为 3，每条边的两个端点都取 1/2，于是 `x_i + x_j = 1 ≥ 1` 全部满足，目标值 = 10 × 1/2 = **5**。所以 LP 松弛最优值 ≤ 5，而实际能取到 5（由对偶的分数匹配也说明是 5）。

而真正的整数最优值是 **6**（Petersen 图的独立数是 4，顶点覆盖数 = 10 − 4 = 6）。所以 LP 松弛最优值 5 ≠ 整数最优值 6，**积分性间隙存在，不能去掉整数约束**。

**English solution**

The graph in Figure 1 is the **Petersen graph**: 10 vertices, 15 edges, every vertex has degree 3, and it contains no triangle. Let x_a, ..., x_j denote the vertex variables.

The vertex cover problem is

minimize Σ_i x_i
subject to x_i + x_j ≥ 1 for every edge (i, j),
           x_i ∈ {0, 1}.

Replacing x_i ∈ {0,1} with 0 ≤ x_i ≤ 1 gives the LP relaxation.

**LP relaxation.** Setting x_i = 1/2 for every vertex is feasible: each vertex has degree 3 and every edge has two endpoints, so along any edge x_i + x_j = 1/2 + 1/2 = 1 ≥ 1. This gives objective value 10 × (1/2) = 5. This value is optimal: the dual of the vertex-cover LP is the fractional matching problem (maximize Σ_e y_e subject to Σ_{e∋v} y_e ≤ 1 for each vertex v, y_e ≥ 0), and setting y_e = 1/3 on every edge is dual-feasible with value 15 × (1/3) = 5. By weak (strong) duality the LP optimum is exactly 5.

**Optimal solution returned by the solver:** x_a = x_b = ··· = x_j = 1/2, **optimal value 5.0.**

**True (integer) problem.** The Petersen graph has independence number 4, so its vertex cover number is 10 − 4 = 6 (a set S is a vertex cover iff its complement V \ S is independent). The enumeration in the code (2^10 subsets) confirms this and outputs a minimum vertex cover of 6 vertices. Therefore the true optimal value is **6**.

**Conclusion.** The LP relaxation gives value 5 while the true integer problem gives value 6. Since the relaxation is not exact (there is an integrality gap 6 − 5 = 1), one **cannot** remove the integer constraint when solving this problem.

**Code** (Python, `scipy.optimize.linprog`):

```python
import itertools
import numpy as np
from scipy.optimize import linprog

names = list("abcdefghij")
edges = [(0,1),(0,2),(0,3),(1,6),(1,7),(2,4),(2,8),
         (3,5),(3,9),(4,5),(4,7),(5,6),(6,8),(7,9),(8,9)]
n = 10

# LP relaxation  0 <= x_i <= 1
c = np.ones(n)
A_ub = np.zeros((len(edges), n)); b_ub = np.zeros(len(edges))
for k,(i,j) in enumerate(edges):
    A_ub[k,i] = -1.0; A_ub[k,j] = -1.0; b_ub[k] = -1.0
lp = linprog(c, A_ub=A_ub, b_ub=b_ub, bounds=[(0,1)]*n, method="highs")
print("LP relaxed value:", lp.fun)
print("LP solution:", dict(zip(names, np.round(lp.x, 6))))

# true problem  x_i in {0,1}  (brute force, 2^10)
best, best_cover = n+1, None
for bits in itertools.product([0,1], repeat=n):
    size = sum(bits)
    if size >= best: continue
    cover = {i for i,b in enumerate(bits) if b}
    if all(i in cover or j in cover for i,j in edges):
        best, best_cover = size, cover
print("Integer optimal value:", best)
print("Minimum vertex cover:", sorted(names[i] for i in best_cover))
```

---

## Problem 5 (10 pts) — Extreme points and basic feasible solutions

**【思路】**

用「标准形里 BFS ⟺ 极点」这个事实，反证法：

假设 (x*, b − Ax*) 不是 Q 的 BFS。它显然是 Q 的可行点（z = b − Ax* ≥ 0）。既然可行但不是 BFS，由上面的事实它就不是 Q 的极点。于是它可以写成 Q 中两个不同点 (x¹, z¹)、(x², z²) 的严格凸组合。只看 x 分量，就得到 x* = λx¹ + (1−λ)x²，且 x¹, x² 都在 P 里（因为 Ax^i + z^i = b, z^i ≥ 0 ⟹ Ax^i ≤ b, x^i ≥ 0）。再证明 x¹ ≠ x²（否则 z¹ = z²，两个点就相同了）。于是 x* 是 P 中两个不同点的严格凸组合，说明 x* 不是 P 的极点 —— 矛盾。

**English solution**

Let z = b − Ax*, so that (x*, z) is feasible for Q (since Ax* ≤ b and x* ≥ 0 imply z ≥ 0, and Ax* + z = b).

Assume, for contradiction, that (x*, z) is **not** a basic feasible solution of Q. For a standard-form polyhedron, a feasible point is a BFS if and only if it is an extreme point. Since (x*, z) is feasible but not a BFS, it is not an extreme point of Q. Hence there exist two distinct points (x¹, z¹), (x², z²) ∈ Q and a scalar λ ∈ (0,1) such that

(x*, z) = λ(x¹, z¹) + (1−λ)(x², z²).

Looking at the x-components, x* = λx¹ + (1−λ)x².

Each (x^k, z^k) ∈ Q satisfies Ax^k + z^k = b, x^k ≥ 0, z^k ≥ 0, which gives Ax^k = b − z^k ≤ b and x^k ≥ 0, i.e. x^k ∈ P for k = 1, 2.

Moreover x¹ ≠ x²: if x¹ = x², then from Ax¹ + z¹ = Ax² + z² = b we get z¹ = z², contradicting that (x¹, z¹) and (x², z²) are distinct.

Therefore x* is a strict convex combination of two distinct points x¹, x² ∈ P, so x* is not an extreme point of P. This contradicts the hypothesis that x* is an extreme point of P.

Hence the assumption is false, and (x*, b − Ax*) is a basic feasible solution of Q. ∎
