function renderAccommodation(data) {
  const container = document.getElementById('roomsContainer');
  
  if (!container) {
    console.error('❌ roomsContainer не найден');
    return;
  }

  if (!data) {
    console.error('❌ data не передана');
    return;
  }

  const rooms = Array.isArray(data) ? data : (data.accommodations || []);
  
  if (!rooms.length) {
    console.error('❌ нет данных accommodation');
    container.innerHTML = '<div class="error-message">Номера не найдены</div>';
    return;
  }

  container.innerHTML = '';

  rooms.forEach(room => {
    if (!room.id) {
      console.warn('Пропущена карточка без id', room);
      return;
    }
    if (!room.name) {
      console.warn(`Пропущена карточка без name для id=${room.id}`);
      return;
    }
    const price = Number(room.price);
    if (isNaN(price) || price <= 0) {
      console.warn(`Пропущена карточка с некорректной ценой для id=${room.id}`, room.price);
      return;
    }

    const card = document.createElement('div');
    card.className = 'scroll-item';

    const link = document.createElement('a');
    link.href = `accommodation.html?id=${encodeURIComponent(room.id)}`;
    link.style.textDecoration = 'none';
    link.style.color = 'inherit';

    const imgSrc = room.imageThumb || room.imageFull || room.image;
    if (imgSrc) {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = room.name;
      img.style.height = '250px';
      img.style.objectFit = 'cover';
      img.onerror = () => {
        img.src = './images/placeholder.jpg';
      };
      link.appendChild(img);
    }

    const h3 = document.createElement('h3');
    h3.textContent = `${room.icon || '🏠'} ${room.name}`;
    link.appendChild(h3);

    if (room.description) {
      const p = document.createElement('p');
      p.textContent = room.description;
      link.appendChild(p);
    }

    const pPrice = document.createElement('p');
    const strong = document.createElement('strong');
    strong.style.color = 'var(--primary-green)';
    strong.style.fontSize = '1.1em';
    strong.textContent = `от ${price} ₸ / ночь`;
    pPrice.appendChild(strong);
    link.appendChild(pPrice);

    card.appendChild(link);
    container.appendChild(card);
  });

  console.log(`✅ Accommodation: ${rooms.length} номеров (валидных)`);
}

window.renderAccommodation = renderAccommodation;
