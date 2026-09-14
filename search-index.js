/* ============================================================================
 * 理科学习库 · 搜索索引
 * ----------------------------------------------------------------------------
 * 供首页全文搜索使用。每条记录对应一份笔记：
 *   course  课程 id（对应 data.js 里的 course.id）
 *   title   笔记标题
 *   file    相对路径
 *   text    可检索文本：标题 + 关键主题 + 中英术语
 *
 * 以后新增笔记时，在这里补一条即可（或在有 Python 的环境里运行 build_site.py
 * 自动从 HTML 提取全文重新生成一份更全的索引）。
 * ==========================================================================*/

window.SEARCH_INDEX = [
  // ── 离散数学 ──────────────────────────────────────────────
  { course: "discretemath", title: "离散数学复习笔记", file: "discretemath/离散数学复习笔记.html",
    text: "命题逻辑 集合 一阶逻辑 真值表 逻辑等价 德摩根律 条件语句 逆否命题 论证 量词 罗素悖论 停机问题 Propositional Logic Sets First-order Logic Quantifiers Truth Table De Morgan Modus Ponens Modus Tollens Russell Halting Problem" },

  // ── 最优化 ──────────────────────────────────────────────
  { course: "optimization", title: "最优化复习笔记", file: "optimization/最优化复习笔记.html",
    text: "最优化 目标函数 约束 决策变量 可行集 最优值 极小点 标准形式 线性规划 凸集 最短路径 Dijkstra 优化简史 Optimization Objective Constraint Decision Variable Feasible Set Minimizer Standard Form Convex Shortest Path" },

  // ── 数据结构 ──────────────────────────────────────────────
  { course: "datastructure", title: "数据结构复习笔记", file: "datastructure/数据结构复习笔记.html",
    text: "区间和查询 前缀和 预处理 C++ 抽象数据类型 类型 变量 标准输入输出 编译器 内存布局 编译选项 静态类型 整数类型 有符号 无符号 初始化 窄化转换 未定义行为 运算符 优先级 自增自减 整数除法 余数 溢出 回绕 短路求值 链式比较 if else for while do-while break continue auto 类型推导 struct std pair LeetCode 1342 1281 509 9 991 Range Sum Prefix Sum Preprocessing C++ Abstract Data Type Compiler Options Static Type Integer Signed Unsigned Initialization Narrowing Undefined Behavior Operator Precedence Overflow Wraparound Short-circuit Evaluation Loop Type Deduction struct LeetCode" },

  // ── 微积分 ──────────────────────────────────────────────
  { course: "caculus", title: "Lec 1–5 · 数列与级数", file: "caculus/MAT1002_Lec1-5_Review.html",
    text: "数列 级数 收敛 发散 无穷级数 审敛法 幂级数 Sequence Series Convergence Divergence Infinite Series Test Power Series" },
  { course: "caculus", title: "Lec 6–12 · 级数应用 · 参数曲线 · 向量与空间", file: "caculus/MAT1002_Lec6-12_Review.html",
    text: "二项级数 大O小o记号 Taylor定理 欧拉公式 参数曲线 弧长 旋转曲面面积 极坐标 三维坐标系 向量 点积 投影 叉积 三重标量积 空间直线 平面 柱面 二次曲面 向量函数 曲率 Binomial Series Big O Taylor Euler Parametric Curve Arc Length Polar Vector Dot Product Cross Product Curvature" },
  { course: "caculus", title: "Lec 13–17 · 综合复习", file: "caculus/MAT1002_Lec13-17_Review.html",
    text: "综合复习 偏导数 方向导数 梯度 多重积分 向量场 线积分 Partial Derivative Gradient Multiple Integral Vector Field Line Integral" },
  { course: "caculus", title: "Lec 18–27 · 多变量微积分", file: "caculus/MAT1002_Lec17-27_Review.html",
    text: "多变量微积分 偏导数 梯度 方向导数 极值 拉格朗日乘子 多重积分 向量场 线积分 格林定理 Multivariable Calculus Partial Derivative Gradient Lagrange Multiplier Multiple Integral Line Integral Green Theorem" },
  { course: "caculus", title: "考前复习提纲 · 高频考点", file: "caculus/MAT1002_Exam_Prep_Review.html",
    text: "高频考点 必背知识 公式 复习提纲 Exam Prep Review Formula" },
  { course: "caculus", title: "期末试卷 2023（原题）", file: "caculus/MAT1002_2023_Exam.html",
    text: "期末试卷 2023 真题 Final Exam 2023 Questions" },
  { course: "caculus", title: "期末试卷 2025（原题）", file: "caculus/MAT1002_2025_Exam.html",
    text: "期末试卷 2025 真题 Final Exam 2025 Questions" },
  { course: "caculus", title: "期末试卷 2023 + 2025 详细解析", file: "caculus/MAT1002_Detailed_Solutions.html",
    text: "期末解析 2023 2025 解答 知识点对比矩阵 命题规律 复习策略 Detailed Solutions" },

  // ── 线性代数 ──────────────────────────────────────────────
  { course: "linearalgebra", title: "Lec 1–7 · 向量与线性系统", file: "linearalgebra/1 to 7.html",
    text: "向量 范数 内积 线性方程 矩阵 矩阵向量乘积 行形式 列形式 系数矩阵 增广矩阵 高斯消元 Gauss-Jordan 矩阵乘法 转置 对称矩阵 分块矩阵 REF RREF Vector Norm Inner Product Matrix Gaussian Elimination Transpose Partitioned" },
  { course: "linearalgebra", title: "Lec 8–11 · 方阵系统 · 逆 · LU 分解", file: "linearalgebra/lec8_11_review.html",
    text: "方阵系统 矩阵逆 初等矩阵 LU分解 可逆性 一般线性系统 线性空间 子空间 Inverse LU Decomposition Elementary Matrix Linear Space Subspace" },
  { course: "linearalgebra", title: "Lec 12–15 · 线性无关 · 四个基本子空间", file: "linearalgebra/lec12_15_review.html",
    text: "线性无关 零空间 张成 列空间 基 维数 秩 满秩 正交性 四个基本子空间 Linear Independence Null Space Column Space Basis Dimension Rank Four Fundamental Subspaces Orthogonality" },
  { course: "linearalgebra", title: "Lec 16–17 · 最小二乘与正交基", file: "linearalgebra/lec16_17_review.html",
    text: "最小二乘 正规方程 线性回归 正交集 标准正交基 正交矩阵 Least Squares Normal Equation Orthonormal Basis Orthogonal Matrix Linear Regression" },
  { course: "linearalgebra", title: "Lec 18–27 · 行列式 · 特征值 · SVD", file: "linearalgebra/lec18_27_review.html",
    text: "Gram-Schmidt 行列式 线性变换 特征值 特征向量 谱分解 对角化 奇异值 SVD 二次型 正定 Determinant Linear Transformation Eigenvalue Eigenvector Spectral Decomposition Diagonalization Singular Value Quadratic Form Positive Definite" },
  { course: "linearalgebra", title: "Week 12–14 复习题详解", file: "linearalgebra/week12_13_14_review.html",
    text: "复习题详解 特征值 谱定理 对角化 SVD Frobenius 范数 二次型 正定 Week 12 13 14 Review Solutions Eigenvalue Spectral SVD" },
  { course: "linearalgebra", title: "Lec 28 · 期末总复习课", file: "linearalgebra/lec28_review.html",
    text: "期末总复习 考试策略 题型 四个基本子空间 SVD 特征值 线性系统 最小二乘 正交矩阵 行列式 线性变换" },
  { course: "linearalgebra", title: "期末考前总复习", file: "linearalgebra/final_review.html",
    text: "核心公式 易错点 子空间判定 可逆性等价条件 谱定理 SVD 二次型 正定性 计算题 checklist 判断题陷阱" },
  { course: "linearalgebra", title: "Sample Final 详解", file: "linearalgebra/sample_final_solutions.html",
    text: "样题详解 特征值 特征向量 对角化 谱定理 SVD 最小二乘 二次型 正定 Gram-Schmidt 行列式 线性变换 四个基本子空间 True False" },

  // ── 数据科学导论 ──────────────────────────────────────────
  { course: "dda", title: "Lec 2–6 · 概率论基础", file: "DDA/DDA_Lec2-6_Review.html",
    text: "概率 随机变量 期望 方差 条件概率 贝叶斯 分布 Probability Random Variable Expectation Variance Conditional Probability Bayes Distribution" },
  { course: "dda", title: "Lec 7–10 · 连续分布 · 条件概率 · MLE · 回归", file: "DDA/DDA_Lec7-10_Review.html",
    text: "连续分布 条件概率 MLE 回归 正态 指数 伽马 卡方 参数估计 Continuous Distribution Conditional Probability Maximum Likelihood Regression Normal Exponential Gamma Chi-square" },
  { course: "dda", title: "Lec 11–15 · 置信区间 · PCA · 优化", file: "DDA/DDA_Lec11-15_Review.html",
    text: "置信区间 PCA 优化 主成分 假设检验 Confidence Interval Principal Component Optimization" },
  { course: "dda", title: "Lec 12 详细 · PCA · SVD · t-SNE", file: "DDA/DDA_Lec12_详细复习.html",
    text: "PCA SVD t-SNE 降维 主成分 奇异值 Principal Component Singular Value Dimensionality Reduction" },
  { course: "dda", title: "Lec 16–19 · 凸优化", file: "DDA/16to19.html",
    text: "凸集 凸函数 凹函数 最优性条件 线性规划 保凸运算 二阶条件 Convex Set Convex Function Concave Optimality Condition Linear Programming Second Order Condition" },
  { course: "dda", title: "Lec 20–21 · ML 入门 · KNN · 逻辑回归", file: "DDA/20to21.html",
    text: "机器学习 KNN 分类 逻辑回归 Sigmoid 梯度下降 SGD MLE Machine Learning K-Nearest Neighbors Classification Logistic Regression Sigmoid Gradient Descent Stochastic Maximum Likelihood" },
  { course: "dda", title: "Lec 22–23 · K-Means · 模型选择", file: "DDA/22to23.html",
    text: "K-Means 聚类 距离度量 模型选择 过拟合 欠拟合 交叉验证 Clustering Distance Model Selection Overfitting Underfitting Cross-Validation" },
  { course: "dda", title: "Lec 20–23 复习", file: "DDA/DDA_Lec20-23_Review.html",
    text: "机器学习 KNN 逻辑回归 K-Means 模型选择 复习" },
  { course: "dda", title: "Lec 24–25 · 大语言模型", file: "DDA/DDA_Lec24-25_Review.html",
    text: "大语言模型 LLM Token 语言建模 条件概率 Next-Token Prediction Large Language Model Language Modeling" },
  { course: "dda", title: "Lec 20–25 详细复习", file: "DDA/DDA_Lec20-25_详细复习.html",
    text: "机器学习 详细复习 KNN 逻辑回归 K-Means LLM" },
  { course: "dda", title: "期末考前速通", file: "DDA/DDA2001_Final_Review.html",
    text: "期末 高频考点 2024 2025 系统整理 Final Review" },
  { course: "dda", title: "期末试卷 2024（原题）", file: "DDA/DDA_2024_Pure_Exam.html",
    text: "期末试卷 2024 真题 Final Exam 2024" },
  { course: "dda", title: "期末试卷 2025（原题）", file: "DDA/DDA_2025_Pure_Exam.html",
    text: "期末试卷 2025 真题 Final Exam 2025" },
  { course: "dda", title: "2024–2025 期末解析", file: "DDA/DDA_24-25_Detailed_Solutions.html",
    text: "期末解析 2024 2025 详解 Detailed Solutions" },

  // ── 概率统计 ──────────────────────────────────────────────
  { course: "sta", title: "Lec 1–6 复习笔记", file: "STA/STA2001_Lectures1-6_review.html",
    text: "概率 计数 排列组合 条件概率 贝叶斯 独立性 随机变量 期望 方差 矩母函数 二项分布 负二项 泊松 连续型 指数 伽马 卡方 正态 二元 协方差 相关系数 条件分布 中心极限定理 大数定律 Probability Enumeration Bayes Independence Random Variable Expectation Variance MGF Binomial Poisson Normal Exponential Gamma Chi-square Covariance Correlation CLT LLN" },
  { course: "sta", title: "Lec 5 · 数学期望与二项分布", file: "STA/STA2001_Lecture5_review.html",
    text: "数学期望 二项分布 矩母函数 伯努利 均值 方差 矩 Binomial MGF Bernoulli Expectation Variance Moment" },
  { course: "sta", title: "补充阅读 · 随机变量函数等", file: "STA/STA2001_Supplement_Review.html",
    text: "随机变量函数 配对生日 辛普森悖论 两孩问题 指示变量 线性期望 Function of RV Birthday Matching Simpson Paradox Two Children Indicator Linearity" },
  { course: "sta", title: "补充 · Ch1–2 遗漏", file: "STA/STA2001_补充_Ch1-2遗漏.html",
    text: "Ch1 Ch2 遗漏 计数 条件概率 独立性 补充" },
  { course: "sta", title: "补充 · Ch3–5 遗漏", file: "STA/STA2001_补充_Ch3-5遗漏.html",
    text: "Ch3 Ch4 Ch5 遗漏 二元变换 Beta F 分布 补充" },
  { course: "sta", title: "期中备考 · 考点与题型", file: "STA/STA2001_Midterm_Prep.html",
    text: "考点 公式速查 题型归纳 贝叶斯 分布识别 mgf 正态 Gamma 陷阱 Midterm Prep Formula" },
  { course: "sta", title: "作业整理（按题型）", file: "STA/STA2001_作业整理_按题型.html",
    text: "作业 题型 联合 PMF PDF 协方差 最小二乘 条件分布 二维正态 CLT 切比雪夫 Homework Problems Joint Covariance Least Squares Conditional Bivariate Normal Chebyshev" },

  // ── 算法 ──────────────────────────────────────────────
  { course: "algorithms", title: "Phase 1 · 学习讲义", file: "算法/phase1-lecture-notes.html",
    text: "数组 链表 栈 队列 背包 并查集 Union-Find 算法分析 增长阶 摊还分析 散列表 哈希 排序 二叉搜索树 归并排序 分治 Array Linked List Stack Queue Bag Hash Table BST Merge Sort Divide and Conquer" }
];
