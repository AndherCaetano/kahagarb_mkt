// Dados do portfólio com campo de link e estrutura para legendas
const nichos = [
    { cat: 'beleza', nome: 'Spa Deia e Renata', img:'imagens/spadeiaerenata.png', link: 'https://www.spadeiaerenata.com.br/?utm_source=google&utm_medium=search&utm_campaign=produtos&gad_source=1&gad_campaignid=20214486426&gbraid=0AAAAABdfFyLQYREtCVQv0GFXH2KmBEeFR&gclid=Cj0KCQjwy_fOBhC6ARIsAHKFB7_LPRgIZ6dkrSimqzKwfsmhPVE8qET3Ezangw2qVes9-BAG7aFfkHYaAsyJEALw_wcB' },
    { cat: 'moda', nome: 'Bazar Luxo', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8', link: '#' },
    { cat: 'alimentos', nome: 'Pizzaria Napolitana', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', link: '#' },
    { cat: 'alimentos', nome: 'Burger Artesanal', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add', link: '#' },
    { cat: 'beleza', nome: 'Spa & Wellness', img: 'https://images.unsplash.com/photo-1544161515-4af6b1d86b59', link: '#' },
    { cat: 'moda', nome: 'Concept Store', img: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735', link: '#' },
    { cat: 'alimentos', nome: 'Confeitaria', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777', link: '#' },
    { cat: 'beleza', nome: 'Hair Styling', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9', link: '#' },
    { cat: 'moda', nome: 'Moda Praia', img: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b', link: '#' },
    { cat: 'alimentos', nome: 'Sushi Bar', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c', link: '#' },
    { cat: 'beleza', nome: 'Maquiagem Pro', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796', link: '#' },
    { cat: 'alimentos', nome: 'Café Boutique', img: 'https://images.unsplash.com/photo-1501339817302-444d182d3005', link: '#' }
];

const grid = document.getElementById('masonry-grid');
const btnLoad = document.getElementById('btn-load');
const btnLess = document.getElementById('btn-less');
let filterActive = 'all';

// Define o limite inicial de itens baseando-se no dispositivo
function getInitialLimit() {
    return window.innerWidth <= 1024 ? 6 : 12;
}

// Função de renderização com legendas externas e links na imagem e no nome
function render(showAll = false) {
    if (!grid) return;
    grid.innerHTML = '';
    const filtered = nichos.filter(n => filterActive === 'all' || n.cat === filterActive);
    const initialLimit = getInitialLimit();
    const limit = showAll ? filtered.length : initialLimit;
    
    filtered.slice(0, limit).forEach(n => {
        grid.innerHTML += `
            <div class="item-nicho">
                <a href="${n.link}" target="_blank" class="nicho-link-wrapper">
                    <img src="${n.img}" alt="${n.nome}">
                </a>
                <div class="nicho-info-caption">
                    <span class="nicho-label-cat">${n.cat}</span>
                    <a href="${n.link}" target="_blank" class="nicho-company-name">${n.nome}</a>
                </div>
            </div>`;
    });

    if (btnLoad) {
        btnLoad.style.display = (!showAll && filtered.length > initialLimit) ? 'inline-block' : 'none';
    }
    if (btnLess) {
        btnLess.style.display = (showAll && filtered.length > initialLimit) ? 'inline-block' : 'none';
    }
}

// Configuração dos filtros de nicho
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        filterActive = e.target.dataset.filter;
        render(false);
    });
});

// Controle do Menu Sanduíche Mobile
document.getElementById('mobile-menu').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Controle da Seção "Sobre Mim" (Trajetória Profissional)
const cvSection = document.getElementById('sobre-ancora');
const btnSobre = document.getElementById('btn-sobre-mim');
const btnFechar = document.getElementById('btn-fechar-sobre');
const linkSobre = document.getElementById('link-sobre');

function toggleSobre(show) {
    if (cvSection) {
        cvSection.style.display = show ? 'block' : 'none';
        if (show) cvSection.scrollIntoView({ behavior: 'smooth' });
    }
}

if (btnSobre) btnSobre.addEventListener('click', () => toggleSobre(true));
if (linkSobre) linkSobre.addEventListener('click', (e) => {
    e.preventDefault();
    toggleSobre(true);
});
if (btnFechar) btnFechar.addEventListener('click', () => toggleSobre(false));

// Listeners para carregar mais ou menos projetos
if (btnLoad) btnLoad.addEventListener('click', () => render(true));
if (btnLess) btnLess.addEventListener('click', () => render(false));
window.addEventListener('resize', () => render(false));

// Impede que o navegador restaure a posição de rolagem e garante o topo no carregamento
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Inicialização da galeria
render();
