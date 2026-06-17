# Modweeb Auth System

نظام مصادقة متكامل لمدونات بلوجر، يعتمد على Google OAuth، مع إدارة الجلسات، الوضع الليلي، وتحرير الملف الشخصي.

## الميزات
- تسجيل الدخول عبر Google
- عرض وإدارة الجلسات النشطة
- تعديل الاسم والصورة الشخصية
- الوضع الليلي/النهاري
- إشعارات Toast
- هيكل نظيف وقابل للتوسع

## التثبيت
انسخ محتويات مجلد `pages/` إلى صفحات بلوجر، وقم بتضمين الروابط التالية في `<head>`:
```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/modweeb-widget/Modweeb-auth/main/assets/css/common.css">
<link rel="stylesheet" href="https://raw.githubusercontent.com/modweeb-widget/Modweeb-auth/main/assets/css/auth.css"> <!-- أو account.css -->
```

ثم أضف في نهاية الصفحة:

```html
<script type="module" src="https://raw.githubusercontent.com/modweeb-widget/Modweeb-auth/main/assets/js/auth.js"></script>
```

التخصيص

قم بتعديل config/settings.js لتغيير معرّف العميل، روابط الشروط، إلخ.

الترخيص

MIT
