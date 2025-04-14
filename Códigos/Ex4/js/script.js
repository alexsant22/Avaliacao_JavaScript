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
    let numero1 = document.getElementById('numero1');
    let numero2 = document.getElementById('numero2');

    if ((numero1 instanceof HTMLInputElement) && 
    (numero2 instanceof HTMLInputElement)) {
        let num1 = parseInt(numero1.value);
        let num2 = parseInt(numero2.value);

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

            const calculo = (n1, n2) => {
                let maior = Math.max(n1, n2)
                let menor = Math.min(n1, n2);
                let contador = 0;

                for (let i = menor + 1; i < maior; i++) {
                    if (i % 5 === 0) {
                        contador++;
                    }
                }

                return contador + 2;
            }

            let resultadoFinal = calculo(num1, num2);
            exibirResultado(resultadoFinal);
        } catch (error) {
            alert(`Erro: ${error.message}`);
        }
    }
}

document.addEventListener('DOMContentLoaded', configurar);