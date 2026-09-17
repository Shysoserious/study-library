/* ============================================================================
 * 理科学习库 · 数据清单（单一数据源）
 * ----------------------------------------------------------------------------
 * 这个文件是网站的"总目录"。以后新增课程或笔记，只需在这里加一条，刷新首页即可。
 * 字段说明见文件末尾的注释。
 *
 * 注意：文件路径是相对于 理科学习 文件夹根目录的相对路径。
 * 附件（attachments）既可以是字符串路径，也可以是 { name, file } 对象（自定义显示名）。
 * ==========================================================================*/

window.DATA = {
  site: {
    title: "理科学习库",
    subtitle: "从大一到现在，每一门课的复习笔记，都收在这里。",
    author: "李思源",
    lastUpdated: "2026-09-10"
  },

  // 学期顺序（用于首页分组；新课程会自动归入对应分组）
  semesters: [
    { id: "大一上",   label: "大一 · 上学期" },
    { id: "大一下",   label: "大一 · 下学期" },
    { id: "大一暑假", label: "大一 · 暑假" },
    { id: "大二上",   label: "大二 · 上学期" },
    { id: "自学",     label: "自学 / 课外" }
  ],

  // 学科分类（用于筛选）
  categories: [
    { id: "数学",     label: "数学" },
    { id: "计算机",   label: "计算机" },
    { id: "统计",     label: "统计" },
    { id: "数据科学", label: "数据科学" },
    { id: "物理",     label: "物理" },
    { id: "金融",     label: "金融" }
  ],

  courses: [
    /* ─────────────────────────── 大二 · 上学期（进行中） ─────────────────────────── */
    {
      id: "discretemath",
      name: "离散数学",
      nameEn: "Discrete Mathematics",
      code: "",
      semester: "大二上",
      category: "数学",
      status: "active",           // active = 进行中 | done = 已完成 | self = 自学
      teacher: "",
      desc: "命题逻辑 · 集合 · 一阶逻辑",
      notes: [
        { title: "离散数学复习笔记", file: "discretemath/离散数学复习笔记.html" }
      ],
      attachments: []
    },
    {
      id: "optimization",
      name: "最优化",
      nameEn: "Optimization",
      code: "MAT3007",
      semester: "大二上",
      category: "数学",
      status: "active",
      teacher: "Nachuan Xiao",
      desc: "凸优化基础 · 经典建模 · 基本术语 · 线性规划（实现/建模/变换）",
      notes: [
        { title: "最优化复习笔记", file: "optimization/最优化复习笔记.html" }
      ],
      attachments: []
    },
    {
      id: "datastructure",
      name: "数据结构",
      nameEn: "Data Structures & Advanced Programming",
      code: "CSC 3200",
      semester: "大二上",
      category: "计算机",
      status: "active",
      teacher: "Jingbang Chen",
      desc: "区间和查询 · C++ 基础（类型/运算符/溢出/循环）· 标准库（头文件/I-O/字符串/向量）· 抽象与类型",
      notes: [
        { title: "数据结构复习笔记", file: "datastructure/数据结构复习笔记.html" }
      ],
      attachments: []
    },
    {
      id: "fin",
      name: "金融基础",
      nameEn: "Financial Management",
      code: "FIN2010",
      semester: "大二上",
      category: "金融",
      status: "active",
      teacher: "",
      desc: "金融是什么 · 公司形式 · 融资 · 货币时间价值",
      notes: [
        { title: "金融基础复习笔记", file: "fin/金融基础复习笔记.html" }
      ],
      attachments: []
    },

    /* ─────────────────────────── 大一 · 上学期 ─────────────────────────── */
    {
      id: "caculus",
      name: "微积分",
      nameEn: "Calculus",
      code: "MAT1002",
      semester: "大一上",
      category: "数学",
      status: "done",
      teacher: "",
      desc: "数列与级数 · 参数曲线 · 多变量微积分",
      notes: [
        { title: "Lec 1–5 · 数列与级数", file: "caculus/MAT1002_Lec1-5_Review.html" },
        { title: "Lec 6–12 · 级数应用 · 参数曲线 · 向量与空间", file: "caculus/MAT1002_Lec6-12_Review.html" },
        { title: "Lec 13–17 · 综合复习", file: "caculus/MAT1002_Lec13-17_Review.html" },
        { title: "Lec 18–27 · 多变量微积分", file: "caculus/MAT1002_Lec17-27_Review.html" },
        { title: "考前复习提纲 · 高频考点", file: "caculus/MAT1002_Exam_Prep_Review.html" },
        { title: "期末试卷 2023（原题）", file: "caculus/MAT1002_2023_Exam.html" },
        { title: "期末试卷 2025（原题）", file: "caculus/MAT1002_2025_Exam.html" },
        { title: "期末试卷 2023 + 2025 详细解析", file: "caculus/MAT1002_Detailed_Solutions.html" }
      ],
      attachments: []
    },

    /* ─────────────────────────── 大一 · 下学期 ─────────────────────────── */
    {
      id: "linearalgebra",
      name: "线性代数",
      nameEn: "Linear Algebra",
      code: "MAT2041",
      semester: "大一下",
      category: "数学",
      status: "done",
      teacher: "",
      desc: "向量 · 线性系统 · 特征值 · SVD",
      notes: [
        { title: "Lec 1–7 · 向量与线性系统", file: "linearalgebra/1 to 7.html" },
        { title: "Lec 8–11 · 方阵系统 · 逆 · LU 分解", file: "linearalgebra/lec8_11_review.html" },
        { title: "Lec 12–15 · 线性无关 · 四个基本子空间", file: "linearalgebra/lec12_15_review.html" },
        { title: "Lec 16–17 · 最小二乘与正交基", file: "linearalgebra/lec16_17_review.html" },
        { title: "Lec 18–27 · 行列式 · 特征值 · SVD", file: "linearalgebra/lec18_27_review.html" },
        { title: "Week 12–14 复习题详解", file: "linearalgebra/week12_13_14_review.html" },
        { title: "Lec 28 · 期末总复习课", file: "linearalgebra/lec28_review.html" },
        { title: "期末考前总复习", file: "linearalgebra/final_review.html" },
        { title: "Sample Final 详解", file: "linearalgebra/sample_final_solutions.html" }
      ],
      attachments: []
    },
    {
      id: "dda",
      name: "数据科学导论",
      nameEn: "Introduction to Data Science",
      code: "DDA2001",
      semester: "大一下",
      category: "数据科学",
      status: "done",
      teacher: "",
      desc: "概率基础 · 凸优化 · 机器学习入门",
      notes: [
        { title: "Lec 2–6 · 概率论基础", file: "DDA/DDA_Lec2-6_Review.html" },
        { title: "Lec 7–10 · 连续分布 · 条件概率 · MLE · 回归", file: "DDA/DDA_Lec7-10_Review.html" },
        { title: "Lec 11–15 · 置信区间 · PCA · 优化", file: "DDA/DDA_Lec11-15_Review.html" },
        { title: "Lec 12 详细 · PCA · SVD · t-SNE", file: "DDA/DDA_Lec12_详细复习.html" },
        { title: "Lec 16–19 · 凸优化", file: "DDA/16to19.html" },
        { title: "Lec 20–21 · ML 入门 · KNN · 逻辑回归", file: "DDA/20to21.html" },
        { title: "Lec 22–23 · K-Means · 模型选择", file: "DDA/22to23.html" },
        { title: "Lec 20–23 复习", file: "DDA/DDA_Lec20-23_Review.html" },
        { title: "Lec 24–25 · 大语言模型", file: "DDA/DDA_Lec24-25_Review.html" },
        { title: "Lec 20–25 详细复习", file: "DDA/DDA_Lec20-25_详细复习.html" },
        { title: "期末考前速通", file: "DDA/DDA2001_Final_Review.html" },
        { title: "期末试卷 2024（原题）", file: "DDA/DDA_2024_Pure_Exam.html" },
        { title: "期末试卷 2025（原题）", file: "DDA/DDA_2025_Pure_Exam.html" },
        { title: "2024–2025 期末解析", file: "DDA/DDA_24-25_Detailed_Solutions.html" }
      ],
      attachments: []
    },
    {
      id: "phy",
      name: "物理",
      nameEn: "Mechanics",
      code: "PHY1001",
      semester: "大二上",
      category: "物理",
      status: "active",
      teacher: "",
      desc: "大学物理 · 更新中",
      notes: [
        { title: "物理复习笔记", file: "phy/物理复习笔记.html" }
      ],
      attachments: []
    },

    /* ─────────────────────────── 大一 · 暑假 ─────────────────────────── */
    {
      id: "sta",
      name: "概率统计",
      nameEn: "Probability & Statistical Inference",
      code: "STA2001",
      semester: "大一暑假",
      category: "统计",
      status: "done",
      teacher: "",
      desc: "概率 · 随机变量 · 分布 · 中心极限定理",
      notes: [
        { title: "Lec 1–6 复习笔记", file: "STA/STA2001_Lectures1-6_review.html" },
        { title: "Lec 5 · 数学期望与二项分布", file: "STA/STA2001_Lecture5_review.html" },
        { title: "补充阅读 · 随机变量函数等", file: "STA/STA2001_Supplement_Review.html" },
        { title: "补充 · Ch1–2 遗漏", file: "STA/STA2001_补充_Ch1-2遗漏.html" },
        { title: "补充 · Ch3–5 遗漏", file: "STA/STA2001_补充_Ch3-5遗漏.html" },
        { title: "期中备考 · 考点与题型", file: "STA/STA2001_Midterm_Prep.html" },
        { title: "作业整理（按题型）", file: "STA/STA2001_作业整理_按题型.html" }
      ],
      attachments: []
    },

    /* ─────────────────────────── 自学 / 课外 ─────────────────────────── */
    {
      id: "algorithms",
      name: "算法",
      nameEn: "Algorithms (4th Edition)",
      code: "",
      semester: "自学",
      category: "计算机",
      status: "self",
      teacher: "",
      desc: "《算法·第四版》自学 · Phase 1 数据结构基础",
      notes: [
        { title: "Phase 1 · 学习讲义", file: "算法/phase1-lecture-notes.html" }
      ],
      attachments: []
    }
  ],

  /* ─────────────────────────── 术语词汇表 ─────────────────────────── */
  // 汇总各科「需要掌握的英语词汇」，中英对照。按课程分组展示在 glossary.html。
  glossary: [
    { course: "discretemath", terms: [
      { en: "Proposition", zh: "命题" },
      { en: "Propositional Logic", zh: "命题逻辑" },
      { en: "First-order Logic", zh: "一阶逻辑" },
      { en: "Statement", zh: "陈述句" },
      { en: "Truth Table", zh: "真值表" },
      { en: "Negation", zh: "否定" },
      { en: "Conjunction", zh: "合取" },
      { en: "Disjunction", zh: "析取" },
      { en: "Conditional Statement", zh: "条件语句" },
      { en: "Contrapositive", zh: "逆否命题" },
      { en: "Logical Equivalence", zh: "逻辑等价" },
      { en: "De Morgan's Laws", zh: "德摩根律" },
      { en: "Tautology", zh: "永真式" },
      { en: "Contradiction", zh: "矛盾式" },
      { en: "Modus Ponens", zh: "肯定前件" },
      { en: "Modus Tollens", zh: "否定后件" },
      { en: "Set", zh: "集合" },
      { en: "Subset", zh: "子集" },
      { en: "Union", zh: "并集" },
      { en: "Intersection", zh: "交集" },
      { en: "Complement", zh: "补集" },
      { en: "Cartesian Product", zh: "笛卡尔积" },
      { en: "Partition", zh: "划分" },
      { en: "Quantifier", zh: "量词" },
      { en: "Universal Quantifier", zh: "全称量词" },
      { en: "Existential Quantifier", zh: "存在量词" },
      { en: "Russell's Paradox", zh: "罗素悖论" },
      { en: "Halting Problem", zh: "停机问题" }
    ]},
    { course: "optimization", terms: [
      { en: "Optimization", zh: "最优化" },
      { en: "Objective Function", zh: "目标函数" },
      { en: "Constraint", zh: "约束" },
      { en: "Decision Variable", zh: "决策变量" },
      { en: "Feasible Set", zh: "可行集" },
      { en: "Feasible Point", zh: "可行点" },
      { en: "Optimal Value", zh: "最优值" },
      { en: "Optimal Solution", zh: "最优解" },
      { en: "Local Minimizer", zh: "局部极小点" },
      { en: "Global Minimizer", zh: "全局极小点" },
      { en: "Standard Form", zh: "标准形式" },
      { en: "Linear Programming", zh: "线性规划" },
      { en: "Convex Set", zh: "凸集" },
      { en: "Convex Function", zh: "凸函数" },
      { en: "Shortest Path Problem", zh: "最短路径问题" },
      { en: "Dijkstra's Algorithm", zh: "Dijkstra 算法" },
      { en: "Half-plane", zh: "半平面" },
      { en: "Convex Polyhedron", zh: "凸多面体" },
      { en: "General / Compact Form", zh: "一般形式 / 紧凑形式" },
      { en: "Slack Variable", zh: "松弛变量" },
      { en: "Surplus Variable", zh: "剩余变量" },
      { en: "Free Variable", zh: "自由变量" },
      { en: "Tight / Active Constraint", zh: "紧约束 / 活跃约束" },
      { en: "CVX / CVXPY", zh: "优化建模软件（MATLAB / Python）" },
      { en: "Flow Conservation", zh: "流量守恒" },
      { en: "Relaxation", zh: "松弛" },
      { en: "Maximin Objective", zh: "最大化最小值目标" },
      { en: "Minimax Objective", zh: "最小化最大值目标" },
      { en: "Upper Envelope", zh: "上包络" },
      { en: "Auxiliary Variable", zh: "辅助变量" },
      { en: "Absolute Value", zh: "绝对值" },
      { en: "Linear Fractional Programming", zh: "线性分式规划" },
      { en: "Non-convexity", zh: "非凸性" },
      { en: "Vector", zh: "向量" },
      { en: "Inner Product", zh: "内积" },
      { en: "Norm", zh: "范数" },
      { en: "Linear Independence", zh: "线性无关" },
      { en: "Span", zh: "张成" },
      { en: "Basis", zh: "基" },
      { en: "Cauchy–Schwarz Inequality", zh: "柯西-施瓦茨不等式" },
      { en: "Triangle Inequality", zh: "三角不等式" },
      { en: "Rank", zh: "秩" },
      { en: "Inverse Matrix", zh: "逆矩阵" },
      { en: "Orthonormal Matrix", zh: "标准正交矩阵" },
      { en: "Positive Semi-definite (PSD)", zh: "半正定" },
      { en: "Quadratic Form", zh: "二次型" }
    ]},
    { course: "datastructure", terms: [
      { en: "Data Structure", zh: "数据结构" },
      { en: "Array", zh: "数组" },
      { en: "Linked List", zh: "链表" },
      { en: "Stack", zh: "栈" },
      { en: "Queue", zh: "队列" },
      { en: "Prefix Sum", zh: "前缀和" },
      { en: "Preprocessing", zh: "预处理" },
      { en: "Time Complexity", zh: "时间复杂度" },
      { en: "Space Complexity", zh: "空间复杂度" },
      { en: "Abstract Data Type", zh: "抽象数据类型" },
      { en: "Pointer", zh: "指针" },
      { en: "Reference", zh: "引用" },
      { en: "Type", zh: "类型" },
      { en: "Variable", zh: "变量" },
      { en: "Standard I/O", zh: "标准输入输出" },
      { en: "Compiler", zh: "编译器" },
      { en: "Memory Layout", zh: "内存布局" },
      { en: "Compilation", zh: "编译" },
      { en: "Executable", zh: "可执行文件" },
      { en: "Compiler Option", zh: "编译选项" },
      { en: "Static Type Checking", zh: "静态类型检查" },
      { en: "Signed / Unsigned", zh: "有符号 / 无符号" },
      { en: "Declaration / Initialization / Assignment", zh: "声明 / 初始化 / 赋值" },
      { en: "Narrowing Conversion", zh: "窄化转换" },
      { en: "Uninitialized Variable", zh: "未初始化变量" },
      { en: "Undefined Behavior", zh: "未定义行为" },
      { en: "Unary / Binary Operator", zh: "一元 / 二元运算符" },
      { en: "Operator Precedence", zh: "运算符优先级" },
      { en: "Prefix / Postfix Increment", zh: "前缀 / 后缀自增" },
      { en: "Integer Division", zh: "整数除法" },
      { en: "Overflow", zh: "溢出" },
      { en: "Wraparound", zh: "回绕" },
      { en: "Short-circuit Evaluation", zh: "短路求值" },
      { en: "Chained Comparison", zh: "链式比较" },
      { en: "Type Deduction", zh: "类型推导" },
      { en: "struct", zh: "结构体" },
      { en: "std::pair", zh: "二元组" },
      { en: "Operator Overloading", zh: "运算符重载" },
      { en: "Standard Library", zh: "标准库" },
      { en: "Header", zh: "头文件" },
      { en: "Namespace", zh: "命名空间" },
      { en: "Stream", zh: "流" },
      { en: "Standard Input / Output / Error", zh: "标准输入 / 输出 / 错误" },
      { en: "Extraction / Insertion Operator", zh: "提取 / 插入运算符" },
      { en: "Whitespace", zh: "空白" },
      { en: "Manipulator", zh: "操纵符" },
      { en: "Format String", zh: "格式串" },
      { en: "Null Terminator", zh: "空终止符" },
      { en: "C-style String", zh: "C 风格字符串" },
      { en: "Substring", zh: "子串" },
      { en: "Concatenation", zh: "连接" },
      { en: "Lexicographic Order", zh: "字典序" },
      { en: "string::npos", zh: "未找到（常量）" },
      { en: "getline", zh: "读一整行" },
      { en: "stringstream", zh: "字符串流" },
      { en: "vector", zh: "向量（动态数组）" },
      { en: "push_back / pop_back", zh: "尾部追加 / 弹出" },
      { en: "size / capacity", zh: "大小 / 容量" },
      { en: "reserve / resize", zh: "预留空间 / 调整大小" },
      { en: "Out of Bounds", zh: "越界" },
      { en: "Range-based for", zh: "基于范围的 for 循环" },
      { en: "Value Semantics", zh: "值语义" },
      { en: "Contiguous", zh: "连续的（内存）" },
      { en: "Reallocation", zh: "重新分配" },
      { en: "Doubling", zh: "倍增（扩容）" },
      { en: "Amortized", zh: "摊还的" },
      { en: "Carry", zh: "进位" }
    ]},
    { course: "caculus", terms: [
      { en: "Sequence", zh: "数列" },
      { en: "Series", zh: "级数" },
      { en: "Convergence", zh: "收敛" },
      { en: "Divergence", zh: "发散" },
      { en: "Taylor Series", zh: "泰勒级数" },
      { en: "Binomial Series", zh: "二项级数" },
      { en: "Euler's Formula", zh: "欧拉公式" },
      { en: "Parametric Curve", zh: "参数曲线" },
      { en: "Arc Length", zh: "弧长" },
      { en: "Polar Coordinates", zh: "极坐标" },
      { en: "Vector", zh: "向量" },
      { en: "Dot Product", zh: "点积" },
      { en: "Cross Product", zh: "叉积" },
      { en: "Partial Derivative", zh: "偏导数" },
      { en: "Gradient", zh: "梯度" },
      { en: "Multiple Integral", zh: "重积分" }
    ]},
    { course: "linearalgebra", terms: [
      { en: "Vector", zh: "向量" },
      { en: "Norm", zh: "范数" },
      { en: "Inner Product", zh: "内积" },
      { en: "Linear Combination", zh: "线性组合" },
      { en: "Linear Independence", zh: "线性无关" },
      { en: "Span", zh: "张成" },
      { en: "Basis", zh: "基" },
      { en: "Dimension", zh: "维数" },
      { en: "Rank", zh: "秩" },
      { en: "Null Space", zh: "零空间" },
      { en: "Column Space", zh: "列空间" },
      { en: "Gaussian Elimination", zh: "高斯消元" },
      { en: "Inverse Matrix", zh: "逆矩阵" },
      { en: "LU Decomposition", zh: "LU 分解" },
      { en: "Determinant", zh: "行列式" },
      { en: "Eigenvalue", zh: "特征值" },
      { en: "Eigenvector", zh: "特征向量" },
      { en: "Spectral Theorem", zh: "谱定理" },
      { en: "Diagonalization", zh: "对角化" },
      { en: "Singular Value Decomposition (SVD)", zh: "奇异值分解" },
      { en: "Least Squares", zh: "最小二乘" },
      { en: "Orthogonal Matrix", zh: "正交矩阵" },
      { en: "Gram-Schmidt", zh: "格拉姆-施密特正交化" },
      { en: "Positive Definite", zh: "正定" },
      { en: "Quadratic Form", zh: "二次型" }
    ]},
    { course: "sta", terms: [
      { en: "Probability", zh: "概率" },
      { en: "Sample Space", zh: "样本空间" },
      { en: "Event", zh: "事件" },
      { en: "Conditional Probability", zh: "条件概率" },
      { en: "Bayes' Theorem", zh: "贝叶斯定理" },
      { en: "Independence", zh: "独立性" },
      { en: "Random Variable", zh: "随机变量" },
      { en: "Probability Mass Function (PMF)", zh: "概率质量函数" },
      { en: "Cumulative Distribution Function (CDF)", zh: "累积分布函数" },
      { en: "Probability Density Function (PDF)", zh: "概率密度函数" },
      { en: "Expectation", zh: "数学期望" },
      { en: "Variance", zh: "方差" },
      { en: "Standard Deviation", zh: "标准差" },
      { en: "Moment Generating Function (MGF)", zh: "矩母函数" },
      { en: "Binomial Distribution", zh: "二项分布" },
      { en: "Poisson Distribution", zh: "泊松分布" },
      { en: "Normal Distribution", zh: "正态分布" },
      { en: "Exponential Distribution", zh: "指数分布" },
      { en: "Gamma Distribution", zh: "伽马分布" },
      { en: "Chi-square Distribution", zh: "卡方分布" },
      { en: "Central Limit Theorem", zh: "中心极限定理" },
      { en: "Covariance", zh: "协方差" },
      { en: "Correlation Coefficient", zh: "相关系数" },
      { en: "Marginal Distribution", zh: "边缘分布" },
      { en: "Chebyshev's Inequality", zh: "切比雪夫不等式" },
      { en: "Law of Large Numbers", zh: "大数定律" }
    ]},
    { course: "dda", terms: [
      { en: "Data Science", zh: "数据科学" },
      { en: "Machine Learning", zh: "机器学习" },
      { en: "Supervised Learning", zh: "监督学习" },
      { en: "Unsupervised Learning", zh: "无监督学习" },
      { en: "Classification", zh: "分类" },
      { en: "Regression", zh: "回归" },
      { en: "K-Nearest Neighbors (KNN)", zh: "K 近邻" },
      { en: "Logistic Regression", zh: "逻辑回归" },
      { en: "Sigmoid Function", zh: "S 形函数" },
      { en: "Gradient Descent", zh: "梯度下降" },
      { en: "Stochastic Gradient Descent (SGD)", zh: "随机梯度下降" },
      { en: "Maximum Likelihood Estimation (MLE)", zh: "最大似然估计" },
      { en: "Overfitting", zh: "过拟合" },
      { en: "Underfitting", zh: "欠拟合" },
      { en: "Cross-Validation", zh: "交叉验证" },
      { en: "K-Means Clustering", zh: "K 均值聚类" },
      { en: "Principal Component Analysis (PCA)", zh: "主成分分析" },
      { en: "t-SNE", zh: "t 分布随机邻域嵌入" },
      { en: "Confidence Interval", zh: "置信区间" },
      { en: "Large Language Model (LLM)", zh: "大语言模型" },
      { en: "Token", zh: "词元" }
    ]},
    { course: "algorithms", terms: [
      { en: "Algorithm", zh: "算法" },
      { en: "Data Structure", zh: "数据结构" },
      { en: "Array", zh: "数组" },
      { en: "Linked List", zh: "链表" },
      { en: "Stack", zh: "栈" },
      { en: "Queue", zh: "队列" },
      { en: "Hash Table", zh: "散列表" },
      { en: "Hash Function", zh: "散列函数" },
      { en: "Union-Find", zh: "并查集" },
      { en: "Sorting", zh: "排序" },
      { en: "Binary Search Tree", zh: "二叉搜索树" },
      { en: "Divide and Conquer", zh: "分治" },
      { en: "Merge Sort", zh: "归并排序" },
      { en: "Order of Growth", zh: "增长阶" },
      { en: "Amortized Analysis", zh: "摊还分析" }
    ]},
    { course: "fin", terms: [
      { en: "Allocate Resources", zh: "配置资源" },
      { en: "Liquidity", zh: "流动性" },
      { en: "Sell Side / Buy Side", zh: "卖方 / 买方" },
      { en: "Commercial Bank", zh: "商业银行" },
      { en: "Investment Bank", zh: "投资银行" },
      { en: "IPO (Go Public)", zh: "首次公开发行（上市）" },
      { en: "Borrower", zh: "借款人" },
      { en: "Investor", zh: "投资者" },
      { en: "Agency Problem", zh: "代理问题" },
      { en: "Principal", zh: "委托人" },
      { en: "Agent", zh: "代理人" },
      { en: "Covenant", zh: "（债务）契约条款" },
      { en: "Sole Proprietorship", zh: "个体户" },
      { en: "Partnership", zh: "合伙企业" },
      { en: "Limited Partnership (LP)", zh: "有限合伙企业" },
      { en: "General Partner (GP)", zh: "普通合伙人（无限责任）" },
      { en: "Limited Liability Company (LLC)", zh: "有限责任公司" },
      { en: "Corporation", zh: "股份有限公司" },
      { en: "Legal Entity", zh: "法人" },
      { en: "Board of Directors", zh: "董事会" },
      { en: "Shareholder", zh: "股东" },
      { en: "Raising Capital", zh: "融资" },
      { en: "Time Value of Money", zh: "货币时间价值" }
    ]}
  ]
};

/* ----------------------------------------------------------------------------
 * 字段说明（以后新增内容时照着写）：
 *
 * 新增一门课程：在 courses 数组里加一个对象，包含：
 *   id       唯一英文 id（建议用文件夹名）
 *   name     中文课程名
 *   nameEn   英文课程名 / 课程代码全称（可空）
 *   code     课程代码，如 "MAT3007"（可空）
 *   semester 学期：大一上 / 大一下 / 大一暑假 / 大二上 / 自学
 *   category 分类：数学 / 计算机 / 统计 / 数据科学
 *   status   active（进行中）/ done（已完成）/ self（自学）
 *   teacher  教师名（可空）
 *   desc     一句话简介
 *   notes    笔记列表：[{ title: "显示名", file: "相对路径.html" }]
 *   attachments 附件列表：["相对路径.pdf"] 或 [{ name, file }]
 *
 * 新增一条笔记：在对应课程的 notes 里加 { title, file }。
 * 新增一个附件：在对应课程的 attachments 里加路径字符串。
 * ----------------------------------------------------------------------------*/
