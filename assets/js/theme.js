export function applyTheme(isDark) {
  const root = document.documentElement;
  if (isDark) {
    root.style.setProperty('--bodyB', '#1a1a1a'); root.style.setProperty('--bodyC', '#e5e5e5'); root.style.setProperty('--contentB', '#2d2d2d'); root.style.setProperty('--contentL', '#404040'); root.style.setProperty('--headC', '#ffffff'); root.style.setProperty('--white', '#ffffff'); root.style.setProperty('--notifB', '#1f2937'); root.style.setProperty('--notifC', '#e5e5e5');
  } else {
    root.style.setProperty('--bodyB', '#f9fafb'); root.style.setProperty('--bodyC', '#1f2937'); root.style.setProperty('--contentB', '#ffffff'); root.style.setProperty('--contentL', '#e5e7eb'); root.style.setProperty('--headC', '#111827'); root.style.setProperty('--white', '#ffffff'); root.style.setProperty('--notifB', '#1f2937'); root.style.setProperty('--notifC', '#ffffff');
  }
}
export function initThemeToggle(containerSelector = '.login-fullpage') {
  const container = document.querySelector(containerSelector);
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (!container || !themeToggle) return;
  const saved = localStorage.getItem('standalone-theme');
  if (saved === 'dark') { container.classList.add('dark-mode'); applyTheme(true); }
  themeToggle.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
    const isDark = container.classList.contains('dark-mode');
    localStorage.setItem('standalone-theme', isDark ? 'dark' : 'light');
    applyTheme(isDark);
    const svg = themeToggle.querySelector('svg');
    if (svg) svg.style.stroke = isDark ? 'var(--white)' : 'var(--bodyC)';
  });
}
