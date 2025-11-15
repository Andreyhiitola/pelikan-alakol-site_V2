// menu.js
function renderMenu(data) {
  const container = document.getElementById('menuContainer');
  if (!container || !data) return;

  let menu = Array.isArray(data) ? data : (data.menu || []);
  if (!menu.length) return;

  container.innerHTML = '';
  menu.forEach(category => {
    const section = document.createElement('div');
    section.style.marginBottom = '20px';
    section.innerHTML = `<h3>${category.category}</h3>`;
    
    if (category.dishes && category.dishes.length) {
      const dishList = document.createElement('div');
      category.dishes.forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.style.display = 'flex';
        dishDiv.style.justifyContent = 'space-between';
        dishDiv.style.padding = '8px 0';
        dishDiv.innerHTML = `
          <span>${dish.name}</span>
          <strong>${dish.price} ₸</strong>
        `;
        dishList.appendChild(dishDiv);
      });
      section.appendChild(dishList);
    }
    container.appendChild(section);
  });
  console.log('✅ Menu загружено');
}
window.renderMenu = renderMenu;
