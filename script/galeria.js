/* ============================================================
   GALERIA SAER
   ============================================================ */

// -----------------------------------------------------------
// 1. FOTOS
// -----------------------------------------------------------
const fotos = [
    { src: '../image/galeria1.png', titulo: 'Galeria 1' },
    { src: '../image/galeria2.png', titulo: 'Galeria 2' },
    { src: '../image/galeria3.png', titulo: 'Galeria 3' },
    { src: '../image/galeria4.png', titulo: 'Galeria 4' },
    { src: '../image/galeria5.png', titulo: 'Galeria 5' },
    { src: '../image/galeria6.png', titulo: 'Galeria 6' },
    { src: '../image/galeria7.png', titulo: 'Galeria 7' },
    { src: '../image/galeria8.png', titulo: 'Galeria 8' },
    { src: '../image/galeria9.png', titulo: 'Galeria 9' },
    { src: '../image/galeria10.png', titulo: 'Galeria 10' },
    { src: '../image/galeria11.png', titulo: 'Galeria 11' },
    { src: '../image/galeria12.png', titulo: 'Galeria 12' },
    { src: '../image/galeria13.png', titulo: 'Galeria 13' },
    { src: '../image/galeria14.png', titulo: 'Galeria 14' },
    { src: '../image/galeria15.png', titulo: 'Galeria 15' },
    { src: '../image/galeria16.png', titulo: 'Galeria 16' },
    { src: '../image/galeria17.png', titulo: 'Galeria 17' }
];

// -----------------------------------------------------------
// 2. ESTADO
// -----------------------------------------------------------
let indiceAtual = 0;

// -----------------------------------------------------------
// 3. ELEMENTOS
// -----------------------------------------------------------
const el = {
    foto: document.getElementById('fotoAtual'),
    botaoFoto: document.getElementById('fotoBotao'),
    legenda: document.getElementById('fotoLegenda'),
    contador: document.getElementById('fotoContador'),
    miniaturas: document.getElementById('miniaturasContainer'),
    bolinhas: document.getElementById('bolinhasContainer'),
    botoesNav: document.querySelectorAll('.nav-btn[data-direcao]'),
    lightbox: document.getElementById('lightbox'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxX: document.getElementById('lightboxFechar')
};

// -----------------------------------------------------------
// 4. INICIALIZAÇÃO
// -----------------------------------------------------------
function init() {
    if (!el.foto) return; // segurança — não roda em outras páginas

    criarMiniaturas();
    criarBolinhas();
    renderizar();
    ligarEventos();
}

// -----------------------------------------------------------
// 5. CRIAR MINIATURAS
// -----------------------------------------------------------
function criarMiniaturas() {
    const frag = document.createDocumentFragment();

    fotos.forEach((foto, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'miniatura';
        btn.dataset.index = i;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-label', `Ver foto ${i + 1}`);
        btn.setAttribute('aria-selected', 'false');

        const img = document.createElement('img');
        img.src = foto.src;
        img.alt = '';
        img.loading = 'lazy';
        img.decoding = 'async';

        btn.appendChild(img);
        frag.appendChild(btn);
    });

    el.miniaturas.appendChild(frag);
}

// -----------------------------------------------------------
// 6. CRIAR BOLINHAS
// -----------------------------------------------------------
function criarBolinhas() {
    const frag = document.createDocumentFragment();

    fotos.forEach((foto, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'bolinha';
        b.dataset.index = i;
        b.setAttribute('role', 'tab');
        b.setAttribute('aria-label', `Ir para foto ${i + 1}`);
        b.setAttribute('aria-selected', 'false');
        b.title = foto.titulo;
        frag.appendChild(b);
    });

    el.bolinhas.appendChild(frag);
}

// -----------------------------------------------------------
// 7. RENDERIZAR ESTADO ATUAL
// -----------------------------------------------------------
function renderizar() {
    const foto = fotos[indiceAtual];

    // Troca com fade
    el.foto.classList.add('fade');
    setTimeout(() => {
        el.foto.src = foto.src;
        el.foto.alt = foto.titulo;
        el.legenda.textContent = foto.titulo;
        el.contador.textContent = `${indiceAtual + 1} / ${fotos.length}`;
        el.foto.classList.remove('fade');
    }, 180);

    // Atualiza classes ativas
    atualizarAtivos(el.miniaturas);
    atualizarAtivos(el.bolinhas);
}

function atualizarAtivos(container) {
    container.querySelectorAll('[data-index]').forEach(node => {
        const ativo = Number(node.dataset.index) === indiceAtual;
        node.classList.toggle('ativa', ativo);
        node.setAttribute('aria-selected', ativo);
        if (ativo) {
            node.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }
    });
}

// -----------------------------------------------------------
// 8. NAVEGAÇÃO
// -----------------------------------------------------------
function irPara(index) {
    indiceAtual = (index + fotos.length) % fotos.length;
    renderizar();
}

function mudarFoto(direcao) {
    irPara(indiceAtual + direcao);
}

// -----------------------------------------------------------
// 9. LIGHTBOX
// -----------------------------------------------------------
function abrirLightbox() {
    const foto = fotos[indiceAtual];
    el.lightboxImg.src = foto.src;
    el.lightboxImg.alt = foto.titulo;
    el.lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    el.lightboxX.focus();
}

function fecharLightbox() {
    el.lightbox.hidden = true;
    el.lightboxImg.src = '';
    document.body.style.overflow = '';
    el.botaoFoto.focus();
}

// -----------------------------------------------------------
// 10. EVENTOS (delegation)
// -----------------------------------------------------------
function ligarEventos() {
    // Botões de navegação
    el.botoesNav.forEach(btn => {
        btn.addEventListener('click', () => mudarFoto(Number(btn.dataset.direcao)));
    });

    // Miniaturas e bolinhas (delegation)
    [el.miniaturas, el.bolinhas].forEach(container => {
        container.addEventListener('click', e => {
            const alvo = e.target.closest('[data-index]');
            if (!alvo) return;
            irPara(Number(alvo.dataset.index));
        });
    });

    // Abrir lightbox ao clicar na foto
    el.botaoFoto.addEventListener('click', abrirLightbox);
    el.lightboxX.addEventListener('click', fecharLightbox);
    el.lightbox.addEventListener('click', e => {
        if (e.target === el.lightbox) fecharLightbox();
    });

    // Teclado
    document.addEventListener('keydown', e => {
        // Se lightbox aberto, Esc fecha
        if (!el.lightbox.hidden && e.key === 'Escape') {
            fecharLightbox();
            return;
        }

        switch (e.key) {
            case 'ArrowLeft': mudarFoto(-1); break;
            case 'ArrowRight': mudarFoto(1); break;
            case 'Home': irPara(0); break;
            case 'End': irPara(fotos.length - 1); break;
        }
    });

    // Swipe (touch)
    let x0 = 0;
    const alvoSwipe = el.botaoFoto;

    alvoSwipe.addEventListener('touchstart', e => {
        x0 = e.changedTouches[0].screenX;
    }, { passive: true });

    alvoSwipe.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].screenX - x0;
        const limiar = 50;
        if (dx < -limiar) mudarFoto(1);
        if (dx > limiar) mudarFoto(-1);
    }, { passive: true });
}

// -----------------------------------------------------------
// 11. START
// -----------------------------------------------------------
document.addEventListener('DOMContentLoaded', init);