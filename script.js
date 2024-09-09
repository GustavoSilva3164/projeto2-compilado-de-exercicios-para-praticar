// 1. Faça um programa que mostre a mensagem 'ola mundo' na teal.
console.log('ola mundo');

// 2. Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".
const numero = 7; 
console.log('O número informado foi ' + numero);

// 3. Faça um Programa que peça dois números e imprima a soma.
const num1 = 10; 
const num2 = 20; 
const soma = num1 + num2;
console.log('A soma dos números é ' + soma);

// 4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.
const nota1 = 8.5; 
const nota2 = 7.0; 
const nota3 = 9.0;
const nota4 = 6.5;
const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log('A média das notas é ' + media);

// 5. Faça um programa que converta metros para centímetros.
const metros = 1.75; 
const centimetros = metros * 100;
console.log(metros + ' metros em centímetros são ' + centimetros + ' centímetros');

// 6. Faça um programa que peça o raio de um círculo, calcule e mostre sua área.
const raio = 5; 
const pi = 3.14;
const area = pi * (raio ** 2);
console.log('A área do círculo é ' + area);

// 7. Faça um programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
const lado = 4; 
const areaQuadrado = lado ** 2;
const dobroArea = areaQuadrado * 2;
console.log('O dobro da área do quadrado é ' + dobroArea);

// 8. Faça um programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
const valorHora = 15; 
const horasTrabalhadas = 160; 
const salario = valorHora * horasTrabalhadas;
console.log('Seu salário é R$ ' + salario);

// 9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
const fahrenheit = 98; 
const celsius = 5 * ((fahrenheit - 32) / 9);
console.log('A temperatura em Celsius é ' + celsius);

// 10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
const celsius2 = 37; 
const fahrenheit2 = (celsius2 * 9 / 5) + 32;
console.log('A temperatura em Fahrenheit é ' + fahrenheit2);

// 11. Faça um Programa que peça 2 números inteiros e um número real calcule e mostre:
// • o produto do dobro do primeiro com metade do segundo 
// • a soma do triplo do primeiro com o terceiro
// • o terceiro elevado ao cubo
const number1 = 5; 
const number2 = 8;
const number3 = 3.5; 
const produto = (number1 * 2) * (number2 / 2);
const somaA = (number1 * 3) + number3;
const cubo = number3 ** 3;
console.log('O produto do dobro do primeiro com metade do segundo é ' + produto);
console.log('A soma do triplo do primeiro com o terceiro é ' + somaA);
console.log('O terceiro elevado ao cubo é ' + cubo);

// 12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
const altura = 1.75; 
const pesoIdeal = (72.7 * altura) - 58;
console.log('O peso ideal da pessoa é ' + pesoIdeal);

// 13. Tendo como dado de entrada a altura (h) de uma pessoa, constru­a um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmu­las:
// • Para homens: (72.7 * altura) - 58;
// • Para mulheres: (62.1 * altura) - 44.7
const altura2 = 1.65;
const sexo = 'feminino';
const formulas = {
    masculino: (altura) => (72.7 * altura) - 58,
    feminino: (altura) => (62.1 * altura) - 44.7
};
const pesoIdealA = formulas[sexo] ? formulas[sexo](altura2) : 'Sexo não reconhecido';
console.log('O peso ideal da pessoa é ' + pesoIdealA);

// 14. João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
const pesoPeixe = 55;
const pesoMaximo = 50;
const excesso = pesoPeixe - pesoMaximo;
const multa = excesso * 4;
console.log('O excesso de peso é ' + excesso);
console.log('A multa é R$ ' + multa);

// 15. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
// • salário bruto.
// • quanto pagou ao INSS.
// • quanto pagou para o sindicato.
// • o salário líquido. calcule os descontos e o salário líquido, conforme a tabela abaixo:
// • Salário Bruto : R$
// • INSS (8%) : R$
// • Sindicato ( 5%) : R$ = Salário Liquido : R$
const valorHora2 = 20; 
const horasTrabalhadas2 = 160; 
const salarioBruto = valorHora2 * horasTrabalhadas2;
const inss = salarioBruto * 0.08;
const sindicato = salarioBruto * 0.05;
const salarioLiquido = salarioBruto - inss - sindicato;
console.log('O salário bruto é R$ ' + salarioBruto);
console.log('O valor pago ao INSS é R$ ' + inss);
console.log('O valor pago ao sindicato é R$ ' + sindicato);
console.log('O salário líquido é R$ ' + salarioLiquido);
