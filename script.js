// let peso = document.getElementById('peso');
// let altura = document.getElementById('altura');
// let btnLimpar = document.querySelector('.btn-limpar-imc');
// let btnCalcular = document.querySelector('.btn-calcular-imc');
// let imcValor = document.querySelector('.imc-valor');
// let containerResultado = document.querySelector('.resultado')
// let botaoSair = document.querySelector('.btn-sair')
// let descricaoImc = document.querySelector('.descricao')

// btnCalcular.addEventListener('click', () => {
//     avisoParaDadosAusentes();
//     ativarContainerResultado();
//     avisoParaDadosInvalidos()
//     calcularIMC();
//     variacoesDeIMC()
// });

// btnLimpar.addEventListener('click', () => {
//     peso.value = '';
//     altura.value = '';
// });

// function calcularIMC() {
//     let pesoValor = Number(peso.value);
//     let alturaValor = Number(altura.value);

//     if (pesoValor > 0 && alturaValor > 0) {
//         let imc = pesoValor / (alturaValor * alturaValor);
//         imcValor.style.fontSize = '80px'
//         imcValor.innerHTML = imc.toFixed(2).replace('.', ',');
//     }
// }

// function variacoesDeIMC() {
//     if (imcValor > 0 && imcValor < 18.5) {
//         descricaoImc.textContent = 'Você está abaixo do peso ideal';
//         imcValor.style.color ='blue'
//         descricaoImc.classList.add('baixo')
//     }
//     else if (imcValor >= 18.5 && imcValor < 24.9) {
//         descricaoImc.textContent = 'Seu peso está na faixa saudável';
//     }
//     else if (imcValor >= 25 && imcValor < 29.9) {
//         descricaoImc.textContent = 'Você está acima do peso ideal';
//     }
//     else if (imcValor >= 30 && imcValor < 34.9) {
//         descricaoImc.textContent = 'Seu peso indica Obesidade Grau I (Leve)';
//     }
//     else if (imcValor >= 35 && imcValor < 39.9) {
//         descricaoImc.textContent = 'Seu peso indica Obesidade Grau II (Moderada)';
//     }
//     else if (imcValor >= 40) {
//         descricaoImc.textContent = 'Seu peso indica Obesidade Grau III (Grave)';
//     }
// }

// function adicionarVirgula(input) {
//     let valor = input.value;

//     // Remover qualquer caractere que não seja número ou vírgula
//     valor = valor.replace(/[^0-9,]/g, '');

//     // Adicionar vírgula após o primeiro número, se ainda não tiver
//     if (valor.indexOf(',') === -1 && valor.length > 0) {
//         valor = valor.substring(0, 1) + ',' + valor.substring(1);
//     }

//     input.value = valor;
// }


// function avisoParaDadosInvalidos() {
//     if (peso.value <= 0 || altura.value <= 0) {
//         imcValor.innerHTML = "Valores inválidos!";
//         imcValor.style.fontSize = '40px'
//         descricaoImc.classList.add('hidden')
//     }
// }

// function avisoParaDadosAusentes() {
//     if (!peso.value || !altura.value) {
//         imcValor.textContent = 'Por favor, preencha todos os campos antes de calcular o IMC.';
//         imcValor.style.fontSize = '22px'
//         descricaoImc.classList.add('hidden')
//     }
// }

// function ativarContainerResultado() {
//     containerResultado.classList.remove('hidden')
// }

// botaoSair.addEventListener('click', () => {
//     containerResultado.classList.add('hidden')
// })

let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let btnLimpar = document.querySelector('.btn-limpar-imc');
let btnCalcular = document.querySelector('.btn-calcular-imc');
let imcValor = document.querySelector('.imc-valor');
let containerResultado = document.querySelector('.resultado')
let botaoSair = document.querySelector('.btn-sair')
let descricaoImc = document.querySelector('.descricao')

btnCalcular.addEventListener('click', () => {
    avisoParaDadosAusentes();
    avisoParaDadosInvalidos();
    ativarContainerResultado();
    calcularIMC();
    variacoesDeIMC();
});

btnLimpar.addEventListener('click', () => {
    peso.value = '';
    altura.value = '';
    imcValor.textContent = '';
    descricaoImc.textContent = '';
    descricaoImc.classList.remove('hidden');
});

function calcularIMC() {
    let pesoValor = Number(peso.value);
    let alturaValor = Number(altura.value);

    if (pesoValor > 0 && alturaValor > 0) {
        let imc = pesoValor / (alturaValor * alturaValor);
        imcValor.style.fontSize = '80px'
        imcValor.innerHTML = imc.toFixed(2).replace('.', ',');
        return imc;
    }
}

function variacoesDeIMC() {
    let imc = calcularIMC(); 
    if (imc < 18.5) {
        descricaoImc.textContent = 'Você está abaixo do peso ideal';
        imcValor.classList.add('baixo'); 
        descricaoImc.classList.add('baixo'); 
    }
    else if (imc >= 18.5 && imc < 24.9) {
        descricaoImc.textContent = 'Seu peso está na faixa saudável';
        imcValor.classList.add('saudavel'); 
        descricaoImc.classList.add('saudavel'); 
    }
    else if (imc >= 25 && imc < 29.9) {
        descricaoImc.textContent = 'Você está acima do peso ideal';
        imcValor.classList.add('acima'); 
        descricaoImc.classList.add('acima'); 
    }
    else if (imc >= 30 && imc < 34.9) {
        descricaoImc.textContent = 'Seu peso indica Obesidade Grau I (Leve)';
        imcValor.classList.add('obesidade1'); 
        descricaoImc.classList.add('obesidade1'); 
    }
    else if (imc >= 35 && imc < 39.9) {
        descricaoImc.textContent = 'Seu peso indica Obesidade Grau II (Moderada)';
        imcValor.classList.add('obesidade2'); 
        descricaoImc.classList.add('obesidade2'); 
    }
    else if (imc >= 40) {
        descricaoImc.textContent = 'Seu peso indica Obesidade Grau III (Grave)';
        imcValor.classList.add('obesidade3'); 
        descricaoImc.classList.add('obesidade3'); 
    }
}

function avisoParaDadosInvalidos() {
    if (peso.value <= 0 || altura.value <= 0) {
        imcValor.innerHTML = "Valores inválidos!";
        imcValor.style.fontSize = '40px';
        descricaoImc.classList.add('hidden');
    }
}

function avisoParaDadosAusentes() {
    if (!peso.value || !altura.value) {
        imcValor.textContent = 'Por favor, preencha todos os campos antes de calcular o IMC.';
        imcValor.style.fontSize = '22px';
        descricaoImc.classList.add('hidden');
    }
}

function ativarContainerResultado() {
    containerResultado.classList.remove('hidden');
}

botaoSair.addEventListener('click', () => {
    containerResultado.classList.add('hidden');
});


