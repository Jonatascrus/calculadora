const display = document.getElementById('display') // criação de uma variavel chamado display

function apertar (valor){
    display. value += valor;
}

function calcular(){
    display;
    display.value = eval(display.value);  // eval = faz o cálculo que está dentro da string, Ex: eval ("2+2) = 4
}

function limpar(){
   display.value = '';
}

