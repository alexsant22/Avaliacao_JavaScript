function configurar() {
    let numeroInput1 = document.getElementById('numeroInput1');
    let numeroInput2 = document.getElementById('numeroInput2');
    let numeroInput3 = document.getElementById('numeroInput3');
    let escolhaSelect = document.getElementById('escolha');
    let calcularBtn = document.getElementById('calcularBtn');

    if ((numeroInput1 instanceof HTMLInputElement) && 
        (numeroInput2 instanceof HTMLInputElement) && 
        (numeroInput3 instanceof HTMLInputElement) && 
        (calcularBtn instanceof HTMLButtonElement) && 
        (escolhaSelect instanceof HTMLSelectElement)) {
            calcularBtn.addEventListener('click', () => {
                console.log(escolhaSelect.value)
                calcular(escolhaSelect)
            });
    }
}

function obterNumero() {
    // Pegando Valores
    let entradaNum1 = document.getElementById("numeroInput1");
    let entradaNum2 = document.getElementById("numeroInput2");
    let entradaNum3 = document.getElementById('numeroInput3');
  
    // Verificando entrada e fazendo parse
    if (
      entradaNum1 instanceof HTMLInputElement && 
      entradaNum2 instanceof HTMLInputElement && 
      entradaNum3 instanceof HTMLInputElement
    ) {
      let num1 = +entradaNum1.value;
      let num2 = +entradaNum2.value;
      let num3 = +entradaNum2.value;
  
      return { num1, num2, num3 };
    }
    return { num1: 0, num2: 0, num3: 0 };
  }

function exibirResultado(resultado) {
    let saida = document.getElementById('resultado');

    if (saida instanceof HTMLParagraphElement) {
        saida.textContent = `O resultado é: ${resultado}`;
    }
}

// Funções para operações
const soma = (a, b) => a + b;
const subitracao = (a, b) => a - b;
const multiplicao = (a, b) => a * b;
const divisao = (a, b) => a / b;
//const potenciacao = (a, b) + Math.pow(a, b);
const raiz = (a) => Math.sqrt(a);

function calcular(operacao) {

    let numeros = obterNumero();
    let num1 = numeros.num1;
    let num2 = numeros.num2;
    let num3 = numeros.num3;
  
    let resultado;

    // Switch para operações
    switch (operacao) {
        case "1":
            resultado = soma(num1, num2);
        case "2":
            resultado = subitracao(num1, num2);
        case "3":
            resultado = multiplicao(num1, num2);
        case "4":
            try {
                if (num1 <= 0 || num2 <= 0) {
                    throw new Error("Divisão por 0 não permitida.")
                }
                
                resultado = divisao(num1, num2);
            } catch (error) {
                alert(`Erro: ${error.message}`)
            }
    }

    exibirResultado(resultado);
}

document.addEventListener('DOMContentLoaded', configurar);