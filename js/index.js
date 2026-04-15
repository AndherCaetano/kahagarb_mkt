:root {
    --nude-dark: #b3926e;
    --nude-light: #f4efea;
    --blush: #e9d5ca;
    --text-color: #4a4a4a;
    --white: #ffffff;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Poppins', sans-serif; background: var(--white); color: var(--text-color); line-height: 1.6; scroll-behavior: smooth; }

/* --- HEADER E MENU --- */
header { background: var(--white); border-bottom: 1px solid var(--nude-light); position: sticky; top: 0; z-index: 1000; }
.nav-container { display: flex; justify-content: space-between; align-items: center; padding: 10px 5%; height: 70px; }

.brand { display: flex; align-items: center; gap: 8px; flex: 0 1 auto; }
.logo-img { width: 45px; height: 45px; border-radius: 50%; object-fit: cover; border: 2px solid var(--nude-dark); }
.signature-name { font-family: 'Great Vibes', cursive; font-size: 1.2rem; color: var(--nude-dark); font-weight: 400; white-space: nowrap; }

.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 2.2rem;
    color: var(--nude-dark);
    cursor: pointer;
    margin-left: 15px;
    margin-right: 30px;
}

.header-socials { display: flex; gap: 12px; align-items: center; flex: 0 0 auto; }
.header-socials a { color: var(--nude-dark); transition: 0.3s; font-size: 1.2rem; }
.header-socials a:hover { color: var(--text-color); transform: scale(1.1); }

/* Navegação Cortina */
nav { display: block; background: var(--white); width: 100%; border-top: 1px solid var(--nude-light); max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out; }
nav ul { display: flex; list-style: none; gap: 30px; justify-content: center; padding: 0; }
nav a { text-decoration: none; color: var(--text-color); font-weight: 600; font-size: 0.9rem; transition: 0.3s; padding: 15px 0; display: block; text-transform: uppercase; }
nav.active { max-height: 300px; border-bottom: 1px solid var(--nude-light); }

/* --- HERO --- */
.hero { display: flex; align-items: center; padding: 80px 5%; background: var(--nude-light); gap: 40px; }
.hero-text h1 { font-family: 'Playfair Display'; font-size: 3.5rem; color: var(--nude-dark); margin-bottom: 20px; }
.hero-text span { font-style: italic; font-weight: 300; }
.hero-image img { width: 400px; height: 500px; object-fit: cover; border-radius: 20px; box-shadow: 20px 20px 0 var(--blush); }

.btn-main-gold { background: var(--nude-dark); color: white; padding: 15px 35px; border: none; border-radius: 50px; cursor: pointer; font-weight: bold; transition: 0.4s; margin-top: 20px; text-transform: uppercase; letter-spacing: 1px; }
.btn-main-gold:hover { background: #967a5b; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }

/* --- SEÇÃO SOBRE (EXPANDIDA) --- */
.cv-section { padding: 80px 5%; background: #fff; border-bottom: 1px solid var(--nude-light); }
.cv-container { max-width: 800px; margin: 0 auto; text-align: center; }
.cv-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }

.cv-content { text-align: justify; hyphens: auto; }
.cv-item { margin-bottom: 30px; border-left: 3px solid var(--nude-dark); padding-left: 20px; }
.cv-item h3 { font-family: 'Playfair Display'; font-size: 1.5rem; color: var(--nude-dark); margin-bottom: 10px; }
.cv-footer-strategic { margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--nude-light); text-align: center; font-weight: 600; }
.cv-footer-strategic a { color: var(--nude-dark); text-decoration: none; }

/* Botão Fechar e Legenda */
.close-wrapper { display: flex; flex-direction: column; align-items: center; }
.close-legend { font-size: 0.6rem; font-weight: 600; color: var(--nude-dark); letter-spacing: 1px; margin-bottom: 2px; }
.btn-close { background: none; border: none; font-size: 2.8rem; color: var(--nude-dark); cursor: pointer; line-height: 0.8; transition: transform 0.3s; }
.btn-close:hover { transform: scale(1.1); }

/* --- PORTFÓLIO (BOTÃO RESTAURADO) --- */
.portfolio-container { padding: 80px 5%; text-align: center; }
.section-title { font-family: 'Playfair Display'; font-size: 2.5rem; margin-bottom: 40px; }

.masonry-grid { display: grid; gap: 20px; margin-bottom: 40px; }
.item-nicho { background: var(--nude-light); border-radius: 12px; overflow: hidden; height: 300px; position: relative; transition: 0.4s; }
.item-nicho img { width: 100%; height: 100%; object-fit: cover; }

.btn-main {
    padding: 12px 35px;
    border: 2px solid var(--nude-dark);
    background: transparent;
    color: var(--nude-dark);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
    border-radius: 50px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all 0.3s ease;
}
.btn-main:hover { background: var(--nude-dark); color: var(--white); box-shadow: 0 5px 15px rgba(179, 146, 110, 0.3); }

/* --- FORMULÁRIO --- */
.contact-section { padding: 80px 5%; background: var(--nude-light); }
.contact-card { background: white; padding: 50px; border-radius: 20px; max-width: 800px; margin: 0 auto; box-shadow: 0 15px 35px rgba(0,0,0,0.05); }
.input-group { display: flex; gap: 20px; margin-bottom: 20px; }
input, select, textarea { width: 100%; padding: 15px; border: 1px solid #eee; border-radius: 8px; background: #fafafa; font-family: 'Poppins'; }
.btn-submit { background: var(--nude-dark); color: white; border: none; padding: 18px 40px; width: 100%; border-radius: 8px; cursor: pointer; font-weight: bold; }

/* --- RESPONSIVIDADE --- */
@media (max-width: 1024px) {
    .menu-toggle { display: block; margin-left: auto; }
    .hero { flex-direction: column; text-align: center; }
    .hero-text h1 { font-size: 2.2rem; }
    .hero-image img { width: 100%; height: auto; }
    .masonry-grid { grid-template-columns: repeat(2, 1fr); }
    .input-group { flex-direction: column; }
}

@media (min-width: 1025px) {
    .masonry-grid { grid-template-columns: repeat(6, 1fr); }
    nav { max-height: none; border: none; flex: 2; }
}

/* --- RESTAURAÇÃO DOS BOTÕES DE FILTRO --- */
.filter-bar {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 10px 25px;
    border: 1px solid var(--nude-dark);
    background: transparent;
    color: var(--nude-dark);
    border-radius: 50px; /* Garante o formato arredondado original */
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}

/* Estilo para o botão selecionado */
.filter-btn.active {
    background: var(--nude-dark);
    color: var(--white);
    box-shadow: 0 4px 10px rgba(179, 146, 110, 0.2);
}

.filter-btn:hover {
    background: var(--nude-light);
}

/* Container do item para empilhar imagem e legenda */
.item-nicho {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 20px;
}

/* Garante que a imagem ocupe o espaço e tenha o arredondamento */
.nicho-link-wrapper {
    display: block;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    line-height: 0; /* Remove espaço extra sob a imagem */
}

.nicho-link-wrapper img {
    width: 100%;
    height: 280px; /* Ou a altura que você já estava usando */
    object-fit: cover;
    transition: transform 0.4s ease;
}

.nicho-link-wrapper img:hover {
    transform: scale(1.05);
}

/* Estilo das legendas sob a imagem */
.nicho-info-caption {
    padding: 12px 5px;
}

.nicho-label-cat {
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--nude-dark);
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-bottom: 4px;
}

.nicho-company-name {
    display: block;
    font-size: 1.05rem;
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s;
}

.nicho-company-name:hover {
    color: var(--nude-dark);
}

.cta-wrapper {
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center;
    padding: 20px 0; /* Espaçamento para não colar na imagem nem no título */
    background-color: var(--white); /* Mantém o fundo limpo */
}

/* Como você quer o mesmo estilo do botão "Ver mais sobre mim", 
   o seletor .btn-main-gold já deve herdar as propriedades. 
   Garantimos apenas que ele se comporte como bloco clicável: */
.cta-wrapper .btn-main-gold {
    text-decoration: none;
    display: inline-block;
    text-align: center;
}

.main-footer {
    padding: 40px 0;
    background-color: var(--white);
    border-top: 1px solid var(--nude-light);
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo horizontalmente */
    gap: 20px;
}

.footer-socials {
    display: flex;
    justify-content: center; /* Garante que os ícones fiquem centralizados */
    gap: 25px; /* Espaço maior entre os ícones para facilitar o toque no mobile */
}

.footer-socials a {
    color: var(--nude-dark);
    font-size: 1.5rem; /* Ícones um pouco maiores para o rodapé */
    transition: 0.3s ease;
}

.footer-socials a:hover {
    color: var(--text-color);
    transform: translateY(-3px);
}

.footer-copy {
    font-size: 0.8rem;
    color: var(--text-color);
    opacity: 0.7;
}
