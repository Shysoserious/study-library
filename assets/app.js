/* ============================================================================
 * 理科学习库 · 首页脚本
 * 依赖 window.DATA（data.js）与 window.SEARCH_INDEX（search-index.js）。
 * 功能：渲染课程目录 / 全文搜索 / 收藏置顶 / 进度打卡 / 最近查看 /
 *       亮暗主题 / 三风格切换 / 移动端抽屉。
 * ==========================================================================*/
(function () {
  'use strict';

  var DATA = window.DATA;
  var IDX = window.SEARCH_INDEX || [];
  var LS = { theme: 'lib-theme', pinned: 'lib-pinned', checked: 'lib-checked', recent: 'lib-recent' };

  /* ── 工具 ─────────────────────────────────────────────── */
  function load(key, dflt) {
    try { var v = localStorage.getItem(key); return v === null ? dflt : JSON.parse(v); }
    catch (e) { return dflt; }
  }
  function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function href(p) { return encodeURI(p); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function attInfo(a) {
    if (typeof a === 'string') {
      var seg = a.split('/').pop();
      var name = seg.replace(/\.[^.]+$/, '');
      var m = seg.match(/\.([^.]+)$/);
      return { name: name, ext: m ? m[1].toLowerCase() : '', file: a };
    }
    var m2 = (a.file || '').match(/\.([^.]+)$/);
    return { name: a.name, ext: m2 ? m2[1].toLowerCase() : '', file: a.file };
  }

  /* ── 图标 ─────────────────────────────────────────────── */
  var ICONS = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'
  };

  /* ── 状态 ─────────────────────────────────────────────── */
  var state = {
    pinned: load(LS.pinned, []),
    checked: load(LS.checked, {}),
    recent: load(LS.recent, []),
    collapsed: {}
  };
  var currentCat = '全部';

  var courseMap = {};
  var fileCourseMap = {};
  DATA.courses.forEach(function (c) {
    courseMap[c.id] = c;
    c.notes.forEach(function (n) { fileCourseMap[n.file] = c.id; });
  });

  var STATUS_LABEL = { active: '进行中', done: '已完成', self: '自学' };
  var STATUS_CLASS = { active: 'active', done: 'done', self: 'done' };

  /* ── 统计 ─────────────────────────────────────────────── */
  function renderStats() {
    var noteCount = 0, attCount = 0, termCount = 0;
    DATA.courses.forEach(function (c) { noteCount += c.notes.length; attCount += (c.attachments || []).length; });
    DATA.glossary.forEach(function (g) { termCount += g.terms.length; });
    var html =
      '<div class="stat"><span class="num">' + DATA.courses.length + '</span><span class="label">课程</span></div>' +
      '<div class="stat"><span class="num">' + noteCount + '</span><span class="label">复习笔记</span></div>' +
      (attCount ? '<div class="stat"><span class="num">' + attCount + '</span><span class="label">课件 / 资料</span></div>' : '') +
      '<div class="stat"><span class="num">' + termCount + '</span><span class="label">术语条目</span></div>';
    $('#stats').innerHTML = html;
  }

  /* ── 分类筛选 ─────────────────────────────────────────── */
  function renderFilters() {
    var chips = [{ id: '全部', label: '全部' }].concat(DATA.categories);
    $('#filters').innerHTML = chips.map(function (ch) {
      var on = ch.id === currentCat ? ' active' : '';
      return '<button class="chip' + on + '" data-cat="' + esc(ch.id) + '">' + esc(ch.label) + '</button>';
    }).join('');
  }

  /* ── 目录（侧边栏 + 抽屉共用）────────────────────────────── */
  function directoryHTML() {
    return DATA.semesters.map(function (sem, si) {
      var list = DATA.courses.filter(function (c) { return c.semester === sem.id; });
      if (!list.length) return '';
      var items = list.map(function (c) {
        return '<a class="dir-link" href="#course-' + c.id + '"><span class="dot"></span><span>' + esc(c.name) +
          '</span><span class="dir-count">' + c.notes.length + '</span></a>';
      }).join('');
      return '<div class="dir-group"><a class="dir-group-title" href="#sem-' + si + '">' + esc(sem.label) + '</a>' + items + '</div>';
    }).join('');
  }
  function renderDirectory() {
    var html = '<div class="side-title">目录</div>' + directoryHTML();
    $('#sidebarDir').innerHTML = html;
    $('#drawerDir').innerHTML = html;
  }

  /* ── 课程卡片 ─────────────────────────────────────────── */
  function courseCard(c, pinned) {
    var total = c.notes.length;
    var done = c.notes.filter(function (n) { return state.checked[n.file]; }).length;
    var pct = total ? Math.round(done / total * 100) : 0;
    var collapsed = state.collapsed[c.id] ? ' collapsed' : '';
    var isPinned = state.pinned.indexOf(c.id) !== -1;

    var badges =
      (c.code ? '<span class="badge code">' + esc(c.code) + '</span>' : '') +
      '<span class="badge ' + STATUS_CLASS[c.status] + '">' + STATUS_LABEL[c.status] + '</span>' +
      '<button class="pin-btn' + (isPinned ? ' on' : '') + '" data-id="' + esc(c.id) + '" aria-label="置顶">' + ICONS.star + '</button>';

    var notes = c.notes.map(function (n) {
      var checked = state.checked[n.file] ? ' checked' : '';
      var visited = state.recent.some(function (r) { return r.file === n.file; }) ? ' visited' : '';
      return '<div class="note-row' + checked + '">' +
        '<button class="note-check" data-file="' + esc(n.file) + '" aria-label="标记完成">' + ICONS.check + '</button>' +
        '<div class="note-link"><a class="' + visited + '" href="' + href(n.file) + '" data-file="' + esc(n.file) + '">' + esc(n.title) + '</a></div>' +
        '</div>';
    }).join('');

    var progressHtml = total ? '<div class="course-progress"><div class="bar"><i style="width:' + pct + '%"></i></div><span class="pct">' + pct + '%</span></div>' : '';
    var notesHtml = total ? '<div class="notes">' + notes + '</div>'
                          : '<div class="notes" style="color:var(--muted);font-size:13.5px;padding:8px 22px 14px;">暂无笔记（待整理）</div>';

    var atts = '';
    if (c.attachments && c.attachments.length) {
      var links = c.attachments.map(function (a) {
        var ai = attInfo(a);
        return '<a class="att-link" href="' + href(ai.file) + '" target="_blank" rel="noopener">' + ICONS.file + '<span>' + esc(ai.name) + '</span></a>';
      }).join('');
      atts = '<details class="attachments"><summary><span class="chev">&#8250;</span>附件资料（' + c.attachments.length + '）</summary><div class="att-list">' + links + '</div></details>';
    }

    return '<section class="course' + collapsed + '" id="course-' + esc(c.id) + '">' +
      '<div class="course-head" data-id="' + esc(c.id) + '">' +
        '<h3 class="course-title">' + esc(c.name) + '</h3>' +
        (c.nameEn ? '<span class="course-en">' + esc(c.nameEn) + '</span>' : '') +
        '<div class="badges">' + badges + '</div>' +
        '<span class="chev head-chev">&#8250;</span>' +
      '</div>' +
      (c.desc ? '<p class="course-desc">' + esc(c.desc) + '</p>' : '') +
      (c.teacher ? '<p class="course-teacher">教师 <b>' + esc(c.teacher) + '</b></p>' : '') +
      progressHtml +
      notesHtml +
      atts +
      '</section>';
  }

  function renderMain() {
    var pinnedIds = {};
    state.pinned.forEach(function (id) { pinnedIds[id] = true; });
    var pinnedCourses = DATA.courses.filter(function (c) { return pinnedIds[c.id] && (currentCat === '全部' || c.category === currentCat); });

    var html = '';
    if (pinnedCourses.length) {
      html += '<div class="pinned-section"><h2 class="pinned-title">置顶课程</h2>' +
        pinnedCourses.map(function (c) { return courseCard(c, true); }).join('') + '</div>';
    }

    html += DATA.semesters.map(function (sem, si) {
      var list = DATA.courses.filter(function (c) {
        return c.semester === sem.id && !pinnedIds[c.id] && (currentCat === '全部' || c.category === currentCat);
      });
      if (!list.length) return '';
      return '<div class="semester" id="sem-' + si + '"><h2 class="semester-title"><span>' + esc(sem.label) + '</span>' +
        '<span class="sem-count">' + list.length + ' 门</span></h2>' +
        list.map(function (c) { return courseCard(c, false); }).join('') + '</div>';
    }).join('');

    if (!html) {
      html = '<div class="sr-empty">这个分类下还没有课程。</div>';
    }
    $('#main').innerHTML = html;
  }

  /* ── 最近查看 ─────────────────────────────────────────── */
  function renderRecent() {
    var box = $('#recent');
    if (!state.recent.length) { box.style.display = 'none'; return; }
    box.style.display = '';
    var items = state.recent.map(function (r) {
      return '<a class="recent-item" href="' + href(r.file) + '"><span class="r-course">' + esc(r.course) + '</span><span class="r-title">' + esc(r.title) + '</span></a>';
    }).join('');
    $('#recentList').innerHTML = items;
  }

  function recordRecent(file, title, courseName) {
    var list = state.recent.filter(function (r) { return r.file !== file; });
    list.unshift({ file: file, title: title, course: courseName, ts: Date.now() });
    state.recent = list.slice(0, 6);
    save(LS.recent, state.recent);
    renderRecent();
    // 更新笔记链接的 visited 样式
    document.querySelectorAll('a.note-link a').forEach(function (a) {
      var f = a.getAttribute('data-file');
      var seen = state.recent.some(function (r) { return r.file === f; });
      a.classList.toggle('visited', seen);
    });
  }

  /* ── 搜索 ─────────────────────────────────────────────── */
  function runSearch(q) {
    var tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
    var results = [];
    if (tokens.length) {
      IDX.forEach(function (item) {
        var c = courseMap[item.course];
        var hay = (item.title + ' ' + item.text + ' ' + (c ? c.name + ' ' + (c.nameEn || '') : '')).toLowerCase();
        if (tokens.every(function (t) { return hay.indexOf(t) !== -1; })) {
          results.push({ type: 'note', course: c ? c.name : item.course, title: item.title, file: item.file });
        }
      });
      DATA.courses.forEach(function (c) {
        var hay = (c.name + ' ' + (c.nameEn || '') + ' ' + (c.code || '') + ' ' + (c.desc || '')).toLowerCase();
        if (tokens.every(function (t) { return hay.indexOf(t) !== -1; })) {
          results.push({ type: 'course', course: '课程', title: c.name, file: '#course-' + c.id });
        }
      });
    }
    return results.slice(0, 24);
  }

  function renderSearchResults(results, q) {
    var box = $('#searchResults');
    if (!q.trim()) { box.innerHTML = '<div class="sr-empty">输入关键词，搜索所有笔记与课程…</div>'; return; }
    if (!results.length) { box.innerHTML = '<div class="sr-empty">没有找到与「' + esc(q.trim()) + '」相关的内容。</div>'; return; }
    box.innerHTML = results.map(function (r, i) {
      var isCourse = r.type === 'course';
      return '<div class="sr-item" data-i="' + i + '" data-file="' + esc(r.file) + '" data-title="' + esc(r.title) + '" data-course="' + esc(r.course) + '">' +
        '<span class="sr-course">' + esc(r.course) + '</span>' +
        '<span class="sr-title">' + esc(r.title) + '</span>' +
        '<span class="sr-arrow">' + (isCourse ? '→ 定位' : '打开') + '</span>' +
        '</div>';
    }).join('');
  }

  var searchState = { results: [], sel: -1, q: '' };
  function openSearch() {
    $('#searchOverlay').classList.add('open');
    $('#searchInput').focus();
    $('#searchInput').select();
  }
  function closeSearch() {
    $('#searchOverlay').classList.remove('open');
  }
  function searchKeydown(e) {
    var items = Array.prototype.slice.call(document.querySelectorAll('.sr-item'));
    if (e.key === 'Escape') { closeSearch(); return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!items.length) return;
      var dir = e.key === 'ArrowDown' ? 1 : -1;
      searchState.sel = (searchState.sel + dir + items.length) % items.length;
      items.forEach(function (el, i) { el.classList.toggle('sel', i === searchState.sel); });
      items[searchState.sel].scrollIntoView({ block: 'nearest' });
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      if (searchState.sel >= 0 && items[searchState.sel]) { items[searchState.sel].click(); }
      return;
    }
  }
  function openSearchResult(el) {
    var file = el.getAttribute('data-file');
    var title = el.getAttribute('data-title');
    var course = el.getAttribute('data-course');
    if (file.charAt(0) === '#') { closeSearch(); document.querySelector(file).scrollIntoView({ behavior: 'smooth' }); return; }
    recordRecent(file, title, course);
    closeSearch();
    window.location.href = href(file);
  }

  /* ── 主题 ─────────────────────────────────────────── */
  function applyTheme(name) {
    document.documentElement.setAttribute('data-theme', name);
    var dark = name === 'dark';
    $('#themeIcon').innerHTML = dark ? ICONS.sun : ICONS.moon;
    $('#themeLabel').textContent = dark ? '亮色' : '暗色';
  }

  /* ── 提示 ─────────────────────────────────────────────── */
  var toastTimer = null;
  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 1600);
  }

  /* ── 事件绑定 ─────────────────────────────────────────── */
  function bind() {
    // 全局点击委托
    document.addEventListener('click', function (e) {
      var pin = e.target.closest('.pin-btn');
      if (pin) {
        e.stopPropagation();
        var id = pin.getAttribute('data-id');
        var i = state.pinned.indexOf(id);
        if (i === -1) { state.pinned.push(id); toast('已置顶'); }
        else { state.pinned.splice(i, 1); toast('已取消置顶'); }
        save(LS.pinned, state.pinned);
        renderMain();
        return;
      }
      var check = e.target.closest('.note-check');
      if (check) {
        var file = check.getAttribute('data-file');
        if (state.checked[file]) { delete state.checked[file]; }
        else { state.checked[file] = true; }
        save(LS.checked, state.checked);
        var row = check.closest('.note-row');
        row.classList.toggle('checked', !!state.checked[file]);
        updateCourseProgress(fileCourseMap[file]);
        return;
      }
      var noteLink = e.target.closest('.note-link a');
      if (noteLink) {
        var f2 = noteLink.getAttribute('data-file');
        var cid = fileCourseMap[f2];
        recordRecent(f2, noteLink.textContent, cid ? (courseMap[cid] ? courseMap[cid].name : '') : '');
        return; // 允许默认跳转
      }
      var head = e.target.closest('.course-head');
      if (head) {
        var cId = head.getAttribute('data-id');
        var card = head.closest('.course');
        card.classList.toggle('collapsed');
        state.collapsed[cId] = card.classList.contains('collapsed');
        return;
      }
      var chip = e.target.closest('.chip');
      if (chip) {
        currentCat = chip.getAttribute('data-cat');
        renderFilters();
        renderMain();
        return;
      }
      var sr = e.target.closest('.sr-item');
      if (sr) { openSearchResult(sr); return; }
      if (e.target.closest('#clearRecent')) { state.recent = []; save(LS.recent, []); renderRecent(); return; }
      if (e.target.closest('#searchOverlay') && !e.target.closest('.search-panel')) { closeSearch(); }
    });

    // 顶栏按钮
    $('#searchTrigger').addEventListener('click', openSearch);
    $('#themeToggle').addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem(LS.theme, next);
      applyTheme(next);
    });
    // 移动端抽屉
    $('#menuBtn').addEventListener('click', function () {
      $('#drawer').classList.add('open');
      $('#drawerMask').classList.add('open');
    });
    $('#drawerMask').addEventListener('click', closeDrawer);
    $('#drawer').addEventListener('click', function (e) { if (e.target.closest('.dir-link')) closeDrawer(); });
    function closeDrawer() { $('#drawer').classList.remove('open'); $('#drawerMask').classList.remove('open'); }

    // 搜索输入与快捷键
    $('#searchInput').addEventListener('keydown', searchKeydown);
    $('#searchInput').addEventListener('input', function (e) {
      searchState.q = e.target.value;
      searchState.sel = -1;
      searchState.results = runSearch(searchState.q);
      renderSearchResults(searchState.results, searchState.q);
    });
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
    });
  }

  function updateCourseProgress(courseId) {
    if (!courseId) return;
    var c = courseMap[courseId];
    if (!c) return;
    var total = c.notes.length;
    var done = c.notes.filter(function (n) { return state.checked[n.file]; }).length;
    var pct = total ? Math.round(done / total * 100) : 0;
    var card = $('#course-' + courseId);
    if (!card) return;
    var bar = card.querySelector('.course-progress .bar i');
    var pctEl = card.querySelector('.course-progress .pct');
    if (bar) bar.style.width = pct + '%';
    if (pctEl) pctEl.textContent = pct + '%';
  }

  /* ── 初始化 ─────────────────────────────────────────────── */
  function init() {
    // 主题（head 内联脚本已先行设置，这里再同步 UI）
    applyTheme(document.documentElement.getAttribute('data-theme') || 'light');

    var meta = $('#heroMeta');
    if (meta && DATA.site) {
      meta.textContent = DATA.site.author + ' · 最后更新 ' + DATA.site.lastUpdated;
    }

    renderStats();
    renderFilters();
    renderDirectory();
    renderRecent();
    renderMain();
    bind();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
