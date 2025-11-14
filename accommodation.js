
accommodation.js
async function loadAccommodation() {
  try {
    const response = await fetch(
      CONFIG.getDataFile('accommodation.json') + '?t=' + new Date().getTime()
    );
    if (!response.ok) {
      throw new Error('Ошибка загрузки номеров: ' + response.status);
    }
    const data = await response.json();
    const container = document.getElementById('roomsContainer');
    
    if (container && data.accommodation) {
      container.innerHTML = data.accommodation.map(room => `
        <div class="room-card">
          <div class="room-icon">${room.icon}</div>
          <h3>${room.title}</h3>
          <p class="room-description">${room.description}</p>
          
          <div class="room-details">
            <span class="detail-item">📐 ${room.area} м²</span>
            <span class="detail-item">👥 ${room.capacity} чел</span>
            <span class="detail-item">🚿 ${room.bathroom}</span>
          </div>
          
          <div class="room-features">
            ${room.features.map(f => `<span class="feature">${f}</span>`).join('')}
          </div>
          
          ${room.info ? `<p class="room-info">✨ ${room.info}</p>` : ''}
          
          <p class="room-price">${room.price}</p>
          
          <button class="book-btn" onclick="alert('Забронировать ${room.title}')">
            Забронировать
          </button>
        </div>
      `).join('');
    }
  } catch (error) {
    console.error('❌ Ошибка при загрузке номеров:', error);
    document.getElementById('roomsContainer').innerHTML = 
      '<p style="color: red;">Ошибка загрузки данных номеров</p>';
  }
}

// Вызываем при загрузке страницы
document.addEventListener('DOMContentLoaded', loadAccommodation);
