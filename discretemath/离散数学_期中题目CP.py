# -*- coding: utf-8 -*-
"""CSC3001 离散数学 · 期中题目 Cheat Sheet（A4 双面三栏 · 题目 + 解析）

引擎沿用 理科学习/cheatsheet_template.py，只改标题/副标题 + CONTENT。
本张 = 「纯题目」CP：期中真题库（题目 + 完整解析），与「知识点 CP」配套。
覆盖：两套期中卷全部 12 题 + 用户新增 4 题（中心二项式/斐波那契求和/XOR/推理规则）+ 生成函数。
"""
import os, sys
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import black, HexColor

DEJAVU_DIR = '/usr/share/fonts/truetype/dejavu/'
DROID = '/usr/share/fonts/truetype/droid/DroidSansFallbackFull.ttf'

def _reg(name, path):
    if not os.path.exists(path):
        raise FileNotFoundError('缺少字体文件：%s' % path)
    pdfmetrics.registerFont(TTFont(name, path))

_reg('DejaVu', DEJAVU_DIR + 'DejaVuSans.ttf')
_reg('DejaVu-Bold', DEJAVU_DIR + 'DejaVuSans-Bold.ttf')
_reg('DejaVuMono', DEJAVU_DIR + 'DejaVuSansMono.ttf')
_reg('Droid', DROID)

PAGE_W, PAGE_H = A4
ML = 28; MR = 28; MT = 42; MB = 26; GUTTER = 10; NCOL = 3
COL_W = (PAGE_W - ML - MR - GUTTER * (NCOL - 1)) / NCOL

BODY = 7.8; BODY_LEAD = 9.6
H1 = 9.2; H2 = 8.2; F_SZ = 8.0; MONO = 6.8; TITLE = 11.5; SUB = 7.0

C_BODY = black
C_FORM = HexColor('#14337f')
C_WARN = HexColor('#b00020')
C_H1   = HexColor('#0f2a5e')
C_H2   = HexColor('#123c74')
C_RULE = HexColor('#9fb3d0')

def is_cjk(ch):
    o = ord(ch)
    return (0x3000 <= o <= 0x303F) or (0x3400 <= o <= 0x4DBF) or \
           (0x4E00 <= o <= 0x9FFF) or (0xF900 <= o <= 0xFAFF) or (0xFF00 <= o <= 0xFFEF)

def split_runs(s):
    runs = []
    if not s:
        return runs
    cur = s[0]; st = 0
    for i, ch in enumerate(s):
        if is_cjk(ch) != is_cjk(cur):
            runs.append((s[st:i], is_cjk(cur)))
            cur = ch; st = i
    runs.append((s[st:], is_cjk(cur)))
    return runs

def chw(ch, size, latin, cjk):
    f = cjk if is_cjk(ch) else latin
    return pdfmetrics.stringWidth(ch, f, size)

def mixw(s, size, latin, cjk):
    return sum(chw(c, size, latin, cjk) for c in s)

def wrap_mixed(text, max_w, size, latin, cjk):
    lines = []
    cur = ''; cw = 0.0
    for ch in text:
        w = chw(ch, size, latin, cjk)
        if cur and cw + w > max_w:
            lines.append(cur)
            cur = ch; cw = w
        else:
            cur += ch; cw += w
    if cur:
        lines.append(cur)
    return lines

class Sheet:
    def __init__(self, c):
        self.c = c
        self.col = 0
        self.y = PAGE_H - MT
        self.page = 1
        self.draw_header(1)

    def x(self):
        return ML + self.col * (COL_W + GUTTER)

    def draw_header(self, pageno):
        c = self.c
        title = 'CSC3001 离散数学 · 期中题目 Cheat Sheet'
        sub = {1: '(A4 双面 · 第 1 面：题目 + 解析)',
               2: '(A4 双面 · 第 2 面：题目 + 解析 · 续)'}.get(pageno, '(A4 双面 · 续)')
        y = PAGE_H - 17
        x = ML
        for run, iscjk in split_runs(title):
            f = 'Droid' if iscjk else 'DejaVu-Bold'
            c.setFont(f, TITLE); c.setFillColor(C_H1)
            c.drawString(x, y, run)
            x += pdfmetrics.stringWidth(run, f, TITLE)
        sw = mixw(sub, SUB, 'DejaVu', 'Droid')
        xx = PAGE_W - MR - sw
        c.setFillColor(HexColor('#5a6b85'))
        for run, iscjk in split_runs(sub):
            f = 'Droid' if iscjk else 'DejaVu'
            c.setFont(f, SUB)
            c.drawString(xx, y - 3, run)
            xx += pdfmetrics.stringWidth(run, f, SUB)
        c.setStrokeColor(C_RULE); c.setLineWidth(0.5)
        c.line(ML, y - 8, PAGE_W - MR, y - 8)

    def new_page(self):
        self.c.showPage()
        self.page += 1
        self.col = 0
        self.y = PAGE_H - MT
        self.draw_header(self.page)

    def advance_col(self):
        if self.col < NCOL - 1:
            self.col += 1
            self.y = PAGE_H - MT
        else:
            self.new_page()

    def ensure(self, h):
        if self.y - h < MB:
            self.advance_col()

    def draw_line(self, text, size, latin, cjk, color, x, y):
        self.c.setFillColor(color)
        xx = x
        for run, iscjk in split_runs(text):
            f = cjk if iscjk else latin
            self.c.setFont(f, size)
            self.c.drawString(xx, y, run)
            xx += pdfmetrics.stringWidth(run, f, size)

def render(blocks, out_pdf):
    c = canvas.Canvas(out_pdf, pagesize=A4)
    sh = Sheet(c)
    for b in blocks:
        typ = b[0]
        if typ == 'pagebreak':
            while sh.col != 0:
                sh.advance_col()
            if sh.y != PAGE_H - MT:
                sh.new_page()
            continue
        text = b[1]
        if typ == 'h1':
            sh.ensure(H1 + 7)
            if sh.y < PAGE_H - MT - 3:
                sh.y -= 2.0
            sh.ensure(H1 + 7)
            y = sh.y
            sh.draw_line(text, H1, 'DejaVu-Bold', 'Droid', C_H1, sh.x(), y)
            sh.c.setStrokeColor(C_RULE); sh.c.setLineWidth(0.6)
            sh.c.line(sh.x(), y - 1.8, sh.x() + COL_W, y - 1.8)
            sh.y = y - 12.0
        elif typ == 'h2':
            sh.ensure(H2 + 4)
            y = sh.y
            sh.draw_line(text, H2, 'DejaVu-Bold', 'Droid', C_H2, sh.x(), y)
            sh.y = y - 11.5
        elif typ == 'p':
            for ln in wrap_mixed(text, COL_W, BODY, 'DejaVu', 'Droid'):
                sh.ensure(BODY_LEAD)
                sh.draw_line(ln, BODY, 'DejaVu', 'Droid', C_BODY, sh.x(), sh.y)
                sh.y -= BODY_LEAD
            sh.y -= 0.8
        elif typ == 'f':
            for ln in wrap_mixed(text, COL_W - 8, F_SZ, 'DejaVu', 'Droid'):
                sh.ensure(BODY_LEAD)
                sh.draw_line(ln, F_SZ, 'DejaVu', 'Droid', C_FORM, sh.x() + 3, sh.y)
                sh.y -= BODY_LEAD
            sh.y -= 0.8
        elif typ == 'li':
            for i, ln in enumerate(wrap_mixed(text, COL_W - 8, BODY, 'DejaVu', 'Droid')):
                sh.ensure(BODY_LEAD)
                if i == 0:
                    sh.draw_line('• ', BODY, 'DejaVu', 'Droid', C_H2, sh.x(), sh.y)
                sh.draw_line(ln, BODY, 'DejaVu', 'Droid', C_BODY, sh.x() + 7, sh.y)
                sh.y -= BODY_LEAD
            sh.y -= 0.5
        elif typ == 'w':
            for ln in wrap_mixed(text, COL_W, BODY, 'DejaVu-Bold', 'Droid'):
                sh.ensure(BODY_LEAD)
                sh.draw_line(ln, BODY, 'DejaVu-Bold', 'Droid', C_WARN, sh.x(), sh.y)
                sh.y -= BODY_LEAD
            sh.y -= 0.8
        elif typ == 'mono':
            for ln in text.split('\n'):
                sh.ensure(MONO + 1.8)
                sh.c.setFont('DejaVuMono', MONO); sh.c.setFillColor(HexColor('#20304a'))
                sh.c.drawString(sh.x(), sh.y, ln)
                sh.y -= MONO + 1.8
            sh.y -= 0.8
    c.save()

# ============================================================
CONTENT = [
    ('h1', '★ 考点地图（题型 → 核心方法）'),
    ('p', '范围 LN1–LN6，考到 GCD。期中真题两套 12 题 + 补充题 + A1/A2 作业题，按主题速查：'),
    ('li', '命题逻辑：真值表(T18)、XOR 等价(T15)、推理规则(T16)'),
    ('li', '集合：∈vs⊆+幂集(T19)、差集恒等式(T20)、差集反证(T11)、Z={3s+5t}(T10)'),
    ('li', '一阶逻辑：翻译(T1)、否定(T21)、谓词性质(T22)'),
    ('li', '证明方法：逆否(T23)、整除归纳(T24)、不等式归纳(T25)、强归纳(T26)、裂项求和(T9)'),
    ('li', '递归/生成函数：括号计数(T8)、递推建模(T12)、生成函数(T17)、斐波那契(T5/T14/T28)、中心二项式(T13)'),
    ('li', '数论：4k+3 素数(T2)、Euclid 上界(T3)、扩展Euclid/水壶(T27)、因子分解(T4)'),
    ('li', '组合/不变量：向日葵(T7)、翻牌(T6)'),
    ('w', '只收题目+解析；定理见「知识点 CP」。证明题关键引理/归纳步 = 1–2 分，别跳步。'),

    ('h1', 'T1 · 一阶逻辑翻译 FOL（20 分）'),
    ('p', '【题】D = 所有人。nice(x)：x 善良；busy(x)：x 忙；friend(x,y)：x 与 y 是朋友。翻译：'),
    ('li', '① Every busy person has at least one friend；'),
    ('li', '② Nice people never have a busy person as a friend。'),
    ('f', '【解 ①】∀x∈D (busy(x) → ∃y∈D friend(x,y))'),
    ('f', '【解 ②】∀x∈D (nice(x) → ¬∃y∈D (busy(y) ∧ friend(x,y)))'),
    ('f', '　≡ ∀x∈D ∀y∈D (nice(x) ∧ busy(y) → ¬friend(x,y))'),
    ('p', '② 等价：¬∃y(B∧F) ≡ ∀y¬(B∧F) ≡ ∀y(B→¬F)，量词前置换蕴含形式。'),
    ('li', '全称限定「每个 A 都 B」写 ∀(A→B)，绝不 ∀(A∧B)；「至少一个」用 ∃；「从不/没有」用 ¬∃ 或 ∀¬。'),
    ('w', '易错：∃ 与 ∧ 连用、∀ 与 → 连用；y 必须落在 ∃y 辖域内。'),

    ('h1', 'T2 · 4k+3 型素数无穷多（16 分）'),
    ('p', '【题】证：存在无穷多个形如 4k+3（k≥0）的素数。'),
    ('f', '【解】反证：设 4k+3 型素数仅有 q₁,…,qₙ。令 N = 4q₁q₂⋯qₙ − 1。'),
    ('li', '① N = 4(q₁⋯qₙ−1)+3 ≡ 3 (mod 4)，且 N 奇 ⇒ 2 ∤ N。'),
    ('li', '② 对每个 qⱼ：N ≡ −1 (mod qⱼ) ⇒ qⱼ ∤ N（躲开所有已知 4k+3 素数）。'),
    ('li', '③ N 的素因子全为奇数 ⇒ 每个 ≡1 或 ≡3 (mod 4)。'),
    ('li', '④ (4a+1)(4b+1)=4(4ab+a+b)+1 ⇒ 4k+1 型乘积仍 4k+1 型。'),
    ('li', '⑤ 若 N 素因子全 4k+1 型 ⇒ N 也 4k+1 型，与 N≡3 矛盾 ⇒ 存在 4k+3 型素数 p|N，p∉{q₁..qₙ}。矛盾。∎'),
    ('w', '为何用 −1 不用 +3：+3 时若 3∈{qⱼ} 则 3|N、躲不开。灵魂 =「4k+1 型封闭，乘不出 4k+3」。'),

    ('h1', 'T3 · Euclid 步数上界（Lamé，12 分）'),
    ('p', '【题】a≥b≥0。gcd(a,b)：b=0 输出 a；否则 a=qb+r（q=⌊a/b⌋，r=a−qb），递归 gcd(b,r)。f₁=f₂=1，fₙ=fₙ₋₁+fₙ₋₂。证：b<fₙ ⇒ 执行除法行至多 n−1 次。'),
    ('f', '【解】证更强逆否：至少执行 n 次 ⇒ a≥fₙ₊₁ 且 b≥fₙ。'),
    ('li', '基 n=1：至少 1 次 ⇒ b≠0 ⇒ b≥1=f₁，a≥b≥1=f₂。'),
    ('li', '步：首步 a=q₁b+r（q₁≥1），递归 gcd(b,r) 再至少 n−1 次 ⇒ 归纳假设 b≥fₙ，r≥fₙ₋₁。'),
    ('f', '∴ a = q₁b+r ≥ b+r ≥ fₙ+fₙ₋₁ = fₙ₊₁。逆否回推：b<fₙ ⇒ 至多 n−1 次。∎'),
    ('w', '关键：a、b 两个下界都要证；最坏输入 = 相邻斐波那契数 (fₙ₊₁,fₙ)。'),

    ('h1', 'T4 · 因子分解 / Shor 背景（16 分）'),
    ('p', '【题】N 奇合数且非素数幂（≠pᵏ）。2≤a<N，r=最小正整数使 a^r≡1 (mod N)，r 偶。'),
    ('li', '(a) 证 N ∤ a^(r/2) − 1。(b) 证若 gcd(N, a^(r/2)+1) ≠ N，则 gcd(N, a^(r/2)−1) 是 N 的非平凡因子。'),
    ('f', '(a) 反证：若 N | a^(r/2)−1 ⇒ a^(r/2)≡1 (mod N)，r/2<r，与 r 最小性矛盾。∎'),
    ('f', '(b) 令 g=gcd(N, a^(r/2)−1)。g|N 且由 (a) g≠N。'),
    ('li', 'a^r≡1 ⇒ N | (a^(r/2)−1)(a^(r/2)+1)。若 g=1，由 Euclid 引理（c|ab 且 gcd(c,a)=1 ⇒ c|b）⇒ N | a^(r/2)+1 ⇒ gcd(N,a^(r/2)+1)=N，矛盾 ⇒ g≠1。'),
    ('f', '∴ g|N、g≠1、g≠N ⇒ 非平凡因子。∎'),
    ('w', 'Shor 核心：偶数阶 r 且 a^(r/2) ≢ −1 ⇒ 两次 gcd 劈出因子。「非素数幂」= 至少两个不同素因子。'),

    ('h1', 'T5 · 斐波那契恒等式（16 分）'),
    ('p', '【题】F₀=0, F₁=1, Fₙ=Fₙ₋₁+Fₙ₋₂。(a) 证 Fₘ₊ₙ = FₘFₙ₊₁ + FₙFₘ₋₁。(b) 证 gcd(Fₘ,Fₙ)=F_{gcd(m,n)}。'),
    ('f', '(a) A=[[1,1],[1,0]]。归纳 A^k=[[Fₖ₊₁,Fₖ],[Fₖ,Fₖ₋₁]]。'),
    ('f', 'Fₘ₊ₙ = (A^(m+n−1))₁₁ = (A^n·A^(m−1))₁₁ = [Fₙ₊₁,Fₙ]·[Fₘ,Fₘ₋₁]ᵀ = FₘFₙ₊₁+FₙFₘ₋₁。∎'),
    ('f', '(b) 引理 gcd(Fₙ₊₁,Fₙ)=1。m>n：Fₘ=Fₘ₋ₙFₙ₊₁+Fₘ₋ₙ₋₁Fₙ ⇒'),
    ('f', 'gcd(Fₘ,Fₙ)=gcd(Fₘ₋ₙFₙ₊₁,Fₙ)=gcd(Fₘ₋ₙ,Fₙ)（丢互素因子 Fₙ₊₁）。'),
    ('li', '下标跑 Euclid：(m,n)→(m−n,n)→…→(gcd(m,n),0) ⇒ gcd(Fₘ,Fₙ)=F_{gcd(m,n)}。∎'),
    ('w', '两招：丢「Fₙ 倍数」项、丢「与 Fₙ 互素的 Fₙ₊₁」因子。gcd 的下标自己跑 Euclid。'),

    ('h1', 'T6 · 二进制串翻牌游戏（16 分）'),
    ('p', '【题】2000 位全 1。每步选前 1951 位中的 1，把它和右边 49 位一起翻转（共 50 位），直到找不到可选的 1。(a) 证二进制数每步递减；(b) 证总步数偶。'),
    ('li', '(a) 选的 1 是所翻 50 位最左（最高）位，1→0；低位变化无法抵消最高位下降 ⇒ 数值严格递减。∎'),
    ('f', '(b) 看位置 1+50k（k=0..39）共 40 位，和 S。50 个连续整数恰一个 ≡1 (mod 50) ⇒ 每步恰翻 S 中一位 ⇒ S 奇偶每步翻转。'),
    ('li', '初始 S=40（偶）；终止前 1951 位全 0 ⇒ S=0（偶）。偶→偶 必须偶数步。∎'),
    ('w', '不变量 = S 的奇偶性（每步必变，但首末同奇偶 ⇒ 步数偶）。'),

    ('h1', 'T7 · 向日葵引理（Erdős–Rado，16 分）'),
    ('p', '【题】(a) F={{1,2,3},{1,3,4},{1,3,5},{2,6,7},{5,8,9},{4,7,9}}。找 W⊆F、S 使 |W|≥3 且两两交=S。(b) F 有 >k!(r−1)^k 个互异非空集、每集 ≤k，证存在 r 瓣向日葵。'),
    ('f', '(a) W={{1,2,3},{1,3,4},{1,3,5}}，S={1,3}（去 S 后 {2}{4}{5} 两两不交）。'),
    ('li', '(b) 对 k 归纳。k=1：>r−1 个单元素集 ⇒ 取 r 个两两不交 ⇒ 空核。'),
    ('li', 'k≥2：取极大两两不交族 A={A₁..A_t}。若 t≥r 完工（空核）。'),
    ('li', '若 t≤r−1：B=∪Aᵢ，|B|≤k(r−1)。极大性 ⇒ 每集都碰 B。'),
    ('f', '鸽笼：∃x∈B 落在 > |F|/|B| > k!(r−1)^k/(k(r−1)) = (k−1)!(r−1)^(k−1) 个集里。'),
    ('li', 'Fₓ={A\{x}}: 大小 ≤k−1、个数 >(k−1)!(r−1)^(k−1) ⇒ 归纳得 r 瓣核 S′ ⇒ 加回 x 得核 S′∪{x}。∎'),
    ('w', '骨架：空核大向日葵 ∨ 鸽笼找热门 x → 删 x 降 k → 归纳 → 加回 x。'),

    ('h1', 'T8 · 括号计数 / 卡特兰数（20 分）'),
    ('p', '【题】n 对括号合法排列数 r_n（r₀=1，r₁=1，r₂=2，r₃=5）。(a) 用 r₀..rₙ₋₁ 写递推并解释；(b) 求 r₄、r₅。'),
    ('f', '(a) r_n = ∑_{i=1}^{n} r_{i−1}·r_{n−i}，r₀=1。'),
    ('p', '理由：合法串首字符必为 “(”。看它配对的右括号是第 i 对：里面恰 i−1 对（r_{i−1} 种）、右边恰 n−i 对（r_{n−i} 种），对 i=1..n 求和。'),
    ('f', '(b) r₄ = r₀r₃+r₁r₂+r₂r₁+r₃r₀ = 5+2+2+5 = 14；'),
    ('f', 'r₅ = r₀r₄+r₁r₃+r₂r₂+r₃r₁+r₄r₀ = 14+5+4+5+14 = 42。∎'),
    ('w', '这就是 Catalan 数 r_n=C(2n,n)/(n+1)，序列 1,1,2,5,14,42,…。自卷积递推是它的标志。'),

    ('h1', 'T9 · 裂项求和 Σk² / Σk³（16 分）'),
    ('p', '【题】(a) 证 ∑_{k=1}^{n} k² = n(n+1)(2n+1)/6。(b) 由 k⁴−(k−1)⁴ = 4k³−6k²+4k−1 求 ∑_{k=1}^{n} k³ 的多项式公式。'),
    ('li', '(a) 归纳。基 n=1：1=1。步：n(2n+1)+6(n+1)=2n²+7n+6=(n+2)(2n+3)，得 n+1 的式子。∎'),
    ('li', '(b) 裂项相消：∑[k⁴−(k−1)⁴] = n⁴（只剩 n⁴−0⁴）。'),
    ('f', '代入 Σk²、Σk=n(n+1)/2、Σ1=n：n⁴ = 4∑k³ − n(n+1)(2n+1) + 2n(n+1) − n。'),
    ('f', '解得 ∑k³ = [n(n+1)/2]²。∎'),
    ('w', '套路：幂和公式 =「高一次幂裂项」+「代入已知低次和」。别从零推 Σk³，直接代题给的恒等式。'),

    ('h1', 'T10 · 整数表示 Z = {3s+5t}（16 分）'),
    ('p', '【题】证 Z = {3s+5t | s,t∈Z}。'),
    ('f', '【解】双向包含（double inclusion）。'),
    ('li', '(⊇) 整数对加、乘封闭 ⇒ 3s+5t∈Z ⇒ 右集 ⊆ Z。'),
    ('li', '(⊆) 任意 n：取 s=2n、t=−n ⇒ 3(2n)+5(−n)=6n−5n=n ⇒ n∈右集 ⇒ Z ⊆ 右集。'),
    ('w', '本质：gcd(3,5)=1 且 3·2+5·(−1)=1，两边乘 n 即把任意 n 表示出来。一般 {as+bt}=gcd(a,b)Z。'),

    ('h1', 'T11 · 集合包含与差集（16 分）'),
    ('p', '【题】A⊆B，a∈A，a∉(B−C)。证 a∈C。'),
    ('f', '【解】反证：设 a∉C。a∈A⊆B ⇒ a∈B；配合 a∉C ⇒ a∈B−C，与 a∉(B−C) 矛盾 ⇒ a∈C。∎'),
    ('p', '直接证：a∈B 且 a∉B−C，而 B−C=B\C，故「a∉B 或 a∈C」，配合 a∈B 只得 a∈C。'),
    ('w', '差集定义 B−C={x | x∈B ∧ x∉C}；「x∉B−C」= ¬(x∈B ∧ x∉C) = x∉B ∨ x∈C。'),

    ('h1', 'T12 · 递推关系建模（20 分）'),
    ('p', '【题】只建模不求解。(a) 每个 1 后紧跟至少两个 0 的 n 位串数；(b) 至多两个 1 的 n 位串数。'),
    ('li', '(a) 合法串不能以 1 或 10 结尾 ⇒ 只能以 000（补 0，a_{n−1}）或 100（补 100，a_{n−3}）结尾。'),
    ('f', 'a_n = a_{n−1} + a_{n−3}，a₀=a₁=a₂=1。'),
    ('li', '(b) 按末位：加 0 → b_{n−1}；加 1 → 前 n−1 位至多一个 1 = 1(零个)+(n−1)(恰一个) = n。'),
    ('f', 'b_n = b_{n−1} + n，b₀=1。'),
    ('w', '递推建模套路：按「结尾形态」分情形（reason by cases），每种结尾对应一个更短的前缀。'),

    ('h1', 'T13 · 中心二项式系数（10 分）'),
    ('p', '【题】b_n=C(2n,n)（b₀=1,b₁=2,b₂=6,b₃=20…）。(1) 证生成函数 B(x)=∑b_n x^n=1/√(1−4x)。(2) 推出 ∑_{k=0}^{n} C(2k,k)·C(2n−2k,n−k)=4^n。'),
    ('li', '(1) 广义二项式：(1−4x)^(−1/2)=∑C(−1/2,n)(−4x)^n。'),
    ('f', 'C(−1/2,n) = (−1)^n·1·3·5⋯(2n−1)/(2^n·n!) = (−1)^n·C(2n,n)/4^n。'),
    ('f', '乘 (−4x)^n=(−1)^n 4^n x^n ⇒ 系数 = C(2n,n)。故 B(x)=1/√(1−4x)。∎'),
    ('li', '(2) B(x)²=1/(1−4x)=∑4^n x^n；而 B(x)² 的 x^n 系数 = ∑_{k=0}^{n} b_k b_{n−k} = ∑ C(2k,k)C(2n−2k,n−k)。'),
    ('f', '对比系数：∑_{k=0}^{n} C(2k,k)·C(2n−2k,n−k) = 4^n。∎'),
    ('w', '分数二项式系数 C(−1/2,n) 用广义二项式定理展开：1·3·5⋯(2n−1)=(2n)!/(2^n n!)。'),

    ('h1', 'T14 · 斐波那契求和（10 分）'),
    ('p', '【题】(1) S1_n = F₁+F₃+⋯+F₂ₙ₋₁（n≥1）；(2) S2_n = F₀−F₁+F₂−⋯+(−1)^n Fₙ（n≥1）。求值（可用 F 表示）。'),
    ('f', '(1) S1_n = F₂ₙ。归纳：基 n=1 是 F₁=1=F₂；步 S1_{n+1}=F₂ₙ+F₂ₙ₊₁=F₂ₙ₊₂。∎'),
    ('f', '(2) S2_n = (−1)^n Fₙ₋₁ − 1。'),
    ('li', '验 n=1..4：F₀−F₁=−1；−1+1=0；−1+1−2=−2；−2+3=1，均 = (−1)^n Fₙ₋₁−1。∎'),
    ('w', '奇下标和 S1 = 跳到偶下标的 F；交替和 S2 缩到相邻下标的 F，都可归纳直接证。'),

    ('h1', 'T15 · XOR 逻辑等价（5 分）'),
    ('p', '【题】用逻辑等价证 (p∧q)⊕(p∨q) ≡ p⊕q。'),
    ('f', '【解】A⊕B≡(A∧¬B)∨(¬A∧B)，取 A=p∧q, B=p∨q：'),
    ('f', '(p∧q)⊕(p∨q) ≡ [(p∧q)∧¬(p∨q)] ∨ [¬(p∧q)∧(p∨q)]'),
    ('f', '　≡ F ∨ [(¬p∨¬q)∧(p∨q)]（De Morgan；p∧¬p≡F）'),
    ('f', '　≡ (p∧¬q) ∨ (¬p∧q) ≡ p⊕q。∎'),
    ('w', '第一支 (p∧q)∧¬(p∨q)≡F 自相矛盾；第二支分配后恰是 XOR 定义。'),

    ('h1', 'T16 · 推理规则（10 分）'),
    ('p', '【题】由 ∀x(R(x)→S(x)) 与 ∃x(M(x)∧¬S(x))，证 ∃x(M(x)∧¬R(x))。'),
    ('f', '① ∃x(M(x)∧¬S(x)) → EI 得 M(c)∧¬S(c)；化简得 M(c)、¬S(c)。'),
    ('f', '② ∀x(R(x)→S(x)) → UI 得 R(c)→S(c)。'),
    ('f', '③ Modus tollens（¬S(c) + R(c)→S(c)）⇒ ¬R(c)。'),
    ('f', '④ 合取 M(c)∧¬R(c) → EG 得 ∃x(M(x)∧¬R(x))。∎'),
    ('w', '顺序：EI 先于 UI（c 由存在句给出）、Modus tollens 是关键跳板。'),

    ('h1', 'T17 · 生成函数（10 分）'),
    ('p', '【题】求 a_n=n 与 a_n=C(n+2,2)=(n+2)(n+1)/2 的生成函数。'),
    ('f', '1/(1−x) = ∑x^n。求导：1/(1−x)² = ∑(n+1)x^n ⇒ ∑ n x^n = x/(1−x)²。'),
    ('f', '再求导：2/(1−x)³ = ∑(n+2)(n+1)x^n ⇒ ∑ C(n+2,2)x^n = 1/(1−x)³。'),
    ('w', '系数是 n 的 k 次多项式 ⇒ 对 1/(1−x) 求 k 次导再调系数。C(n+k,k) 的 GF = 1/(1−x)^(k+1)。'),

    ('h1', 'T18 · 真值表证 XOR ≡ ¬双条件'),
    ('p', '【题】用真值表证 p⊕q ≡ ¬(p↔q)。'),
    ('f', '【解】列 4 行：p,q=T,T→p⊕q=F, p↔q=T, ¬(p↔q)=F；'),
    ('f', 'T,F→T/F/T；F,T→T/F/T；F,F→F/T/F。'),
    ('f', 'p⊕q 列 = F,T,T,F，¬(p↔q) 列 = F,T,T,F，逐行相同 ⇒ 逻辑等价。∎'),
    ('w', '真值表证等价 = 两列全同（覆盖全部赋值）。XOR「恰一真」，↔「真假一致」，天然互为否定。'),

    ('h1', 'T19 · 集合 ∈ vs ⊆ + 幂集反例'),
    ('p', '【题】(i) 判 4 句真假：∅∈{{∅},{1}}；∅⊆{{∅},{1}}；{1}∈{1,{{1}}}；{{1}}⊆{1,{1},{{1}}}。'),
    ('p', '(ii) P(A∪B)=P(A)∪P(B) 恒成立？'),
    ('f', '(i) F / T / F / T。'),
    ('li', '∅∈{{∅},{1}} 假：元素是 {∅}、{1}，∅ 不是其一；∅⊆… 真：空集是任何集子集。'),
    ('li', '{1}∈{1,{{1}}} 假：元素是 1、{{1}}；{{1}}⊆{1,{1},{{1}}} 真：唯一元素 {1} 在集合里。'),
    ('f', '(ii) 反例 A={1},B={2}：{1,2}∈P(A∪B) 但 P(A)∪P(B)={∅,{1},{2}} 不含 {1,2}。∎'),
    ('w', '∈ 是元素级、⊆ 是集合级，别混；幂集合并会漏「跨 A、B」的子集。'),

    ('h1', 'T20 · 元素论证：差集恒等式'),
    ('p', '【题】证 A−(B−C) = (A−B)∪(A∩C)。'),
    ('f', '【解】任意 x：x∈A−(B−C) ⟺ x∈A ∧ x∉(B−C)'),
    ('f', '⟺ x∈A ∧ ¬(x∈B ∧ x∉C) ⟺ x∈A ∧ (x∉B ∨ x∈C)（De Morgan）'),
    ('f', '⟺ (x∈A∧x∉B) ∨ (x∈A∧x∈C)（分配律）⟺ x∈(A−B)∪(A∩C)。∎'),
    ('w', '差集 B−C 的否定拆成「∉B 或 ∈C」是核心一步；两边成员一致即集合相等。'),

    ('h1', 'T21 · 一阶逻辑否定（¬ 压到谓词）'),
    ('p', '【题】把 ¬[∃x ∀y ((R(x)∨¬M(y)) → S(x))] 的否定压到谓词前。'),
    ('f', '¬∃→∀，¬∀→∃：∀x ∃y ¬[(R∨¬M)→S]'),
    ('f', '　= ∀x ∃y ¬[¬(R∨¬M) ∨ S]（A→B≡¬A∨B）'),
    ('f', '　= ∀x ∃y [(R∨¬M) ∧ ¬S]（De Morgan + 双重否定）。∎'),
    ('w', '顺序：先换量词，再拆 →，最后 De Morgan；终态每个 ¬ 紧贴谓词（¬M、¬S）。'),

    ('h1', 'T22 · 谓词性质：自反 / 反对称 / 传递'),
    ('p', '【题】D=Z，P(x,y)≡∃k∈Z(k≥0 ∧ y=x+2k)。判自反、反对称、传递。'),
    ('f', '自反：k=0 ⇒ y=x。反对称：P(x,y)∧P(y,x) ⇒ y=x+2k₁, x=y+2k₂ ⇒ 2(k₁+k₂)=0 ⇒ k₁=k₂=0 ⇒ x=y。'),
    ('f', '传递：P(x,y)∧P(y,z) ⇒ z=x+2(k₁+k₂)，k₁+k₂≥0 ⇒ P(x,z)。三者全成立（偏序）。∎'),
    ('w', '反对称靠「两方向相加 + 系数≥0 迫使 0」；传递把两个 k 相加。'),

    ('h1', 'T23 · 逆否证明（Contraposition）'),
    ('p', '【题】n 整数，证：若 n²+4n+7 偶，则 n 奇。'),
    ('f', '【解】证逆否「n 偶 ⇒ n²+4n+7 奇」。设 n=2m：'),
    ('f', 'n²+4n+7 = 4m²+8m+7 = 2(2m²+4m+3)+1 奇。∎'),
    ('w', '「若 P 则 Q」难直接证时转「非 Q ⇒ 非 P」；写成 2·整数+1 判奇。'),

    ('h1', 'T24 · 整除归纳（21 | 4^{n+1}+5^{2n−1}）'),
    ('p', '【题】n≥1，证 21 | (4^{n+1}+5^{2n−1})。'),
    ('f', '【解】基 n=1：4²+5¹=16+5=21 ✓。'),
    ('f', '步：4^{k+2}+5^{2k+1} = 4·4^{k+1} + 25·5^{2k−1}'),
    ('f', '　= 4·4^{k+1} + (4+21)·5^{2k−1} = 4(4^{k+1}+5^{2k−1}) + 21·5^{2k−1}。'),
    ('f', '归纳假设令前半 =21t ⇒ 原式 =21(4t+5^{2k−1})。∎'),
    ('w', '关键拆 25=4+21：凑出「4×归纳假设」+「21×整数」两项。'),

    ('h1', 'T25 · 不等式归纳（Σ 1/k³）'),
    ('p', '【题】n≥1，证 Σ_{k=1}^{n} 1/k³ ≤ 3/2 − 1/(2n²)。'),
    ('f', '【解】基 n=1：1 ≤ 3/2−1/2=1 ✓。'),
    ('f', '步：假设成立，加末项得 ≤ 3/2−1/(2n²)+1/(n+1)³。'),
    ('f', '只需证 1/(n+1)³ ≤ 1/(2n²)−1/(2(n+1)²) = (2n+1)/(2n²(n+1)²)。'),
    ('f', '去正分母 ⟺ 2n² ≤ (2n+1)(n+1) = 2n²+3n+1，因 3n+1≥0 成立。∎'),
    ('w', '归纳不等式套路：假设 + 末项 ≤ 新目标上界，化成可验的代数不等式。'),

    ('h1', 'T26 · 强归纳：递推闭式'),
    ('p', '【题】a₁=1, a₂=8, aₙ=aₙ₋₁+2aₙ₋₂ (n≥3)。证 aₙ = 3·2^{n−1} + 2·(−1)^n。'),
    ('f', '【解】基 n=1：3−2=1 ✓；n=2：6+2=8 ✓。'),
    ('f', '步（强归纳假设 1..n 都成立，n≥2）：a_{n+1} = aₙ + 2aₙ₋₁'),
    ('f', '　= [3·2^{n−1}+2(−1)^n] + 2[3·2^{n−2}+2(−1)^{n−1}]'),
    ('f', '　= 3·2^n + 2(−1)^n − 4(−1)^n（(−1)^{n−1}=−(−1)^n）'),
    ('f', '　= 3·2^n + 2(−1)^{n+1}。∎'),
    ('w', '二阶递推需两个基；强归纳可同时用 aₙ、aₙ₋₁；收尾靠 (−1)^{n−1}=−(−1)^n。'),

    ('h1', 'T27 · 扩展欧几里得 / 水壶（Bézout）'),
    ('p', '【题】(a) 求 gcd(2024,748) 及 s,t 使 s·2024+t·748=gcd。'),
    ('p', '(b) 12L/21L 水壶能否量出 3L？18L/45L 能否量出 12L？'),
    ('f', '(a) 2024=2·748+528；748=1·528+220；528=2·220+88；220=2·88+44；88=2·44+0 ⇒ gcd=44。'),
    ('f', '回代：44 = −7·2024 + 19·748。∎'),
    ('f', '(b) gcd(12,21)=3，3|3 ⇒ 可量 3L；gcd(18,45)=9，9∤12 ⇒ 不可量 12L。∎'),
    ('w', '水壶可量容量 = gcd 的倍数（Bézout）；「不可行」看 gcd 是否整除目标。'),

    ('h1', 'T28 · Cassini 恒等式（矩阵 det）'),
    ('p', '【题】证 F_{n+1}F_{n−1} − F_n² = (−1)^n（n≥1）。'),
    ('f', '【解】A=[[1,1],[1,0]]，det A=−1。已知 A^n=[[F_{n+1},F_n],[F_n,F_{n−1}]]。'),
    ('f', 'det(A^n)=(det A)^n=(−1)^n，即 F_{n+1}F_{n−1}−F_n²=(−1)^n。∎'),
    ('w', '矩阵 det 法是 Cassini 最短路：det(AB)=det A · det B，一行收工。'),

    ('h1', 'T29 · 整除：奇 n 时 24 | n³−n'),
    ('p', '【题】n 为奇数，证 24 | n³−n。'),
    ('f', '【解】n=2k+1 ⇒ n³−n = n(n−1)(n+1) = (2k+1)(2k)(2k+2) = 4k(k+1)(2k+1)。'),
    ('li', 'k(k+1) 两连整数 ⇒ 偶 ⇒ 4·2=8 整除；2k,2k+1,2k+2 三连整数含 3 的倍数 ⇒ 3 整除。'),
    ('f', 'gcd(3,8)=1 ⇒ 24 | n³−n。∎'),
    ('w', '奇 n 时 (n−1)(n+1) 是两个连续偶数 ⇒ 一个被 4 整除 ⇒ 乘积被 8 整除。'),

    ('h1', 'T30 · Euclid 引理：素数整除'),
    ('p', '【题】p 素数，证 p|ab ⇒ p|a 或 p|b。'),
    ('f', '【解】设 p∤a，证 p|b。p 素且 p∤a ⇒ gcd(p,a)=1。'),
    ('f', 'Bézout：∃s,t 使 sp+ta=1 ⇒ 乘 b：spb+tab=b。'),
    ('f', 'p|spb 且 p|ab（题设）⇒ p|(spb+tab)=b。∎'),
    ('w', '套路：先 gcd(p,a)=1，再用 Bézout 线性组合；是素因子唯一分解的基石。'),

    ('h1', 'T31 · Lucas 生成函数'),
    ('p', '【题】L₀=2, L₁=1, Lₙ=Lₙ₋₁+Lₙ₋₂ (n≥2)。求 L(x)=ΣLₙxⁿ。'),
    ('f', '【解】L(x) = 2 + x + Σ_{n≥2}(Lₙ₋₁+Lₙ₋₂)xⁿ'),
    ('f', '　= 2+x + x(L(x)−2) + x²L(x)'),
    ('f', '　⇒ L(x)(1−x−x²) = 2+x−2x = 2−x ⇒ L(x)=(2−x)/(1−x−x²)。∎'),
    ('w', 'Lucas 与 Fibonacci 同分母 1−x−x²，仅分子不同（2−x vs x）。'),

    ('h1', 'T32 · 整除归纳：57 | 7^{n+2}+8^{2n+1}'),
    ('p', '【题】n≥0，证 57 | 7^{n+2} + 8^{2n+1}。'),
    ('f', '【解】基 n=0：7²+8¹=49+8=57 ✓。'),
    ('f', '步：7^{n+3}+8^{2n+3} = 7·7^{n+2} + 64·8^{2n+1}'),
    ('f', '　= 7·7^{n+2} + (7+57)·8^{2n+1} = 7(7^{n+2}+8^{2n+1}) + 57·8^{2n+1}。'),
    ('f', '归纳假设令前项 =57t ⇒ 原式 =57(7t+8^{2n+1})。∎'),
    ('w', '关键拆 64=7+57，与 T24 拆 25=4+21 同一招：凑出「系数×归纳假设」+「整除系数×整数」。'),

    ('h1', 'T33 · Σ i·Fᵢ 求和（归纳）'),
    ('p', '【题】证 Σ_{i=1}^{n} i·Fᵢ = n·F_{n+2} − F_{n+3} + 2。'),
    ('f', '【解】基 n=1：1·F₁=1 = F₃−F₄+2 = 2−3+2 = 1 ✓。'),
    ('f', '步：加 (n+1)F_{n+1}，代 F_{n+1}=F_{n+3}−F_{n+2}：'),
    ('f', '　= nF_{n+2}−F_{n+3}+2 + (n+1)(F_{n+3}−F_{n+2})'),
    ('f', '　= nF_{n+3}−F_{n+2}+2 = (n+1)F_{n+3}−F_{n+4}+2（F_{n+4}=F_{n+3}+F_{n+2}）。∎'),
    ('w', '加权和归纳：用 F_{n+1}=F_{n+3}−F_{n+2} 消掉「旧下标」，再拼出 n+1 的形。'),
]

if __name__ == '__main__':
    out = sys.argv[1] if len(sys.argv) > 1 else '/tmp/cheatsheet.pdf'
    render(CONTENT, out)
    print('DONE', out)
