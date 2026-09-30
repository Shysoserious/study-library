import itertools
import numpy as np
from scipy.optimize import linprog

names = list("abcdefghij")
edges = [
    (0, 1), (0, 2), (0, 3),
    (1, 6), (1, 7),
    (2, 4), (2, 8),
    (3, 5), (3, 9),
    (4, 5), (4, 7),
    (5, 6),
    (6, 8),
    (7, 9),
    (8, 9),
]
n = len(names)

c = np.ones(n)
A_ub = np.zeros((len(edges), n))
b_ub = np.zeros(len(edges))
for k, (i, j) in enumerate(edges):
    A_ub[k, i] = -1.0
    A_ub[k, j] = -1.0
    b_ub[k] = -1.0

lp = linprog(c, A_ub=A_ub, b_ub=b_ub, bounds=[(0.0, 1.0)] * n, method="highs")

print("=== LP relaxation (0 <= x_i <= 1) ===")
print("optimal value:", lp.fun)
for name, val in zip(names, lp.x):
    print(f"  x_{name} = {val:.6f}")

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
print("minimum vertex cover:", sorted(names[i] for i in best_cover))
print("(its complement is a maximum independent set of size", n - best, ")")
