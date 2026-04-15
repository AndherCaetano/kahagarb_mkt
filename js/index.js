const nichos = [
    { 
        cat: 'beleza', nome: 'Spa Deia e Renata', img: 'imagens/spadeiaerenata.png', 
        link: 'https://www.spadeiaerenata.com.br/?utm_source=google&utm_medium=search&utm_campaign=produtos&gad_source=1&gad_campaignid=20214486426&gbraid=0AAAAABdfFyLQYREtCVQv0GFXH2KmBEeFR&gclid=Cj0KCQjwy_fOBhC6ARIsAHKFB7_LPRgIZ6dkrSimqzKwfsmhPVE8qET3Ezangw2qVes9-BAG7aFfkHYaAsyJEALw_wcB',
        detalhes: {
            titulo: 'Minha Estratégia de Autoridade e Conversão',
            marketing: 'Desenvolvi narrativas visuais focadas na experiência do cliente, elevando a percepção de exclusividade da marca.',
            seo: 'Realizei a otimização On-Page completa do site para termos de alta intenção como "spa de luxo SP".',
            ads: 'Gerenciei campanhas de Google Ads com segmentação ultra-localizada para atingir o público premium.',
            valorizacao: 'Reforcei o posicionamento de elite através de curadoria tática com influenciadores do mercado de luxo.',
            leads: 'Implementei CTAs estratégicos que resultaram em um aumento de 40% nos agendamentos online.'
        }
    },
    { 
        cat: 'moda', nome: 'Férfér', img: 'imagens/ferfer.png', link: 'https://www.instagram.com/ferfer.rio/',
        detalhes: {
            titulo: 'Minha Expansão de Marca Digital e Geração de Desejo',
            marketing: 'Elaborei calendários editoriais focados em "shop the look" e Reels que ditaram tendências para o público fiel.',
            seo: 'Efetuei o mapeamento tático de hashtags e otimizei a bio para indexação em buscas locais de moda.',
            ads: 'Executei campanhas de Retargeting no Meta Ads, recuperando usuários e escalando o ROI das vendas.',
            valorizacao: 'Estabeleci parcerias autênticas com micro-influenciadores, alinhando a marca a valores de estilo próprio.',
            leads: 'Estruturei o funil de tráfego direto para o WhatsApp, facilitando a conversão imediata de novas coleções.'
        }
    },
    { 
        cat: 'alimentos', nome: 'Pizzaria Napolitana', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', link: '#',
        detalhes: {
            titulo: 'Meu Marketing Sensorial e Drive-to-Store',
            marketing: 'Produzi conteúdos de marketing sensorial de alto impacto para gerar desejo imediato e recorrência.',
            seo: 'Otimizei o Google Meu Negócio para dominar as buscas locais por "pizzaria napolitana" na região.',
            ads: 'Configurei anúncios geolocalizados com gatilhos de urgência durante os horários de pico de pedidos.',
            valorizacao: 'Consolidei uma identidade visual forte que remete diretamente à autenticidade italiana da marca.',
            leads: 'Criei um programa de fidelidade digital integrado ao WhatsApp para nutrição semanal da base de clientes.'
        }
    },
    { 
        cat: 'alimentos', nome: 'Burger Artesanal', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add', link: '#',
        detalhes: {
            titulo: 'Meu Posicionamento e Escalada de Delivery',
            marketing: 'Destaquei a origem artesanal dos ingredientes através de narrativas de storytelling em canais digitais.',
            seo: 'Posicionei o cardápio digital nos motores de busca com palavras-chave focadas em hambúrguer gourmet.',
            ads: 'Direcionei tráfego pago para o aplicativo próprio, reduzindo custos com taxas de marketplaces.',
            valorizacao: 'Desenvolvi estratégias de embalagens instagramáveis para estimular o conteúdo gerado pelo usuário.',
            leads: 'Implementei mecanismos de captura de leads no site para oferecer benefícios exclusivos em novas compras.'
        }
    },
    { 
        cat: 'beleza', nome: 'Spa & Wellness', img: 'https://images.unsplash.com/photo-1544161515-4af6b1d86b59', link: '#',
        detalhes: {
            titulo: 'Minha Atração de Clientes de Elite',
            marketing: 'Produzi vídeos institucionais de alta sofisticação para atrair o público wellness de alto padrão.',
            seo: 'Criei conteúdos de valor para o blog com foco em bem-estar e terapias holísticas para ranqueamento orgânico.',
            ads: 'Gerenciei orçamentos táticos no Google Ads para termos competitivos do mercado de spas.',
            valorizacao: 'Articulei parcerias estratégicas com o setor de hotelaria de luxo para ampliar o alcance da marca.',
            leads: 'Desenvolvi uma landing page de alta conversão dedicada exclusivamente a pacotes corporativos.'
        }
    },
    { 
        cat: 'moda', nome: 'Concept Store', img: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735', link: '#',
        detalhes: {
            titulo: 'Minha Curadoria e Criação de Comunidade',
            marketing: 'Estabeleci uma voz de marca engajadora baseada na curadoria de tendências emergentes.',
            seo: 'Otimizei o catálogo do e-commerce para nichos específicos de moda autoral.',
            ads: 'Aumentei o tráfego do blog através de campanhas focadas em conteúdos educativos de moda.',
            valorizacao: 'Planejei eventos e workshops presenciais para fortalecer o senso de comunidade da loja.',
            leads: 'Integrei um quiz de estilo personalizado para capturar leads e oferecer recomendações precisas.'
        }
    }
];

const grid = document.getElementById('masonry-grid');
const btnLoad = document.getElementById('btn-load');
const btnLess = document.getElementById('btn-less');
let filterActive = 'all';
let isShowingAll = false;

function getInitialLimit() { return window.innerWidth <= 1024 ? 3 : 6; }

function render(showAll = isShowingAll) {
    if (!grid) return;
    isShowingAll = showAll;
    const filtered = nichos.filter(n => filterActive === 'all' || n.cat === filterActive);
    const limit = isShowingAll ? filtered.length : getInitialLimit();
    
    grid.innerHTML = filtered.slice(0, limit).map((n, index) => `
        <div class="item-nicho">
            <a href="${n.link}" target="_blank" class="circle-container">
                <img src="${n.img}" alt="${n.nome}">
            </a>
            <div class="nicho-info-caption">
                <span class="nicho-label-cat">${n.cat}</span>
                <a href="${n.link}" target="_blank" class="nicho-company-name">${n.nome}</a>
                <br>
                <button class="btn-detalhes" onclick="toggleDetails(event, ${index})">Ver Detalhes</button>
            </div>
            <div id="details-${index}" class="details-curtain">
                <div class="details-content">
                    <h4>${n.detalhes.titulo}</h4>
                    <ul>
                        <li><strong>Marketing:</strong> ${n.detalhes.marketing}</li>
                        <li><strong>SEO:</strong> ${n.detalhes.seo}</li>
                        <li><strong>Ads:</strong> ${n.detalhes.ads}</li>
                        <li><strong>Valorização:</strong> ${n.detalhes.valorizacao}</li>
                        <li><strong>Leads:</strong> ${n.detalhes.leads}</li>
                    </ul>
                </div>
            </div>
        </div>
    `).join('');

    if (btnLoad) btnLoad.style.display = (!isShowingAll && filtered.length > getInitialLimit()) ? 'inline-block' : 'none';
    if (btnLess) btnLess.style.display = (isShowingAll && filtered.length > getInitialLimit()) ? 'inline-block' : 'none';
}

window.toggleDetails = function(e, index) {
    const target = document.getElementById(`details-${index}`);
    const isOpen = target.classList.contains('active');
    document.querySelectorAll('.details-curtain').forEach(c => c.classList.remove('active'));
    if (!isOpen) {
        target.classList.add('active');
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
    }
};

// Listeners e funções de controle (Originais Mantidas)
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        filterActive = e.target.dataset.filter;
        render(false);
    });
});

const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        document.getElementById('nav-menu').classList.toggle('active');
    });
}

if (btnLoad) btnLoad.addEventListener('click', () => render(true));
if (btnLess) btnLess.addEventListener('click', () => { 
    render(false); 
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
});

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
if (linkSobre) linkSobre.addEventListener('click', (e) => { e.preventDefault(); toggleSobre(true); });
if (btnFechar) btnFechar.addEventListener('click', () => toggleSobre(false));

render();
