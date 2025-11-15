*/
async function initializeData() {
  console.log('🔄 Загружаю данные...');
  
  // Загрузка всех JSON файлов
  window.data = {
    accommodation: await loadJSON('accommodation.json'),
    activities: await loadJSON('activities.json'),
    menu: await loadJSON('menu.json'),
    gallery: await loadJSON('gallery.json'),
    reviews: await loadJSON('reviews.json'),
    contacts: await loadJSON('contacts.json'),
    offer: await loadJSON('offer.json')
  };

  console.log('✅ Все данные загружены:', window.data);

  // Передача данных в функции рендеринга
  if (window.data.accommodation) renderAccommodation(window.data.accommodation);
  if (window.data.activities) renderActivities(window.data.activities);
  if (window.data.menu) renderMenu(window.data.menu);
  if (window.data.gallery) renderGallery(window.data.gallery);
  if (window.data.reviews) renderReviews(window.data.reviews);
  if (window.data.contacts) renderContacts(window.data.contacts);
  if (window.data.offer) renderOffers(window.data.offer);
}

// ========================================
// ФУНКЦИИ РЕНДЕРИНГА (заглушки)
// ========================================

function renderAccommodation(data) {
  console.log('🏠 Рендерю номера:', data);
  // Ваш код рендеринга accommodation
}

function renderActivities(data) {
  console.log('🎯 Рендерю мероприятия:', data);
  // Ваш код рендеринга activities
}

function renderMenu(data) {
  console.log('🍽️ Рендерю меню:', data);
  // Ваш код рендеринга menu
}

function renderGallery(data) {
  console.log('🖼️ Рендерю галерею:', data);
  // Ваш код рендеринга gallery
}

function renderReviews(data) {
  console.log('⭐ Рендерю отзывы:', data);
  // Ваш код рендеринга reviews
}

function renderContacts(data) {
  console.log('📞 Рендерю контакты:', data);
  // Ваш код рендеринга contacts
}

function renderOffers(data) {
  console.log('🎁 Рендерю предложения:', data);
  // Ваш код рендеринга offer
}

// ========================================
// СУЩЕСТВУЮЩИЕ ФУНКЦИИ
// ========================================

/**
 * Переключение темы (светлая/темная)
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    console.log('🌙 Dark mode:', isDark ? 'включен' : 'выключен');
}

/**
 * Переключение мобильного меню
 */
function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('navMobile');

    if (hamburger && navMobile) {
        hamburger.classList.toggle('active');
        navMobile.classList.toggle('active');
    }
}

/**
 * Закрытие мобильного меню
 */
function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('navMobile');

    if (hamburger) hamburger.classList.remove('active');
    if (navMobile) navMobile.classList.remove('active');
}

/**
 * Установка активной кнопки меню
 */
function setActive(element) {
    const buttons = document.querySelectorAll('.header-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');
}

/**
 * Прокрутка контейнера (для галереи и т.д.)
 */
function scrollItems(container, direction) {
    const scrollContainer = document.getElementById(container + 'Container');
    if (!scrollContainer) return;

    const scrollAmount = 300;
    if (direction === -1) {
        scrollContainer.scrollLeft -= scrollAmount;
    } else {
        scrollContainer.scrollLeft += scrollAmount;
    }
}

/**
 * Фильтр номеров
 */
function filterRooms() {
    const checkIn = document.getElementById('checkIn')?.value;
    const checkOut = document.getElementById('checkOut')?.value;
    const guests = document.getElementById('guests')?.value;
    
    console.log('🔍 Фильтр номеров:', { checkIn, checkOut, guests });
    // Здесь логика фильтрации
}

// ========================================
// ЗАПУСК ПРИЛОЖЕНИЯ
// ========================================

// Загрузка данных при готовности DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('📄 DOM загружен');
  initializeData();
});

// Восстановление темы из localStorage
window.addEventListener('load', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
});
