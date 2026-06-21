# 🔑 Gerador de Senhas Aleatórias

Um projeto simples, moderno e funcional desenvolvido em **React** com **Vite** para geração de senhas seguras de forma rápida, com opção de cópia instantânea para a área de transferência.

🌐 **Acesse o projeto online:** [https://garrido-dev.github.io/geradorDeSenha/](https://garrido-dev.github.io/geradorDeSenha/)

---

## 🎖️ Nota Importante: Desenvolvimento Autoral (Sem IA)

No cenário atual onde muitos projetos são gerados de forma automática por Inteligências Artificiais, **este projeto destaca-se por ser 100% autoral**. 

Toda a arquitetura, componentização, lógica de estados e estruturação do projeto foram criadas e codificadas por mim, linha por linha, do absoluto zero. Utilizei ferramentas de auxílio apenas como suporte consultivo para tirar dúvidas pontuais de segurança (como o bloqueio do HTTPS na API de Clipboard) e boas práticas, garantindo o domínio total sobre cada bloco de código escrito.

---

## 📸 Demonstração do Projeto

[Clique aqui para acessar a demonstração online](https://garrido-dev.github.io/geradorDeSenha/) ou veja o print da interface abaixo:

![Print da Tela do Projeto](src/assets/image.png)

---

## ✨ Funcionalidades

* 🎲 **Geração Instantânea:** Cria senhas aleatórias e seguras com apenas um clique.
* 📋 **Cópia Inteligente:** Botão de copiar com feedback visual na tela ("Copiado! ✅").
* 🧼 **Limpeza Rápida:** Botão para limpar a tela e o estado atual de forma limpa.
* 🛡️ **Segurança Avançada:** Suporte a conexões HTTPS e ambientes virtuais através de método fallback de captura.

---

## 🛠️ Tecnologias Utilizadas

* **React** (Biblioteca principal)
* **Vite** (Ferramenta de build ultra rápida)
* **JavaScript (ES6+)** (Lógica do app e Hooks Customizados)
* **CSS3** (Estilização da interface e layout responsivo)

---

## 📦 Como Rodar o Projeto em Sua Máquina

Siga os passos abaixo para testar o gerador localmente:

### 1. Clonar o repositório
```bash
git clone https://github.com
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```

Abra o seu navegador e acesse: `http://localhost:5173`

---

## 🧠 Aprendizados e Desafios Superados

Durante o desenvolvimento manual deste projeto, explorei e dominei conceitos fundamentais:
* Criação e arquitetura correta de **Hooks Customizados** (`useClipboard`).
* Gerenciamento de estados assíncronos com **Async/Await** no React.
* Manipulação segura da API de Clipboard do navegador e contorno de bloqueios de segurança **HTTPS**.
* Tratamento prático de loops de renderização infinitos ao atualizar estados no React.

---
Feito com dedicação e código real por 💻 [Garrido-dev](https://github.com/Garrido-Dev)
