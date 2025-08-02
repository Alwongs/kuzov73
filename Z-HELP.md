npm run build
npm run deploy

Если хочешь делать всё вручную (без GitHub Actions), вот пошаговая инструкция:

1. Основной репозиторий (ветка main или master)
bash
# Инициализация Git (если ещё нет)
git init
git add .
git commit -m "Initial commit"
git branch -M main  # или master

# Подключение к GitHub
git remote add origin https://github.com/твой-username/твой-репозиторий.git
git push -u origin main
2. Создание ветки gh-pages и добавление папки dist
bash
# Переключение на новую ветку (отдельно от main)
git checkout --orphan gh-pages  # создаёт "чистую" ветку без истории
git rm -rf .  # удаляет все файлы (кроме .git)

# Сборка проекта (если dist ещё не собран)
npm run build  # или другая команда сборки

# Добавление содержимого папки dist
git add dist/
git commit -m "Deploy to gh-pages"
git push origin gh-pages
3. Настройка GitHub Pages
Зайди в Settings → Pages.

В Branch выбери gh-pages и папку / (root) (или /dist, если нужно).

Сохрани.

4. Обновление gh-pages в будущем
Каждый раз после изменений:

bash
# Сначала собери проект (если нужно)
npm run build

# Переключись на gh-pages
git checkout gh-pages

# Удали всё, кроме .git
git rm -rf .

# Скопируй содержимое dist/ в корень
cp -r dist/* .

# Закоммить и запушь
git add .
git commit -m "Update gh-pages"
git push origin gh-pages

# Вернись в основную ветку
git checkout main


: Использовать import.meta.env.BASE_URL
Если нужно вручную прописать путь:

jsx

```
  <img 
    src={`${import.meta.env.BASE_URL}/images/painting.jpg`} 
    alt="Картина"
  />
```
Что делает:

import.meta.env.BASE_URL — это значение base из vite.config.js (например, "/repository-name/").

Путь станет: "/repository-name/images/painting.jpg".