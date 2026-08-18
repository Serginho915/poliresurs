# Poliresurs

Корпоративный одностраничный сайт торгово-производственной компании **LLC Poliresurs** из Софии, Болгария.

Компания занимается прямой закупкой, очисткой, сортировкой, калибровкой и B2B-поставками сельскохозяйственного сырья и пищевых ингредиентов европейским производителям.

## Возможности сайта

- адаптивная верстка для компьютеров, планшетов и телефонов;
- болгарская и английская локализации;
- переключатель `BG / EN` с сохранением выбранного языка;
- каталог основных товарных направлений;
- галерея дополнительных категорий;
- описание производственной и инвестиционной модели;
- FAQ;
- контактная форма;
- плавные анимации секций при прокрутке;
- поддержка `prefers-reduced-motion`;
- доступная навигация с клавиатуры;
- оптимизированная production-сборка.

## Технологии

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Lucide React](https://lucide.dev/)
- CSS без UI-фреймворков
- Prettier

## Быстрый запуск

Требуется Node.js и npm.

```bash
npm install
npm run dev
```

После запуска сайт доступен по адресу:

```text
http://127.0.0.1:5173/
```

Порт закреплён в `package.json`. Если `5173` уже занят, Vite покажет ошибку вместо автоматического перехода на другой порт.

## Production-сборка

```bash
npm run build
```

Готовые файлы будут созданы в папке `dist`.

Локальная проверка production-сборки:

```bash
npm run preview
```

## Форматирование кода

```bash
npm run format
```

Настройки форматирования находятся в `.prettierrc`.

## Настройка контактов и формы

Скопируйте пример переменных окружения:

```bash
cp .env.example .env
```

Доступные переменные:

```env
VITE_CONTACT_EMAIL=poliresurs.kh@gmail.com
VITE_CONTACT_FORM_ENDPOINT=
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Режимы работы формы

Если `VITE_CONTACT_FORM_ENDPOINT` указан, форма отправляет `POST`-запрос на заданный endpoint. Можно использовать Formspree, Web3Forms или собственный backend.

Если endpoint пустой, форма открывает почтовое приложение пользователя и создаёт готовое письмо на адрес из `VITE_CONTACT_EMAIL`.

### Google Analytics 4

1. Создайте ресурс GA4 для `https://poliresurs.bg` в [Google Analytics](https://analytics.google.com/).
2. Откройте **Admin → Data streams → Web** и скопируйте Measurement ID вида `G-XXXXXXXXXX`.
3. Добавьте его в `.env` как `VITE_GA_MEASUREMENT_ID`.
4. Выполните `npm run build` заново и загрузите содержимое `dist` на хостинг.

Аналитика загружается только после согласия посетителя. Успешная отправка формы регистрируется как событие `generate_lead`; данные полей формы в Google Analytics не передаются.

Публичные контакты компании находятся в `src/App.jsx`:

```text
Sofia, Bulgaria
+359 892 987 604
poliresurs.kh@gmail.com
```

## Фотографии

Все изображения находятся в папке:

```text
public/images/
```

Основные используемые файлы:

| Файл                     | Назначение                |
| ------------------------ | ------------------------- |
| `facility-exterior.jpeg` | первый экран              |
| `cleaning-line.jpeg`     | производственная линия    |
| `silos.jpeg`             | производственные мощности |
| `coriander.jpg`          | кориандр                  |
| `white-mustard.jpg`      | белая горчица             |
| `black-mustard.jpg`      | чёрная горчица            |
| `chickpeas.jpg`          | нут                       |
| `red-lentils.jpg`        | красная чечевица          |
| `red-paprika.jpg`        | красная паприка           |
| `white-beans.jpeg`       | белая фасоль              |
| `brown-flax.jpeg`        | коричневый лён            |
| `bay-leaf.jpeg`          | лавровый лист             |
| `rosehip.jpeg`           | шиповник                  |
| `walnuts.jpg`            | грецкие орехи             |

При замене изображения рекомендуется сохранять его имя. Тогда изменения в React-коде не понадобятся.

Рекомендуемый размер товарных фотографий — не менее `1200 × 900 px`. Для первого экрана лучше использовать горизонтальное изображение от `1600 px` по ширине.

## Переводы и товары

Болгарский и английский контент хранится в:

```text
src/data.jsx
```

Объект разделён на две локализации:

```js
content.bg
content.en
```

При добавлении нового текста необходимо заполнить обе версии.

## Структура проекта

```text
poliresurs/
├── public/
│   └── images/              # изображения сайта
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx  # контактная форма
│   │   ├── Header.jsx       # шапка и переключатель языка
│   │   └── ProductCard.jsx  # карточка продукта
│   ├── App.jsx              # структура страницы
│   ├── data.jsx             # переводы и данные товаров
│   ├── main.jsx             # точка входа React
│   └── styles.css           # стили и адаптивность
├── .env.example
├── .prettierrc
├── index.html
├── package.json
└── vite.config.js
```

## Основные команды

| Команда           | Назначение                    |
| ----------------- | ----------------------------- |
| `npm run dev`     | локальный сервер разработки   |
| `npm run build`   | production-сборка             |
| `npm run preview` | просмотр production-сборки    |
| `npm run format`  | форматирование исходного кода |

## Развертывание

Папку `dist` можно публиковать на Vercel, Netlify, Cloudflare Pages, GitHub Pages или обычном хостинге.

Параметры сборки для большинства платформ:

```text
Build command: npm run build
Output directory: dist
```

Не забудьте добавить `VITE_CONTACT_EMAIL` и `VITE_CONTACT_FORM_ENDPOINT` в настройках переменных окружения выбранной платформы.

## Контакты

**LLC Poliresurs**  
Sofia, Bulgaria  
[+359 892 987 604](tel:+359892987604)  
[poliresurs.kh@gmail.com](mailto:poliresurs.kh@gmail.com)
