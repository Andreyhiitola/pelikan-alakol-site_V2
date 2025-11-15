// reviews.js
function renderReviews(data) {
  const container = document.getElementById('reviewsContainer');
  if (!container || !data) return;

  let reviews = Array.isArray(data) ? data : (data.reviews || []);
  if (!reviews.length) return;

  container.innerHTML = '';
  reviews.forEach(review => {
    const card = document.createElement('div');
    card.className = 'scroll-item';
    const stars = '⭐'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    card.innerHTML = `
      <h4>${review.name}</h4>
      <p>${stars}</p>
      <p>${review.text}</p>
      <small>${review.date || ''}</small>
    `;
    container.appendChild(card);
  });
  console.log('✅ Reviews загружены');
}
window.renderReviews = renderReviews;
