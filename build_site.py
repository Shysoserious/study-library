#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
理科学习库 · 搜索索引重建脚本（可选）

用途：
  首页全文搜索依赖 search-index.js。默认那份是手工整理的「关键词版」，
  已经够用。如果想升级成「真正的全文检索」（把每份笔记 HTML 的正文全文
  都塞进索引），在装有 Python 3 的电脑上运行本脚本即可。

用法：
  python build_site.py

原理：
  1. 读取同目录下的 search-index.js，解析出每份笔记的 course / title / file；
  2. 逐个打开 file 对应的 HTML，剥掉标签、脚本、样式，提取正文纯文本；
  3. 把「标题 + 正文」写回 search-index.js（每份笔记截取前 MAX_CHARS 个字符，
     避免索引文件过大）。

说明：
  - 新增笔记时，请先在 data.js 的对应课程 notes 里加一条，并在 search-index.js
    里补一条 { course, title, file }（text 可留空），然后运行本脚本自动填全文。
  - 本脚本只改 search-index.js，不动 data.js（data.js 是手工维护的总目录）。
"""

import io
import os
import re
import sys
import html as html_lib

HERE = os.path.dirname(os.path.abspath(__file__))
INDEX_PATH = os.path.join(HERE, "search-index.js")
MAX_CHARS = 4000  # 每份笔记索引文本的最大字符数

ENTRY_RE = re.compile(
    r'\{\s*course\s*:\s*"([^"]+)"\s*,\s*title\s*:\s*"([^"]+)"\s*,\s*file\s*:\s*"([^"]+)"'
)

HEADER = """/* ============================================================================
 * 理科学习库 · 搜索索引（由 build_site.py 自动生成）
 * ----------------------------------------------------------------------------
 * 供首页全文搜索使用。每条记录对应一份笔记：
 *   course  课程 id（对应 data.js 里的 course.id）
 *   title   笔记标题
 *   file    相对路径
 *   text    可检索文本：标题 + 正文全文（截取前 %d 字符）
 * ==========================================================================*/

window.SEARCH_INDEX = [
""" % MAX_CHARS


def strip_tags(raw):
    """把 HTML 转成可检索的纯文本。"""
    if not raw:
        return ""
    # 去掉脚本与样式
    raw = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", raw)
    # 去掉标签，但保留词语之间的空格
    raw = re.sub(r"(?s)<[^>]+>", " ", raw)
    # 反转义常见实体
    raw = html_lib.unescape(raw)
    # MathJax 行内/块级公式记号去掉（保留里面文字，但去掉反斜杠记号噪音）
    raw = raw.replace("\\(", " ").replace("\\)", " ").replace("\\[", " ").replace("\\]", " ")
    # 去掉多余空白
    raw = re.sub(r"\s+", " ", raw)
    return raw.strip()


def main():
    if not os.path.exists(INDEX_PATH):
        print("找不到 search-index.js，请在 理科学习 文件夹下运行本脚本。")
        sys.exit(1)

    with io.open(INDEX_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    entries = ENTRY_RE.findall(content)
    if not entries:
        print("在 search-index.js 里没有解析到任何条目。")
        sys.exit(1)

    lines = []
    ok = 0
    for course, title, file in entries:
        text = title
        path = os.path.join(HERE, file)
        if os.path.exists(path):
            try:
                with io.open(path, "r", encoding="utf-8", errors="ignore") as f:
                    body = strip_tags(f.read())
                text = (title + " " + body).strip()[:MAX_CHARS]
                ok += 1
            except OSError as e:
                print("  ! 读取失败 %s: %s" % (file, e))
        else:
            print("  ! 找不到文件（保留原标题作为索引）: %s" % file)

        def q(s):
            return s.replace("\\", "\\\\").replace('"', '\\"')

        lines.append(
            '  { course: "%s", title: "%s", file: "%s",\n    text: "%s" }'
            % (q(course), q(title), q(file), q(text))
        )

    out = HEADER + ",\n\n".join(lines) + "\n];\n"

    with io.open(INDEX_PATH, "w", encoding="utf-8") as f:
        f.write(out)

    print("完成：共 %d 份笔记，其中 %d 份已提取全文。" % (len(entries), ok))
    print("已写回 %s" % INDEX_PATH)


if __name__ == "__main__":
    main()
