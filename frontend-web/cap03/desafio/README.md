Trabalho final do capítulo 03
=============================

Enunciado do trabalho
---------------------

Você deverá criar um \***novo\*** projeto ReactJS, contendo uma busca
simples de usuários integrando com a API oficial do **Github**. O
trabalho envolve alguns dos principais conceitos passados até agora:

-   Criar o layout baseado em um protótipo do Figma

-   Listar informações a partir de uma API

-   Loaders https://skeletonreact.com

-   Formulários

-   Rotas

O projeto deverá estar ser criado com o ```create-react-app```, usando o
template *TypeScript*:

```npx create-react-app github-user-search --template typescript```

-------------------------------

Link do protótipo no Figma: https://www.figma.com/file/NzeGEIb5oSAGtbu2BfvhDS/BDS-Cap3

-------------------------------

A API do Github para realizar o desafio é: https://api.github.com/users/NOME_USUÁRIO
Em que, que no lugar de \"**NOME_USUÁRIO**\", deverá ser enviado o nome
do usuário que foi preenchido no formulário da aplicação.

-------------------------------

Os componentes de \"Loaders\" já foram criados, e estão disponíveis em: https://github.com/devsuperior/dscatalog-resources/tree/master/frontend-web/cap03/desafio

-------------------------------

Existe uma parte do desafio, que é formatar a data do \"*Membro desde*\"
que existe no layout. Como não foi mostrado isso durante as aulas, essa
formatação **não é obrigatória.** Ou seja, a entrega contendo o valor
padrão retornado pela API do Github (Ex: *2013-10-19T16:11:46Z)*, será
considerada válida.

Apesar da não obrigatoriedade, indico fortemente vocês pesquisarem como
fazer isso, e inclusive já indico uma biblioteca super simples para
fazer esse trabalho: https://github.com/iamkun/dayjs

A propósito, usaremos bastante essa biblioteca ao decorrer do curso\*\*

Como o desafio é um projeto bem mais simples, **não é** necessário usar
o **Bootstrap**. Apenas o CSS no Figma é suficiente para concluir o
desafio. Acredito que será uma ótima chance para vocês treinarem suas
skills de CSS \"puro\", sem a ajuda do Bootstrap que já entrega muita
coisa pronta.

Rotas a serem criadas na aplicação:
-----------------------------------

1.  \"/\" - Home da aplicação

2.  \"/search\" - Tela de pesquisar usuário

Como o trabalho será corrigido?
-------------------------------

### 1) Execução do projeto

O professor deverá ser capaz de fazer um simples clone do projeto no
Github, instalar as dependências (NPM ou YARN) e executar a aplicação.

### 2) Testes manuais no navegador

O professor fará um teste simples na aplicação, que será navegar até a
rota de pesquisar usuário, e depois digitar um nome de usuário na caixa
de pesquisa, e checar se as informações estão aparecendo corretamente.

Lembrando que, a aplicação não precisa ser \"*pixel perfect*\" (tamanho
em pixel de todos os elementos exatamente ao Figma), mas deve ser o mais
próximo possível. Lembrando que, cores e tamanhos de fontes, por
exemplo, deverão ser exatamente aos do Figma.
