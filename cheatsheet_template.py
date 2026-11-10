# -*- coding: utf-8 -*-
"""A4 双面三栏 Cheat Sheet 通用模板（reportlab）

换科目只改两处：
  1. 文件末尾 draw_header 里的课程标题 / 副标题（第 1 面 / 第 2 面）
  2. CONTENT 列表（按块类型填内容）

块类型 legend（格式规范见 CP格式要求.md）:
  ('pagebreak',)                  强制换页（先填满当前页再开新页）
  ('h1', '标题')                  大节标题 + 下方分隔线（深蓝粗）
  ('h2', '小标题')                小节标题（深蓝粗）
  ('p',  '正文…')                 段落，自动换行（黑）
  ('f',  '公式…')                 公式/定义行（深蓝，缩进）
  ('li', '条目…')                 项目符号 •（黑）
  ('w',  '警示…')                 易错/陷阱（红色加粗）
  ('mono','矩阵\n多行')           等宽矩阵/表格，按 \\n 分行，不自动换行
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import black, HexColor

# ---------- 字体注册（自动找路径，找不到会报错提示） ----------
DEJAVU_DIR = '/usr/share/fonts/truetype/dejavu/'
DROID = '/usr/share/fonts/truetype/droid/DroidSansFallbackFull.ttf'


def _reg(name, path):
    if not os.path.exists(path):
        raise FileNotFoundError('缺少字体文件：%s（换环境时改这里）' % path)
    pdfmetrics.registerFont(TTFont(name, path))


_reg('DejaVu', DEJAVU_DIR + 'DejaVuSans.ttf')
_reg('DejaVu-Bold', DEJAVU_DIR + 'DejaVuSans-Bold.ttf')
_reg('DejaVuMono', DEJAVU_DIR + 'DejaVuSansMono.ttf')
_reg('Droid', DROID)

# ---------- 页面与排版常量（一般不动） ----------
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

# ---------- 中英混排引擎（不要改） ----------
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
        # ↓↓↓ 换科目：改标题和副标题 ↓↓↓
        title = 'COURSE 课程名 · 考试名 Cheat Sheet'
        sub = {1: '(A4 双面 · 第 1 面：理论主线)',
               2: '(A4 双面 · 第 2 面：计算 / 规则 / 考试)'}.get(pageno, '(A4 双面 · 续)')
        # ↑↑↑
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
# ↓↓↓ 换科目：只改下面 CONTENT 列表（第 1 面 → pagebreak → 第 2 面）↓↓↓
# ============================================================
CONTENT = [
    ('h1', '★ 一句话地图'),
    ('p', '这里放这门课的「一张图讲完」：核心对象 + 核心恒等式/条件 + 核心方法。'),

    ('h1', '1. 第一个大节'),
    ('f', '核心公式 / 定义（深蓝）'),
    ('p', '概念解释（正文，自动换行）。'),
    ('li', '要点一'),
    ('li', '要点二'),
    ('w', '易错点 / 陷阱（红）'),

    ('h1', '2. 第二个大节'),
    ('h2', '小节标题'),
    ('mono', '矩阵或 tableau\n多行用 \\n 分隔'),

    ('pagebreak',),

    ('h1', '3. 第 2 面内容（计算 / 规则 / 考试）'),
    ('li', '模板题 / 步骤 / checklist'),
]
# ↑↑↑
# ============================================================

if __name__ == '__main__':
    render(CONTENT, '/tmp/cheatsheet.pdf')
    print('DONE')
