import { notify } from './common.js';
let client = null;
export function initGSI() {
  if (typeof google !== 'undefined' && google.accounts) {
    client = google.accounts.oauth2.initTokenClient({
      client_id: '36053852280-iqmfrcu1m2vd8ai6sc4e10r6afaiiln0.apps.googleusercontent.com',
      scope: 'openid profile email',
      callback: handleCredentialResponse
    });
    const btn = document.getElementById('custom-google-btn');
    if (btn) btn.addEventListener('click', () => client.requestAccessToken());
    if (window.opener) try { window.resizeTo(500, 600); } catch(e) {}
  } else { notify('فشل تحميل مكتبة جوجل للمصادقة.'); }
}
async function handleCredentialResponse(response) {
  if (response && response.access_token) await getUserInfo(response.access_token);
  else notify('لم يتم العثور على رمز الوصول.');
}
async function getUserInfo(accessToken) {
  try {
    notify('جارٍ تسجيل الدخول...');
    const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', { headers: { Authorization: 'Bearer ' + accessToken } });
    if (!res.ok) throw new Error('فشل جلب البيانات');
    const user = await res.json();
    const userData = { name: user.name, email: user.email, image: user.picture };
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userName', user.name);
    localStorage.setItem('userEmail', user.email);
    localStorage.setItem('userPicture', user.picture);
    if (!localStorage.getItem('userJoinDate')) localStorage.setItem('userJoinDate', new Date().toISOString());
    if (window.opener && !window.opener.closed) {
      const origin = window.location.origin;
      window.opener.postMessage({ type: 'loginSuccess', user: userData }, origin);
      window.opener.postMessage({ type: 'storageUpdate' }, origin);
      notify('تم تسجيل الدخول بنجاح!');
      setTimeout(() => window.close(), 1500);
    } else {
      const cbu = new URLSearchParams(window.location.search).get('cbu') || '/';
      notify('تم تسجيل الدخول بنجاح!');
      setTimeout(() => { window.location.href = cbu; }, 1000);
    }
  } catch (error) { console.error(error); notify('فشل تسجيل الدخول.'); }
}
