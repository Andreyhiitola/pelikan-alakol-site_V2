async function loadGallery() {
  try {
    const response = await fetch(CONFIG.getDataFile('gallery.json') + '?t=' + new Date().getTime());
    if (!response.ok) throw new Error('Ошибка загрузки галереи: ' + response.status);
    const data = await response.json();
    const container = document.getElementById('galleryContainer');
    if (container && data.gallery) {
      container.innerHTML = data.gallery.map(item => `
        <div class="gallery-item">
          <img src="${item.image}" alt="${item.title}" />
          <p>${item.title}</p>
        </div>
      `).join('');
    }
  } catch (error) {
    console.error('❌ Ошибка при загрузке галереи:', error);
    document.getElementById('galleryContainer').innerHTML = '<p style="color: red;">Ошибка загрузки данных галереи</p>';
  }
}

document.addEventListener('DOMContentLoaded', loadGallery);
