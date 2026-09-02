// ============================================
// J&J HOGAR Y CONSTRUCCIÓN - JAVASCRIPT OPTIMIZADO
// Versión mejorada manteniendo tu estructura original
// ============================================

// === 1. CATÁLOGO SPC (Página de spc.html) ===
const productsIndex = [
    { id: 1, name: "Piso SPC 15 cm x 95 cm", price: 8990, img: "IMAGENES/spc1.jpeg" },
    { id: 2, name: "Piso SPC 15 cm x 95 cm", price: 8990, img: "IMAGENES/spc2.jpeg" },
    { id: 3, name: "Piso SPC 15 cm x 95 cm", price: 8990, img: "IMAGENES/spc3.jpeg" },
    { id: 4, name: "Piso SPC 15 cm x 95 cm", price: 8990, img: "IMAGENES/spc4.jpeg" },
    { id: 5, name: "Piso SPC termoacústico 19cm x 1.22m ", price: 8800, img: "IMAGENES/spc5.jpeg" },
    { id: 6, name: "Piso SPC termoacústico 19cm x 1.22m ", price: 8990, img: "IMAGENES/spc6.jpeg" },
    { id: 7, name: "Piso SPC termoacústico 19cm x 1.22m ", price: 8990, img: "IMAGENES/spc7.jpeg" },
    { id: 8, name: "Piso SPC termoacústico 19cm x 1.22m ", price: 8990, img: "IMAGENES/spc8.jpeg" },
    { id: 9, name: "PISOS SPC  18 x 1.20 COD: MAD 1008", price: 8990, img: "IMAGENES/spc9.jpeg" },
    { id: 10, name: "PISOS SPC 18 x 1.20 COD: GREY 8008 ", price: 9500, img: "IMAGENES/spc10.jpeg" },
    { id: 11, name: "PISOS SPC 18 x 1.20 COD: BEIGE 8005 ", price: 9500, img: "IMAGENES/spc11.jpeg" },
    { id: 12, name: "PISOS SPC 18 x 1.20 COD: BROWN 8032 ", price: 9500, img: "IMAGENES/spc12.jpeg" },
    { id: 13, name: "PISOS SPC 18 x 1.20 COD: LIGHT 8001  ", price: 9500, img: "IMAGENES/spc13.jpeg" },
    { id: 14, name: "PISOS SPC 18 x 1.20 COD: WHITE ", price: 9500, img: "IMAGENES/spc14.jpeg" },
    { id: 15, name: "PISOS SPC 18 x 1.20 COD: CEREZO ", price: 9500, img: "IMAGENES/spc15.jpeg" },
    { id: 16, name: "PISOS SPC 18 x 1.20 COD: MAPLE ", price: 9500, img: "IMAGENES/spc16.jpeg" },
    { id: 17, name: "PISOS SPC 18 x 1.20 COD: ROBLE ", price: 9500, img: "IMAGENES/spc17.jpeg" },
    { id: 18, name: "PISOS SPC 18 x 1.20 COD: NOGAL", price: 9500, img: "IMAGENES/spc18.jpeg" },
    { id: 19, name: "PISOS SPC 18 x 1.20 COD: GRIS", price: 9500, img: "IMAGENES/spc19.jpeg" },
    { id: 20, name: "PISOS SPC 18 x 1.20 COD: PERLA", price: 9500, img: "IMAGENES/spc20.jpeg" },
    { id: 21, name: "PISOS SPC 18 x 1.20 COD: VINTAGE", price: 9500, img: "IMAGENES/spc21.jpeg" },
    { id: 22, name: "PISOS SPC 18 x 1.20 COD: CAOBA", price: 9500, img: "IMAGENES/spc22.jpeg" },
];

// === 2. CATÁLOGO DE LÁMINAS PVC ===
const productsPVC = [
    { id: 101, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lamina1.jpeg" },
    { id: 102, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina2.jpeg" },
    { id: 104, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina4.jpeg" },
    { id: 105, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina5.jpeg" },
    { id: 106, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina6.jpeg" },
    { id: 107, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina7.jpeg" },
    { id: 108, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina8.jpeg" },
    { id: 109, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina9.jpeg" },
    { id: 110, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina10.jpeg" },
    { id: 111, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina11.jpeg" },
    { id: 112, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina12.jpeg" },
    { id: 113, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina13.jpeg" },
    { id: 114, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina14.jpeg" },
    { id: 115, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina2.jpeg" },
    { id: 116, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina15.jpeg" },
    { id: 117, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina16.jpeg" },
    { id: 118, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina17.jpeg" },
    { id: 119, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina18.jpeg" },
    { id: 120, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina19.jpeg" },
    { id: 121, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina20.jpeg" },
    { id: 122, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina21.jpeg" },
    { id: 123, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina22.jpeg" },
    { id: 124, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina23.jpeg" },
    { id: 125, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina24.jpeg" },
    { id: 126, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina25.jpeg" },
    { id: 127, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina27.jpeg" },
    { id: 128, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina28.jpeg" },
    { id: 129, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina29.jpeg" },
    { id: 130, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina30.jpeg" },
    { id: 131, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina31.jpeg" },
    { id: 132, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina32.jpeg" },
    { id: 133, name: "Lámina PVC 1.22 x 2.44 Grosor 3 mm", price: 16500, img: "IMAGENES/lmaina33.jpeg" }
];

// === 3. CATÁLOGO DE PANELES INTERIORES ===
const productsInterior = [
    // ACANALADOS
    { id: 401, name: "Acanalado 16cm x 290 cm COD: 89041-J", price: 4000, img: "IMAGENES/acanalado1.jpeg", categoria: "acanalado" },
    { id: 402, name: "Acanalado 16cm x 290 cm COD: MAPLE F/BLANCO", price: 4000, img: "IMAGENES/acanalado2.jpeg", categoria: "acanalado" },
    { id: 403, name: "Acanalado 16cm x 290 cm COD: K7142-302", price: 4000, img: "IMAGENES/acanalado3.jpeg", categoria: "acanalado" },
    { id: 404, name: "Acanalado 16cm x 290 cm COD: K7256-302", price: 4000, img: "IMAGENES/acanalado4.jpeg", categoria: "acanalado" },
    { id: 405, name: "Acanalado 16cm x 290 cm COD: K7122-302-H", price: 4000, img: "IMAGENES/acanalado5.jpeg", categoria: "acanalado" },
    { id: 406, name: "Acanalado 16cm x 290 cm COD: 7285-302-H", price: 4000, img: "IMAGENES/acanalado6.jpeg", categoria: "acanalado" },
    { id: 407, name: "Acanalado 16cm x 290 cm COD: K7250-302-H", price: 4000, img: "IMAGENES/acanalado7.jpeg", categoria: "acanalado" },
    { id: 408, name: "Acanalado 16cm x 290 cm COD: SEDA-CH", price: 4000, img: "IMAGENES/acanalado8.jpeg", categoria: "acanalado" },
    { id: 409, name: "Acanalado 16cm x 290 cm COD: HXMT002-H", price: 4000, img: "IMAGENES/acanalado9.jpeg", categoria: "acanalado" },
    { id: 410, name: "Acanalado 16cm x 290 cm COD: ROBLE F/NEGRO", price: 4000, img: "IMAGENES/acanalado10.jpeg", categoria: "acanalado" },
    { id: 411, name: "Acanalado 16cm x 290 cm COD: ROBLE-CH", price: 4000, img: "IMAGENES/acanalado11.jpeg", categoria: "acanalado" },
    { id: 412, name: "Acanalado 16cm x 290 cm COD: TEKA-1-CH", price: 4000, img: "IMAGENES/acanalado12.jpeg", categoria: "acanalado" },
    { id: 413, name: "Acanalado 16cm x 290 cm COD: K7101-302-H", price: 4000, img: "IMAGENES/acanalado13.jpeg", categoria: "acanalado" },
    { id: 414, name: "Acanalado 16cm x 290 cm COD: MAPLE-CH", price: 4000, img: "IMAGENES/acanalado14.jpeg", categoria: "acanalado" },
    { id: 415, name: "Acanalado 16cm x 290 cm COD: 2009-J", price: 4000, img: "IMAGENES/acanalado15.jpeg", categoria: "acanalado" },
    { id: 416, name: "Acanalado 16cm x 290 cm COD: K7245 A189-H", price: 4000, img: "IMAGENES/acanalado16.jpeg", categoria: "acanalado" },
    { id: 417, name: "Acanalado 16cm x 290 cm COD: LINO GRIS OSC-CH", price: 4000, img: "IMAGENES/acanalado17.jpeg", categoria: "acanalado" },
    { id: 418, name: "Acanalado 16cm x 290 cm COD: LINO GRIS-CH", price: 4000, img: "IMAGENES/acanalado18.jpeg", categoria: "acanalado" },
    { id: 419, name: "Acanalado 16cm x 290 cm COD: AZUL-M", price: 4000, img: "IMAGENES/acanalado19.jpeg", categoria: "acanalado" },
    { id: 420, name: "Acanalado 16cm x 290 cm COD: NOGAL-CH", price: 4000, img: "IMAGENES/acanalado20.jpeg", categoria: "acanalado" },
    { id: 421, name: "Acanalado 16cm x 290 cm COD: NEGRO-CH", price: 4000, img: "IMAGENES/acanalado21.jpeg", categoria: "acanalado" },
    { id: 422, name: "Acanalado 16cm x 290 cm COD: K7187-A237-H", price: 4000, img: "IMAGENES/acanalado22.jpeg", categoria: "acanalado" },
    { id: 423, name: "Acanalado 16cm x 290 cm COD: LINO GRIS-H", price: 4000, img: "IMAGENES/acanalado23.jpeg", categoria: "acanalado" },
    
    // WPC ONDULADO
    { id: 201, name: "WPC ondulado 15 x 2.90 COD: J5-55-J", price: 3990, img: "IMAGENES/ondulado1.jpeg", categoria: "wpc" },
    { id: 202, name: "WPC ondulado 15 x 2.90 COD: 10-20-J ", price: 3990, img: "IMAGENES/ondulado2.jpeg", categoria: "wpc" },
    { id: 203, name: "WPC ondulado 15 x 2.90 COD: YF 5017-J", price: 3990, img: "IMAGENES/ondulado3.jpeg", categoria: "wpc" },
    { id: 204, name: "WPC ondulado 15 x 2.90 COD: P22-J ", price: 3990, img: "IMAGENES/ondulado4.jpeg", categoria: "wpc" },
    { id: 205, name: "WPC ondulado 15 x 2.90 COD: G21-J ", price: 3990, img: "IMAGENES/ondulado5.jpeg", categoria: "wpc" },
    { id: 206, name: "WPC ondulado 15 x 2.90 COD: J5-55-J ", price: 3990, img: "IMAGENES/ondulado6.jpeg", categoria: "wpc" },
    { id: 207, name: "WPC ondulado 15 x 2.90 COD: 5001-J ", price: 3990, img: "IMAGENES/ondulado7.jpeg", categoria: "wpc" },
    
    // WPC FLAT
    { id: 301, name: "Panel WPC FLAT 19.5 x 290 COD: FLAT P79", price: 3995, img: "IMAGENES/flat1.jpeg", categoria: "flat" },
    { id: 302, name: "Panel WPC FLAT 19.5 x 290 COD: FLAT PO1", price: 3995, img: "IMAGENES/flat2.jpeg", categoria: "flat" },
    { id: 303, name: "Panel WPC FLAT 19.5 x 290 COD: FLAT PO3", price: 3995, img: "IMAGENES/flat3.jpeg", categoria: "flat" },
    { id: 304, name: "Panel WPC FLAT 19.5 x 290 COD: FLAT PO2", price: 3995, img: "IMAGENES/flat4.jpeg", categoria: "flat" },
];
// === CATÁLOGO DE TABLILLAS PVC ===
const productsTablilla = [
    { id: 501, name: "Tablilla PVC 85104-2 20cm x 5.95m", price: 8500, img: "IMAGENES/tabli1.jpeg" },
    { id: 502, name: "Tablilla PVC 100006-10 20cm x 5.95m", price: 9200, img: "IMAGENES/tabli2.jpeg" },
    { id: 503, name: "Tablilla PVC 805101-2 20cm x 5.95m", price: 9800, img: "IMAGENES/tabli3.jpeg" },
    { id: 504, name: "Tablilla PVC 80073-7 20cm x 5.95m", price: 8900, img: "IMAGENES/tabli4.jpeg" },
    { id: 505, name: "Tablilla PVC 817709-7 20cm x 5.95m", price: 8900, img: "IMAGENES/tabli5.jpeg" },
    { id: 506, name: "Tablilla PVC 804608-9 20cm x 5.95m", price: 8900, img: "IMAGENES/tabli6.jpeg" }
];
// === 4. CATÁLOGO DE PANELES EXTERIORES (WPC) ===
const productsWPCExterior = [
    { id: 601, name: "Panel Flat WPC Exterior 17.7cm x 2.90m - Chocolate", price: 9500, img: "IMAGENES/wpc1.jpeg" },
    { id: 602, name: "Panel Flat WPC Exterior 17.7cm x 2.90m - Teka", price: 9500, img: "IMAGENES/wpc2.jpeg" },
    { id: 603, name: "Panel Flat WPC Exterior 17.7cm x 2.90m - Gris Antracita", price: 9500, img: "IMAGENES/wpc3.jpeg" },
    { id: 604, name: "Panel Flat WPC Exterior 17.7cm x 2.90m - Madera Natural", price: 9500, img: "IMAGENES/wpc4.jpeg" }
];
// === ACTUALIZAR LISTA MAESTRA ===
const allProducts = [...productsIndex, ...productsPVC, ...productsInterior, ...productsTablilla, ...productsWPCExterior];

function renderProducts() {
    const grid = document.getElementById('products');
    if (!grid) return;

    // 1. Detección de página (Normalizamos la ruta para evitar errores)
    const path = window.location.pathname.toLowerCase();
    const isTablillaPage = path.includes("tablillas");
    const isPVCPage = path.includes("pvc");
    const isInteriorPage = path.includes("interior");
    

    // 2. Selección de catálogo
    let currentList = productsIndex; // Por defecto SPC
    let unitLabel = '/m²';

    if (isPVCPage) {
        currentList = productsPVC;
        unitLabel = ''; 
    } else if (isTablillaPage) {
        currentList = productsTablilla; // <--- Aquí cargamos tus productos ID 500
        unitLabel = ''; 
    } else if (isInteriorPage) {
        currentList = productsInterior;
        unitLabel = '';
    }

    // 3. Limpiar diseños viejos y asegurar el contenedor
    grid.classList.remove('tablilla-layout-especial');
    
    // 4. Renderizado en tarjetas (Basado en tu diseño de las capturas)
    if (currentList && currentList.length > 0) {
        grid.innerHTML = currentList.map(p => `
            <div class="card">
                <div class="card-clickable" onclick="window.location.href='producto.html?id=${p.id}'">
                    <img src="${p.img}" alt="${p.name}" loading="lazy">
                    <h3>${p.name}</h3>
                    <p class="price">₡${p.price.toLocaleString()}${unitLabel}</p>
                </div>
                <button class="btn-add" onclick="event.stopPropagation(); addToCart(${p.id})">
                    AÑADIR AL CARRITO
                </button>
            </div>
        `).join('');
    } else {
        grid.innerHTML = "<p>No se encontraron productos en esta categoría.</p>";
    }

    // 5. Animación de aparición
    setTimeout(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            setTimeout(() => { card.classList.add('visible'); }, index * 50);
        });
    }, 100);
}

// === ESTADO DE LA APLICACIÓN ===
let cart = JSON.parse(localStorage.getItem('jj_cart')) || [];
let currentSlide = 0;
let slideInterval;

// ============================================
// === INICIALIZACIÓN ===
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Renderizar productos según la página
    renderProducts();
    
    // Renderizar carrito si estamos en esa página
    renderCartPage();
    
    // Actualizar UI del carrito
    updateCartUI();
    
    // Inicializar carrusel
    initCarousel();
    
    // Scroll effects
    initHeaderScroll();
    
    // Animaciones en scroll
    initScrollAnimations();
    
    // Cerrar menú al hacer clic fuera
    initClickOutside();
    
    // Inicializar tabs de paneles interiores
    initInteriorTabs();
    
    console.log('✅ J&J Hogar - Sistema inicializado correctamente');
}

// ============================================
// === RENDERIZADO DE PRODUCTOS ===
// ============================================
function renderProducts() {
    const grid = document.getElementById('products');
    if (!grid) return;

    // 1. Por defecto cargamos los del index (SPC)
    let currentList = productsIndex; 
    let unitLabel = '/m²';

    // 2. CAMBIO DE LISTA SEGÚN LA PÁGINA
    // Asegúrate de que el nombre entre comillas sea exactamente el de tu archivo .html
    if (window.location.pathname.includes("pvc.html")) {
        currentList = productsPVC;
        unitLabel = ''; 
    } 
    else if (window.location.pathname.includes("tablillas.html")) {
        currentList = productsTablilla; // <--- AQUÍ se activan tus tablillas
        unitLabel = ''; 
    }
    else if (window.location.pathname.includes("interior.html")) {
        currentList = productsInterior;
        unitLabel = '';
    }

    // 3. Limpiar y dibujar
    grid.innerHTML = currentList.map(p => `
        <div class="card">
            <div class="card-clickable" onclick="window.location.href='producto.html?id=${p.id}'">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                <h3>${p.name}</h3>
                <p class="price">₡${p.price.toLocaleString()}${unitLabel}</p>
            </div>
            <button class="btn-add" onclick="event.stopPropagation(); addToCart(${p.id})">
                Agregar al Carrito
            </button>
        </div>
    `).join('');
}

    // Activar animaciones de entrada con stagger
    setTimeout(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 50); // 50ms entre cada tarjeta
        });
    }, 100);


// ============================================
// === CARRITO DE COMPRAS (MEJORADO) ===
// ============================================
window.addToCart = function(id) {
    const product = allProducts.find(p => p.id === id);
    if (!product) {
        showNotification('Producto no encontrado', 'error');
        return;
    }
    
    const existing = cart.find(item => item.id === id);
    
    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
        showNotification('Cantidad actualizada en el carrito', 'success');
    } else {
        cart.push({ ...product, qty: 1 });
        showNotification('✓ Producto agregado al carrito', 'success');
    }
    
    saveCart();
    animateCartButton();
};

function saveCart() {
    localStorage.setItem('jj_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const count = document.getElementById('cart-count');
    if (!count) return;
    
    const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    count.innerText = totalItems;
    
    if (totalItems > 0) {
        count.style.display = 'flex';
    } else {
        count.style.display = 'none';
    }
}

function animateCartButton() {
    const cartBtn = document.querySelector('.cart-trigger') || document.getElementById('cart-btn');
    if (!cartBtn) return;
    
    cartBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

// ============================================
// === SISTEMA DE NOTIFICACIONES (NUEVO) ===
// ============================================
function showNotification(message, type = 'info') {
    // Crear notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
            <span>${message}</span>
        </div>
    `;
    
    // Estilos inline
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease-out',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    });
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar animaciones CSS para notificaciones
if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// === PÁGINA DEL CARRITO ===
// ============================================
function renderCartPage() {
    const cartList = document.getElementById('cart-list');
    if (!cartList) return;

    if (cart.length === 0) {
        cartList.innerHTML = `
            <div class="empty-cart" style="text-align: center; padding: 3rem;">
                <h2>Tu carrito está vacío</h2>
                <p style="color: #666; margin: 1rem 0 2rem;">Agrega productos para comenzar tu compra</p>
                <a href="index.html" class="btn-hero-primary" style="display: inline-block; padding: 1rem 2rem; background: #000; color: #fff; text-decoration: none; border-radius: 50px;">Ver Productos</a>
            </div>
        `;
        updateTotals(0);
        return;
    }

    cartList.innerHTML = cart.map((item, index) => `
        <div class="cart-item" style="display: flex; gap: 1.5rem; padding: 1.5rem 0; border-bottom: 1px solid #eee;">
            <img src="${item.img}" alt="${item.name}" style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px;">
            <div class="item-details" style="flex: 1;">
                <h4 style="margin-bottom: 0.5rem;">${item.name}</h4>
                <p style="color: #d4a574; font-weight: 700; font-size: 1.25rem; margin-bottom: 1rem;">₡${item.price.toLocaleString()}</p>
                <div class="quantity-controls" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                    <button onclick="changeQty(${index}, -1)" style="padding: 0.5rem 1rem; background: #f0f0f0; border: none; border-radius: 4px; cursor: pointer; font-weight: 700;">-</button>
                    <span style="min-width: 30px; text-align: center; font-weight: 700;">${item.qty || 1}</span>
                    <button onclick="changeQty(${index}, 1)" style="padding: 0.5rem 1rem; background: #f0f0f0; border: none; border-radius: 4px; cursor: pointer; font-weight: 700;">+</button>
                </div>
                <button class="btn-remove" onclick="removeItem(${index})" style="background: none; border: none; color: #e74c3c; cursor: pointer; font-weight: 600; font-size: 0.9rem;">🗑️ Eliminar</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, i) => sum + (i.price * (i.qty || 1)), 0);
    updateTotals(total);
}

window.changeQty = function(index, delta) {
    if (!cart[index]) return;
    
    cart[index].qty = (cart[index].qty || 1) + delta;
    if (cart[index].qty < 1) cart[index].qty = 1;
    
    saveCart();
    renderCartPage();
};

window.removeItem = function(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    saveCart();
    renderCartPage();
    showNotification(`${removedItem.name} eliminado del carrito`, 'info');
};

function updateTotals(total) {
    const subtotal = document.getElementById('subtotal');
    const finalTotal = document.getElementById('final-total');
    
    if (subtotal) subtotal.innerText = `₡${total.toLocaleString()}`;
    if (finalTotal) finalTotal.innerText = `₡${total.toLocaleString()}`;
}

window.sendWhatsAppOrder = function() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío', 'error');
        return;
    }
    
    let msg = "🏗️ *Pedido J&J Hogar y Construcción*\n\n";
    cart.forEach(i => {
        const qty = i.qty || 1;
        msg += `• ${i.name} x${qty} - ₡${(i.price * qty).toLocaleString()}\n`;
    });
    
    const total = cart.reduce((sum, i) => sum + (i.price * (i.qty || 1)), 0);
    msg += `\n*Total: ₡${total.toLocaleString()}*`;
    
    window.open(`https://api.whatsapp.com/send?phone=50685884086&text=${encodeURIComponent(msg)}`, '_blank');
};

// ============================================
// === CARRUSEL DEL HERO (MEJORADO) ===
// ============================================
function initCarousel() {
    const slides = document.querySelectorAll('.mi-slide');
    if (slides.length === 0) return;
    
    // Mostrar el primer slide
    showSlide(0);
    
    // Auto-play cada 5 segundos
    startAutoPlay();
    
    // Pausar auto-play al hacer hover
    const carrusel = document.querySelector('.hero-carrusel');
    if (carrusel) {
        carrusel.addEventListener('mouseenter', stopAutoPlay);
        carrusel.addEventListener('mouseleave', startAutoPlay);
    }
}

function showSlide(index) {
    const slides = document.querySelectorAll('.mi-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    // Ajustar índice si está fuera de rango
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    currentSlide = index;
    
    // Actualizar slides
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            slide.style.display = 'block';
        } else {
            slide.classList.remove('active');
            slide.style.display = 'none';
        }
    });
    
    // Actualizar indicadores si existen
    if (indicators.length > 0) {
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
}

window.cambiarSlide = function(direction) {
    showSlide(currentSlide + direction);
    stopAutoPlay();
    startAutoPlay();
};

window.irASlide = function(index) {
    showSlide(index);
    stopAutoPlay();
    startAutoPlay();
};

function startAutoPlay() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // 5 segundos
}

function stopAutoPlay() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

// Compatibilidad con función anterior
let slideIndex = 0;
function mostrarSlides() {
    const slides = document.getElementsByClassName("mi-slide");
    if (slides.length === 0) return;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }
    
    setTimeout(mostrarSlides, 4000); 
}

// ============================================
// === MENÚ LATERAL ===
// ============================================
window.toggleMenu = function() {
    const menu = document.getElementById('menu-desplegable');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (!menu) return;
    
    menu.classList.toggle('active');
    if (menuBtn) menuBtn.classList.toggle('active');
    
    // Prevenir scroll del body cuando el menú está abierto
    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

// ============================================
// === PANELES INTERIORES (TABS) ===
// ============================================
function initInteriorTabs() {
    // Renderizar primera categoría al cargar
    if (document.getElementById("acanalado")) {
        renderPaneles("acanalado");
    }
}

window.changeTab = function(event, categoria) {
    // Ocultar todos los paneles
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(p => {
        p.style.display = 'none';
        p.classList.remove('active');
    });

    // Quitar estado activo de todos los botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // Mostrar panel seleccionado
    const selectedPanel = document.getElementById(categoria);
    if (selectedPanel) {
        selectedPanel.style.display = 'grid';
        selectedPanel.classList.add('active');
        
        // Activar botón
        if (event && event.currentTarget) {
            event.currentTarget.classList.add('active');
        }
        
        // Renderizar si está vacío
        if (selectedPanel.innerHTML === "") {
            renderPaneles(categoria);
        }
    }
};

function renderPaneles(cat) {
    const container = document.getElementById(cat);
    if (!container) return;
    
    const filtered = productsInterior.filter(p => p.categoria === cat);

    container.innerHTML = filtered.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}" loading="lazy">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">₡${product.price.toLocaleString()}</p>
                <button class="btn-add" onclick="addToCart(${product.id})">Añadir al Carrito</button>
            </div>
        </div>
    `).join('');
}

// ============================================
// === EFECTOS DE SCROLL (NUEVO) ===
// ============================================
function initHeaderScroll() {
    const header = document.querySelector('.header-modern') || document.querySelector('header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

function initScrollAnimations() {
    // Solo si el navegador soporta IntersectionObserver
    if (!('IntersectionObserver' in window)) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que necesitan animación
    const animatedElements = document.querySelectorAll('.card, .feature-card, .producto-promo, .product-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// === CERRAR MENÚ AL HACER CLIC FUERA ===
// ============================================
function initClickOutside() {
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('menu-desplegable');
        const menuBtn = document.querySelector('.menu-btn');
        
        if (!menu || !menuBtn) return;
        
        // Si el menú está activo y se hace clic fuera
        if (menu.classList.contains('active') && 
            !menu.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            toggleMenu();
        }
    });
}

// ============================================
// === NAVEGACIÓN CARRITO ===
// ============================================
const cartBtn = document.getElementById('cart-btn');
if (cartBtn) {
    cartBtn.onclick = () => window.location.href = 'carrito.html';
}

// ============================================
// === SMOOTH SCROLL PARA ENLACES INTERNOS ===
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// === FUNCIONES DE UTILIDAD ===
// ============================================
function formatPrice(price) {
    return `₡${price.toLocaleString('es-CR')}`;
}

// ============================================
// === LOG DE INICIALIZACIÓN ===
// ============================================
console.log('%c✅ J&J Hogar y Construcción', 'color: #d4a574; font-size: 20px; font-weight: bold;');
console.log('%cSistema inicializado correctamente', 'color: #27ae60; font-size: 12px;');
console.log('📦 Productos cargados:', allProducts.length);
console.log('🛒 Items en carrito:', cart.length);
