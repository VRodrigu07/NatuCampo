// obtenemos todos los elementos del menú
const menuItems = document.querySelectorAll('.Footer');

// obtenemos la URL actual
const currentUrl = window.location.href;

// recorremos los elementos del menú
menuItems.forEach((menuItem) => {
  // obtenemos el enlace del elemento del menú
  const link = menuItem.querySelector('a');

  // si el enlace coincide con la URL actual, agregamos la clase activa
  if (link.href === currentUrl) {
    menuItem.classList.add('active');
  }
});

// Selecciona el input de búsqueda
document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  searchForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita el envío del formulario

      const searchTerm = searchInput.value.trim().toLowerCase(); // Obtiene el término de búsqueda
      const products = document.querySelectorAll('.product'); // Selecciona todos los productos
      const sections = document.querySelectorAll('h2.Secciones'); // Selecciona todos los encabezados de secciones

      let foundAnyProduct = false; // Variable para verificar si se encontraron productos

      sections.forEach((section) => {
          let foundInSection = false; // Variable para verificar si se encontraron productos en la sección

          // Verifica los productos en la sección correspondiente
          products.forEach((product) => {
              const productName = product.querySelector('h3').textContent.trim().toLowerCase(); // Obtiene el nombre del producto
              if (productName.includes(searchTerm)) {
                  product.style.display = 'block'; // Muestra el producto si coincide
                  foundInSection = true; // Cambia la variable a true si hay coincidencias en la sección
                  foundAnyProduct = true; // Cambia la variable a true si hay coincidencias en general
              } else {
                  product.style.display = 'none'; // Oculta el producto si no coincide
              }
          });

          // Oculta o muestra el encabezado de sección según si se encontraron productos
          if (foundInSection) {
              section.style.display = 'block'; // Muestra el encabezado si hay productos visibles
          } else {
              section.style.display = 'none'; // Oculta el encabezado si no hay productos visibles
          }
      });

      // Opcional: Mensaje si no se encuentra ningún producto
      if (!foundAnyProduct) {
          alert('No se encontraron productos que coincidan con tu búsqueda.');
      }
  });
});

// Función para buscar veredas
function buscarVeredas() {
  const searchForm = document.querySelector('.search-bar form');
  const searchInput = document.querySelector('.search-bar input[type="search"]');
  const veredas = document.querySelectorAll('.card');

  searchForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const searchTerm = searchInput.value.trim().toLowerCase();
      const veredasContainer = document.querySelector('.Sección');

      veredas.forEach((vereda) => {
          const veredaName = vereda.querySelector('.card-title').textContent.trim().toLowerCase();

          if (veredaName.includes(searchTerm)) {
              vereda.style.display = 'block';
          } else {
              vereda.style.display = 'none';
          }
      });

      // Oculta o muestra el contenedor de veredas según si se encontraron resultados
      if (veredasContainer.children.length > 0) {
          veredasContainer.style.display = 'block';
      } else {
          veredasContainer.style.display = 'none';
      }
  });
}

// Llama a la función para buscar veredas
buscarVeredas();

// Función para buscar contactos
function buscarContactos() {
  const searchForm = document.querySelector('.search-bar form');
  const searchInput = document.querySelector('.search-bar input[type="search"]');
  const contactos = document.querySelectorAll('.Contenido');

  searchForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const searchTerm = searchInput.value.trim().toLowerCase();

      contactos.forEach((contacto) => {
          const contactoName = contacto.querySelector('.info-campesino h2').textContent.trim().toLowerCase();

          if (contactoName.includes(searchTerm)) {
              contacto.style.display = 'flex'; // Mantiene el diseño en fila
          } else {
              contacto.style.display = 'none'; // Oculta el contacto
          }
      });
  });
}

// Llama a la función para buscar contactos
buscarContactos();

// Seleccionar la lista de campesinos
function ordenarContactos() {
  const listaContactos = document.querySelector('.lista-campesinos');
  const contactos = Array.from(listaContactos.children); // Convierte los elementos hijos en un array

  // Ordena los contactos alfabéticamente por el nombre
  contactos.sort((a, b) => {
      const nombreA = a.querySelector('.info-campesino h2').textContent.trim().toLowerCase();
      const nombreB = b.querySelector('.info-campesino h2').textContent.trim().toLowerCase();
      return nombreA.localeCompare(nombreB); // Compara los nombres
  });

  // Limpia el contenedor y vuelve a agregar los contactos ordenados
  listaContactos.innerHTML = '';
  contactos.forEach(contacto => {
      listaContactos.appendChild(contacto); // Agrega cada contacto ordenado de nuevo al contenedor
  });
}

// Llama a la función para ordenar los contactos
ordenarContactos();
