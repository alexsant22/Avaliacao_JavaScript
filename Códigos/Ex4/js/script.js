function configurar() {
    let verificarBtn = document.getElementById('verificarBtn');
    let numero1 = document.getElementById('numero1');
    let numero2 = document.getElementById('numero2');

    if ((verificarBtn instanceof HTMLButtonElement) && 
        (numero1 instanceof HTMLInputElement) && 
        (numero2 instanceof HTMLInputElement)) {
            verificarBtn.addEventListener('click', () => {
                contadadorMultiplos();
            });
        }
}

function exibirResultado(contador) {
    let resultado = document.getElementById('resultado');

    if (resultado instanceof HTMLParagraphElement) {
        resultado.textContent = `O resultado do contador dos multiplos é: ${contador}`;
    }
}

function contadadorMultiplos() {
    let numeroInput1 = document.getElementById('numero1');
    let numeroInput2 = document.getElementById('numero2');

    if ((numeroInput1 instanceof HTMLInputElement) && 
    (numeroInput2 instanceof HTMLInputElement)) {
        let num1 = parseInt(numeroInput1.value);
        let num2 = parseInt(numeroInput2.value);

        try {
            if (isNaN(num1) || isNaN(num2)) {
                throw new Error('Os valores devem ser números válidos.');
            }

            if (num1 <= 0 || num2 <= 0) {
                throw new Error('Os valores devem ser maiores que 0.');
            }

            if (num1 === num2) {
                throw new Error('Os valores não podem ser iguais.');
            }

            console.log(num1)
            console.log(num2)

            const calculo = (numero1, numero2) => {
                let maior = Math.max(numero1, numero2) + 1;
                let menor = Math.min(numero1, numero2) - 1;
                let contador = 0;

                for (let i = menor + 1; i < maior; i++) {
                    if (i % 5 === 0) {
                        contador++;
                    }
                }

                return contador;
            }

            let resultadoFinal = calculo(num1, num2);
            exibirResultado(resultadoFinal);
        } catch (error) {
            alert(`Erro: ${error.message}`);
        }
    }
}

document.addEventListener('DOMContentLoaded', configurar);