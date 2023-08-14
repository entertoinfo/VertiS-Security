$(function () {
    // Получение ссылки на текущий URL
    let currentUrl = window.location.href;
  
    // Поиск кнопки в меню
    let menuButton = document.getElementById('menu-button');
  
    // Проверка, содержит ли ссылка кнопки текущий URL
    if (menuButton && menuButton.href === currentUrl) {
      // Добавление класса для подсветки кнопки
      menuButton.classList.add('text-active');
    }
  });