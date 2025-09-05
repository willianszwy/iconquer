# 🏆 iConquer - Gamified Achievement Tracker

Um PWA (Progressive Web App) gamificado para gerenciar suas conquistas pessoais com um sistema de troféus motivacional.

## ✨ Características

- **PWA Completo**: Funciona offline e pode ser instalado no dispositivo
- **Sistema de Troféus**: 20 troféus únicos com citações motivacionais
- **Gamificação**: Progresso por dia, mês e ano
- **Responsivo**: Interface adaptada para mobile e desktop
- **Notificações**: Lembretes opcionais para deadlines
- **Animações**: Troféus animados e feedbacks visuais
- **Persistência**: Dados salvos localmente no dispositivo

## 🚀 Deploy no GitHub Pages

### Configuração Inicial

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/SEU-USERNAME/iconquer.git
   cd iconquer
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o GitHub Pages**:
   - Abra `package.json`
   - Substitua `USERNAME` na linha `homepage` pelo seu usuário do GitHub:
     ```json
     "homepage": "https://SEU-USERNAME.github.io/iconquer"
     ```

### Deploy

1. **Build e deploy**:
   ```bash
   npm run deploy
   ```

2. **Configure o GitHub Pages**:
   - Vá para Settings > Pages no seu repositório
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

### URL Final
Seu app estará disponível em: `https://SEU-USERNAME.github.io/iconquer`

## 🛠️ Tecnologias

- **React 19** - Biblioteca para interface
- **Vite** - Build tool moderna e rápida
- **CSS Modules** - Estilos modulares
- **Vite PWA Plugin** - Configuração automática de PWA
- **localStorage** - Persistência de dados local

## 📱 Como Usar

1. **Adicionar Conquista**: Clique no botão "+" flutuante
2. **Editar Conquista**: Clique em qualquer conquista na lista
3. **Navegar no Tempo**: Use as setas nos cards
4. **Conquistar Troféus**: Complete conquistas para desbloquear troféus