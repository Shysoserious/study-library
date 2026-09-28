"""
MAT3007 HW2, Problem 4 — Vertex Cover (Petersen graph)

The graph in Figure 1 is the Petersen graph: 10 vertices xa..xj, 15 edges,
3-regular, with no triangles.  We solve the LP relaxation

      min  sum_i x_i
      s.t. x_i + x_j >= 1   for every edge (i,j)
           0 <= x_i <= 1

and compare with the true integer problem (x_i in {0,1}).

Run:  python hw2_p4.py
Requires numpy and scipy.
"""
import itertools
import numpy as np
from scipy.optimize import linprog

# ---- Petersen graph: vertex names and edges ---------------------------
names = list("abcdefghij")
# edges as pairs of indices into `names`
edges = [
    (0, 1), (0, 2), (0, 3),   # vertex a connects to b, c, d
    (1, 6), (1, 7),           # vertex b connects to g, h
    (2, 4), (2, 8),           # vertex c connects to e, i
    (3, 5), (3, 9),           # vertex d connects to f, j
    (4, 5), (4, 7),           # vertex e connects to f, h
    (5, 6),                   # vertex f connects to g
    (6, 8),                   # vertex g connects to i
    (7, 9),                   # vertex h connects to j
    (8, 9),                   # vertex i connects to j
]
n = len(names)

# ---- 1) LP relaxation:  0 <= x_i <= 1 ---------------------------------
c = np.ones(n)                       # minimize sum of x_i
A_ub = np.zeros((len(edges), n))
b_ub = np.zeros(len(edges))
for k, (i, j) in enumerate(edges):
    A_ub[k, i] = -1.0                #  -(x_i + x_j) <= -1
    A_ub[k, j] = -1.0
    b_ub[k] = -1.0
bounds = [(0.0, 1.0)] * n

lp = linprog(c, A_ub=A_ub, b_ub=b_ub, bounds=bounds, method="highs")

print("=== LP relaxation (0 <= x_i <= 1) ===")
print("optimal value:", lp.fun)
for name, val in zip(names, lp.x):
    print(f"  x_{name} = {val:.6f}")

# ---- 2) True integer problem:  x_i in {0,1} (brute force, 2^10) --------
best = n + 1
best_cover = None
for bits in itertools.product([0, 1], repeat=n):
    size = sum(bits)
    if size >= best:
        continue
    cover = {i for i, b in enumerate(bits) if b}
    if all(i in cover or j in cover for i, j in edges):
        best = size
        best_cover = cover

print("\n=== True problem (x_i in {0,1}) ===")
print("optimal value:", best)
print("a minimum vertex cover:", sorted(names[i] for i in best_cover))
print("(its complement is a maximum independent set of size", n - best, ")")
