/* ============================================
   NAVIGATION.JS - Функции навигации
   (Версия 4.0 - ТОЛЬКО АНИМАЦИИ)
   ============================================ */

function initializeAllNavigationFeatures() {
    
    // Плавный скролл по якорям ВРЕМЕННО ПОЛНОСТЬЮ ОТКЛЮЧЕН для диагностики

    console.log('⚠️ Плавный скролл в navigation.js временно отключен для теста.');

    // Анимация появления элементов при скролле (оставляем, она безопасна)
    try {
        const observer = new IntersectionObserver(function(entries, self) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    self.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card, .activity-card, .review-card').forEach(el => {
            observer.observe(el);
        });
    } catch (e) {
        console.warn('IntersectionObserver не поддерживается или не найдены элементы для анимации.');
    }

    console.log('✅ Безопасные функции из navigation.js успешно инициализированы.');
}
