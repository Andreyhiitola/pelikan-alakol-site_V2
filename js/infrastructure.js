async function loadInfrastructure() {
  try {
    const response = await fetch(
      CONFIG.getDataFile('infrastructure.json') + '?t=' + new Date().getTime()
    );
    if (!response.ok) {
      throw new Error('Ошибка загрузки инфраструктуры: ' + response.status);
    }
    const data = await response.json();
    const container = document.getElementById('infrastructureContainer');
    
    if (container && data.infrastructure) {
      container.innerHTML = data.infrastructure.map(item => `
        <div class="infrastructure-item">
          <div class="infra-icon">${item.icon || '🏢'}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          ${item.features ? `
            <ul class="infra-features">
              ${item.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      `).join('');
      console.log('✓ Инфраструктура загружена');
    }
  } catch (error) {
    console.error('❌ Ошибка при загрузке инфраструктуры:', error);
    document.getElementById('infrastructureContainer').innerHTML = 
      '<p style="color: red;">Ошибка загрузки данных инфраструктуры</p>';
  }
}

// Вызываем при загрузке страницы
document.addEventListener('DOMContentLoaded', loadInfrastructure);
