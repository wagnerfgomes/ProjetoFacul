const menuHambugerIcone = document.getElementById('menuHambuguerIcone');
const navegacao = document.getElementById('navegacao');
const btnMenuHambuger = document.getElementById('menuHambuguer');

const menuHambuger = () => {
        if (navegacao.classList.contains('navegacao-esconder')) {
            navegacao.classList.remove('navegacao-esconder');
            menuHambugerIcone.innerHTML = 'close';
        } else {
            navegacao.classList.add('navegacao-esconder');
            menuHambugerIcone.innerHTML = 'menu';
        }
}

btnMenuHambuger.addEventListener('click',()=>{
    menuHambuger()
});