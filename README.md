# Дневник учёбы

Трекер учёбы: таймер, заметки, настроение и оценка сессий, диаграммы.
Сайт публичный: смотреть могут все, менять данные только владелец (вход через Google).

- `index.html` — сайт (GitHub Pages + Firebase).
- `firebase-config.js` — настройки Firebase и хэш почты владельца.
- `firestore.rules` — правила базы: читают все, пишет только владелец.
- `app.html` — версия для claude.ai artifact (отдельная, на Firebase не влияет).

Пока `firebase-config.js` не заполнен, сайт работает как раньше: данные хранятся только в браузере.

## Настройка Firebase (один раз)

1. Зайди на https://console.firebase.google.com → **Add project** (Google Analytics можно выключить).
2. **Build → Firestore Database → Create database** → выбери регион (например `eur3`) → **Start in production mode**.
3. Вкладка **Rules**: вставь содержимое `firestore.rules`, замени `ТВОЯ_ПОЧТА@gmail.com` на свою почту → **Publish**.
4. **Build → Authentication → Get started → Sign-in method → Google → Enable** → Save.
5. **Authentication → Settings → Authorized domains → Add domain**: `ТВОЙ_НИК.github.io`.
6. ⚙ **Project settings → General → Your apps → `</>` (Web)** → зарегистрируй приложение (Hosting не нужен) → скопируй объект `firebaseConfig` в `firebase-config.js`.

## Публикация на GitHub Pages

1. Репозиторий → **Settings → Pages**.
2. **Source: Deploy from a branch**, ветка с сайтом (например `main`), папка `/ (root)` → Save.
3. Через 1–2 минуты сайт будет по адресу `https://ТВОЙ_НИК.github.io/huesos/`.

Pages на бесплатном плане работает только для публичного репозитория.

## Как пользоваться

Открой сайт → **Войти** → выбери свой Google-аккаунт. Появятся кнопки таймера и редактирования.
Остальные видят те же данные без кнопок. Даже если кто-то изменит код страницы у себя,
записать в базу он не сможет: это запрещают правила Firestore.
