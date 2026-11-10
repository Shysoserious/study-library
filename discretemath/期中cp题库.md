## 第 2 题 · 一阶逻辑翻译20 分

Let  be the domain of all people. Let predicate , , denote that  is a nice person; predicate , , denote that  is a busy person; and , , denote that  are friends. Using , `nice`, `busy` and `friend`, represent the following statements in first-order logic.

• Every busy person has at least one friend;

• Nice people never have a busy person as a friend.



## 第 4 题 · 形如 4k+3 的素数无穷多16 分

Prove that there are infinitely many prime numbers of the form  for some nonnegative integer .



## 第 5 题 · 欧几里得算法步数上界12 分

Let  be nonnegative integers and . Consider Euclid's greatest common divisor algorithm:

```
gcd(a, b)
    if b = 0 then
        Output a
    else
        Write a = qb + r, where q = ⌊a/b⌋, r = a − qb     (1)
        Output gcd(b, r)
    end if
```

Let , , . Show that if , , then  executes line (1) for at most  times.



## 第 4 题 · 因子分解16 分

Let  be an odd composite number that is not a prime power. Let  be an integer with , and  be the smallest positive integer satisfying the congruenceAssume that  and  are picked in a way that  is an even number.

(a) (8 points) Show that .

(b) (8 points) Show that if , then  is a nontrivial factor of  (a factor of  that is not  or  itself).

## 第 5 题 · 斐波那契恒等式16 分

Let  denote the -th Fibonacci number defined by , , and  for .

(a) (8 points) Prove that for any positive integers  and , .

(b) (8 points) Prove that for integers , .

## 第 6 题 · 二进制串翻牌游戏16 分

A -bit binary string has all its bits initially . In each step, Alice could pick a bit from the first  bits that is a , and toggle that bit and the next  bits to its right (toggle means change  to  and  to ). A consecutive block of  bits will have their value changed as a consequence in each step. Alice will keep playing the game until such a bit cannot be found.

(a) (8 points) Write, from left to right, the bit string as a binary number, ignoring the leading zeros. Show that this binary number decreases in each step.

(b) (8 points) Show that regardless of Alice's strategy, the game terminates in an even number of steps.

## 第 6 题 · 向日葵引理16 分

Let  be positive integers.

(a) (8 points) Let . Find a set  and a set , such that , while every pair of distinct sets , , satisfy .

(b) (8 points) Let  be a collection of more than  distinct non-empty sets each of size at most . Prove that there is a collection  of at least  distinct sets in , such that there exists a set  where for every pair of distinct sets  in , , we have .

\10. (10 marks) The numbers bn = (2n n) (for n ≥ 0) are called the central binomial coefficients: b0 = 1, b1 = 2, b2 = 6, b3 = 20,... 1. Prove that the generating function of {bn} is (︃ )︃ B(x) = ∞ ∑ xn = 1 √ n=0 2. Deduce that for every integer n ≥ 0, (︃ n ∑ k=0 2k k 2n n )︃(︃2n−2k n−k 1 −4x. )︃ =4n. Hint: for part 1, expand (1 − 4x)−1/2 using the generalized binomial theorem; learn how to handle fractional binomial coefficients. 5 marks for part 1 alone



\9. (10 marks) Consider again the Fibonacci sequence {Fn} with F0 = 0, F1 = 1 and Fn = Fn−1 + Fn−2 for n ≥ 2. Determine the values of the sequences below. You can represent the value with an n-Fibonacci number Fn. 1. S1 n = F1 +F3 +F5 +···+F2n−1, for n ≥ 1. 2. S2 n = F0 −F1 +F2 −F3+···+(−1)nFn, for n ≥ 1

(b) (5 marks) Use logical equivalences to prove that (p ∧ q) ⊕(p∨q) is logically equiv alent to p ⊕q. (Hint: You may use the definition A ⊕ B ≡ (A∧¬B)∨(¬A∧B))

(10 marks) Show that the following argument is valid using rules of inference. ∀x(R(x) → S(x)) ∃x(M(x)∧¬S(x)) Therefore, ∃x(M(x)∧¬R(x)