<h1 align="center"> Space Shooter Web App </h1>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

<p align="center"> Jogo Space Shooter desenvolvido em HTML, CSS e JS. Jogo integrado à aplicação NodeJS utilizando framework Express e middlewares como Sequelize, Bootstrap, Sass, Csrf, Bcrypt e outros com crud de usuarios, cursos e Partidas. Este trabalho foi desenvolvido no Curso de Programação Web 1 e eu ainda faço melhorias nele com o objetivo de melhorar minhas habilidades com estes recursos.
</p>
<p align="center"> Vale ressaltar que os 2 arquivos apresentados são independentes e fazem coisas diferentes, para entender leia a descrição.
</p>

# Índice 

* <a href="#App"> [Web App] </a>
* <a href="#Jogo"> [Jogo] </a>

# App 

<p>O App está na pasta "Game" como todo o código atual do projeto, para conseguir rodar siga os seguintes passos:<p>

<p>Obs: A pasta "Space Shooter Game" não é necessária para rodar o App(Game), e todos os passos abaixo devem ser executados dentro da pasta Game.<p>

1. Utilize o comando git clone neste repositório para sua máquina. <br> ```git clone https://github.com/Mario-HN/Space-Shooter-App-NodeJS```<br>
2. Na pasta clonada, utilize o comando npm install para instalar os pacotes necessários para rodar a aplicação. <br> ```npm install```<br>
3. Checar o arquivo Game/src/config/database.json se o nome do user, a senha e o database estão de acordo com o seu sistema. <br>
4. Criar as migrations com o seguinte comando: <br> ```npx sequelize db:migrate``` <br>
5. Criar os Seeders com o seguinte comando: <br> ```npx sequelize db:seed:all``` <br>

# Jogo

<p>A pasta "Space Shooter Game" contém o código do jogo Space Shooter, para rodar, basta seguir estes passos:<p>
  
<p>Obs: A pasta do App(Game) não é necessária para rodar o "Space Shooter Game".<p>

1. Utilize o comando git clone neste repositório para sua máquina. <br> ```git clone https://github.com/Mario-HN/Space-Shooter-App-NodeJS```<br>
2. execute o arquivo index.html
