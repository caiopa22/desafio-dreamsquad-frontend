# ⭐ Desafio - Dreamsquad (Frontend)

![React](https://img.shields.io/badge/React-19.2+-blue?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2+-purple?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1+-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red)

## 📖 Sobre o projeto

Interface web desenvolvida como solução para o desafio técnico da Dreamsquad. Este é o frontend complementar do sistema de chat com IA local. Requer o [backend](https://github.com/caiopa22/desafio-dreamsquad-backend) em execução.

---

## 🎯 Características

- ✅ Interface de chat em tempo real
- ✅ Modo claro/escuro com tema persistente
- ✅ Design responsivo (mobile-first)
- ✅ Componentes reutilizáveis com Shadcn/ui
- ✅ Integração com API local via Axios
- ✅ Sidebar dinâmica com toggle
- ✅ Componentes acessíveis (Shadcn)
- ✅ Animações fluidas com Motion

---

## 🚀 Tecnologias utilizadas

| Tecnologia | Versão | Função |
|---|---|---|
| **React** | 19.2+ | Framework |
| **Vite** | 7.2+ | Build tool rápido e moderno |
| **TypeScript** | 5.9+ | Tipagem estática |
| **Tailwind CSS** | 4.1+ | Estilização utilitária |
| **Shadcn/ui** | Latest | Componentes acessíveis |
| **Axios** | 1.13+ | Cliente HTTP |
| **Lucide React** | 0.554+ | Ícones |
| **Next Themes** | 0.4+ | Gerenciador de temas |
| **React Markdown** | 10.1+ | Renderização de markdown |
| **Motion** | Latest | Animações e transições |

---

## 📁 Estrutura do projeto

```
desafio-dreamsquad-frontend/
├── src/
│   ├── assets/               # Imagens, ícones, fontes
│   ├── components/
│   │   ├── ui/               # Componentes Shadcn/ui
│   │   ├── app-sidebar.tsx   # Sidebar principal
│   │   ├── chat-input.tsx    # Input de mensagens
│   │   ├── initial-chat.tsx  # Chat inicial
│   │   └── toggle-theme.tsx  # Toggle de tema
│   ├── hooks/
│   │   ├── useChat.ts        # Hook de gerenciamento de chat
│   │   └── use-mobile.ts     # Responsividade
│   ├── lib/
│   │   ├── utils.ts          # Funções utilitárias
│   ├── models/
│   │   ├── ApiResponses.ts   # Modelos de resposta da API
│   │   └── Messages.ts       # Tipos de mensagens
│   ├── utils/
│   │   └── toast.ts          # Funções de notificação
│   ├── App.tsx               # Componente raiz
│   ├── main.tsx              # Entrada da aplicação
│   ├── globals.css           # Estilos globais
│   └── index.html            # Template HTML
├── public/                   # Arquivos estáticos
├── .gitignore
├── components.json           # Configuração Shadcn/ui
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js 18+** — [Download](https://nodejs.org/)
- **npm ou yarn** — Gerenciador de pacotes
- **Git** — Para clonar o repositório

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/caiopa22/desafio-dreamsquad-frontend
cd desafio-dreamsquad-frontend
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

---

## ▶️ Executando o projeto

### Desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em: **http://localhost:5173**

### Build para produção

```bash
npm run build
```

Os arquivos otimizados ficarão na pasta `dist/`

---

## 📁 Componentes principais

### `App.tsx`
Componente raiz que gerencia o layout principal.

### `components/app-sidebar.tsx`
Sidebar com navegação, ensinando como rodar o sistema.

### `components/chat-input.tsx`
Input de mensagens para o Bot.

### `components/initial-chat.tsx`
Tela inicial vazia quando não há mensagens.

### `components/toggle-theme.tsx`
Botão para alternar entre modo claro e escuro usando Next Themes.

### `hooks/useChat.ts`
Hook customizado para gerenciar estado do chat, enviar mensagens e integrar com a API.

---

## 🔗 Integração com API

### Exemplo de requisição

```typescript
import api from '@/lib/api';

// Enviar mensagem
const response = await api.post('http://127.0.0.1:8000/chat/', {
  message: 'Quanto é 2 + 2?'
});

// Resetar contexto
await api.post('http://127.0.0.1:8000/chat/reset');
```

### Tipos de respostas

```typescript
interface AiResponse {
  response: {
    role: string;
    content: {
      text: string;
    }[];
  };
}

interface ResetResponse {
  status: string;
  message: string;
}
```

---

## 🎨 Tema e Personalização

### Alternar tema

O projeto usa `next-themes` para gerenciar temas claro/escuro. A preferência é salva automaticamente.

### Adicionar componentes Shadcn/ui

Por padrão, todos os componentes da biblioteca **shadcn** já foram importados.

```bash 
npx shadcn-ui@latest add [component-name]
```

Exemplo:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
```

---

## 🧪 Testando a integração com API

1. Certifique-se que o backend está rodando em `http://127.0.0.1:8000`
2. Inicie o frontend: `npm run dev`
3. Acesse `http://localhost:5173`
4. Digite uma mensagem no chat e envie
5. A resposta do agente de IA deve aparecer

### Exemplo de fluxo

```
Você: "Quanto é 45 * 11?"
       ↓
   API Backend
       ↓
 Agente de IA
       ↓
Resposta: "O resultado é 495."
```

---

## ⚠️ Solução de problemas

| Problema | Solução |
|---|---|
| **"Cannot find module"** | Execute `npm install` novamente |
| **API não responde** | Verifique se o backend está rodando em http://localhost:8000 |
| **Porta 5173 já em uso** | Use `npm run dev -- --port 3000` |
| **Estilos não aplicam** | Limpe o cache: delete `node_modules` e `package-lock.json`, depois `npm install` |

---

## 📝 Scripts disponíveis

```bash
npm run dev        # Inicia servidor de desenvolvimento
npm run build      # Build para produção
npm run lint       # Verifica estilos com ESLint
npm run preview    # Preview do build de produção
```

---

## 🔧 Desenvolvimento

### Adicionar nova página

1. Crie um componente em `src/components/`
2. Importe e use em `App.tsx`
3. Estile com Tailwind CSS

### Adicionar novo hook

1. Crie o arquivo em `src/hooks/`
2. Exporte a função customizada
3. Use em componentes com `useYourHook()`

### Adicionar animações

1. Importe `motion` de `motion/react`
2. Envolva o componente com `<motion.div>`
3. Configure as propriedades `initial`, `animate`, `exit` e `transition`

---

## 📄 Licença

Desenvolvido exclusivamente para o processo seletivo da **Dreamsquad**.

Todos os direitos reservados.

---

## 👤 Autor

Desenvolvido por **Caio Pacheco Andrade** como solução para o desafio técnico da Dreamsquad.

---

**Última atualização:** Novembro de 2025
