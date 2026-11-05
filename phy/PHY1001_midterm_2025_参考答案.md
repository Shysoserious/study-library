# PHY1001 Mechanics 期中样卷参考答案（二）

**试卷**：PHY1001_midterm_2025.pdf（2024–2025 Term 2，2025-03-29，满分 120 分，12 题 × 10 分）

**使用说明**：Solution（正式解题步骤）全部用英文；每题末尾的「知识点解析」用中文讲解，覆盖该题涉及的核心概念，便于复习。考试范围：第 1–9 章（到 Chapter 9 *Rotation of Rigid Bodies* 为止，含本章）。

**符号约定**：$\hat{\imath},\ \hat{\jmath},\ \hat{k}$ 为单位向量；本卷中 $g=9.8\ \text{m/s}^2$（题目注明，实际已更正符号）。

---

## Question 1 — Vector operations

> $\vec a = 1.0\hat{\imath} + 2.0\hat{\jmath} - 3.0\hat{k}$，$\vec b = -3.0\hat{\imath} + 4.0\hat{\jmath} + 2.0\hat{k}$。

### Solution

**(a) Sum**

$$\vec a + \vec b = (1.0-3.0)\hat\imath + (2.0+4.0)\hat\jmath + (-3.0+2.0)\hat k = \boxed{-2\hat\imath + 6\hat\jmath - \hat k}.$$

**(b) Cross product**

$$\vec a\times\vec b =
\begin{vmatrix}\hat\imath&\hat\jmath&\hat k\\1&2&-3\\-3&4&2\end{vmatrix}
= \hat\imath[(2)(2)-(-3)(4)] - \hat\jmath[(1)(2)-(-3)(-3)] + \hat k[(1)(4)-(2)(-3)]$$

$$= 16\hat\imath -(-7)\hat\jmath + 10\hat k = \boxed{16\hat\imath + 7\hat\jmath + 10\hat k}.$$

**(c) Dot product**

$$\vec a\cdot\vec b = (1)(-3)+(2)(4)+(-3)(2) = -3+8-6 = \boxed{-1}.$$

**(d) $\cos\theta$**

$$\cos\theta = \frac{\vec a\cdot\vec b}{|\vec a||\vec b|},\qquad |\vec a|=\sqrt{1+4+9}=\sqrt{14},\quad |\vec b|=\sqrt{9+16+4}=\sqrt{29}.$$

$$\cos\theta = \frac{-1}{\sqrt{14}\sqrt{29}} = \boxed{-\frac{1}{\sqrt{406}} \approx -0.0496}.$$

### 知识点解析

- 与卷一同类题相同：加法逐分量、点乘得标量、叉乘得向量（行列式展开）。
- $\cos\theta<0$ 说明夹角略大于 $90^\circ$（钝角，约 $92.8^\circ$）。这是求两向量夹角的固定套路：$\cos\theta=\vec a\cdot\vec b/(|\vec a||\vec b|)$。

---

## Question 2 — 2-D kinematics

> $x(t)=2.0t^2+3.0t+1.0$，$y(t)=4.0t+2.0$（SI 单位）。

### Solution

**(a) Position at $t=1.0\ \text{s}$**

$$x(1)=2+3+1=6,\qquad y(1)=4+2=6 \quad\Rightarrow\quad \vec r = \boxed{6\hat\imath + 6\hat\jmath\ \text{m}}.$$

**(b) Speed at $t=1.0\ \text{s}$**

$$v_x=\frac{dx}{dt}=4t+3,\qquad v_y=\frac{dy}{dt}=4.$$

$$v_x(1)=7,\ v_y(1)=4 \quad\Rightarrow\quad v=\sqrt{7^2+4^2}=\sqrt{65} = \boxed{8.06\ \text{m/s}}.$$

**(c) Magnitude of acceleration**

$$a_x=\frac{dv_x}{dt}=4,\qquad a_y=0 \quad\Rightarrow\quad |\vec a| = \boxed{4.0\ \text{m/s}^2}.$$

**(d) Displacement from $t=0$ to $t=1.0\ \text{s}$**

$$\vec r(0)=(1,2),\ \ \vec r(1)=(6,6) \quad\Rightarrow\quad \Delta\vec r = (6-1)\hat\imath+(6-2)\hat\jmath = 5\hat\imath+4\hat\jmath.$$

$$|\Delta\vec r| = \sqrt{25+16} = \boxed{\sqrt{41} \approx 6.40\ \text{m}}.$$

**(e) Average velocity**

$$\vec v_{\rm avg} = \frac{\Delta\vec r}{\Delta t} = \frac{5\hat\imath+4\hat\jmath}{1.0} = 5\hat\imath+4\hat\jmath\ \text{m/s}.$$

Magnitude $=\sqrt{41}\approx 6.40\ \text{m/s}$; direction $\theta=\tan^{-1}\!\big(\frac45\big)=\boxed{38.7^\circ\ \text{above the }+x\text{ axis}}.$

### 知识点解析

- **速度**是位置对时间的导数，**加速度**是速度对时间的导数（都是逐分量求导）。
- 区分**瞬时速度**（$t=1$ 时刻，$\sqrt{65}\approx8.06\ \text{m/s}$）和**平均速度**（$\Delta\vec r/\Delta t$，$\sqrt{41}\approx6.40\ \text{m/s}$）——大小不同，因为运动是变速的。
- 区分**位移**（矢量 $\Delta\vec r$）和**路程**（标量）；位移大小 $|\Delta\vec r|$ 一般小于等于路程。
- 平均速度要给出大小和方向（题面提示可用 $\tan^{-1}$ 表示方向）。

---

## Question 3 — Pulling a crate (friction)

> 质量 $m=1\ \text{kg}$ 的箱子在水平地面上，绳与水平成 $\theta$ 角向上拉，动摩擦系数 $\mu_k=0.20$。

### Solution

Vertical balance: $N + F\sin\theta = mg \Rightarrow N = mg - F\sin\theta$. Constant velocity means $a=0$ horizontally: $F\cos\theta = \mu_k N = \mu_k(mg - F\sin\theta)$.

$$F\cos\theta = \mu_k mg - \mu_k F\sin\theta \quad\Rightarrow\quad F(\cos\theta+\mu_k\sin\theta) = \mu_k mg$$

$$\boxed{F = \frac{\mu_k mg}{\cos\theta+\mu_k\sin\theta}}.$$

**(a) $\theta=30^\circ$**

$$F = \frac{(0.20)(1)(9.8)}{\cos30^\circ+0.20\sin30^\circ} = \frac{1.96}{0.866+0.10} = \frac{1.96}{0.966} = \boxed{2.03\ \text{N}}.$$

**(b) Angle for minimum force**

Minimize $F(\theta)$ by maximizing the denominator $D(\theta)=\cos\theta+\mu_k\sin\theta$:

$$\frac{dD}{d\theta} = -\sin\theta + \mu_k\cos\theta = 0 \;\Rightarrow\; \boxed{\tan\theta = \mu_k \;\Rightarrow\; \theta = \tan^{-1}(0.20) = 11.3^\circ}.$$

*(At this angle $F_{\min}=\mu_k mg/\sqrt{1+\mu_k^2}=1.92\ \text{N}$.)*

### 知识点解析

- **匀速**即合力为零：竖直方向平衡求支持力，水平方向平衡求拉力。
- 向上拉有"减轻"作用：$N=mg-F\sin\theta$，所以摩擦力 $f=\mu_k N$ 也随 $\theta$ 增大而减小；但同时 $F$ 的水平分量 $F\cos\theta$ 也减小——两者平衡产生一个**最优角度**。
- 求极值：令 $\frac{dF}{d\theta}=0$（等价于令分母最大），得 $\tan\theta=\mu_k$。这是"拉箱子省力"的经典结论：摩擦越大，最优角度越大。

---

## Question 4 — Ballistic pendulum

> 木块质量 $m_1$ 静止悬挂，子弹质量 $m_2$ 水平射入并嵌入，一起摆到最大高度 $y$。

### Solution

**(a) Speed $v_t$ right after collision** — after the (inelastic) collision, mechanical energy is conserved while swinging up:

$$\tfrac12(m_1+m_2)v_t^2 = (m_1+m_2)gy \quad\Rightarrow\quad \boxed{v_t = \sqrt{2gy}}.$$

**(b) Initial bullet speed $v_0$** — momentum is conserved during the collision:

$$m_2 v_0 = (m_1+m_2)v_t \quad\Rightarrow\quad \boxed{v_0 = \frac{m_1+m_2}{m_2}\sqrt{2gy}}.$$

**(c) Energy lost during the collision**

$$|\Delta E| = K_{\rm before} - K_{\rm after} = \tfrac12 m_2 v_0^2 - \tfrac12(m_1+m_2)v_t^2.$$

Substitute $v_0$ and $v_t=\sqrt{2gy}$:

$$\tfrac12 m_2 v_0^2 = \tfrac12 m_2\left(\frac{m_1+m_2}{m_2}\right)^2(2gy) = \frac{(m_1+m_2)^2}{m_2}gy.$$

$$\tfrac12(m_1+m_2)v_t^2 = (m_1+m_2)gy.$$

$$|\Delta E| = \frac{(m_1+m_2)^2}{m_2}gy - (m_1+m_2)gy = \boxed{\frac{m_1(m_1+m_2)}{m_2}gy}.$$

### 知识点解析

- **弹道摆**分两段，是"动量守恒 + 机械能守恒"的标准组合题：
  - **碰撞瞬间**：子弹嵌入木块是完全非弹性碰撞，动量守恒（碰撞内力远大于外力，重力冲量可忽略），但**机械能不守恒**（有能量损失）。
  - **摆动过程**：碰撞后系统只受重力（绳的拉力不做功），机械能守恒，把动能转成重力势能。
- **顺序不能反**：不能先对全过程用能量守恒（碰撞中能量有损失），必须先动量守恒求 $v_t$，再用能量守恒求 $y$。
- 能量损失 $|\Delta E|$ = 碰撞前动能 − 碰撞后动能；完全非弹性碰撞损失的能量就是这部分。

---

## Question 5 — Potential energy and equilibrium

> $U(x)=ax^2-bx^3$，$a,b$ 为正常数。

### Solution

**(a) Force**

$$F(x) = -\frac{dU}{dx} = -(2ax - 3bx^2) = \boxed{-2ax + 3bx^2 = x(3bx-2a)}.$$

**(b) Equilibrium positions** — $F(x)=0$:

$$x(3bx-2a)=0 \quad\Rightarrow\quad \boxed{x=0 \ \ \text{and}\ \ x=\frac{2a}{3b}}.$$

**(c) Stability** — use $\frac{d^2U}{dx^2} = 2a - 6bx$:

- At $x=0$: $\frac{d^2U}{dx^2}=2a>0$ → **stable** (local minimum of $U$).
- At $x=\frac{2a}{3b}$: $\frac{d^2U}{dx^2}=2a-6b\!\left(\frac{2a}{3b}\right)=2a-4a=-2a<0$ → **unstable** (local maximum of $U$).

*(Equivalently, $\frac{dF}{dx}=-2a+6bx$: at $x=0$, $\frac{dF}{dx}=-2a<0$ → restoring, stable; at $x=\frac{2a}{3b}$, $\frac{dF}{dx}=+2a>0$ → unstable.)*

### 知识点解析

- 与卷 1 Q8 同一套逻辑：$F=-dU/dx$；平衡点 $F=0$；$\frac{d^2U}{dx^2}>0$ 稳定、$<0$ 不稳定。
- 本题势能 $U=ax^2-bx^3$ 在 $x=0$ 是极小（稳定），在 $x=\frac{2a}{3b}$ 是极大（不稳定）——注意虽然 $x=0$ 处有 $x^2$ 项，但 $x^3$ 项破坏了对称性，使势能曲线一侧翘起、一侧塌下去。

---

## Question 6 — Rope wrapped around a pole (capstan)

> 绳绕竖直柱 $N$ 整圈（总包角 $\theta=2\pi N$），静摩擦系数 $\mu_s$，两端张力 $T_1,T_2$（$T_2>T_1$），处于即将滑动的临界平衡。

### Solution

**(a) Free-body diagram of a small segment $d\theta$**

Forces on the segment: tensions $\vec T$ and $\vec T+d\vec T$ at its two ends (tangential to the pole, pointing away from the segment), a normal force $d\vec N$ from the pole (radially inward), and static friction $df = \mu_s\,dN$ (tangential, opposing the tendency to slide, i.e. in the direction of decreasing $T$). In equilibrium these four forces balance.

**(b) Derive $T_2 = T_1 e^{2\pi\mu_s N}$**

*Radial balance:* each tension contributes a radial component $T\sin\!\big(\frac{d\theta}{2}\big)\approx T\frac{d\theta}{2}$, so

$$dN = T\,d\theta.$$

*Tangential balance (just about to slip):* the increase in tension is balanced by maximum static friction,

$$dT = \mu_s\,dN = \mu_s T\,d\theta \;\Rightarrow\; \frac{dT}{T} = \mu_s\,d\theta.$$

Integrating over the full wrap $\theta=0\to 2\pi N$ (where $T$ goes from $T_1$ to $T_2$):

$$\int_{T_1}^{T_2}\frac{dT}{T} = \mu_s\int_0^{2\pi N}d\theta \;\Rightarrow\; \ln\frac{T_2}{T_1} = 2\pi\mu_s N \;\Rightarrow\; \boxed{T_2 = T_1\,e^{2\pi\mu_s N}}.$$

**(c) What happens as $T_2$ keeps increasing**

Once $T_2$ exceeds the maximum $T_1 e^{2\pi\mu_s N}$, static friction can no longer hold, and the rope **begins to slip** around the pole. During slipping the friction drops to the (smaller) kinetic value $\mu_k$, so the net tangential force becomes nonzero and the rope **accelerates** in the direction of $T_2$, sliding around the pole.

### 知识点解析

- **微元分析法**（把连续绳子切一小段 $d\theta$）是这类"绕柱/绕圆"问题的标准方法：对微元列径向平衡和切向平衡。
- 关键近似：小角 $\sin(d\theta/2)\approx d\theta/2$，径向合力 $\approx T d\theta$。
- 解出 $T_2=T_1 e^{\mu_s\theta}$（$\theta=2\pi N$），这是著名的**capstan 方程**：包角越大或摩擦越大，$T_2/T_1$ 指数增长——这就是"绕几圈绳子就能拉住重物"（水手、攀岩）的原理。
- 静摩擦与动摩擦：临界时用最大静摩擦 $\mu_s N$；一旦滑动，摩擦变成动摩擦 $\mu_k N<\mu_s N$，合力不为零，绳加速滑动。

---

## Question 7 — Rotating disk (energy and power)

> 实心圆盘 $M=5.0\ \text{kg}$，$R=0.25\ \text{m}$，从静止经 $10\ \text{s}$ 达到 $\omega=30\ \text{rad/s}$，角加速度恒定。结果保留两位有效数字。

### Solution

**(a) Angular acceleration**

$$\alpha = \frac{\Delta\omega}{\Delta t} = \frac{30}{10} = \boxed{3.0\ \text{rad/s}^2}.$$

**(b) Angular displacement**

$$\Delta\theta = \tfrac12\alpha t^2 = \tfrac12(3.0)(10)^2 = \boxed{150\ \text{rad}}.$$

**(c) Increase in rotational kinetic energy**

$$I = \tfrac12 MR^2 = \tfrac12(5.0)(0.25)^2 = 0.15625\ \text{kg m}^2.$$

$$\Delta K_{\rm rot} = \tfrac12 I\omega^2 - 0 = \tfrac12(0.15625)(30)^2 = \boxed{70\ \text{J}}.$$

**(d) Average power input**

$$P_{\rm avg} = \frac{\Delta K_{\rm rot}}{\Delta t} = \frac{70.3}{10} = \boxed{7.0\ \text{W}}.$$

### 知识点解析

- 匀角加速转动：$\alpha=\Delta\omega/\Delta t$，$\theta=\tfrac12\alpha t^2$（从静止）。
- **转动动能** $K=\tfrac12 I\omega^2$，实心圆盘 $I=\tfrac12 MR^2$。要区分"增加量"（末动能 − 初动能）和"总动能"。
- **平均功率** = 做功/时间 = 能量变化/时间。这里电机做的功全部转成圆盘的转动动能，所以 $P_{\rm avg}=\Delta K/\Delta t$（这是用能量法，不必引入力矩 $\tau$，属于第 9 章范围）。
- 注意有效数字：题目要求两位，故 $70\ \text{J}$、$7.0\ \text{W}$。

---

## Question 8 — Pulsar (rotation period and angular acceleration)

> 脉冲星自转周期 $T=T_0+\beta(t)(t-t_0)$，角加速度恒定（故 $\beta(t)$ 非常数）。在 $t=t_0$ 时 $T=T_0$、$\beta=\beta_0$。

### Solution

**(a) Angular velocity at $t_0$**

$$\boxed{\omega_0 = \frac{2\pi}{T_0}}.$$

**(b) Rotational kinetic energy at $t_0$**

For a uniform solid sphere $I=\tfrac25 MR^2$:

$$K = \tfrac12 I\omega_0^2 = \tfrac12\left(\tfrac25 MR^2\right)\left(\frac{2\pi}{T_0}\right)^2 = \boxed{\frac{4\pi^2}{5}\frac{MR^2}{T_0^2}}.$$

**(c) Constant angular acceleration $\alpha$ from $T_0$ and $\beta_0$**

$\omega(t)=\frac{2\pi}{T(t)}$. Using the chain rule,

$$\alpha = \frac{d\omega}{dt} = \frac{d\omega}{dT}\frac{dT}{dt} = -\frac{2\pi}{T^2}\cdot\frac{dT}{dt}.$$

Now $\frac{dT}{dt}=\frac{d}{dt}\big[T_0+\beta(t)(t-t_0)\big]=\beta'(t)(t-t_0)+\beta(t)$; at $t=t_0$ this equals $\beta(t_0)=\beta_0$. Hence

$$\alpha(t_0) = -\frac{2\pi}{T_0^2}\,\beta_0,$$

so the magnitude is

$$\boxed{|\alpha| = \frac{2\pi\beta_0}{T_0^2}}.$$

*(The negative sign means the pulsar is slowing down if $\beta_0>0$, i.e. the period is increasing.)*

### 知识点解析

- 周期与角速度的关系 $\omega=\frac{2\pi}{T}$（一圈 $2\pi$ 弧度）。
- 用**链式法则**把 $\frac{d\omega}{dt}$ 拆成 $\frac{d\omega}{dT}\cdot\frac{dT}{dt}$，因为题目给的量是周期 $T(t)$ 而不是 $\omega(t)$ 的直接表达式。
- 本题 $\beta(t)$ 本身随时间变化（否则 $T$ 就是线性的、$\omega$ 不可能是恒定角加速度），但只需它在 $t_0$ 的值 $\beta_0$。
- 固体球转动惯量 $I=\tfrac25 MR^2$（第 9 章常用结论，要记）。

---

## Question 9 — Non-uniform rod: mass and moment of inertia

> 细杆长 $L$，沿 $x$ 轴从 $x=0$ 到 $x=L$，线密度 $\lambda(x)=\lambda_0\big(1+\frac xL\big)$。

### Solution

**(a) Total mass**

$$M = \int_0^L \lambda(x)\,dx = \lambda_0\int_0^L\Big(1+\frac xL\Big)dx = \lambda_0\left[x+\frac{x^2}{2L}\right]_0^L = \lambda_0\Big(L+\frac L2\Big) = \boxed{\frac32\lambda_0 L}.$$

**(b) Moment of inertia about the axis through the origin (perpendicular to the rod)**

$$I = \int_0^L x^2\,\lambda(x)\,dx = \lambda_0\int_0^L x^2\Big(1+\frac xL\Big)dx = \lambda_0\int_0^L\Big(x^2+\frac{x^3}{L}\Big)dx.$$

$$I = \lambda_0\left[\frac{x^3}{3}+\frac{x^4}{4L}\right]_0^L = \lambda_0\left(\frac{L^3}{3}+\frac{L^3}{4}\right) = \frac{7}{12}\lambda_0 L^3.$$

Using $M=\frac32\lambda_0 L$ (so $\lambda_0 L^3 = \frac23 ML^2$):

$$I = \frac{7}{12}\cdot\frac23 ML^2 = \boxed{\frac{7}{18}ML^2}.$$

$$\boxed{c = \frac{7}{18}}.$$

### 知识点解析

- **质量（或转动惯量）的连续分布求和→积分**：$M=\int\lambda\,dx$，$I=\int r^2\,dm=\int x^2\lambda(x)\,dx$。这里轴在 $x=0$，所以每个质量元到轴的距离就是 $x$。
- 密度 $\lambda(x)=\lambda_0(1+x/L)$ 在 $x=L$ 端更重，所以结果 $I=\frac7{18}ML^2$ **大于**均匀杆绕端点（$\frac13 ML^2\approx0.333ML^2$ vs $0.389ML^2$），因为质量更多集中在离轴远的一端。
- 对比记忆：均匀杆绕中心 $\frac1{12}ML^2$、绕端点 $\frac13ML^2$；非均匀时用积分，系数会变。

---

## Question 10 — Brick: projectile + sliding with friction

> 砖块以初速 $v_0$、仰角 $\theta$ 抛出，落地后不反弹（竖直方向非弹性碰撞），与地面摩擦系数 $\mu$，沿地面滑行一段后停下。

### Solution

**(a) Range $R_L$ (where it lands)** — standard projectile range:

$$\boxed{R_L = \frac{v_0^2\sin 2\theta}{g}}.$$

**(b) Velocity just before landing**

$$v_x = v_0\cos\theta,\qquad v_y = -v_0\sin\theta \quad\Rightarrow\quad \vec v_{\rm before} = v_0\cos\theta\,\hat\imath - v_0\sin\theta\,\hat\jmath.$$

$$\boxed{\vec v = v_0\cos\theta\,\hat\imath - v_0\sin\theta\,\hat\jmath}.$$

**(c) Velocity just after landing ($\mu\le1$)**

The vertical component is killed by the (inelastic) collision: $v_y\to 0$. During the brief impact the normal impulse is $J_N = m v_0\sin\theta$, and the friction impulse (opposing the horizontal motion) is $J_f = \mu J_N = \mu m v_0\sin\theta$. Thus

$$m v_x' - m v_0\cos\theta = -\mu m v_0\sin\theta \;\Rightarrow\; v_x' = v_0(\cos\theta-\mu\sin\theta).$$

$$\boxed{\vec v_{\rm after} = v_0(\cos\theta-\mu\sin\theta)\,\hat\imath}.$$

*(For $\mu\le1$ this remains positive for $\theta\le45^\circ$, so the brick continues sliding.)*

**(d) Total horizontal distance $R_F$**

After landing the brick slides with friction deceleration $\mu g$ until it stops. Sliding distance:

$$d_{\rm slide} = \frac{(v_x')^2}{2\mu g} = \frac{v_0^2(\cos\theta-\mu\sin\theta)^2}{2\mu g}.$$

$$R_F = R_L + d_{\rm slide} = \boxed{\frac{v_0^2\sin 2\theta}{g} + \frac{v_0^2(\cos\theta-\mu\sin\theta)^2}{2\mu g}}.$$

**(e) Angle $\theta$ for maximum $R_F$ ($\mu\le1$)**

Maximize $f(\theta)=\sin2\theta+\dfrac{(\cos\theta-\mu\sin\theta)^2}{2\mu}$. Expanding:

$$f = 2sc + \frac{c^2-2\mu sc+\mu^2 s^2}{2\mu} = sc + \frac{c^2}{2\mu}+\frac{\mu s^2}{2}\quad (s=\sin\theta,\ c=\cos\theta).$$

$$\frac{df}{d\theta} = \cos2\theta + \tfrac12\sin2\theta\Big(\mu-\frac1\mu\Big) = 0.$$

$$(\mu-\tfrac1\mu)\sin2\theta = -2\cos2\theta \;\Rightarrow\; \tan2\theta = \frac{2\mu}{1-\mu^2} = \tan(2\tan^{-1}\mu).$$

$$\boxed{\theta = \tan^{-1}\mu}.$$

**(f) If $\mu>1$, what angle maximizes $R_F$?**

For $\mu>1$ the friction impulse is strong enough to **stop the brick horizontally during the impact** ($v_x'=0$) for steep trajectories, so there is no sliding and $R_F=R_L$. The range $R_L$ is maximized at $\theta=45^\circ$:

$$\boxed{\theta = 45^\circ}.$$

*(Hint answer: the brick's horizontal velocity right after hitting the ground is $0$ when $\mu>1$ for the optimal steep throw.)*

### 知识点解析

- **抛体运动**：水平匀速、竖直匀加速；射程 $R=\frac{v_0^2\sin2\theta}{g}$，$\theta=45^\circ$ 时最大。
- **碰撞与冲量**：竖直方向完全非弹性（落地不反弹），竖直动量被地面冲量消掉；水平方向的**摩擦冲量** = $\mu\times$法向冲量（撞击瞬间砖仍在滑动，受动摩擦）。
- **滑行阶段**：受动摩擦 $\mu mg$，加速度 $\mu g$，用 $v^2=2ax$ 求滑行距离。
- (e) 的优化：令 $\frac{dR_F}{d\theta}=0$，化简后 $\tan2\theta=\frac{2\mu}{1-\mu^2}$，解出 $\theta=\tan^{-1}\mu$。物理直觉：$\mu$ 越大，越应该"扔高一点"（角度越大）。
- (f) 当 $\mu>1$ 时摩擦极强，落地瞬间就把水平速度清零，最优角度回到 $\theta=45^\circ$（纯射程最大）。

---

## Question 11 — Spiral trajectory (polar coordinates)

> 鸟沿螺旋线飞行，极坐标 $r=Re^{\omega t}$，$\theta=\omega t$（$R,\omega$ 为正常数）。

### Solution

**(a) $x(t)$, $y(t)$**

$$x = r\cos\theta = Re^{\omega t}\cos(\omega t),\qquad y = r\sin\theta = Re^{\omega t}\sin(\omega t).$$

**(b) $v_x(t)$, $v_y(t)$**

$$v_x = \dot x = R\big[\omega e^{\omega t}\cos(\omega t) - e^{\omega t}\omega\sin(\omega t)\big] = R\omega e^{\omega t}(\cos\omega t - \sin\omega t).$$

$$v_y = R\omega e^{\omega t}(\sin\omega t + \cos\omega t).$$

**(c) $a_x(t)$, $a_y(t)$**

$$a_x = \dot v_x = R\omega^2 e^{\omega t}\big[(\cos-\sin)+(-\sin-\cos)\big] = \boxed{-2R\omega^2 e^{\omega t}\sin(\omega t)}.$$

$$a_y = R\omega^2 e^{\omega t}\big[(\sin+\cos)+(\cos-\sin)\big] = \boxed{2R\omega^2 e^{\omega t}\cos(\omega t)}.$$

**(d) Angle between $\vec r$ and $\vec v$**

$$\vec r = Re^{\omega t}(\cos\theta\,\hat\imath+\sin\theta\,\hat\jmath),\qquad \vec v = R\omega e^{\omega t}\big[(\cos\theta-\sin\theta)\hat\imath+(\sin\theta+\cos\theta)\hat\jmath\big].$$

$$\vec r\cdot\vec v = R^2\omega e^{2\omega t}\big[\cos(\cos-\sin)+\sin(\sin+\cos)\big] = R^2\omega e^{2\omega t}.$$

$$|\vec r| = Re^{\omega t},\qquad |\vec v| = R\omega e^{\omega t}\sqrt{(\cos-\sin)^2+(\sin+\cos)^2} = \sqrt2\,R\omega e^{\omega t}.$$

$$\cos\phi = \frac{\vec r\cdot\vec v}{|\vec r||\vec v|} = \frac{1}{\sqrt2} \;\Rightarrow\; \boxed{\phi = \frac{\pi}{4}}.$$

**(e) Angle between $\vec r$ and $\vec a$**

$$\vec a = 2R\omega^2 e^{\omega t}(-\sin\theta\,\hat\imath+\cos\theta\,\hat\jmath).$$

$$\vec r\cdot\vec a = 2R^2\omega^2 e^{2\omega t}\big[\cos(-\sin)+\sin(\cos)\big] = 0.$$

Since $\vec r\cdot\vec a = 0$, the vectors are perpendicular:

$$\boxed{\phi = \frac{\pi}{2}\ (90^\circ)}.$$

### 知识点解析

- 极坐标与直角坐标的转换 $x=r\cos\theta$、$y=r\sin\theta$；求导用**乘法法则**（$r$ 和 $\theta$ 都随时间变）。
- 本题螺旋 $r=Re^{\omega t}$ 是"对数螺旋"：$r$ 指数增长、$\theta$ 匀速增加。速度方向和位矢方向始终成 $45^\circ$（这是对数螺线的特性）。
- (e) 的巧解：$(-\sin\theta,\cos\theta)$ 是 $\hat r=(\cos\theta,\sin\theta)$ 的垂直方向（点积为 0），所以 $\vec a\perp\vec r$，夹角 $90^\circ$，无需再算模长。

---

## Question 12 — Moments of inertia and scaling laws

> 用 Galileo 缩放定律 + 平行轴定理求转动惯量。$n$ 维均匀物体尺寸减半：质量 $\to \frac1{2^n}M$，转动惯量 $\to \frac1{2^{n+2}}I$。

### Solution

**(a) $I_x$ of a uniform square (side $L$) about the $x$-axis through its center**

For a square, the moment of inertia about any axis in its plane through the center is $\frac1{12}ML^2$ (by integration, or by the symmetry $I_x=I_y$ and the perpendicular-axis theorem). Here the $x$-axis is the horizontal central axis:

$$\boxed{I_x = \frac{1}{12}ML^2}.$$

**(b) $I_{x'}$ about the diagonal**

By symmetry of the square, every in-plane axis through the center gives the same value:

$$\boxed{I_{x'} = \frac{1}{12}ML^2}.$$

**(c) Thin rod (mass $M$, length $L$) by the scaling technique**

Denote a picture of a rod with a dot as its moment of inertia about an axis at the dot. The three equations are:

1. **Scaling ($n=1$)**: $I_{\rm end}(L) = 2^3\,I_{\rm end}(L/2)$.
2. **Additivity**: $I_{\rm center}(L/2) = 2\,I_{\rm end}(L/4)$.
3. **Parallel axis**: $I_{\rm end}(L/2) = I_{\rm center}(L/2) + \frac M2\left(\frac L4\right)^2$.

Combining (and reusing the scaling relation $I_{\rm end}(L/4)=I_{\rm end}(L)/64$):

$$I_{\rm end}(L) = 8\left[2\,I_{\rm end}(L/4) + \frac M2\frac{L^2}{16}\right] = 8\left[2\frac{I_{\rm end}(L)}{64} + \frac{ML^2}{32}\right] = \frac{I_{\rm end}(L)}{4} + \frac{ML^2}{4}.$$

$$\frac34 I_{\rm end}(L) = \frac{ML^2}{4} \;\Rightarrow\; \boxed{I_{\rm end} = \frac13 ML^2}.$$

**(d) Redo (b) for the diagonal by dividing the square into four sub-squares**

Each sub-square has side $L/2$ and mass $M/4$. Let $I_h$ be one sub-square's moment about its own center diagonal (parallel to the main diagonal): $I_h=\frac1{12}\frac M4\left(\frac L2\right)^2=\frac{ML^2}{192}$.

The three equations:

1. **Scaling ($n=2$)**: $I_{x'} = 2^4 I_h = 16 I_h$.
2. **Additivity**: $I_{x'} = I_A+I_B+I_C+I_D$.
3. **Parallel axis**: $I_i = I_h + \frac M4\,d_i^2$, where sub-squares A and C lie on the diagonal ($d_A=d_C=0$) and B, D are at perpendicular distance $d_B=d_D=\frac{L}{2\sqrt2}$.

Combining:

$$I_{x'} = 4I_h + \frac M4\left(0+\frac{L^2}{8}+0+\frac{L^2}{8}\right) = 4\frac{ML^2}{192} + \frac M4\frac{L^2}{4} = \frac{ML^2}{48}+\frac{ML^2}{16} = \boxed{\frac{1}{12}ML^2}.$$

**(e) Uniform cube about its space diagonal**

Let $I_h$ be the moment of a half-size cube (side $L/2$, mass $M/8$) about its own central diagonal; for a cube every central axis gives $I_h = \frac16\frac M8\left(\frac L2\right)^2 = \frac{ML^2}{192}$.

The three equations:

1. **Scaling ($n=3$)**: $I = 2^5 I_h = 32 I_h$.
2. **Additivity**: $I = \sum_{8\ \text{sub-cubes}} I_i$.
3. **Parallel axis**: $I_i = I_h + \frac M8\,d_i^2$, where two sub-cubes lie on the diagonal ($d=0$) and six lie at $d^2 = \frac{L^2}{6}$.

Combining:

$$I = 8I_h + \frac M8\left(6\cdot\frac{L^2}{6}\right) = 8\frac{ML^2}{192} + \frac{ML^2}{8} = \frac{ML^2}{24}+\frac{ML^2}{8} = \frac{ML^2}{6}.$$

Alternatively, using the scaling relation $I_h=I/32$: $I = 8\cdot\frac I{32}+\frac{ML^2}{8}=\frac I4+\frac{ML^2}{8}\Rightarrow \frac34 I = \frac{ML^2}{8}\Rightarrow \boxed{I = \frac16 ML^2}.$

### 知识点解析

- **缩放定律**：$n$ 维物体所有线度 ×$s$，则质量 ×$s^n$、转动惯量 ×$s^{n+2}$（因为 $I=\int r^2 dm$ 里 $r^2$ 再贡献 $s^2$）。本题 $s=\frac12$，故 $I\to\frac1{2^{n+2}}I$。
- **可加性**：绕同一轴，整体转动惯量 = 各部分转动惯量之和。
- **平行轴定理** $I=I_{\rm cm}+Md^2$：把子块的轴从自身质心平移到整体质心。
- 三个工具（缩放 + 可加 + 平行轴）配合，可以"从最小的块搭出整个物体"，连积分都不用。这是本题要传达的核心思想。
- 记忆结果：正方形绕面内中心轴（含对角线）$\frac1{12}ML^2$；细杆绕端点 $\frac13ML^2$；立方体绕任意中心轴（含空间对角线）$\frac16ML^2$。

---
