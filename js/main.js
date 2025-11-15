// ========================================
// ГЛАВНЫЙ JS ФАЙЛ - main.js
// Инициализация приложения
// ========================================

console.log('🚀 Приложение запускается...');

// ========================================
// ЗАГРУЗКА JSON ДАННЫХ
// ========================================

async function loadJSON(filename) {
  try {
    const response = await fetch(`./${filename}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    console.log(`✅ Загружено: ${filename}`);
    return data;
  } catch (error) {
    console.error(`❌ Ошибка загрузки ${filename}:`, error);
    return null;
  }
}

async function initializeData() {
  console.log('🔄 Загружаю данные...');
  
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
}

// ========================================
// СУЩЕСТВУЮЩИЕ ФУНКЦИИ
// ========================================

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    console.log('🌙 Dark mode:', isDark ? 'включен' : 'выключен');
}

function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('navMobile');

    if (hamburger && navMobile) {
        hamburger.classList.toggle('active');
        navMobile.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('navMobile');

    if (hamburger) hamburger.classList.remove('active');
    if (navMobile) navMobile.classList.remove('active');
}

function setActive(element) {
    const buttons = document.querySelectorAll('.header-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');
}

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

function filterRooms() {
    const checkIn = document.getElementById('checkIn')?.value;
    const checkOut = document.getElementById('checkOut')?.value;
    const guests = document.getElementById('guests')?.value;
    
    console.log('🔍 Фильтр номеров:', { checkIn, checkOut, guests });
}

// ========================================
// ЗАПУСК ПРИЛОЖЕНИЯ
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('📄 DOM загружен');
  initializeData();
});

window.addEventListener('load', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
});
