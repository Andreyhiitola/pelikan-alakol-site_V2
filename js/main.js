document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен. Главный скрипт инициализируется...');

    // ===========================================
    // --- 1. ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ТЕМЫ ---
    // ===========================================
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Функция для применения темы
    const applyTheme = (theme) => {
        const icon = themeToggle ? themeToggle.querySelector('i') : null;
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        } else {
            body.classList.remove('dark-mode');
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    };

    // При загрузке страницы проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Обработчик клика по кнопке темы
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme); // Сохраняем выбор
            applyTheme(newTheme);
        });
    }

    // ===========================================
    // --- 2. ЛОГИКА МОДАЛЬНЫХ ОКОН ---
    // ===========================================
    const weatherModal = document.getElementById('weatherModal');
    const mapModal = document.getElementById('mapModal');

    const openModal = (modal) => {
        if (modal) modal.style.display = 'block';
    };

    const closeModal = () => {
        if (weatherModal) weatherModal.style.display = 'none';
        if (mapModal) mapModal.style.display = 'none';
    };

    // Кнопка "Погода"
    document.querySelector('.weather-btn')?.addEventListener('click', () => {
        openModal(weatherModal);
        if (typeof fetchWeather === 'function') {
            fetchWeather();
        }
    });

    // Кнопка "Карта"
    document.querySelector('.map-btn')?.addEventListener('click', () => {
        openModal(mapModal);
        if (typeof initMap === 'function') {
            initMap();
        } else {
            console.warn('Функция initMap() не найдена. Убедитесь, что contacts.js подключен и раскомментирован.');
        }
    });

    // Кнопки закрытия "крестик"
    document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', closeModal));

    // Закрытие по клику на фон
    window.addEventListener('click', (event) => {
        if (event.target === weatherModal || event.target === mapModal) {
            closeModal();
        }
    });

    // Закрытие по клавише Esc
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // =======================================================
    // --- 3. ВЫЗОВ ФУНКЦИЙ ИЗ ДРУГИХ ("ВСПОМОГАТЕЛЬНЫХ") СКРИПТОВ ---
    // =======================================================
    
    // Вызываем функции из navigation.js
    if (typeof initializeAllNavigationFeatures === 'function') {
        initializeAllNavigationFeatures();
    } else {
        console.warn('Функция initializeAllNavigationFeatures() не найдена. Убедитесь, что navigation.js подключен и раскомментирован.');
    }

    // Сюда можно будет добавить вызовы других скриптов по такому же принципу

    console.log('Основной скрипт и все подключенные модули успешно инициализированы.');
});
