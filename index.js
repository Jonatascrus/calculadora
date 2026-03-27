const display = document.getElementById('display') // criação de uma variavel chamado display
const operadores = ['+', '-', '*', '/'];


function apertar (valor){
    display;
   operadores;
   if (operadores.includes(valor) && display.value===''){  // operadores.includes(valor) : verifica se oq foi clicado é um operador
       return;                        // display.value ===" : verifica se o display está vazio.
   }
   display. value += valor;

}

function calcular(){
    display;
    display.value = eval(display.value);  // eval = faz o cálculo que está dentro da string, Ex: eval ("2+2) = 4
}

function limpar(){
   display.value = '';
}

