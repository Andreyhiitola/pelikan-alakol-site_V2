// Функция загрузки JSON из корня
async function loadJSON(filename) {
  try {
    const response = await fetch(`./${filename}`);
    if (!response.ok) {
      throw new Error(`Файл не найден: ${filename} (status: ${response.status})`);
    }
    return await response.json();
  } catch (error) {
    console.error(`❌ Ошибка загрузки ${filename}:`, error);
    return null;
  }
}

// Загрузка всех данных при старте
async function initializeData() {
  console.log('🔄 Загружаю данные...');
  
  const accommodation = await loadJSON('accommodation.json');
  const activities = await loadJSON('activities.json');
  const menu = await loadJSON('menu.json');
  const gallery = await loadJSON('gallery.json');
  const reviews = await loadJSON('reviews.json');
  const contacts = await loadJSON('contacts.json');
  const offer = await loadJSON('offer.json');

  console.log('✅ Все данные загружены:', {
    accommodation,
    activities,
    menu,
    gallery,
    reviews,
    contacts,
    offer
  });
// ========================================
// ЗАГРУЗКА JSON ДАННЫХ
// ========================================

/**
 * Функция загрузки JSON файла
 */
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

/**
 * Инициализация всех данных при загрузке страницы
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
}

  // Передаче данных в функции рендеринга
  if (accommodation) renderAccommodation(accommodation);
  if (activities) renderActivities(activities);
  if (menu) renderMenu(menu);
  if (gallery) renderGallery(gallery);
  if (reviews) renderReviews(reviews);
  if (contacts) renderContacts(contacts);
  if (offer) renderOffers(offer);
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  console.log('📄 DOM загружен');
  initializeData();
});

