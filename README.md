# Burger Queen

Acesse a página clicando [aqui](https://burger-queen-a7469.web.app/)

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Planejamento do Projeto](#2-planejamento-do-projeto)
* [3. Prototipagem](#3-prototipagem)
* [4.Implementações Futuras](#4-Implementacoes-futuras)
* [5.Aprendizado](#5-aprendizado)
* [6. Tecnologias Utilizadas](#6-tecnologias-utilizadas)
* [Autoria](#autoria)

***

## 1. Prefácio

A aplicação Burger Queen oferece um produto digital para restaurantes. Nesta aplicação o cliente proporciona aos seus funcionários uma interface capaz de automatizar o fluxo de anotações de pedidos e envio da solicitação para a cozinha. O sistema conta com a tecnologia de privacidade na página de cada cargo, ou seja, o garçom/garçonete serão direcionados automaticamente para a página de anotação de pedidos e o cozinheiro terá acesso apenas a página de exibição das solicitações enviadas pelos funcionários do salão. 

## 2. Planejamento do projeto

A nível de organização, o nosso projeto foi dividido por sprints e para guiar nosso trabalho, contamos com a estruturação de Histórias de Usuário e só avançamos conforme a HU anterior estivesse totalmente usual e sem nenhum bug.

#### História 1
Como definição de pronto dessa primeira história, decidimos que o usuário poderia se cadastrar como Atendente ou como Cozinheiro.

Em ambos casos, na tela de registro o usuário pode definir o nome que irá aparecer no display.
Ele deve inserir um e-mail e uma senha válidos, caso algum dos campos esteja inválido, a página exibe uma mensagem de erro e solicita que o usuário tente novamente. Quando o cadastro do usuário é feito com sucesso, automaticamente ele é direcionado para a página de login. 

Na página de login, se o usuário insere algum e-mail inválido ou digita uma senha errada, novamente a página exibe uma mensagem de erro para que ele tente novamente. Quando obtém sucesso, o usuário é automaticamente direcionado para o página correspondente ao seu cargo.

#### História 2

As definições de pronto dessa história consistem no Atendente conseguir anotar o nome e a mesa do cliente, selecionar os produtos requeridos pelo cliente, verificar o resumo do pedido, tal como quantidade e preço e por fim, deletar pedidos antes de enviá-los para a cozinha caso seja solicitado pelo cliente. 

Além disso, após o envio ser feito com sucesso, os campos de inserção de nome e mesa são resetados e a página exibe um alerta informando o sucesso.

#### História 3

Nessa história, o objetivo principal era exibir os pedidos anotados pelo Atendente na interface do cozinheiro. 

Todos os pedidos constam com um botão de finalização do pedido. Então, quando o Cozinheiro termina o preparo do pedido, ele pode clicar neste botão e o pedido não aparecerá mais na tela. Após notificar a conclusão do pedido e o mesmo ser dado como "Pronto", o cozinheiro é notificado sobre o envio do pedido através de um alerta na página.

## 3. Prototipagem

![PrototipoHome](/src/assets/home-burger-queen.png)

#### Informações adicionais

* A aplicação foi pensada para tablets;
* A aplicação foi construída em uma Single Page Aplication;
* Para armazenar os dados de usuário e pedidos, foi utilizado o banco de dados Firebase. Através dessa tecnologia, os dados enviados de uma interface para a outra não são perdidos após deslogar. 
* Para ter um direcionamento da identidade visual da página, trabalhamos com protótipos.

## 4. Implementações Futuras

Nas próximas versões do produto pretendemos:

* Trabalhar melhor a responsividade da aplicação para todos os dispositivos;
* Criar uma tela em que o garçom posso verificar os pedidos notificados pela cozinha como prontos.


## 5. Aprendizado

* Manipulação da maior parte do layout da página com a biblioteca Material UI;
* Uso de callbacks, consumo de Promises e uso de ES Modules - JS;
* Manipulação da SPA por Estados através do uso de React.JS;
* Firebase Authentication, Firestore, onSnapshot, Firebase Hosting - Firebase
* Colaboração por Git e GitHub.

## 6. Tecnologias Utilizadas

* React.JS
* Material UI
* Firebase
* Adobe Illustrator
* Node.js
* Trello

### Desenvolvido por

[Thalita Gonçalves](https://github.com/thalitagoncalves/)

[Francieli Abreu](https://github.com/francielisabreu)

#### O projeto foi proposto no Bootcamp @Laboratoria.


