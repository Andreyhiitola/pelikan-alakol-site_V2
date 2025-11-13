/* ============================================
   NAVIGATION.JS - Функции навигации
   (Версия 3.0 - Безопасная)
   ============================================ */

function initializeAllNavigationFeatures() {
    
    // 1. Плавный скролл по якорям (безопасная версия)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            
            const href = this.getAttribute('href');
            
            // --- ГЛАВНОЕ ИЗМЕНЕНИЕ ---
            // Если ссылка пустая (#) или ведет к несуществующему блоку,
            // НИЧЕГО НЕ ДЕЛАЕМ и не мешаем другим скриптам.
            if (!href || href === '#' || !document.querySelector(href)) {
                return;
            }
            // -------------------------

            e.preventDefault(); // Останавливаем стандартный переход только если якорь реальный
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('✅ Безопасные функции из navigation.js успешно инициализированы.');
}
