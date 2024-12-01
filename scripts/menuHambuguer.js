const menuHambugerIcone = document.querySelector('#menuHambuguerIcone');
const navegacao = document.querySelector('#navegacao');
const btnMenuHambuger = document.querySelector('#menuHambuguer');

const menuHambuger = () => {
        if (navegacao.classList.contains('navegacao-esconder')) {
            navegacao.classList.remove('navegacao-esconder');
            menuHambugerIcone.innerHTML = 'close'
        } else {
            navegacao.classList.add('navegacao-esconder');
            menuHambugerIcone.innerHTML = 'menu'
        }
}



btnMenuHambuger.addEventListener('click',()=>{
    menuHambuger()
});