# 💡 Binary Learn

> Uma aplicação web educacional, moderna e interativa desenvolvida para ensinar os fundamentos da lógica binária e o funcionamento da memória digital de forma intuitiva e visual.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🎯 Sobre o Projeto

O **Binary Learn** foi concebido como uma ferramenta de ensino para estudantes e entusiastas de computação (especialmente na faixa de 14 a 24 anos) compreenderem como os computadores modernos utilizam bits e bytes para representar números e armazenar informações na memória.

A metáfora visual utiliza **8 lâmpadas interativas**, onde cada lâmpada representa **1 bit** de dados:
- **0 (Apagada):** Bit inativo / desligado (falso)
- **1 (Acesa com brilho e filamento ativo):** Bit ativo / ligado (verdadeiro)

Juntas, as 8 lâmpadas formam **1 Byte**, permitindo ao usuário manipular os estados e ver imediatamente a conversão matemática no sistema decimal no intervalo de **0 a 255**.

---

## 🚀 Funcionalidades

- **Interatividade Total (Bit a Bit):** Clique ou toque nas lâmpadas para ligar/desligar individualmente cada bit do byte.
- **Conversão em Tempo Real:** Cálculo imediato da soma dos pesos binários posicionais (`128, 64, 32, 16, 8, 4, 2, 1`).
- **Feedback Visual Realista:** Lâmpadas desenhadas em SVG puro com gradientes, filamentos incandescentes e efeitos de brilho dinâmico (*glow*).
- **Acessibilidade Completa (a11y):**
  - Navegação por teclado (`Tab`, `Space`, `Enter`).
  - Atributos `aria-pressed`, `aria-label` e regiões `aria-live` para leitores de tela.
- **Design Totalmente Responsivo:**
  - **Celular / Mobile:** Adaptado para toque e visualização em linha única vertical/horizontal sem quebras estranhas.
  - **Desktop / Notebook:** Layout centralizado e proporcional.
  - **TV / Telas Grandes (Sala de Aula):** Alto contraste e elementos escaláveis para leitura clara mesmo ao fundo da sala.
- **Pronto para Docker:** Imagem pronta para conteinerização com Nginx e Vite.

---

## 🧠 Como Funciona a Matemática do Byte

Cada lâmpada possui um peso que é uma potência de base 2:

| Posição (Bit) | Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Potência** | $2^7$ | $2^6$ | $2^5$ | $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ |
| **Peso Decimal** | **128** | **64** | **32** | **16** | **8** | **4** | **2** | **1** |

O valor exibido na tela é o resultado da somatória ponderada de cada lâmpada ligada:
$$\text{Valor Decimal} = \sum_{i=0}^{7} \text{bit}_i \times 2^i$$

- **Valor Mínimo:** $00000000_2 = 0_{10}$
- **Valor Máximo:** $11111111_2 = 255_{10}$

---

## 🛠️ Tecnologias Utilizadas

- **[React 18](https://react.dev/)**: Biblioteca para interfaces declarativas e baseadas em componentes.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática forte garantindo robustez e segurança.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build ultrarrápida para desenvolvimento front-end.
- **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas e navegação.
- **CSS3 Puro**: Variáveis CSS, flexbox e media queries otimizadas sem dependências pesadas de UI.
- **SVG Interativo**: Gráficos vetoriais customizados para a lâmpada com iluminação dinâmica.
- **[Docker](https://www.docker.com/)**: Empacotamento em contêiner com servidor web Nginx otimizado.

---

## 📐 Arquitetura do Projeto

O código segue a separação de responsabilidades inspirada no padrão **MVC (Model-View-Controller)** adaptado para React:

```
src/
├── controllers/          # Gerenciamento de estado e regras de interação (Hooks)
│   └── useByteController.ts
├── models/               # Definições de tipos e funções puras de cálculo matemático
│   └── ByteModel.ts
├── routes/               # Configuração das rotas da aplicação
│   └── AppRoutes.tsx
├── views/                # Camada visual e componentes de interface
│   ├── components/       # Componentes reutilizáveis (BulbView, ByteRowView, DecimalDisplayView)
│   └── pages/            # Telas da aplicação (HomeView)
├── App.tsx               # Componente raiz
├── main.tsx              # Ponto de entrada React DOM
└── index.css             # Estilos globais e reset
```

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Gerenciador de pacotes (`npm`, `pnpm` ou `yarn`)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/binary-learn.git
   cd binary-learn
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no seu navegador:**
   ```
   http://localhost:3000
   ```

### Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor local de desenvolvimento no Vite. |
| `npm run build` | Compila o TypeScript e gera o build otimizado em `/dist`. |
| `npm run preview` | Executa uma prévia local da versão de produção compilada. |

---

## 🐳 Executando com Docker

Se preferir rodar em contêiner:

```bash
# Subir a aplicação usando o docker-compose
docker compose up -d

# Para encerrar os contêineres
docker compose down
```

Acesse em: `http://localhost:3000`.

---

## ☁️ Como Fazer Deploy na Vercel

O projeto foi configurado com Vite e React, sendo 100% compatível com a plataforma **[Vercel](https://vercel.com/)**.

### Método 1: Pela Interface Web da Vercel (Recomendado)

1. Faça o commit e envie seu repositório para o **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: commit inicial do Binary Learn"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```

2. Acesse sua conta na [Vercel](https://vercel.com/) e clique em **"Add New..."** ➔ **"Project"**.
3. Importe o repositório do **GitHub**.
4. Configure as opções de Build (a Vercel detectará o Vite automaticamente):
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Clique em **"Deploy"**.
6. Em poucos segundos, sua aplicação estará no ar com HTTPS gratuito e CDN global!

### Método 2: Pela Vercel CLI

Se tiver a CLI da Vercel instalada globalmente:

```bash
# Login na Vercel (caso ainda não esteja logado)
vercel login

# Deploy de homologação / prévia
vercel

# Deploy de produção
vercel --prod
```

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE). Consulte o arquivo de licença para mais detalhes.

---

<p align="center">
  Desenvolvido com 💡 e tecnologia para democratizar o ensino de computação.
</p>
