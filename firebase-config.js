// Настройки Firebase. Эти значения не секретные: их видит любой посетитель сайта,
// а защиту данных обеспечивают правила Firestore (файл firestore.rules).
// Firebase Console → Project settings → General → Your apps → Web app → SDK setup and configuration → Config.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAg4UmegLWVey7ystw0m1kPBvNvmowg2E4",
  authDomain: "ucheba-zhannur.firebaseapp.com",
  projectId: "ucheba-zhannur",
  storageBucket: "ucheba-zhannur.firebasestorage.app",
  messagingSenderId: "1084722207594",
  appId: "1:1084722207594:web:1a77a10bf2f4b969602313"
};

// SHA-256 почт владельцев: только с этими почтами на сайте появляются кнопки редактирования.
// Хранятся хэши, а не сами почты, чтобы адреса не были видны в коде сайта.
// Посчитать хэш: printf 'почта@gmail.com' | sha256sum  (почта маленькими буквами)
// Не забудь добавить ту же почту в правила Firestore (firestore.rules).
window.OWNER_EMAIL_SHA256 = [
  "896fa901c6bd1bc651ac249574d0e9b7835fd4aa2044c0963af007ebde1a2a92"
];
