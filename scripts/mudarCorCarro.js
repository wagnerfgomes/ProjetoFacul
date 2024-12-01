const mudarCorBtn = document.getElementById('btn-mudar')
const carroImg = document.getElementById('img-carro')

mudarCorBtn.addEventListener('click', (evento)=>{
    evento.preventDefault();
    const inputCor = document.querySelector('input[name="cor-carro"]:checked');
    switch (inputCor.value) {
        case 'vermelho':
            carroImg.src = "./assets/carro-vermelho.png";
            console.log('vermelho');
            break;
        case 'branco':
            carroImg.src = "./assets/carro-branco.png";
            console.log('branco');
            break;
        default:
            carroImg.src = "./assets/carro-azul.png";
            console.log('azul');
            break;
    }
})