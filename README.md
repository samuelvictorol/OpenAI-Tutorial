# 🤖 SecretariaIA – ChatGPT com API Oficial OpenAI

Tutorial completo e direto ao ponto de como integrar o ChatGPT (GPT-3.5 / GPT-4) usando a **API oficial da OpenAI**, criando uma assistente virtual estilo **secretária inteligente** com Node.js e Express.

---

## 🚀 O Projeto

Crie um endpoint inteligente que responde automaticamente às perguntas de clientes com base nos dados da sua empresa. Ideal para **automação de atendimento**, **chatbots personalizados**, **assistentes de vendas** e muito mais.

---

## 🛠️ Tecnologias Utilizadas

- [x] JavaScript
- [x] Node.js 10+
- [x] Express.js
- [x] OpenAI API (GPT-3.5 ou GPT-4)
- [x] dotenv para segurança da API Key

---

## 📦 Instalação

```bash
git clone https://github.com/samuelvictorol/OpenAI-Tutorial.git
cd OpenAI-Tutorial
npm install

- OpenAI API Key
- Node 10+

## ⚓ Links de Referência
- OpenAI - API KEY: https://platform.openai.com/settings/organization/api-keys
- Assistir Videoaula: https://youtube.com
- Repositório no GitHub: https://github.com/samuelvictorol/OpenAI-Tutorial
```

# ❔Como Usar

- Crie um arquivo .env com sua API KEY da OpenAI:
> OPENAI_API_KEY=sua-chave-aqui
- No arquivo server.js a porta está na 3000, por padrão, podendo ser alterada.
> Exemplo de url completa: http://localhost:3000/secretariaIA
- Dentro do diretório OpenAI-Tutorial, execute npm run dev (para modo desenvolvedor com hotreload) ou npm start. Lembre-se de ter instalado as dependências (npm i).
>  Exemplo: C:\Users\Fulano\OpenAI-Tutorial>npm run dev

- Faça uma requisição POST no endpoint:

> POST <strong>/secretariaIA</strong>

```bash
{
    "message": "Quais são os serviços oferecidos pela empresa?"
}
```
> Resposta Esperada [200]

```bash
{
  "openaiResponse": {
    "secretariaIA": "Olá! Somos especialistas em automação e oferecemos soluções sob medida para sua empresa. 
     Precisa de algo específico?"
  }
}
```

## 🔐 Formato da IA (Interno)
```bash
{
  "mensagemCliente": "mensagem do usuário",
  "infoEmpresa": {
    "nome": "Nome da empresa",
    "cnpj": "CNPJ da empresa",
    "telefone": "Telefone",
    "email": "Email",
    "descricao": "Breve descrição",
    "endereco": "Localização",
    "horarioFuncionamento": "Ex: Seg a Sex - 8h às 18h",
    "site": "https://..."
  }
}
```
> A IA sempre responde com um objeto JSON válido no formato:
```bash
{
  "openaiResponse": {
    "secretariaIA": "Texto da resposta gerada pela IA."
  }
}
```
## 📽️ Videoaula

- ▶️ Assista o passo a passo completo no YouTube:<br>
[👉 Clique aqui para assistir](https://youtube.com)

## 🔗 Links úteis
- [🔑 Obter sua API Key da OpenAI](https://platform.openai.com/api-keys)
- [📘 Documentação oficial OpenAI](https://platform.openai.com/docs/api-reference/introduction)
- [🎲 Tokenizer OpenAI](https://platform.openai.com/tokenizer)
- [💻 Código-fonte no GitHub](https://github.com/samuelvictorol/OpenAI-Tutorial)

## 💡 Ideias de Uso
- Chatbots para sites

- Automação de WhatsApp com inteligência

- Respostas automáticas por e-mail

- Atendimento 24h sem equipe humana

- Suporte em lojas online

## 🧠 Resultado
> <strong>Você terá uma API REST simples, funcional, com linguagem natural e inteligência baseada no modelo oficial da OpenAI, pronta para ser integrada em qualquer aplicação moderna.</strong>

## 🪐 Inspirações:
- [ChatCar IA](https://chatcar.me)

[![image](https://github.com/user-attachments/assets/1b878763-3a96-4d09-8c3b-902d706c05c3)
](https://chatcar.me)

[![image](https://github.com/user-attachments/assets/faf4602a-95b0-4ebb-b122-5097e8c51601)](https://chatcar.me)

[![image](https://github.com/user-attachments/assets/fb385fa2-1adf-4b8b-9a57-135ae87fae6b)
](https://chatcar.me)

# 📍 Por [samuelvictorol](https://samuelvictorol.github.io/portfolio)
