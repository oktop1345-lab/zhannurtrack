// Настройки Firebase. Эти значения не секретные: их видит любой посетитель сайта,
// а защиту данных обеспечивают правила Firestore (файл firestore.rules).
// Firebase Console → Project settings → General → Your apps → Web app → SDK setup and configuration → Config.
window.FIREBASE_CONFIG = {
  apiKey: "ВСТАВЬ_СЮДА",
  authDomain: "ВСТАВЬ_СЮДА.firebaseapp.com",
  projectId: "ВСТАВЬ_СЮДА",
  storageBucket: "ВСТАВЬ_СЮДА.appspot.com",
  messagingSenderId: "ВСТАВЬ_СЮДА",
  appId: "ВСТАВЬ_СЮДА"
};

// SHA-256 почты владельца: только с этой почтой на сайте появляются кнопки редактирования.
// Хранится хэш, а не сама почта, чтобы адрес не был виден в коде сайта.
// Посчитать для другой почты: printf 'почта@gmail.com' | sha256sum
window.OWNER_EMAIL_SHA256 = "896fa901c6bd1bc651ac249574d0e9b7835fd4aa2044c0963af007ebde1a2a92";
