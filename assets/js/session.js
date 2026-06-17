import { getSessions, saveSessions } from './storage.js';
import { notify } from './common.js';
export function removeSession(index) {
  const sessions = getSessions();
  sessions.splice(index, 1);
  saveSessions(sessions);
  notify('تم إزالة الجلسة بنجاح');
}
