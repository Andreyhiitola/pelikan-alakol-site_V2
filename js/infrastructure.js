function renderInfrastructure(data) {
  const container = document.getElementById('infrastructureContainer');
  if (!container || !data || !data.infrastructure) return;

  container.innerHTML = ''; // очистить предыдущий контент

  data.infrastructure.forEach(item => {
    const card = document.createElement('div');
    card.className = 'infrastructure-card';
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="infrastructure-description">${item.description}</p>
    `;
    container.appendChild(card);
  });
  console.log('✅ Infrastructure загружена');
}
window.renderInfrastructure = renderInfrastructure;
