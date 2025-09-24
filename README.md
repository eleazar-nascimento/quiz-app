# 💝 Quiz de Estilo de Apego

Um aplicativo interativo e elegante para descobrir seu estilo de apego através de um questionário psicológico baseado na Teoria do Apego de John Bowlby e Mary Ainsworth.

![Quiz Demo](https://img.shields.io/badge/React-18.0+-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss)

## 🌟 Características

- **Interface Moderna**: Design glassmorphism com gradientes vibrantes
- **Multilíngue**: Suporte para Português (BR) e Inglês
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Animações Suaves**: Transições fluidas entre telas
- **Resultado Personalizado**: Análise detalhada com pontos fortes e caminhos de crescimento
- **Código Limpo**: Refatorado seguindo princípios do Martin Fowler

## 🧠 Estilos de Apego

### 💚 Apego Seguro
Pessoas com relacionamentos saudáveis e equilibrados, confortáveis com intimidade e independência.

### 💛 Apego Ansioso  
Indivíduos que valorizam profundamente conexões próximas e podem buscar constante validação.

### 💙 Apego Evitativo
Pessoas que valorizam independência e preferem manter certa distância emocional.

### 💜 Apego Desorganizado
Indivíduos que experimentam uma mistura complexa entre desejo de proximidade e medo da vulnerabilidade.

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16.0 ou superior
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/attachment-style-quiz.git
cd attachment-style-quiz
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**
```bash
npm start
# ou 
yarn start
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 🛠️ Tecnologias Utilizadas

- **React 18+**: Framework principal
- **React Hooks**: Gerenciamento de estado moderno
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Ícones elegantes
- **JavaScript ES6+**: Linguagem de programação

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── AttachmentStyleQuiz.jsx    # Componente principal
│   ├── WelcomeScreen.jsx         # Tela de boas-vindas
│   ├── QuizScreen.jsx            # Tela do questionário
│   ├── ResultScreen.jsx          # Tela de resultados
│   └── shared/
│       ├── ActionButton.jsx     # Botão reutilizável
│       ├── ProgressBar.jsx      # Barra de progresso
│       └── OptionButton.jsx     # Botão de opção
├── hooks/
│   ├── useLocalization.js       # Sistema de localização
│   ├── useQuizData.js          # Dados do quiz
│   └── useQuizLogic.js         # Lógica do quiz
├── constants/
│   └── translations.js         # Traduções
└── styles/
    └── globals.css            # Estilos globais
```

## 🌍 Internacionalização

O projeto suporta múltiplos idiomas com fallback inteligente:

- **Português (Brasil)** - `pt-BR` (Padrão)
- **Inglês** - `en-US`

### Adicionar Novo Idioma

1. Edite o arquivo `constants/translations.js`
2. Adicione as traduções no formato:

```javascript
const TRANSLATIONS = {
  "pt-BR": { /* traduções existentes */ },
  "es-ES": {
    "discoverTitle": "Descubre Tu",
    "attachmentStyleTitle": "Estilo de Apego",
    // ... outras traduções
  }
};
```

## 🎨 Personalização

### Temas de Cores
Modifique as classes Tailwind nos componentes:

```javascript
// Gradiente de fundo principal
"from-indigo-900 via-purple-900 to-pink-900"

// Cores dos estilos de apego
const attachmentColors = {
  secure: "from-rose-400 to-pink-600",
  anxious: "from-amber-400 to-orange-600", 
  avoidant: "from-emerald-400 to-teal-600",
  fearful: "from-purple-400 to-indigo-600"
};
```

### Animações
Ajuste as durações no arquivo de configuração:

```javascript
const ANIMATION_CONFIG = {
  SCREEN_TRANSITION: 300,
  HOVER_SCALE: 1.02,
  BUTTON_SCALE: 1.05
};
```

## 🔬 Metodologia Científica

O quiz é baseado em:

- **Teoria do Apego** de John Bowlby
- **Padrões de Apego** identificados por Mary Ainsworth  
- **Adult Attachment Interview (AAI)** de Mary Main
- **Experiences in Close Relationships-Revised (ECR-R)**

### Sistema de Pontuação

Cada resposta pontua de 0-3 para cada estilo:
- **3 pontos**: Altamente característico
- **2 pontos**: Moderadamente característico  
- **1 ponto**: Levemente característico
- **0 pontos**: Não característico

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar testes com cobertura
npm run test:coverage

# Executar testes em modo watch
npm run test:watch
```

## 📈 Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s  
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

Otimizações aplicadas:
- Lazy loading de componentes
- Memoização de traduções
- Debounce em animações
- Code splitting por rota

## 🤝 Contribuindo

1. **Fork** o projeto
2. **Crie** uma branch (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. **Abra** um Pull Request

### Diretrizes de Contribuição

- Siga os princípios de refatoração do Martin Fowler
- Escreva testes para novas funcionalidades
- Mantenha consistência no estilo de código
- Documente mudanças significativas

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Autores

- **Seu Nome** - *Desenvolvimento inicial* - [seu-github](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- John Bowlby pela Teoria do Apego
- Mary Ainsworth pelos padrões de apego infantil
- Mary Main pelo Adult Attachment Interview
- Martin Fowler pelos princípios de refatoração
- Comunidade React pelo framework incrível

## 📞 Suporte

- 📧 Email: suporte@attachmentquiz.com
- 🐛 Issues: [GitHub Issues](https://github.com/seu-usuario/attachment-style-quiz/issues)
- 💬 Discussões: [GitHub Discussions](https://github.com/seu-usuario/attachment-style-quiz/discussions)

## 🔄 Changelog

### v1.0.0 (2024-01-15)
- ✨ Lançamento inicial
- 🌍 Suporte para PT-BR e EN-US
- 🎨 Design glassmorphism
- 📱 Interface responsiva

### v1.1.0 (Planejado)
- 🔧 Sistema de plugins para novos estilos
- 📊 Dashboard com estatísticas
- 💾 Salvamento local de resultados
- 🎭 Modo escuro/claro

---

<div align="center">

**[⬆ Voltar ao topo](#-quiz-de-estilo-de-apego)**

Feito com ❤️ usando React e Tailwind CSS

</div>