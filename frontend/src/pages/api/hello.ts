// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Comentário que direciona à documentação sobre rotas de API do Next.js

import type { NextApiRequest, NextApiResponse } from "next";
// Importação dos tipos `NextApiRequest` e `NextApiResponse` do Next.js para tipagem das requisições e respostas

type Data = {
  name: string;
};
// Definição do tipo `Data` para especificar a estrutura do objeto que será enviado como resposta, contendo apenas uma propriedade `name` do tipo `string`

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // Função `handler`, que é a rota de API em si; recebe dois parâmetros tipados: `req` (requisição) e `res` (resposta)

  res.status(200).json({ name: "John Doe" });
  // Define o código de status da resposta como `200` (sucesso) e envia um JSON contendo o campo `name` com o valor "John Doe"
}
