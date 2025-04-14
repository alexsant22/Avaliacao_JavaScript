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

/* function exibirResultado() {
    let resultado = document.getElementById('resultado');

    if (resultado instanceof HTMLParagraphElement) {
        resultado.textContent = 
    }
} */

function contadadorMultiplos() {
    let numero1 = document.getElementById('numero1');
    let numero2 = document.getElementById('numero2');

    if ((numero1 instanceof HTMLInputElement) && 
    (numero2 instanceof HTMLInputElement)) {
        let num1 = parseInt(numero1.value);
        let num2 = parseInt(numero2.value);

        try {
            if (isNaN(num1) && isNaN(num2)) {
                throw new Error('Os valores devem ser números válidos.');
            }

            if (num1 < 0 || num2 < 0) {
                throw new Error('Os valores devem ser maiores que 0.');
            }

            if (num1 === num2) {
                throw new Error('Os valores não podem ser iguais.');
            }

            const calculo = (n1, n2) => {
                n1 = num1;
                n2 = num2;

                
            }
        } catch (error) {
            alert(`Erro: ${error}`);
        }
    }
}

document.addEventListener('DOMContentLoaded', configurar);