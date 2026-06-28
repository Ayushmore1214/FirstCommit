(function () {
  'use strict';

  const THEME_KEY = 'fpl-theme';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀' : '☾';
    try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
  }

  function initTheme() {
    const stored = (() => { try { return localStorage.getItem(THEME_KEY); } catch (_) { return null; } })();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(stored || (prefersDark ? 'dark' : 'light'));
  }

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  initTheme();
}());
