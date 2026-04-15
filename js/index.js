// Dados do portfólio com campo de link e estrutura para legendas
const nichos = [
    { cat: 'beleza', nome: 'Spa Deia e Renata', img:'imagens/spadeiaerenata.png', link: 'https://www.spadeiaerenata.com.br/?utm_source=google&utm_medium=search&utm_campaign=produtos&gad_source=1&gad_campaignid=20214486426&gbraid=0AAAAABdfFyLQYREtCVQv0GFXH2KmBEeFR&gclid=Cj0KCQjwy_fOBhC6ARIsAHKFB7_LPRgIZ6dkrSimqzKwfsmhPVE8qET3Ezangw2qVes9-BAG7aFfkHYaAsyJEALw_wcB' },
    { cat: 'moda', nome: 'Férfér', img: 'imagens/ferfer.png', link: 'https://www.instagram.com/ferfer.rio/' },
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

// VARIÁVEL DE ESTADO: Controla se a galeria está expandida ou não
let isShowingAll = false;

// Define o limite inicial de itens baseando-se no dispositivo
function getInitialLimit() {
    return window.innerWidth <= 1024 ? 6 : 12;
}

// Função de renderização principal
function render(showAll = isShowingAll) {
    if (!grid) return;
    
    // Atualiza o estado global para que o 'resize' saiba o que fazer
    isShowingAll = showAll;
    
    // Filtra os itens com base na categoria ativa
    const filtered = nichos.filter(n => filterActive === 'all' || n.cat === filterActive);
    const initialLimit = getInitialLimit();
    const limit = isShowingAll ? filtered.length : initialLimit;
    
    // Constrói o HTML primeiro em uma variável para evitar múltiplos reflows de tela
    let htmlContent = '';
    filtered.slice(0, limit).forEach(n => {
        htmlContent += `
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

    grid.innerHTML = htmlContent;

    // Gerencia a visibilidade dos botões "Ver Mais" e "Ver Menos"
    if (btnLoad) {
        btnLoad.style.display = (!isShowingAll && filtered.length > initialLimit) ? 'inline-block' : 'none';
    }
    if (btnLess) {
        btnLess.style.display = (isShowingAll && filtered.length > initialLimit) ? 'inline-block' : 'none';
    }
}

// Configuração dos filtros de nicho
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const activeBtn = document.querySelector('.filter-btn.active');
        if (activeBtn) activeBtn.classList.remove('active');
        
        e.target.classList.add('active');
        filterActive = e.target.dataset.filter;
        
        // Ao trocar de filtro, sempre voltamos para a visão reduzida por padrão
        render(false);
    });
});

// Controle do Menu Sanduíche Mobile
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) navMenu.classList.toggle('active');
    });
}

// Controle da Seção "Sobre Mim"
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

// Listeners dos botões de carregamento
if (btnLoad) btnLoad.addEventListener('click', () => render(true));
if (btnLess) btnLess.addEventListener('click', () => {
    render(false);
    // Faz o scroll voltar suavemente para o início da galeria ao esconder os itens
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// CORREÇÃO PARA MOBILE: Evita que o resize (barra de endereço) resete a galeria
let lastWidth = window.innerWidth;
window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        render(isShowingAll); 
    }
});

// Garante o topo no carregamento inicial apenas se não houver um anchor na URL
window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }
});

// Inicialização da galeria
render();
