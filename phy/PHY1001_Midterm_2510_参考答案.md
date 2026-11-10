# PHY1001 Mechanics 期中样卷参考答案（一）

**试卷**：PHY1001_Midterm_2510.pdf（2025–2026 Term 1，2025-10-25，满分 120 分，12 题 × 10 分）

**使用说明**：Solution（正式解题步骤）全部用英文；每题末尾的「知识点解析」用中文讲解，覆盖该题涉及的核心概念，便于复习。考试范围：第 1–9 章（到 Chapter 9 *Rotation of Rigid Bodies* 为止，含本章）。

**符号约定**：$\hat{\imath},\ \hat{\jmath},\ \hat{k}$ 为 $x,y,z$ 方向单位向量；「分量/投影」见 Q1(c) 说明。

---

## Question 1 — Vector operations

> $\vec p_1 = 2\hat{\imath} - 4\hat{\jmath} + 3\hat{k}$，$\vec p_2 = 4\hat{\jmath} - 3\hat{k}$（注意 $\vec p_2$ 没有 $\hat{\imath}$ 分量，即 $p_{2x}=0$）。

### Solution

**(a) Sum**

$$\vec p_1 + \vec p_2 = (2+0)\hat{\imath} + (-4+4)\hat{\jmath} + (3-3)\hat{k} = 2\hat{\imath}.$$

**(b) Dot product**

$$\vec p_1\cdot\vec p_2 = (2)(0) + (-4)(4) + (3)(-3) = -16 - 9 = \boxed{-25}.$$

**(c) Component of $\vec p_1$ along $\vec p_2$**

The scalar component (projection) is

$$\text{comp}_{\vec p_2}\vec p_1 = \vec p_1\cdot\hat p_2 = \frac{\vec p_1\cdot\vec p_2}{|\vec p_2|}, \qquad |\vec p_2| = \sqrt{0^2+4^2+(-3)^2}=5.$$

$$\text{comp}_{\vec p_2}\vec p_1 = \frac{-25}{5} = \boxed{-5}.$$

*(The corresponding vector component is $-5\,\hat p_2 = -5\frac{4\hat\jmath-3\hat k}{5} = -4\hat\jmath + 3\hat{k}$.)*

**(d) Cross product**

$$\vec p_1 \times \vec p_2 =
\begin{vmatrix}
\hat\imath & \hat\jmath & \hat k\\
2 & -4 & 3\\
0 & 4 & -3
\end{vmatrix}
= \hat\imath\big[(-4)(-3)-(3)(4)\big] - \hat\jmath\big[(2)(-3)-(3)(0)\big] + \hat k\big[(2)(4)-(-4)(0)\big]$$

$$= 0\hat\imath + 6\hat\jmath + 8\hat k = \boxed{6\hat\jmath + 8\hat k}.$$

### 知识点解析

- **向量加法**逐分量相加；**点乘** $\vec a\cdot\vec b = a_xb_x+a_yb_y+a_z b_z$ 得到标量，结果为负说明两向量夹角为钝角（此处 $\vec p_1\cdot\vec p_2=-25<0$）。
- **沿某方向的投影**：$\text{comp}_{\vec b}\vec a = \vec a\cdot\hat b = \vec a\cdot\vec b/|\vec b|$，即「先把 $\vec b$ 归一化成单位向量再点乘」。负号表示 $\vec p_1$ 在 $\vec p_2$ 方向上的分量方向与 $\vec p_2$ 相反。
- **叉乘**：结果是一个**垂直于两向量**的向量，大小 $|\vec a\times\vec b|=|a||b|\sin\theta$，方向用右手定则。可用行列式展开计算。叉乘**不满足交换律**（$\vec a\times\vec b=-\vec b\times\vec a$）。
- 一个快捷验算：$\vec a\cdot(\vec a\times\vec b)=0$（叉乘结果与参与运算的每个向量都垂直）。此处 $(2,-4,3)\cdot(0,6,8)=0-24+24=0$ ✓。

---

## Question 2 — Rotational kinematics (constant angular acceleration)

> 飞轮匀角加速度 $\alpha=0.450\ \text{rad/s}^2$，在 $t=3.00\ \text{s}$ 时角速度 $\omega=3.75\ \text{rad/s}$。

### Solution

**(a) Initial angular velocity** — use $\omega = \omega_0 + \alpha t$:

$$\omega_0 = \omega - \alpha t = 3.75 - (0.450)(3.00) = 3.75 - 1.35 = \boxed{2.40\ \text{rad/s}}.$$

**(b) Angular displacement** — use $\theta = \omega_0 t + \tfrac12 \alpha t^2$:

$$\Delta\theta = (2.40)(3.00) + \tfrac12(0.450)(3.00)^2 = 7.20 + 2.025 = \boxed{9.23\ \text{rad}}.$$

**(c) Average angular velocity**

$$\bar\omega = \frac{\Delta\theta}{\Delta t} = \frac{9.225}{3.00} = \boxed{3.08\ \text{rad/s}}.$$

*(Equivalently $\bar\omega=\tfrac12(\omega_0+\omega)=\tfrac12(2.40+3.75)=3.075\ \text{rad/s}$ for constant $\alpha$.)*

### 知识点解析

- 转动运动学四个公式与直线运动学**一一对应**：$x\to\theta$，$v\to\omega$，$a\to\alpha$。
  - $\omega=\omega_0+\alpha t \;\leftrightarrow\; v=v_0+at$
  - $\theta=\omega_0 t+\tfrac12\alpha t^2 \;\leftrightarrow\; x=v_0t+\tfrac12 at^2$
  - $\omega^2=\omega_0^2+2\alpha\theta \;\leftrightarrow\; v^2=v_0^2+2ax$
- 仅在**角加速度恒定**时这些公式成立（题给 constant angular acceleration）。
- 平均角速度 $\bar\omega=\Delta\theta/\Delta t$；匀加速时恰好等于初末角速度的算术平均。注意区分 $\bar\omega$（标量平均）与瞬时 $\omega$。

---

## Question 3 — "Are We Martians?" (1-D constant acceleration)

> 岩石从静止加速到 $v=5.0\times10^3\ \text{m/s}$，加速距离 $\Delta x=5.0\ \text{m}$，匀加速。

### Solution

**(a) Time** — with $v_0=0$, average velocity is $v_{\rm avg}=v/2=2.5\times10^3\ \text{m/s}$:

$$t = \frac{\Delta x}{v_{\rm avg}} = \frac{5.0\ \text{m}}{2.5\times10^3\ \text{m/s}} = \boxed{2.0\times10^{-3}\ \text{s}}.$$

**(b) Acceleration** — use $v^2 = v_0^2 + 2a\Delta x$ with $v_0=0$:

$$a = \frac{v^2}{2\Delta x} = \frac{(5.0\times10^3)^2}{2(5.0)} = \frac{2.5\times10^7}{10} = \boxed{2.5\times10^6\ \text{m/s}^2}.$$

**(c) In units of $g$**

$$\frac{a}{g} = \frac{2.5\times10^6}{9.8} = 2.55\times10^5 \quad\Rightarrow\quad \boxed{a \approx 2.6\times10^5\,g}.$$

**(d) Can we rule out the hypothesis?**

The required acceleration is $2.6\times10^5\,g$, but bacteria are known to survive $4.5\times10^5\,g$. Since the required acceleration is **less** than the survival threshold, the hypothesis **cannot** be ruled out on this basis.

$$\boxed{\text{No}}.$$

### 知识点解析

- 无初速匀加速的三个等价公式：$v=at$，$x=\tfrac12at^2$，$v^2=2ax$。已知 $v,x$ 求 $a$ 最方便用 $v^2=2ax$；求 $t$ 可用 $x=\tfrac12vt$（即平均速度法）。
- 注意数量级：$10^6\ \text{m/s}^2$ 的量级，约 $10^5\,g$，是超大的加速度，但细菌实验表明可以承受，所以「火星生命搭陨石来地球」的假说在加速度这一点上**不能被排除**（题目只要回答 yes/no，不要写成 yes）。

---

## Question 4 — Two blocks connected by a rigid rod on an incline

> $m_1=4.0\ \text{kg}\ (\mu_1=0.35)$，$m_2=8.0\ \text{kg}\ (\mu_2=0.25)$，由无质量刚性杆相连，沿 $30^\circ$ 斜面下滑（图中 $m_2$ 在上、$m_1$ 在下）。$g=9.8\ \text{m/s}^2$。

### Solution

**(a) Acceleration of the two-block system**

Treat the two blocks as one system of mass $M=m_1+m_2=12.0\ \text{kg}$. Forces along the incline: gravity component $Mg\sin\theta$ (downhill) and total kinetic friction $f_1+f_2=(\mu_1m_1+\mu_2m_2)g\cos\theta$ (uphill). Newton's second law:

$$a = \frac{M\sin\theta - (\mu_1m_1+\mu_2m_2)\cos\theta}{M}\,g.$$

With $\sin30^\circ=0.5$, $\cos30^\circ=0.866$, $\mu_1m_1+\mu_2m_2 = 1.40+2.00=3.40$:

$$a = \frac{(12.0)(0.5)-(3.40)(0.866)}{12.0}(9.8) = \frac{6.0-2.944}{12.0}(9.8) = 2.50\ \text{m/s}^2.$$

$$\boxed{a = 2.5\ \text{m/s}^2\ \text{down the incline}}.$$

**(b) Force of the rod on the 4.0-kg block**

Apply Newton's second law to the 4.0-kg block alone, taking downhill as positive. Let $F$ be the rod force on the 4-kg block (positive = downhill):

$$m_1 g\sin\theta + F - \mu_1 m_1 g\cos\theta = m_1 a$$

$$F = m_1(a - g\sin\theta + \mu_1 g\cos\theta) = (4.0)(2.50 - 4.9 + 0.35\cdot9.8\cdot0.866) = (4.0)(0.566) = 2.26\ \text{N}.$$

$$\boxed{F = 2.3\ \text{N},\ \text{directed down the incline — the rod pushes the 4-kg block downhill.}}$$

*Check:* the 4-kg block has the larger friction coefficient, so alone it would accelerate slower ($a_1=g(\sin\theta-\mu_1\cos\theta)=1.93\ \text{m/s}^2$) than the 8-kg block ($a_2=2.78\ \text{m/s}^2$). Since $m_2$ (the faster block) is **uphill** (behind), it catches up to the slower $m_1$ in front; the rod is therefore in **compression**, pushing $m_1$ downhill and pushing $m_2$ uphill.

**(c) Rod replaced by a string**

Same acceleration? — **No.** Slack? — **Yes.**

The rod was in *compression* (pushing the two blocks apart). A string cannot support compression — it can only pull. So when the rod is replaced by a string, the string immediately goes **slack**, and the two blocks no longer move together; each slides with its own natural acceleration,

$$a_1 = g(\sin\theta-\mu_1\cos\theta)=1.93\ \text{m/s}^2,\qquad a_2 = g(\sin\theta-\mu_2\cos\theta)=2.78\ \text{m/s}^2.$$

Since $m_2$ (above, faster) outruns $m_1$ (below, slower), they do **not** share a common acceleration.

### 知识点解析

- **整体法**求系统加速度：把两个滑块看成一个系统，内力（杆的力）互相抵消，只考虑外力（重力分量、摩擦力）。
- **隔离法**求内力：对其中一个滑块单独列牛顿第二定律，把杆的作用力当成未知外力解出。
- 判断杆是「拉」还是「推」的关键：看**加速度大的那块在哪一头**。本题 $m_2$（8-kg，摩擦小）自然加速度大（$2.78$），且它在**上（后面）**，会追上前面慢的 $m_1$（4-kg，$1.93$），所以杆被**压缩（compression）**：推 $m_1$ 向下、推 $m_2$ 向上。若换成绳子，绳子只能承受拉力不能承受压力，所以绳子会**松弛**，两块各自独立下滑（加速度不再相同）。反之，若杆是 tension（前面的块更快、把后面的拖着走），绳子才不会松。

---

## Question 5 — Work–kinetic energy theorem

> 一个 $3.0\ \text{kg}$ 的质点状物体只受一个水平力，位置 $x(t)=(1.0\ \text{m/s}^3)t^3$。

### Solution

**(a) Change in kinetic energy**

$$v(t)=\frac{dx}{dt}=3(1.0)t^2 = 3.0\,t^2\ \text{m/s}.$$

$$v(0)=0,\qquad v(3.0)=3.0(3.0)^2 = 27\ \text{m/s}.$$

$$\Delta K = \tfrac12 m v_f^2 - \tfrac12 m v_i^2 = \tfrac12(3.0)(27)^2 - 0 = 1.5 \times 729 = \boxed{1.09\times10^3\ \text{J}}.$$

**(b) Force as a function of time**

$$a(t)=\frac{dv}{dt}=6.0\,t\ \text{m/s}^2 \qquad\Rightarrow\qquad F(t)=ma=(3.0)(6.0\,t) = \boxed{18\,t\ \text{N}}.$$

**(c) Verify the work–energy theorem**

$$W = \int_{x_1}^{x_2} F\,dx = \int_0^3 F(t)\,\frac{dx}{dt}\,dt = \int_0^3 (18t)(3t^2)\,dt = \int_0^3 54\,t^3\,dt = 54\frac{t^4}{4}\bigg|_0^3 = 54\frac{81}{4} = \boxed{1093.5\ \text{J}}.$$

This equals $\Delta K = 1093.5\ \text{J}$ ✓.

### 知识点解析

- **动能定理**：合外力做功 $W = \Delta K = K_f-K_i$。它把「力在位移上的累积」和「速度变化」直接联系起来，是功与能这一章的核心。
- 当 $F$ 是 $x$ 的函数时，用 $W=\int F\,dx$；当 $F$ 是 $t$ 的函数时，可换元 $dx = v\,dt$ 化成对时间积分（本题正是如此）。
- $x(t)=t^3$ 说明 $v\propto t^2$、$a\propto t$，是**变加速**运动，不能套匀加速公式，必须用微分/积分。

---

## Question 6 — Direction of $\vec\omega,\vec\alpha,\vec a$ and $\vec v=\vec\omega\times\vec r$

> 轮子**顺时针**转动，P 为轮上一点，$\vec r$ 为从圆心指向 P 的位矢。

### Solution

**(a) Direction of $\vec\omega$**

By the right-hand rule, for a clockwise rotation (as viewed in the figure) the angular velocity points **into the page** (perpendicular to the wheel's plane).

$$\boxed{\vec\omega \text{ is into the page}}.$$

**(b) If the rotation is speeding up**

$\vec\alpha$ is in the **same direction as $\vec\omega$**, i.e. **into the page**.

**(c) If the rotation is slowing down**

$\vec\alpha$ is opposite $\vec\omega$ (out of the page). The linear acceleration $\vec a=\vec\alpha\times\vec r - \omega^2\vec r$ then has:
- a **centripetal** component $-\omega^2\vec r$ pointing **toward the center**, and
- a **tangential** component $\vec\alpha\times\vec r$ pointing **opposite to $\vec v$** (backward).

So $\vec a$ points inward and slightly backward relative to the velocity.

**(d) Show $\vec v = \vec\omega\times\vec r$**

*Magnitude:* $\omega$ is perpendicular to $\vec r$, so $|\vec\omega\times\vec r|=\omega r \sin90^\circ = \omega r$, which is exactly the tangential speed $v=\omega r$ of a point on a rigid body.

*Direction:* $\vec\omega$ points into the page, $\vec r$ points radially outward. The cross product $\vec\omega\times\vec r$ is perpendicular to both, i.e. tangent to the circle, and by the right-hand rule points in the direction of motion (clockwise tangent). Hence $\vec v=\vec\omega\times\vec r$ in both magnitude and direction. ✓

**(e) Show $\vec a=\frac{d\vec v}{dt}=\vec\alpha\times\vec r-\omega^2\vec r$**

$$\vec a = \frac{d\vec v}{dt} = \frac{d}{dt}(\vec\omega\times\vec r) = \frac{d\vec\omega}{dt}\times\vec r + \vec\omega\times\frac{d\vec r}{dt} = \vec\alpha\times\vec r + \vec\omega\times\vec v.$$

Using $\vec v=\vec\omega\times\vec r$ and the vector triple product $\vec A\times(\vec B\times\vec C)=(\vec A\cdot\vec C)\vec B-(\vec A\cdot\vec B)\vec C$:

$$\vec\omega\times\vec v = \vec\omega\times(\vec\omega\times\vec r) = (\vec\omega\cdot\vec r)\vec\omega - (\vec\omega\cdot\vec\omega)\vec r = 0 - \omega^2\vec r,$$

because $\vec\omega\perp\vec r$ (so $\vec\omega\cdot\vec r=0$). Therefore

$$\boxed{\vec a = \vec\alpha\times\vec r - \omega^2\vec r}.$$

### 知识点解析

- **右手定则**定方向：四指沿转动方向（顺时针）弯曲，拇指指向 $\vec\omega$ 方向（进入纸面）。$\vec\omega$ 用矢量表示转轴方向，是转动量的核心。
- 线量与角量的关系：$v=\omega r$（切向速度），$a_{\rm tan}=\alpha r$（切向加速度），$a_{\rm rad}=\omega^2 r = v^2/r$（向心加速度，指向圆心）。
- **矢量叉乘形式** $\vec v=\vec\omega\times\vec r$ 和 $\vec a=\vec\alpha\times\vec r+\vec\omega\times\vec v$ 是更一般、三维也成立的形式；$\vec\omega\times\vec v = -\omega^2\vec r$ 这一项就是向心加速度（用矢量三重积化简）。
- 变速转动时：$\vec\alpha$ 与 $\vec\omega$ 同向为「加速转」，反向为「减速转」。

---

## Question 7 — Pulley + falling block (rotational energy)

> 无质量、不可伸长的绳绕在均匀实心圆盘滑轮（质量 $M$，半径 $R$）上，绳另一端挂质量 $m$ 的物块，系统从高 $h$ 处静止释放，物块落地时速率为 $v$。

### Solution

**(a) Angular speed of the pulley**

The cable does not stretch or slip, so the cable speed equals the block speed $v$, and $v=\omega R$:

$$\boxed{\omega = \frac{v}{R}}.$$

**(b) Rotational kinetic energy of the pulley**

For a uniform solid disk $I=\tfrac12 MR^2$:

$$K_{\rm rot} = \tfrac12 I\omega^2 = \tfrac12\left(\tfrac12 MR^2\right)\left(\frac vR\right)^2 = \boxed{\tfrac14 M v^2}.$$

**(c) Height $h$ from energy conservation**

Initial energy (block at height $h$, at rest): $E_i = mgh$. Final energy (block moving at $v$, pulley rotating):

$$E_f = \tfrac12 m v^2 + \tfrac14 M v^2.$$

Set $E_i=E_f$:

$$mgh = \left(\tfrac12 m + \tfrac14 M\right)v^2 \qquad\Rightarrow\qquad \boxed{h = \frac{v^2\left(\tfrac12 m + \tfrac14 M\right)}{mg} = \frac{v^2(2m+M)}{4mg}}.$$

### 知识点解析

- **绳不滑动**的条件给出线量与角量的联系 $v=\omega R$（这是转动问题里最常用的"桥梁"）。
- **转动动能** $K=\tfrac12 I\omega^2$；常见转动惯量要记住：实心圆盘（绕中心轴）$I=\tfrac12 MR^2$，实心球 $I=\tfrac25 MR^2$，细杆（绕中心）$I=\tfrac1{12}ML^2$，细杆（绕端点）$I=\tfrac13ML^2$。
- **机械能守恒**：本题只有重力做功（滑轮轴无摩擦），所以 $K_{\rm trans}+K_{\rm rot}+U_g$ 守恒。注意要把**平动动能**（物块）和**转动动能**（滑轮）都算进去。
- 常见易错：滑轮不是质点，它也在"存能量"，漏掉 $\tfrac12 I\omega^2$ 就会错。

---

## Question 8 — Potential energy, force, and equilibrium

> $U(x)=U_0\Big[\big(\frac{x}{a}\big)^4 - \big(\frac{x}{a}\big)^2\Big]$，$U_0,a$ 为正常数。

### Solution

**(a) Force**

$$F_x = -\frac{dU}{dx} = -U_0\left[\frac{4x^3}{a^4} - \frac{2x}{a^2}\right] = \boxed{\frac{2U_0}{a^2}x\left(1-\frac{2x^2}{a^2}\right)}.$$

**(b) Equilibrium points**

$F_x=0$ gives

$$\frac{2U_0}{a^2}x\left(1-\frac{2x^2}{a^2}\right)=0 \quad\Rightarrow\quad x=0 \ \ \text{or}\ \ x^2=\frac{a^2}{2}.$$

Equilibrium positions: $\boxed{x=0,\ x=\pm a/\sqrt2}$.

*Stability* — use the second derivative of $U$:

$$\frac{d^2U}{dx^2} = U_0\left(\frac{12x^2}{a^4}-\frac{2}{a^2}\right) = \frac{2U_0}{a^2}\left(\frac{6x^2}{a^2}-1\right).$$

- At $x=0$: $\frac{d^2U}{dx^2}=-\frac{2U_0}{a^2}<0$ → **unstable** (local maximum of $U$).
- At $x=\pm a/\sqrt2$: $\frac{6x^2}{a^2}=3$, so $\frac{d^2U}{dx^2}=\frac{2U_0}{a^2}(2)>0$ → **stable** (local minima of $U$).

**(c) Kinetic energy at $x=0$**

Total energy equals $U$ at the turning points (where $K=0$):

$$E = U(\pm 1.27a) = U_0\big[1.27^4 - 1.27^2\big] = U_0(2.601-1.613) = 0.988\,U_0.$$

At $x=0$, $U(0)=0$, so

$$\boxed{K(x=0) = E - U(0) = 0.988\,U_0 \approx 0.99\,U_0}.$$

### 知识点解析

- **力与势能的关系**：$F_x=-\frac{dU}{dx}$（一维）。力的方向总是指向势能减小的方向（"水往低处流"）。
- **平衡点**：$F=0 \Leftrightarrow \frac{dU}{dx}=0$（势能的极值点）。
- **稳定性判据**：$\frac{d^2U}{dx^2}>0$（势能极小）→ **稳定**平衡，偏离后会回复；$\frac{d^2U}{dx^2}<0$（势能极大）→ **不稳定**平衡，一碰就跑开。也可以用 $F$ 的斜率判断：$F$ 的斜率 $dF/dx<0$ 相当于恢复力（稳定）。
- **转折点**（turning point）：动能 $K=0$、速度为零、运动反向的位置，此时总能量 $E=U$。在 $x=0$ 处 $U=0$，所以 $K=E$。
- 本题势能曲线是双阱型：中间 $x=0$ 是势垒（不稳定），两侧 $\pm a/\sqrt2$ 是势阱（稳定）。

---

## Question 9 — Center of mass of an inverted U

> 三根长 $L$ 的细杆组成倒 U 形（∩）。两根竖杆完全相同、均匀，质量各为横杆质量的 $1/3$。横杆非均匀，线密度 $\lambda=\sigma x$（$\sigma$ 为正常数，$x$ 为离原点的距离）。

**坐标约定**：原点在横杆左端，$x$ 轴向右沿横杆（横杆从 $x=0$ 到 $x=L$），$y$ 轴向下（两根竖杆从 $y=0$ 伸到 $y=L$）。

### Solution

**(a) CM of the horizontal rod**

Total mass: $M_h = \int_0^L \sigma x\,dx = \frac12\sigma L^2$.

$$x_{\rm cm,h} = \frac{1}{M_h}\int_0^L x\,\lambda\,dx = \frac{1}{M_h}\int_0^L \sigma x^2\,dx = \frac{\sigma L^3/3}{\sigma L^2/2} = \boxed{\frac23 L}.$$

**(b) CM of the whole system**

Each vertical rod has mass $M_v = \frac13 M_h = \frac16\sigma L^2$. Total mass $M = M_h + 2M_v = \frac53 M_h = \frac56\sigma L^2$.

- Horizontal rod CM: $(x,y)=\big(\frac23 L,\,0\big)$.
- Left vertical rod CM: $(0,\,L/2)$ (uniform, its own midpoint).
- Right vertical rod CM: $(L,\,L/2)$.

$$x_{\rm com} = \frac{M_h(\frac23 L) + M_v(0) + M_v(L)}{M} = \frac{M_h L}{(\frac53)M_h} = \boxed{\frac35 L}.$$

$$y_{\rm com} = \frac{M_h(0) + M_v(\frac L2) + M_v(\frac L2)}{M} = \frac{M_v L}{(\frac53)M_h} = \frac{(\frac13 M_h)L}{(\frac53)M_h} = \boxed{\frac15 L}.$$

$$\boxed{(x_{\rm com},\,y_{\rm com}) = \left(\tfrac35 L,\ \tfrac15 L\right)}.$$

*(In words: the CM lies $3L/5$ to the right of the left end and $L/5$ below the horizontal rod.)*

### 知识点解析

- **质心定义**：$x_{\rm com}=\frac1M\sum m_i x_i$（分立），连续体 $x_{\rm com}=\frac1M\int x\,dm$，其中 $dm=\lambda\,dx$（线密度）。
- **非均匀杆**的质量和质心都要靠积分：$M=\int\lambda\,dx$，$x_{\rm com}=\frac{\int x\lambda\,dx}{\int\lambda\,dx}$。
- 组合体的质心：把每个"子物体"的质心当成质点，按其质量加权平均。竖杆是均匀的，质心在中点，不用积分。
- 对称性可简化：横杆关于其自身中点**不对称**（密度 $\sigma x$ 越大越重，质心偏右到 $\frac23L$），所以整体 $x_{\rm com}=\frac35L$ 也偏右（不是 $\frac12L$）。

---

## Question 10 — Block on two strings rotating about a rod

> $4.00\ \text{kg}$ 物块用两根无质量绳连到竖直杆上，随系统绕杆轴旋转，上绳张力 $80.0\ \text{N}$。几何（由题图）：每根绳长 $1.25\ \text{m}$，两根绳在杆上的挂点竖直相距 $2.00\ \text{m}$，物块位于两挂点正中间，故物块到转轴的水平距离 $r=\sqrt{1.25^2-1.00^2}=0.75\ \text{m}$，绳与竖直方向夹角 $\theta$ 满足 $\sin\theta=0.6,\ \cos\theta=0.8$。

### Solution

Let the upper string tension be $T_1=80.0\ \text{N}$ and the lower string tension be $T_2$. Let $\theta$ be the angle each string makes with the **vertical** rod; from the figure $\sin\theta=0.6$ (horizontal component) and $\cos\theta=0.8$ (vertical component), and the horizontal distance from the block to the axis is $r=0.75\ \text{m}$.

**(a) Tension in the lower string** — vertical equilibrium:

$$T_1\cos\theta - T_2\cos\theta - mg = 0 \quad\Rightarrow\quad T_2 = T_1 - \frac{mg}{\cos\theta}.$$

$$T_2 = 80.0 - \frac{(4.00)(9.80)}{0.8} = 80.0 - 49.0 = \boxed{31.0\ \text{N}}.$$

**(b) Speed of the block** — horizontal (centripetal) direction:

$$(T_1+T_2)\sin\theta = \frac{mv^2}{r}$$

$$v = \sqrt{\frac{(T_1+T_2)\,r\sin\theta}{m}} = \sqrt{\frac{(80.0+31.0)(0.75)(0.6)}{4.00}} = \boxed{3.53\ \text{m/s}}.$$

**(c) Critical speed (lower string just goes slack, $T_2=0$)**

Vertical equilibrium with $T_2=0$:

$$T_1\cos\theta = mg \quad\Rightarrow\quad T_1 = \frac{mg}{\cos\theta} = \frac{(4.00)(9.80)}{0.8} = 49.0\ \text{N}.$$

Horizontal:

$$T_1\sin\theta = \frac{mv_c^2}{r} \quad\Rightarrow\quad v_c = \sqrt{\frac{T_1 r\sin\theta}{m}} = \sqrt{\frac{(49.0)(0.75)(0.6)}{4.00}} = \boxed{2.35\ \text{m/s}}.$$

*(Equivalently $v_c=\sqrt{gr\tan\theta}=\sqrt{(9.8)(0.75)(0.75)}=2.35\ \text{m/s}$.)*

### 知识点解析

- **几何**：$\theta$ 是绳与**竖直**杆的夹角，$\sin\theta=0.6$ 是绳的**水平分量**、$\cos\theta=0.8$ 是**竖直分量**；绳长 $1.25\ \text{m}$、挂点相距 $2.00\ \text{m}$、物块在中点，故水平距离 $r=\sqrt{1.25^2-1.00^2}=0.75\ \text{m}$。
- **匀速圆周运动 + 牛顿第二定律**：竖直方向合力为零（平衡），水平方向合力提供向心力 $F_{\rm net}=\frac{mv^2}{r}$ 指向圆心。本题圆心在杆轴上，向心力由两绳水平分量之和提供。
- **两个方向的受力分析要分开**：上绳的竖直分量**向上**（$T_1\cos\theta$），下绳的竖直分量**向下**（$T_2\cos\theta$，它挂在物块下方，把物块往下拉），重力也向下——这是容易搞错符号的地方。
- **临界速度**：转速降低时，所需向心力减小，下绳张力 $T_2$ 随之减小；当 $T_2\to0$ 时就是临界状态，再慢的话下绳会松弛（物块会下垂改变构型）。此时只有上绳张力支撑重力并提供向心力。
- 这类"圆锥摆/绳连接转动"题的通用套路：① 画受力图；② 竖直平衡；③ 水平向心力；④ 解未知量。

---

## Question 11 — Block, spring, and movable wedge

> 质量 $2m$、高 $h$ 的楔块静止在无摩擦水平面上，斜面角 $\theta$。质量 $m$ 的物块压在劲度系数 $k$ 的弹簧上（弹簧固定在墙上），压缩 $\Delta x$ 后释放。物块滑向楔块、沿无摩擦斜面上升。

### Solution

When released, the spring converts its energy to the block: $\tfrac12 k\Delta x^2 = \tfrac12 m v_0^2$, so $v_0 = \sqrt{k/m}\,\Delta x$ (block's speed just after leaving the spring, moving right).

**(a) Prove $\Delta x_c = \sqrt{3mgh/k}$**

At the critical case the block just reaches height $h$ and is momentarily at rest relative to the wedge (both move with the same horizontal velocity $V$). For the block+wedge system after the block leaves the spring, horizontal momentum and mechanical energy are conserved:

$$m v_0 = (m + 2m) V = 3mV \;\Rightarrow\; V = \frac{v_0}{3},$$

$$\tfrac12 m v_0^2 = mgh + \tfrac12(3m)V^2 = mgh + \tfrac12(3m)\frac{v_0^2}{9} = mgh + \frac{m v_0^2}{6}.$$

$$\tfrac12 v_0^2 - \tfrac16 v_0^2 = gh \;\Rightarrow\; \tfrac13 v_0^2 = gh \;\Rightarrow\; v_0^2 = 3gh.$$

Substituting $v_0^2 = \frac{k}{m}\Delta x_c^2$:

$$\frac{k}{m}\Delta x_c^2 = 3gh \;\Rightarrow\; \boxed{\Delta x_c = \sqrt{\frac{3mgh}{k}}}.$$

**(b) Final velocities when $\Delta x < \Delta x_c$**

The block goes up, comes back down, and leaves the wedge at ground level. The block–wedge interaction is elastic (no friction), so momentum and energy give the same result as an elastic collision of $m$ (speed $v_0$) with $2m$ (at rest):

$$v_{\rm block} = v_0\frac{m-2m}{m+2m} = -\frac{v_0}{3},\qquad v_{\rm wedge} = v_0\frac{2m}{m+2m} = \frac{2v_0}{3}.$$

$$\boxed{\text{block: } -\frac13\sqrt{\frac{k}{m}}\,\Delta x \text{ (to the left)};\qquad \text{wedge: } +\frac23\sqrt{\frac{k}{m}}\,\Delta x \text{ (to the right)}.}$$

*(Afterward the block compresses the spring again and reverses to the right at $v_0/3$; since $v_0/3 < 2v_0/3$ it never catches the wedge, so the wedge keeps moving right at $2v_0/3$.)*

**(c) Given $m=1.00\ \text{kg}$, $h=0.300\ \text{m}$, $\theta=30.0^\circ$, $k=1.00\times10^4\ \text{N/m}$, $\Delta x=4.00\times10^{-2}\ \text{m}$, $g=10.0$.**

$$\Delta x_c = \sqrt{\frac{3(1.00)(10.0)(0.300)}{1.00\times10^4}} = \sqrt{9\times10^{-4}} = 3.00\times10^{-2}\ \text{m}.$$

Since $\Delta x = 4.00\times10^{-2}\ \text{m} > \Delta x_c$, the block **does leave the wedge** (flies off the top).

Find the velocity relative to the ground at the instant it leaves. Let $V$ be the wedge's speed (to the right) and $\vec v_{\rm rel}$ the block's velocity relative to the wedge, which points along the slope (angle $\theta$ above horizontal). Then the block's ground velocity is $\vec v_b = (V + v_{\rm rel}\cos\theta)\,\hat\imath + (v_{\rm rel}\sin\theta)\,\hat\jmath$.

$v_0 = \sqrt{k/m}\,\Delta x = \sqrt{10^4/1.00}\,(0.0400) = 4.00\ \text{m/s}$.

Momentum (horizontal) and energy conservation:

$$m v_0 = m(V + v_{\rm rel}\cos\theta) + 2m V \;\Rightarrow\; v_0 = 3V + v_{\rm rel}\cos\theta \;\Rightarrow\; v_{\rm rel}\cos\theta = v_0 - 3V.$$

$$\tfrac12 m v_0^2 = \tfrac12 m\left[(V+v_{\rm rel}\cos\theta)^2 + (v_{\rm rel}\sin\theta)^2\right] + \tfrac12(2m)V^2 + mgh.$$

Using $v_{\rm rel}\cos\theta = v_0-3V$ and $\cos^2 30^\circ = \tfrac34$ (so $1/\cos^2\theta=\tfrac43$), this reduces to

$$27V^2 - 72V + 34 = 0 \;\Rightarrow\; V = \frac{72-\sqrt{1512}}{54} = 0.613\ \text{m/s}.$$

*(The other root $2.05\ \text{m/s}$ would give $v_{\rm rel}<0$, i.e. the block moving down the slope, which is unphysical here.)*

Then $v_{\rm rel} = \dfrac{v_0-3V}{\cos30^\circ} = \dfrac{4.00-1.840}{0.866} = 2.494\ \text{m/s}$, and

$$v_{bx} = V + v_{\rm rel}\cos30^\circ = 0.613 + 2.160 = 2.77\ \text{m/s},\qquad v_{by} = v_{\rm rel}\sin30^\circ = 1.25\ \text{m/s}.$$

$$\boxed{\vec v_b = (2.77\,\hat\imath + 1.25\,\hat\jmath)\ \text{m/s}\ \text{relative to the ground}.}$$

### 知识点解析

- **弹簧能量**：$\tfrac12 k\Delta x^2 \to \tfrac12 mv_0^2$，物块脱离弹簧时的速度 $v_0=\sqrt{k/m}\,\Delta x$。
- **动量守恒**：物块离开弹簧后，物块+楔块系统在水平方向无外力（地面、斜面均无摩擦），水平动量守恒。注意弹簧固定在墙上，弹簧阶段墙有外力，**不能**对"弹簧+物块+楔块"整体用动量守恒；要在物块脱离弹簧之后再对"物块+楔块"用。
- **能量守恒**：全过程中系统机械能守恒（弹簧理想、无摩擦）。
- (a) 临界情形：物块"刚好到顶不离开"意味着在顶端物块相对楔块速度为零（二者共速 $V$）。
- (b) 物块沿可动楔块上滑再滑回，等价于与楔块发生**完全弹性碰撞**（因无耗散），用弹性碰撞速度公式即可。
- (c) 用二次方程求楔块速度（题目给了求根公式提示），再叠加相对速度得到物块对地速度（$\vec v_b = \vec V + \vec v_{\rm rel}$，即**相对运动的速度合成**）。

---

## Question 12 — Sierpinski triangle moment of inertia

> Sierpinski 分形（等边三角形不断挖去中央倒三角），总质量 $M$，绕通过其质心、垂直于三角形平面的轴转动。从最小三角形（质量 $m_0$、边长 $\ell_0$）反向搭建。

### Solution

**(a) $I_0$ of a small equilateral triangle**

For a uniform triangular plate, about an axis through its centroid perpendicular to the plane, $I=\tfrac{m}{36}(a^2+b^2+c^2)$; for an equilateral triangle $a=b=c=\ell_0$:

$$\boxed{I_0 = \frac{1}{12}m_0\ell_0^2}.$$

**(b) $I_1$ for three small triangles ($m_1=3m_0$, $\ell_1=2\ell_0$)**

The three corner triangles have their combined CM at the centroid of the large triangle (by symmetry). Each small centroid is at distance $d = \ell_0/\sqrt3$ from the large centroid. Using the parallel-axis theorem:

$$I_1 = 3I_0 + 3 m_0 d^2 = 3\left(\frac{m_0\ell_0^2}{12}\right) + 3m_0\left(\frac{\ell_0^2}{3}\right) = \frac{m_0\ell_0^2}{4} + m_0\ell_0^2 = \boxed{\frac54 m_0\ell_0^2}.$$

**(c) Show $I_n = 3I_{n-1} + m_{n-1}\ell_{n-1}^2$**

Level $n$ consists of three copies of level $(n-1)$ placed at the three corners of a triangle of side $\ell_n = 2\ell_{n-1}$. Each copy has mass $m_{n-1}$, side $\ell_{n-1}$, and its centroid lies at distance $d_{n-1}=\ell_{n-1}/\sqrt3$ from the level-$n$ centroid. By the parallel-axis theorem:

$$I_n = 3I_{n-1} + 3m_{n-1}\left(\frac{\ell_{n-1}}{\sqrt3}\right)^2 = 3I_{n-1} + m_{n-1}\ell_{n-1}^2.\ \checkmark$$

**(d) Limit $n\to\infty$**

With $m_n = 3^n m_0 \to M$, $\ell_n = 2^n\ell_0 \to L$, so $m_n\ell_n^2 = (3^n)(4^n)m_0\ell_0^2 = 12^n m_0\ell_0^2 \to ML^2$.

Divide the recursion by $m_n\ell_n^2$:

$$\frac{I_n}{m_n\ell_n^2} = \frac{3I_{n-1}}{12\,m_{n-1}\ell_{n-1}^2} + \frac{m_{n-1}\ell_{n-1}^2}{12\,m_{n-1}\ell_{n-1}^2} = \frac14\frac{I_{n-1}}{m_{n-1}\ell_{n-1}^2} + \frac{1}{12}.$$

Let $A_n = \frac{I_n}{m_n\ell_n^2}$; then $A_n = \tfrac14 A_{n-1} + \tfrac{1}{12}$ with $A_0 = \frac{1}{12}$. Unrolling:

$$A_n = \frac{1}{12}\left(1 + \frac14 + \frac{1}{4^2} + \cdots + \frac{1}{4^n}\right).$$

Taking $n\to\infty$:

$$I = M L^2 \cdot \frac{1}{12}\sum_{k=0}^{\infty}\frac{1}{4^k} = \frac{ML^2}{12}\cdot\frac{1}{1-\frac14} = \frac{ML^2}{12}\cdot\frac43 = \boxed{\frac19 ML^2}.$$

### 知识点解析

- **转动惯量** $I=\sum m_i r_i^2=\int r^2\,dm$，描述质量离轴分布"抵抗转动"的程度。三角形薄板绕质心（垂直板面）$I=\frac m{36}(a^2+b^2+c^2)$，等边时 $=\frac1{12}m\ell^2$。
- **平行轴定理** $I=I_{\rm cm}+Md^2$：绕任意平行轴 = 绕质心轴的转动惯量 + $M\times$(两轴距离)²。这是把分块绕各自质心的 $I$ 平移到整体质心的关键。
- **分形自相似 + 递推**：每层是上层的 3 份放大摆放，得到递推式 $I_n=3I_{n-1}+m_{n-1}\ell_{n-1}^2$，再归一化求极限。
- **无穷等比级数** $\sum_{k=0}^{\infty}r^k=\frac1{1-r}$（$|r|<1$），此处 $r=\frac14$。
- 结果 $I=\frac19ML^2$ 比实心等边三角形（$\frac1{12}ML^2$）**大**——因为挖孔后质量被推到更靠外的角落，质量离轴更远。

---
