
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
        if (menuDivId === 'combi') {
          // Check if item has 'pieces' component
          if (item.pieces) {
            menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.title}">
              <h4>${item.number}</h4>
              <h6>${item.title}</h6>
              <p>${item.pieces}</p>
            `;
          } else {
            // If 'pieces' component doesn't exist
            menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.title}">
              <h4>${item.number}</h4>
              <h6>${item.title}</h6>
            `;
          }
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