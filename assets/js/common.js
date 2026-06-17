export function notify(message) {
  const toast = document.getElementById('toastMessage');
  if (!toast) return;
  toast.innerText = message;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3000);
}
export function getOS() {
  const ua = navigator.userAgent;
  if (ua.includes('Windows')) return 'ويندوز';
  if (ua.includes('Mac')) return 'ماك';
  if (ua.includes('Linux')) return 'لينكس';
  if (ua.includes('Android')) return 'أندرويد';
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'آيفون/آيباد';
  return 'غير معروف';
}
export async function getIP() {
  try { const res = await fetch('https://api.ipify.org?format=json'); const data = await res.json(); return data.ip; } catch { return 'غير معروف'; }
}
export function getCurrentTime() {
  return new Date().toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
export function formatDate(d) {
  if (!d || d === 'undefined' || d === 'null') return 'غير محدد';
  try { const dt = new Date(d); if (isNaN(dt.getTime())) return 'غير محدد'; return dt.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace(',', ''); } catch { return 'غير محدد'; }
}
