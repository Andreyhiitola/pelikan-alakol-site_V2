// Файл: js/contacts.js

/**
 * Инициализация карты Leaflet
 */
function initMap() {
    const mapContainer = document.getElementById('mapContainer');
    if (!mapContainer || mapContainer._leaflet_id) { // Проверяем, что карты еще нет
        return;
    }

    const lat = 45.5898; // Координаты Акши
    const lon = 81.5997;

    try {
        const map = L.map('mapContainer').setView([lat, lon], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
        }).addTo(map);

        L.marker([lat, lon]).addTo(map)
            .bindPopup('<b>🐦 Пеликан Алаколь</b><br>пос. Акши');

        // Важный фикс для карты в модальном окне
        setTimeout(() => map.invalidateSize(), 100);

        console.log('✅ Карта инициализирована');
    } catch (error) {
        console.error('Ошибка инициализации карты:', error);
        if (mapContainer) {
            mapContainer.innerHTML = '<p>Не удалось загрузить карту.</p>';
        }
    }
}
