## Тестовое задание на стажировку VK React - "Энциклопедия кино"

![react version](https://img.shields.io/badge/react-18.2.0-brightgreen)
![react-dom version](https://img.shields.io/badge/react--dom-18.2.0-brightgreen)
![react-router-dom version](https://img.shields.io/badge/react--router--dom-6.23.0-brightgreen)
![react-scripts version](https://img.shields.io/badge/react--scripts-5.0.1-brightgreen)
![sass version](https://img.shields.io/badge/sass-1.75.0-brightgreen)
![eslint version](https://img.shields.io/badge/eslint-8.57.0-brightgreen)
![prettier version](https://img.shields.io/badge/prettier-3.2.5-brightgreen)

## Использованные технологии и инструменты

### 1. [React](https://react.dev/)

React - это JavaScript-библиотека для создания пользовательских интерфейсов, позволяющая разработчикам создавать мощные и динамические веб-приложения с использованием компонентов

### 2. [React Router](https://reactrouter.com/en/main)

React Router предоставляет набор навигационных компонентов для React, предоставляющий возможность создавать динамические маршруты и управлять навигацией в одностраничных приложениях

### 3. [SCSS](https://sass-lang.com/)

SASS/SCSS - это препроцессор CSS, который позволяет использовать переменные, миксины, вложенные селекторы и другие возможности для упрощения написания и управления стилями в веб-приложениях

### 4. [ESLint](https://eslint.org/)

ESLint - инструмент статического анализа JavaScript, помогающий выявлять и исправлять потенциальные проблемы в коде, обеспечивая согласованность стиля и улучшая его качество

### 5. [Prettier](https://prettier.io/)

Инструмент для форматирования кода, который автоматически приводит код к единому стилю, устраняя недостатки форматирования и делая код более читаемым

## Что реализовано в приложении

1. Получение данных с помощью [Кинопоиск API](https://kinopoisk.dev/)

2. Главная страница (URL: `/` или `/movies`):

    - Содержит список фильмов, получаемых с помощью [Кинопоиск API](https://kinopoisk.dev/)
    - Возможна навигация по страницам списка с помощью элемента пагинации внизу страницы
    - Выбранная страница сохраняется в LocalStorage и будет открыта при повторном открытии вкладки или при переходе с другого URL

3. Страница с карточкой фильма (URL: `/movies/:id`):

    - При нажатии на карточку в списке фильмов `/movies` происходит переход на страницу с карточкой фильма, содержащую подробную информацию о выбранном фильме
    - Также страница содержит список похожих фильмов, нажатие на карточку похожего фильма откроет страницу `/movies/:id` с его карточкой

4. В случае перехода по несуществующему адресу будет показана страница 404

5. Реализована адаптивная вёрстка вплоть до экранов мобильних устройств шириной в 320 пикселей

## Как развернуть приложение

1. Скопировать репозиторий:

```
git clone https://github.com/dumbus/movies-handbook.git
```

2. Поменять текущую папку:

```
cd movies-handbook
```

3. Установить зависимости:

```
npm install
```

4. Запустить приложение:

```
npm run start
```

5. Открыть приложение в браузере:

```
http://localhost:{port}
```

> По умолчанию port = 3000
