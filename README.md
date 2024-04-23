# Desafio Laboratório Bridge
## Objetivo do desafio 
- Criação de uma Aplicação Web, que permita que o usuário insira um número inteiro k e calcule o número de inteiros positivos primos n MENORES que k,
- A aplicação deve possuir uma tela com um campo de texto que aceite apenas números inteiros e um botão;
- Ao clicar no botão, os dados devem ser enviados ao backend para cálculo e processamento;
- O resultado deve ser exibido na tela junto com o tempo levado para calcular o
resultado.

  Bonus implementados:
  
- (1) Armazenar e apresentar o histórico dos números informados pelo usuário junto comseus respectivos resultados;
- (2) Defina limites e validações para que a aplicação não apresente erros;
## Resolução
Para a resolução deste desafio foi utilizado o Python para o back-end e o React para o Front-end. Foi utilizado o Flask para integração do back-end com o Front end.  

Flask é um framework web em Python que é utilizado para criar aplicativos web e APIs. É usado para integrar o backend com o frontend, com ele é possível criar rotas para manipular solicitações HTTP, fornecer APIs para interação com o frontend, lidar com o armazenamento e a manipulação de dados, etc.  

React é uma biblioteca front-end do JavaScript com foco em criar interfaces de usuário em páginas web. Neste projeto utilizamos da criação de componentes deste framework para criação da tela.

O npm (Node Package Manager) permite instalar pacotes de código em aplicações. Um pacote node.js é um diretório com um ou mais módulos ou bibliotecas JavaScript, usados para adicionar  funcionalidades a aplicativos ou scripts. Sem os pacotes, os código teriam que ser escritos do zero para cada projeto criado.

Para rodar o projeto é necessário que em sua máquina esteja instalado o Python3.10, npm e Flask:
```
sudo apt install python3.10
npx install 
pip3 install Flask
```

## Back-end:

Para rodar o localmente:
```
- baixar o projeto em sua máquina abrir em um interpretador de ódigo
no terminal:
- cd flask-server
- python3 server.py
```

## Front-end:

Para rodar o localmente:
```
Para rodar localmente:
- baixar o projeto em sua máquina abrir em um interpretador de ódigo
no terminal:
- cd client
- no terminal executar: npm start
```

## Comportamento do sistema:
O usuário digita um número inteiro positivo: 
![image](https://github.com/larissaslomski/calculo-primos/assets/92489945/3a6bf542-8ef5-4591-a9bc-3c471f07e52f)  

A aplicação então apresenta uma atualização na tela com a quantidade de números primos de 0 até o número digiado:
![image](https://github.com/larissaslomski/calculo-primos/assets/92489945/53f5c77d-b758-489d-a9c0-54d48bf3fa2b)  

[BONUS (1)] Caso o usuário digite vários números e queira acessar o histórico, basta clicar no botão "ver histórico"  
![image](https://github.com/larissaslomski/calculo-primos/assets/92489945/24ff9c6a-a17b-44ea-8cbc-897ca6a3e912)  

[BONUS (2)] Caso o usuário digite um número negativo ou tente enviar o input sem informação, o sistema exibirá a seguinte mensagem na tela:  
![image](https://github.com/larissaslomski/calculo-primos/assets/92489945/8d8488ce-ffb6-4453-8192-bd4abcac22dd)  

[BONUS (2)] Caso o usuário digite um número muito grande duas vezes, a segunda vez não irá fazer toda a rota de cálculo com o back-end, irá apenas acessar o valor já salvo no histórico (duas consultas do número 100000 com tempos diferentes):  
![image](https://github.com/larissaslomski/calculo-primos/assets/92489945/18f2977d-39e5-4321-a19a-ccd709e85ee0)  
![image](https://github.com/larissaslomski/calculo-primos/assets/92489945/dbf12d43-ef0b-44bb-a9b2-236ba8b0f8cb)







