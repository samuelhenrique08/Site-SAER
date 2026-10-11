/* ============================================================
   PÁGINA: REGRAS — Sistema de abas
   ============================================================ */

const ABAS_VALIDAS = ['gerais', 'admin'];
const CHAVE_STORAGE = 'saer:regras-ativa';

// -----------------------------------------------------------
// ELEMENTOS
// -----------------------------------------------------------
const botoes = document.querySelectorAll('.aba-btn[data-aba]');
const paineis = document.querySelectorAll('.aba-painel');

// -----------------------------------------------------------
// ABRIR ABA
// -----------------------------------------------------------
function abrirAba(nome, { salvar = true, focar = false } = {}) {
    if (!ABAS_VALIDAS.includes(nome)) nome = ABAS_VALIDAS[0];

    botoes.forEach(btn => {
        const ativo = btn.dataset.aba === nome;
        btn.classList.toggle('ativo', ativo);
        btn.setAttribute('aria-selected', ativo);
        btn.setAttribute('tabindex', ativo ? '0' : '-1');
        if (ativo && focar) btn.focus();
    });

    paineis.forEach(painel => {
        painel.classList.toggle('ativo', painel.id === `regras-${nome}`);
    });

    if (salvar) {
        try {
            localStorage.setItem(CHAVE_STORAGE, nome);
        } catch (_) { }
    }

    if (history.replaceState) {
        history.replaceState(null, '', `#${nome}`);
    } else {
        location.hash = nome;
    }
}

// -----------------------------------------------------------
// INICIALIZAÇÃO
// -----------------------------------------------------------
function init() {
    if (!botoes.length) return;

    const doHash = location.hash.replace('#', '');
    let inicial = ABAS_VALIDAS.includes(doHash) ? doHash : null;

    if (!inicial) {
        try {
            const salva = localStorage.getItem(CHAVE_STORAGE);
            if (ABAS_VALIDAS.includes(salva)) inicial = salva;
        } catch (_) { }
    }

    if (!inicial) inicial = ABAS_VALIDAS[0];

    abrirAba(inicial, { salvar: false });
    ligarEventos();
}

// -----------------------------------------------------------
// EVENTOS
// -----------------------------------------------------------
function ligarEventos() {
    const navegacao = document.querySelector('.abas-navegacao');

    navegacao.addEventListener('click', e => {
        const btn = e.target.closest('.aba-btn[data-aba]');
        if (!btn) return;
        abrirAba(btn.dataset.aba);
    });

    navegacao.addEventListener('keydown', e => {
        const btn = e.target.closest('.aba-btn[data-aba]');
        if (!btn) return;

        const atual = ABAS_VALIDAS.indexOf(btn.dataset.aba);
        let proximo = null;

        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                proximo = (atual + 1) % ABAS_VALIDAS.length;
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                proximo = (atual - 1 + ABAS_VALIDAS.length) % ABAS_VALIDAS.length;
                break;
            case 'Home':
                proximo = 0;
                break;
            case 'End':
                proximo = ABAS_VALIDAS.length - 1;
                break;
            default:
                return;
        }

        e.preventDefault();
        abrirAba(ABAS_VALIDAS[proximo], { focar: true });
    });

    window.addEventListener('hashchange', () => {
        const hash = location.hash.replace('#', '');
        if (ABAS_VALIDAS.includes(hash)) {
            abrirAba(hash, { salvar: false });
        }
    });
}

// -----------------------------------------------------------
// START
// -----------------------------------------------------------
document.addEventListener('DOMContentLoaded', init);