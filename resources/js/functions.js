
function togglePopupMenu(id){
  document.getElementById(id).classList.toggle("active");
}

function fetchAndDisplayMenu(jsonFile, menuDivId, menuDivClass) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const menuDiv = document.getElementById(menuDivId);
      data.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add(menuDivClass);
        if (menuDivId === 'combi' ) {
          // Check if item has 'pieces' component
          if (item.pieces) {
            menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.title}">
              <h4>${item.number}</h4>
              <h6>${item.title}</h6>
              <p>${item.pieces}</p>
              <p style="color: red; font-size: 12px;">disponível só no Buffet à La Carte</p>
            `;
          }
        }else if (menuDivId === 'nigiri' ) {
          // Check if item has 'pieces' component
          if (item.pieces) {
            menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.title}">
              <h4>${item.number}</h4>
              <h6>${item.title}</h6>
              <p>${item.pieces}</p>
              <p style="color: red; font-size: 12px;">disponível só no Buffet à La Carte</p>
            `;
          }else {
            // For other menu IDs
            menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.title}">
              <h4>${item.number}</h4>
              <h6>${item.title}</h6>
            `;
          }
        }else if (menuDivId === 'varied' ) {
          // Check if item has 'pieces' component
          if (item.number === "B5" ) {
            menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.title}">
              <h4>${item.number}</h4>
              <h6>${item.title}</h6>
              <p>${item.pieces}</p>
              <p style="color: red; font-size: 12px;">disponível só no Buffet à La Carte</p>
            `;
          }else {
            // For other menu IDs
            menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.title}">
              <h4>${item.number}</h4>
              <h6>${item.title}</h6>
              <p>${item.pieces}</p>
            `;
          }
        }else if (menuDivId === 'fried' ) {
          // Check if item has 'pieces' component
          if (item.pieces) {
            menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.title}">
              <h4>${item.number}</h4>
              <h6>${item.title}</h6>
              <p>${item.pieces}</p>
            `;
          }else {
            // For other menu IDs
            menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.title}">
              <h4>${item.number}</h4>
              <h6>${item.title}</h6>
            `;
          }
        }else if (menuDivId === 'dessert_out' ) {
          menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h4>${item.number}</h4>
            <h6>${item.title}</h6>
            <p>${item.price}</p>
          `;
         
        } else {
          // For other menu IDs
          menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h4>${item.number}</h4>
            <h6>${item.title}</h6>
          `;
        }
        menuDiv.appendChild(menuItem);
      });
    })
    .catch(error => console.error('Error fetching menu data:', error));
}