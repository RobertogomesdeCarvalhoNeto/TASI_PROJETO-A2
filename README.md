# API de Gerenciamento de Pedidos
API REST desenvolvida para o gerenciamento de pedidos de uma pequena loja, aplicando arquitetura em camadas, validação de dados, tratamento de erros e versionamento com Git.

## Tecnologias Utilizadas
- Node.js
- Express

## Instruções de Instalação e Execução
1. Certifique-se de ter o Node.js instalado.
2. Instale as dependências do projeto executando no terminal:
   ```bash
   npm install

## Arquitetura
O projeto segue uma arquitetura mínima em camadas:   
src/routes/: Define os endpoints e encaminha as requisições.
src/controllers/: Controla o fluxo de entrada e saída, definindo os códigos de status HTTP corretos.
src/services/: Concentra a lógica de negócio, o armazenamento em memória e as validações de dados.

## Rotas Obrigatórias
POST /pedidos: Criação de um novo pedido (Retorna HTTP 201 em caso de sucesso ou 400 para dados inválidos).
GET /pedidos: Lista todos os pedidos cadastrados (Retorna HTTP 200).
GET /pedidos/:id: Consulta um pedido específico pelo identificador (Retorna HTTP 200 ou 404 se não existir).
PATCH /pedidos/:id/status: Atualiza o status de um pedido (Retorna HTTP 200, 400 para dados inválidos ou 404 se o ID não existir).

## Regras de Validação, Tipos e Prioridades
Cliente: Obrigatório, texto não vazio (validado após remoção de espaços nas extremidades).
Valor: Numérico e estritamente maior que zero.
Tipos aceitos: entrega, retirada.
Prioridades aceitas: baixa, normal, alta.
Estados de status possíveis: recebido, em_preparacao, enviado, entregue, cancelado.

# Uso de IA
Utilizou-se inteligência artificial como apoio técnico para estruturar a arquitetura em camadas, implementar as regras de validação estritas exigidas no projeto e organizar o histórico de commits de forma modular. Toda a lógica foi compreendida, testada e validada manualmente.