const numero = document.querySelector('.numero')
const saidaNumero = document.querySelector('.saida-numero')
const saidaNumero2 = document.querySelector('.saida-numero2')
const botao_numero = document.querySelector('.confirmar_numero')
const numeroAleatorio = Math.ceil(Math.random() * 100);

botao_numero.addEventListener("click", (event) => {
    
    const numeroValor = numero.value
    if(numeroValor>numeroAleatorio){
        saidaNumero.textContent = `Numero Digitado maior que escolhido`
    }
    else if (numeroValor < numeroAleatorio) {
        saidaNumero.textContent = `Número digitado é menor que o escolhido`;
    } else {
        saidaNumero.textContent = `Número digitado é igual ao escolhido!`
        saidaNumero2.textContent = `para continuar jogando atualize a pagina!`
        numero.style.display = 'none';
    }

})
