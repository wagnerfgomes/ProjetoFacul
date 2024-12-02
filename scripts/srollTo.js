const btnEspecificacao = document.getElementById('btn-especificacao')
const btnVideo = document.getElementById('btn-video')
const btnToTop = document.getElementById('to-top')
const docElement = document.documentElement;

const scrollToElement = (idElemento) => {
    
    const elemeto = document.getElementById(idElemento);
    
    docElement.scrollTo({
        top: (elemeto.offsetTop), 
        behavior: "smooth",
    })
}

btnEspecificacao.addEventListener('click', () =>{
    scrollToElement("especificacao");
})
btnVideo.addEventListener('click', () =>{
    scrollToElement("exposicao");
})
btnToTop.addEventListener('click', () =>{
    scrollToElement("top");
})