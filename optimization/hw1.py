import numpy as np
from scipy.optimize import linprog

# ================= Problem 1(d) =================
c = [-7.8, -7.1]
A = [[1/8, 1/4],
     [1/2, 1/6]]
b = [90, 80]
res = linprog(c, A_ub=A, b_ub=b, bounds=(0, None))
print("Problem 1(d): x1 =", res.x[0], ", x2 =", res.x[1], ", profit =", -res.fun)

# ================= Problem 3 =================
present = [110, 335, 400, 420, 610]
need    = [150, 200, 600, 200, 390]
s = [p - n for p, n in zip(present, need)]

cost = [[0, 20, 13, 11, 28],
        [20, 0, 18, 8, 46],
        [13, 18, 0, 9, 27],
        [11, 8, 9, 0, 20],
        [28, 46, 27, 20, 0]]

pairs = [(i, j) for i in range(5) for j in range(5) if i != j]
c3 = [cost[i][j] for i, j in pairs]

A3 = [[0.0] * len(pairs) for _ in range(5)]
for k, (i, j) in enumerate(pairs):
    A3[i][k] += 1
    A3[j][k] -= 1

res3 = linprog(c3, A_ub=A3, b_ub=s, bounds=(0, None))
print("\nProblem 3: optimal value =", res3.fun)
for k, (i, j) in enumerate(pairs):
    if res3.x[k] > 1e-6:
        print(f"  x[{i+1}->{j+1}] = {res3.x[k]}")

# ================= Problem 4 =================
M = 100
W = np.array([
    [M, 5, 4, M, M, M, M, M],
    [5, M, M, 3, M, 7, M, M],
    [4, M, M, M, 1, 2, M, M],
    [M, 3, M, M, 2, M, M, M],
    [M, M, 1, 2, M, M, 2, 5],
    [M, 7, 2, M, M, M, M, 3],
    [M, M, M, M, 2, M, M, 1],
    [M, M, M, M, 5, 3, 1, M]])

n = 8
pairs4 = [(i, j) for i in range(n) for j in range(n) if i != j]
c4 = [W[i][j] for i, j in pairs4]

A_eq = np.zeros((n, len(pairs4)))
b_eq = np.zeros(n)
b_eq[0] = 1
b_eq[n - 1] = -1
for k, (i, j) in enumerate(pairs4):
    A_eq[i, k] += 1
    A_eq[j, k] -= 1

res4 = linprog(c4, A_eq=A_eq, b_eq=b_eq, bounds=(0, 1))
print("\nProblem 4: optimal value =", res4.fun)
for k, (i, j) in enumerate(pairs4):
    if res4.x[k] > 1e-6:
        print(f"  {i+1} -> {j+1}   (w = {W[i][j]})")
