// activities.js
function renderActivities(data) {
  const container = document.getElementById('activitiesContainer');
  if (!container || !data) return;

  let activities = Array.isArray(data) ? data : (data.activities || []);
  if (!activities.length) return;

  container.innerHTML = '';
  activities.forEach(activity => {
    const card = document.createElement('div');
    card.className = 'scroll-item';
    card.innerHTML = `
      ${activity.image ? `<img src="${activity.image}" alt="${activity.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">` : ''}
      <h3>${activity.icon || '🎯'} ${activity.name}</h3>
      <p><strong>🕐 ${activity.time}</strong></p>
      <p><strong>📍 ${activity.location}</strong></p>
      <p>${activity.description}</p>
      ${activity.features && activity.features.length ? `
        <div class="features" style="margin-top: 10px;">
          ${activity.features.map(f => `<span style="display: inline-block; background: #2d8659; color: white; padding: 4px 8px; border-radius: 4px; margin: 2px; font-size: 0.85em;">${f}</span>`).join('')}
        </div>
      ` : ''}
    `;
    container.appendChild(card);
  });
  console.log('✅ Activities загружены');
}
window.renderActivities = renderActivities;
