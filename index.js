// Criar um sistema que permite o cadastro de clientes e contas-correntes, além de operações bancárias comuns

// const cliente1Nome = "Thais";
// const cliente1CPF = "05436985123";
// const cliente1Agencia = 1001;
// const cliente1Saldo = 0;

// const cliente2Nome = "Carol";
// const cliente2CPF = "05236598412";
// const cliente2Agencia = 1001;
// const cliente2Saldo = 0;

// console.log(cliente1Nome);


// new Cliente();

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Thais", "05635126952");
const cliente2 = new Cliente("Carol", "51369856220");

const contaCorrenteThais = new ContaCorrente(1001, cliente1);

contaCorrenteThais.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);


let valor = 200;
contaCorrenteThais.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);