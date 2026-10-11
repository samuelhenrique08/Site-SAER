# 🚁 SAER — Serviço Aeropolicial

> **"Voamos para lutar e salvar!"**

Site institucional do **SAER (Serviço Aeropolicial)** — a unidade aérea da Polícia Civil do Estado do Rio de Janeiro (PCERJ). Operamos helicópteros em missões policiais, apoio a operações, transporte de equipes especiais, resgates e observação aérea.

---

## 📖 Sobre o projeto

Este site foi criado para centralizar informações sobre a unidade: frota, funções, tutoriais operacionais, regras e o memorial dos antigos comandantes. É um projeto **100% estático** (HTML, CSS e JavaScript puro), sem dependência de frameworks ou back-end.

---

## 🌐 Acesse

🔗 **[samuelhenrique08.github.io/Site-SAER/](https://samuelhenrique08.github.io/Site-SAER/)**

---

## ✨ Páginas

| Página | Descrição |
|--------|-----------|
| **Home** | Apresentação da unidade, frota em destaque, comando atual e acesso rápido |
| **Helicópteros** | Detalhes das aeronaves (Phoenix, Pelicano, Raptor) com especificações |
| **Fotos** | Galeria interativa com navegação por teclado, swipe e lightbox |
| **Funções** | Cargos do SAER: Piloto, Atirador, Elite, Administrador e Comando |
| **Tutoriais** | Percurso de voo, configurações de teclas e protocolo de posicionamento |
| **Regras** | Regras gerais e administrativas do grupamento |
| **Memorial** | Homenagem aos antigos comandantes com linha do tempo das gestões |

---

## 🛠️ Tecnologias

- **HTML5 semântico** — tags corretas (`<header>`, `<main>`, `<section>`, `<article>`, `<ol>`, `<dl>`)
- **CSS3 moderno** — variáveis CSS, `clamp()`, `grid`, `flexbox`, `color-mix()`, `aspect-ratio`
- **JavaScript vanilla** — sem jQuery, sem frameworks
- **SVG inline** — todos os ícones (sem dependência de emojis ou bibliotecas)
- **Google Fonts** — Bebas Neue (títulos) + Inter (corpo)

---

## 📁 Estrutura do projeto

```
/
├── index.html
├── css/
│   ├── base.css            # Compartilhado: variáveis, header, footer, botões
│   ├── home.css            # Só a home
│   ├── helicopteros.css
│   ├── galeria.css
│   ├── funcoes.css
│   ├── tutoriais.css
│   ├── regras.css
│   └── memorial.css
├── script/
│   ├── base.js             # Menu hamburguer (roda em todas as páginas)
│   ├── galeria.js
│   ├── funcoes.js
│   ├── tutoriais.js
│   └── regras.js
├── image/
│   ├── SaerLogo.png
│   ├── bgSAER2.png
│   ├── as350.png
│   ├── uh1.png
│   ├── huey.png
│   ├── buzzard.png
│   ├── galeria1.png ... galeria17.png
│   └── pp1.png, pp2.png
└── public/
    ├── helicopteros.html
    ├── galeria.html
    ├── funcoes.html
    ├── tutoriais.html
    ├── regras.html
    └── memorial.html
```

---

## 🚀 Rodando localmente

Como o projeto é estático, **não precisa instalar nada**. Duas opções:

### Opção 1 — Abrir direto
Dê duplo clique em `index.html`. Funciona, mas alguns navegadores bloqueiam `fetch` e `localStorage` por segurança quando abertos via `file://`.

### Opção 2 — Servidor local (recomendado)

Se você tem **VS Code**, instale a extensão **Live Server** e clique em "Go Live".

Ou use Python (já vem instalado em muitos sistemas):

```bash
# Python 3
python -m http.server 5500

# Python 2
python -m SimpleHTTPServer 5500
```

Ou Node.js:

```bash
npx serve .
```

Depois acesse **http://localhost:5500** no navegador.

---

## 🌐 Deploy

O site está hospedado em:

- **GitHub Pages** — `samuelhenrique08.github.io/Site-SAER/`

### Como fazer deploy no Vercel

1. Faça push do projeto pro GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. Em **Framework Preset**, escolha **Other**
4. **Build Command**: deixe vazio
5. **Output Directory**: deixe vazio (ou `.`)
6. Clique em **Deploy** 🎉

Cada `git push` atualiza o site automaticamente.

---

## ♿ Acessibilidade

O projeto foi construído pensando em:

- **Navegação por teclado** — `Tab`, setas, `Home`, `End`, `Esc`
- **ARIA roles** — `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-live`
- **Foco visível** — estilizado em todos os elementos interativos
- **`alt` descritivo** em imagens relevantes
- **Contraste adequado** — texto legível sobre fundo escuro
- **`prefers-reduced-motion`** — respeita usuários que desativam animações

---

## 📱 Responsividade

Testado e otimizado para:

- 📱 Mobile (a partir de 320px)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Telas grandes (1440px+)

---

## ⚡ Performance

- **Lazy loading** em imagens e iframes
- **`decoding="async"`** em imagens da galeria
- **Fontes com `preconnect`** e `display=swap`
- **Zero dependências externas** (exceto Google Fonts)
- **SVG inline** — sem requisições extras pra ícones

---

## 🤝 Como contribuir

1. Faça um **fork** do projeto
2. Crie uma branch: `git checkout -b feature/minha-feature`
3. Commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/minha-feature`
5. Abra um **Pull Request**

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

- **Discord**: [Servidor do SAER]()
- **Instagram**: [@saer.pcerj](#)
- **GitHub**: [@samuelhenrique08](https://github.com/samuelhenrique08)

---

## 🏆 Créditos

Desenvolvido com dedicação para o **SAER — Serviço Aeropolicial da PCERJ**.

> *"Aqueles que passaram pelo comando deixaram mais que ordens, deixaram um legado de honra e serviço."*

---

<p align="center">
  <strong>🚁 SAER — Voamos para lutar e salvar! 🚁</strong>
</p>