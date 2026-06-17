import { getOS, getIP, getCurrentTime } from './common.js';
export function getUserData() {
  return { isLoggedIn: localStorage.getItem('userLoggedIn') === 'true', name: localStorage.getItem('userName'), picture: localStorage.getItem('userPicture'), email: localStorage.getItem('userEmail'), joinDate: localStorage.getItem('userJoinDate') };
}
export function getSessions() {
  try { const s = localStorage.getItem('userSessions'); return s ? JSON.parse(s) : []; } catch { return []; }
}
export function saveSessions(sessions) { localStorage.setItem('userSessions', JSON.stringify(sessions)); }
export function addCurrentSession() {
  const sessions = getSessions();
  const newSession = { id: Date.now(), time: getCurrentTime(), os: getOS(), ip: 'جاري التحميل...', isCurrent: true };
  const filtered = sessions.filter(s => !s.isCurrent);
  filtered.push(newSession);
  saveSessions(filtered);
  getIP().then(ip => { newSession.ip = ip; saveSessions(filtered); });
  return newSession;
}
