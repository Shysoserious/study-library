# 算法第四版 — Phase 1: 暑假筑基（6周详细计划）

## 概述

- **周期**: 2026年7月21日 — 8月31日（6周）
- **投入**: 每周5-10小时
- **教材**: 《算法》第四版 (Sedgewick & Wayne)，中文版
- **语言**: 原书Java代码 + 关键算法Python对照
- **术语**: 中英结合（中文讲解，英文术语保留）
- **刷题**: 每周2-4道LeetCode Easy，验证理解

---

## 第1周: Arrays & Linked Lists（数组与链表）

**日期**: 7/21 – 7/27

### 阅读任务

| 章节 | 内容 | 重点 |
|------|------|------|
| §1.1 (p.4-30) | Java基础回顾 | 快速扫一遍就好，重点关注array部分 |
| §1.3.1 (p.74-81) | Bags, Queues, Stacks API | 理解三种ADT的语义差异 |
| §1.3.2 (p.81-89) | 集合类实现（数组实现） | **resizing array** — dynamic capacity + amortized analysis思想 |
| §1.3.3 (p.89-98) | Linked Lists | singly-linked / doubly-linked，node结构 |

### 核心概念

- **Memory layout**: 数组连续存储 vs 链表指针链接
- **Random access O(1)** vs **sequential access O(n)** — 为什么？
- **Amortized analysis**（均摊分析）: resizing array insertion is O(1) amortized（§1.4会深入）
- **Iterator**: Java的`Iterable`接口 — 为什么foreach对链表和数组都能用

### 动手任务（必做）

1. **Python实现**: 写一个 `DynamicArray` 类（类似Python `list` 底层），支持自动扩容（×2）和缩容
2. **Python实现**: `SinglyLinkedList` 和 `DoublyLinkedList`，实现 `append` / `prepend` / `delete` / `search`
3. **Java对照**: 阅读书上 Bag / Stack / Queue 的linked-list实现（p.95-97），理解Java版和你的Python版的对应关系

### LeetCode 练习（选2-3道）

| 题目 | 关键词 | 练什么 |
|------|--------|--------|
| [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | 反转链表 | 指针操作、迭代+递归两种写法 |
| [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | 合并有序链表 | 双指针、dummy head技巧 |
| [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | 删除重复元素 | 链表遍历、值比较 |

### 周末讨论话题（来找我聊）

> "数组的random access是O(1)因为内存连续，遍历也是O(n)。链表在中间位置插入是O(n)（要先遍历到），那为什么课本还说链表'插入删除O(1)'？这种说法的前提是什么？"

---

## 第2周: Stacks & Queues + Union-Find入门

**日期**: 7/28 – 8/3

### 阅读任务

| 章节 | 内容 | 重点 |
|------|------|------|
| §1.3 (p.74-98) 复习 | Bag / Stack / Queue | 重点是三种ADT的**语义差异**和使用场景 |
| §1.5 (p.136-148) | Union-Find | **Dynamic connectivity** — 全书第一个"有分量的算法" |

### 核心概念

- **LIFO vs FIFO**: Stack = last-in-first-out, Queue = first-in-first-out
- **应用场景**: Function call stack, Undo操作, Browser前进后退, BFS中的queue
- **Union-Find三种实现**: Quick-find → Quick-union → Weighted quick-union + path compression
- **从 O(N²) 到 nearly O(N)**: Weighted quick-union分析 — 树的深度 ≤ log N

### 动手任务（必做）

1. **Python实现**: Stack用array实现 + Stack用linked list实现（注意push/pop对应哪一端）
2. **Python实现**: Queue用linked list实现（front/rear指针），用两个Stack模拟一个Queue
3. **Python实现**: Union-Find — 三种版本的对比实现
   - QuickFindUF (p.141)
   - QuickUnionUF (p.143)
   - WeightedQuickUnionUF (p.145)

### LeetCode 练习

| 题目 | 关键词 |
|------|--------|
| [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Stack |
| [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) | Stack→Queue |
| [155. Min Stack](https://leetcode.com/problems/min-stack/) | Stack变种 |
| [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | Union-Find实战 |

### 周末讨论话题

> "Quick-find的union是O(N)但find是O(1)，Quick-union反过来。Weighted quick-union把两者都压到 ~O(log N)。为什么加一个size数组就能让树不退化？画一棵worst-case的树来说明。"

---

## 第3周: Algorithm Analysis（算法分析）

**日期**: 8/4 – 8/10

### 阅读任务

| 章节 | 内容 | 重点 |
|------|------|------|
| §1.4 (p.108-129) | Analysis of Algorithms | **这是全书最重要的方法论章节** |

### 核心概念

- **Scientific method**: Observe → Hypothesize → Predict → Verify → Validate
- **Tilde notation** (~): ~2N² means "approximately 2N² for large N, ignoring lower-order terms"
- **Order of growth**: constant (1) < logarithmic (log N) < linear (N) < linearithmic (N log N) < quadratic (N²) < cubic (N³) < exponential (2^N)
- **Doubling ratio**: 跑两组实验（N vs 2N），比较运行时间比例 — 以此推断增长阶
- **Amortized analysis**: resizing array的均摊成本
- **Memory usage**: 一个int占4 bytes，一个object reference占8 bytes，overhead...

### 动手任务（必做）

1. **ThreeSum实验**: 写一个ThreeSum（暴力O(N³)），测N=1000, 2000, 4000, 8000的运行时间，算doubling ratio。结果是否接近8？为什么？
2. **Bitonic search**: 完成书上练习1.4.20 — 在bitonic数组中查找（先用 ~log N 找peak，再在两个有序子数组中二分查找）
3. **Local minimum in matrix**: 练习1.4.19 — N×N矩阵中找local minimum，O(N)算法

### LeetCode 练习

| 题目 | 关键词 |
|------|--------|
| [1. Two Sum](https://leetcode.com/problems/two-sum/) | Hash Table |
| [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Two Pointers |

### 周末讨论话题

> "ThreeSum：暴力O(N³)，排序+二分查找O(N² log N)，Hash Table O(N²)。分别分析它们的空间复杂度。为什么有时候我们宁愿用O(N²)的哈希表方案而不是排序方案？你觉得在什么场景下会不同？"

---

## 第4周: Hash Tables（散列表）

**日期**: 8/11 – 8/17

### 阅读任务

| 章节 | 内容 | 重点 |
|------|------|------|
| §3.4 (p.293-311) | Hash Tables | Separate chaining + Linear probing |
| §3.1 (p.228-244) 快速浏览 | Symbol Table API | 了解ST的接口即可，细节后面学 |

### 核心概念

- **Hash function**: map key → array index, must be deterministic and uniform
- **Collision resolution**: 
  - Separate chaining（拉链法）: linked list per bucket
  - Linear probing（线性探测）: open addressing, 找下一个空位
- **Load factor α = N/M**: N个key，M个bucket
  - Separate chaining: average list length = α
  - Linear probing: 必须保持 α < 1（通常 < 0.5）
- **Why Python dict is O(1) average**: 底层就是open addressing的hash table

### 动手任务（必做）

1. **Python实现**: `SeparateChainingHashST` — 参照书上p.297的实现
2. **Python实现**: `LinearProbingHashST` — 参照书上p.300，实现resize（p.304）
3. **实验**: 用不同hash function（对字符串），观察distribution是否uniform

### LeetCode 练习

| 题目 | 关键词 |
|------|--------|
| [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Hash Table |
| [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Hash Set |
| [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) | Hash Table基础 |

### 周末讨论话题

> "如果你自己设计hash function，把"abc"和"cba"映射到同一个hash值，这是好是坏？什么时候这是feature（anagram检测），什么时候是bug（一般用途的hash table）？Python的`hash()`函数对字符串是怎么处理的？"

---

## 第5周: Elementary Sorts + BST入门

**日期**: 8/18 – 8/24

### 阅读任务

| 章节 | 内容 | 重点 |
|------|------|------|
| §2.1 (p.153-169) | Elementary Sorts | Selection, Insertion, Shell |
| §3.2 (p.250-268) | Binary Search Trees | BST基础操作 |

### 核心概念 — 排序三件套

- **Selection sort**: 每次找最小元素放到前面。比较次数 ~N²/2，交换次数 N。**不管输入如何，行为固定**
- **Insertion sort**: 像整理扑克牌。best case O(N)（已有序），worst case O(N²)。**对小数组和部分有序数据极快**
- **Shell sort**: insertion sort的改进 — 用递减的gap序列做多次insertion sort。**实际性能惊人地好**（对大数组比selection/insertion快数倍）

### 核心概念 — BST

- **Binary Search Tree property**: 左子树 < 根 < 右子树
- **Recursive structure**: insert, search, traversal都是recursive的
- **In-order traversal**: 左→根→右，输出有序序列
- **BST的退化**: 如果插入顺序是升序/降序，退化成linked list → O(N)

### 动手任务（必做）

1. **Python实现**: Selection sort, Insertion sort, Shell sort — 每个用 <20 行
2. **Python实现**: BST — insert, search, inorder traversal
3. **对比实验**: 对已有排序的数组、随机数组、逆序数组，分别跑selection和insertion，记录实际比较/交换次数

### LeetCode 练习

| 题目 | 关键词 |
|------|--------|
| [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | 树遍历 |
| [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) | 中序遍历 |
| [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | BST验证 |

### 周末讨论话题

> "Insertion sort对近乎有序的数据很快 — 为什么？它和Shell sort的关系是什么？Shell sort的gap序列为什么先从大到小？如果只用一个gap=1的pass，和insertion sort有什么区别？"

---

## 第6周: Mergesort + 阶段复习

**日期**: 8/25 – 8/31

### 阅读任务

| 章节 | 内容 | 重点 |
|------|------|------|
| §2.2 (p.170-199) | Mergesort | **Top-down** mergesort + **Bottom-up** mergesort |
| §1.4 复习 | 复杂度分析 | 用刚学的mergesort来验证分析框架 |

### 核心概念

- **Divide and conquer**（分治）: 把问题拆成子问题，递归解决，合并结果
- **Mergesort 递归树**: 画出递归调用树，理解为什么深度 = log₂ N，每层合并成本 = N → O(N log N)
- **Top-down vs Bottom-up**: 递归分解 vs 迭代合并，两者都是O(N log N)但遍历方式不同
- **Merge sort is stable**: 等值元素的相对顺序不变 — 这是选择/快排没有的性质

### 动手任务（必做）

1. **Python实现**: Top-down mergesort（递归版）
2. **Python实现**: Bottom-up mergesort（迭代版，不用递归）
3. **画递归树**: 对N=8的数组 {5,2,4,7,1,3,2,6}，画出mergesort的完整递归调用树

### LeetCode 练习

| 题目 | 关键词 |
|------|--------|
| [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | Merge操作 |
| [148. Sort List](https://leetcode.com/problems/sort-list/) | 链表归并排序 |
| [912. Sort an Array](https://leetcode.com/problems/sort-an-array/) | 综合排序 |

### 周末讨论话题 — 阶段回顾

> "用这六周学到的复杂度分析框架，给每个你实现过的数据结构和算法标注时间和空间复杂度。做一个对比表：linked list vs array, BST vs hash table, selection sort vs insertion sort vs mergesort。每种结构什么场景下是该用的最优选择？"

---

## 配套资源

| 资源 | 用途 |
|------|------|
| [algs4.cs.princeton.edu](https://algs4.cs.princeton.edu) | 原书配套网站，代码下载、习题答案、可视化 |
| [代码随想录](https://programmercarl.com) | LeetCode题解、刷题路线 |
| [visualgo.net](https://visualgo.net) | 算法动态可视化 |

## 交互节奏

- **每周初**: 你自己按照上表阅读+动手+刷题
- **周末**: 来找我讨论"周末讨论话题"，带上你的实现代码和疑问
- **随时**: 卡住了随时来问，我会根据书上的具体段落帮你debug思路
