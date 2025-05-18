require("dotenv").config();

const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const OpenaiController = {
    secretariaIA: async (req, res) => {
        try {
        const { message } = req.body;

        // Dados enviados à IA
        const metadata = {
            mensagemCliente: message,
            infoEmpresa: {
                nome: "Nome da empresa",
                cnpj: "CNPJ da empresa",
                telefone: "Telefone da empresa",
                email: "Email da empresa",
                descricao: "Descrição da empresa",
                endereco: "Endereço da empresa",
                horarioFuncionamento: "Horário de funcionamento da empresa",
                site: "Site da empresa",
            },
        };

        const systemPrompt = `
            Você é uma secretária de uma empresa. Sua função é entender o contexto da empresa e conversar com o cliente respondendo suas perguntas com linguagem natural à respeito de produtos e serviços que está sendo enviado .
            Responda ESTRITAMENTE com um objeto JSON no seguinte formato:
            {
                "openaiResponse": {
                    "secretariaIA": "Resposta tirando a dúvida sobre o sistema...",
                }
            }
            ### Regras:
            - O dado mensagemCliente é a mensagem do cliente.
            - O dado infoEmpresa é um objeto com informações básicas da empresa.
            - Você deve responder com um JSON válido.
            - Se o cliente fugir do contexto retorne uma mensagem padrão de erro com mensagem natural seguindo o formato. Seja direto, objetivo e não saia do padrão JSON.`;

        const userPrompt = `
            Abaixo estão os dados com informações básicas da empresa:
            ${JSON.stringify(metadata, null, 2)}
            Gere o objeto JSON conforme instruções.`;

        // Configuração da IA e envio da requisição
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            temperature: 0.85,
        });
        const resposta = completion.choices[0].message.content;
        let openaiResponse = null;
        try {
            const parsed = JSON.parse(resposta);
            if (!parsed.openaiResponse || !parsed.openaiResponse.secretariaIA) {
                    return res.status(500).json({
                    error: "A IA não retornou um objeto 'openaiResponse' completo.",
                });
            }
            openaiResponse = parsed.openaiResponse
        } catch (e) {
            console.error("Erro ao fazer parse do JSON da IA:", resposta);
            return res.status(500).json({ error: "Erro ao interpretar resposta da IA." });
        }
        return res.status(200).json({ openaiResponse });
        } catch (err) {
            console.error("Erro ao gerar resposta:", err);
            return res.status(500).json({ error: "Erro ao gerar resposta." });
        }
    }
};
module.exports = OpenaiController;
