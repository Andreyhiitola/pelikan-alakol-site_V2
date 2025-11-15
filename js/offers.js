// offers.js
function renderOffers(data) {
  const container = document.getElementById('offersContainer');
  if (!container || !data) return;

  let offers = Array.isArray(data) ? data : (data.offers || []);
  if (!offers.length) return;

  container.innerHTML = '';
  offers.forEach(offer => {
    const card = document.createElement('div');
    card.className = 'scroll-item';
    card.innerHTML = `
      <h3>${offer.icon || '🎁'} ${offer.title}</h3>
      ${offer.image ? `<img src="${offer.image}" alt="${offer.title}" style="height: 250px; object-fit: cover;">` : ''}
      <p>${offer.description}</p>
      ${offer.discount ? `<p style="color: red; font-weight: bold;">${offer.discount}</p>` : ''}
      ${offer.valid_until ? `<small>⏰ До: ${offer.valid_until}</small>` : ''}
    `;
    container.appendChild(card);
  });
  console.log('✅ Offers загружены');
}
window.renderOffers = renderOffers;
