const nichosDados = [
    { id: 1, cat: 'beleza', nome: 'Studio Glow', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400' },
    { id: 2, cat: 'moda', nome: 'Bazar Chic', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400' },
    { id: 3, cat: 'alimentos', nome: 'Pizza Gourmet', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' },
    { id: 4, cat: 'alimentos', nome: 'Burger King', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400' },
    { id: 5, cat: 'beleza', nome: 'Esmalteria Fina', img: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400' },
    { id: 6, cat: 'moda', nome: 'Vestuário Elite', img: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=400' },
    { id: 7, cat: 'corporativo', nome: 'Consultoria B2B', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400' },
    { id: 8, cat: 'alimentos', nome: 'Doceria Artesanal', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400' },
    { id: 9, cat: 'moda', nome: 'Outlet Luxury', img: 'https://images.unsplash.com/photo-1445205174239-17397a73ba9c?w=400' },
    { id: 10, cat: 'beleza', nome: 'Spa Relax', img: 'https://images.unsplash.com/photo-1544161515-4af6b1d86b59?w=400' },
    { id: 11, cat: 'alimentos', nome: 'Trattoria', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400' },
    { id: 12, cat: 'corporativo', nome: 'Tech Solutions', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400' },
    { id: 13, cat: 'beleza', nome: 'Barbearia Retro', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400' },
    { id: 14, cat: 'moda', nome: 'Moda Praia', img: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=400' },
    { id: 15, cat: 'alimentos', nome: 'Café Boutique', img: 'https://images.unsplash.com/photo-1501339817302-444d182d3005?w=400' },
    { id: 16, cat: 'corporativo', nome: 'Law Firm', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400' }
];

const grid = document.getElementById('mosaico-portfólio');
const btnVerMais = document.getElementById('btn-ver-mais');
const btnVerMenos = document.getElementById('btn-ver-menos');
let limiteAtual = 0;

function calcularLimiteInicial() {
    const width = window.innerWidth;
    if (width <= 767) return 6; // Celular: 3 em cima, 3 em baixo
    if (width <= 1024) return 6; // Tablet: 3 em cima, 3 em baixo
    return 12; // Desktop: 6 em cima, 6 em baixo
}

function renderizar(categoria = 'all', mostrarTudo = false) {
    grid.innerHTML = '';
    const filtrados = nichosDados.filter(n => categoria === 'all' || n.cat === categoria);
    
    if (limiteAtual === 0) limiteAtual = calcularLimiteInicial();
    
    const visiveis = mostrarTudo ? filtrados : filtrados.slice(0, limiteAtual);

    visiveis.forEach(nicho => {
        const div = document.createElement('div');
        div.className = `item-nicho ${nicho.cat}`;
        div.innerHTML = `
            <img src="${nicho.img}" alt="${nicho.nome}">
            <div class="nicho-overlay">${nicho.nome}</div>
        `;
        grid.appendChild(div);
    });

    // Controle dos botões
    if (visiveis.length < filtrados.length) {
        btnVerMais.style.display = 'inline-block';
        btnVerMenos.style.display = 'none';
    } else if (filtrados.length > calcularLimiteInicial()) {
        btnVerMais.style.display = 'none';
        btnVerMenos.style.display = 'inline-block';
    } else {
        btnVerMais.style.display = 'none';
        btnVerMenos.style.display = 'none';
    }
}

// Eventos de Filtro
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        limiteAtual = calcularLimiteInicial();
        renderizar(e.target.dataset.filter);
    });
});

btnVerMais.addEventListener('click', () => {
    const cat = document.querySelector('.filter-btn.active').dataset.filter;
    renderizar(cat, true);
});

btnVerMenos.addEventListener('click', () => {
    const cat = document.querySelector('.filter-btn.active').dataset.filter;
    renderizar(cat, false);
});

// Ajuste ao redimensionar tela
window.addEventListener('resize', () => {
    limiteAtual = calcularLimiteInicial();
    const cat = document.querySelector('.filter-btn.active').dataset.filter;
    renderizar(cat);
});

// Inicializar
renderizar();
