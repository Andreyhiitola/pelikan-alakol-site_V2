async function loadInfrastructure() {
  try {
    // Получаем путь к JSON-файлу с инфраструктурой (проверьте CONFIG.getDataFile)
    const response = await fetch(CONFIG.getDataFile('infrastructure.json'));

    if (!response.ok) {
      // Если сервер вернул ошибку, генерируем исключение
      throw new Error('HTTP ошибка: ' + response.status);
    }

    // Парсим JSON из ответа
    const data = await response.json();

    // Проверяем, что внутри есть нужный массив инфраструктуры
    if (!data.infrastructure || !Array.isArray(data.infrastructure)) {
      throw new Error('Неверная структура данных инфраструктуры');
    }

    // Находим контейнер для отображения
    const container = document.getElementById('infrastructureContainer');
    if (!container) {
      console.error('Контейнер для инфраструктуры не найден');
      return;
    }

    // Очищаем содержимое контейнера
    container.innerHTML = '';

    // Перебираем каждый объект инфраструктуры для создания карточек
    data.infrastructure.forEach(item => {
      const card = document.createElement('div');
      card.className = 'scroll-item';

      card.innerHTML = `
        ${item.image ? `<img src="${item.image}" alt="${item.title || ''}">` : ''}
        <h3>${item.title || ''}</h3>
        <p>${item.description || ''}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    // Логируем ошибку в консоль для разработчика
    console.error('[translate:Ошибка загрузки инфраструктуры]', error);

    // Показываем сообщение об ошибке пользователю
    const container = document.getElementById('infrastructureContainer');
    if (container) {
      container.innerHTML = '<div class="error">[translate:Не удалось загрузить инфраструктуру.]</div>';
    }
  }
}

// Запуск функции после загрузки страницы
window.addEventListener('DOMContentLoaded', () => {
  loadInfrastructure();
});
