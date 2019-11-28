
# Prova IN8

O projeto localizado neste repositório faz parte do processo seletivo da empresa IN8, o mesmo é dividido em duas etapas, as questões referentes à linguagem PHP, um website estruturado como um SPA que contém um backend e um frontend, o mesmo construído utilizando o layout fornecido pela empresa.

## Dependências

- [NodeJS](https://nodejs.org/en/);
- [PHP (7+)](https://www.php.net/downloads.php);
- [Composer](https://getcomposer.org)

## Get started

A prova consiste em 2 etapas:

1. 4 questões relacionadas à lógica de programação.
2. Desenvolvimento de uma aplicação com backend em PHP e frontend em SPA utilizando algum framework atual.

### Questões abertas

Deverá ser acessado a pasta questões, todas as questões estão separadas em arquivos, estes deverão ser executadas diretamente pelo php da máquina ou em algum compilador online [https://paiza.io/en/projects/new](https://paiza.io/en/projects/new).

### Aplicação
 
O projeto foi desenvolvido utilizando [Laravel](https://laravel.com) em seu backend e [React](https://pt-br.reactjs.org) junto à outras bibliotecas no frontend. Para testar a aplicação é necessário ter instalado todas as dependencias. Acesse o diretório do projeto através do terminal e execute a série de comandos abaixo:

1. `npm i` (irá instalar todas as dependências do frontend).
2. `npm run dev` (irá compilar o frontend).
3. `composer install` (irá instalar todas as dependências do backend).
4. `php artisan serve` (irá prover a aplicação na porta 8000).
