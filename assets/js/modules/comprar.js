const contentPagComprar = document.querySelector('#contentCompras');
const bgTrans = document.querySelector('#pagCompras');
const bode2 = document.querySelector('body');


document.addEventListener('click', (e) => {
    let element = e.target;
    console.log(element)

    if(element.classList.contains('comprarCarrinho')) {
        bgTrans.setAttribute('class', 'activeCompra');
        contentPagComprar.removeAttribute('class');

        bode2.style.overflowY = 'hidden';
    }
})