const contentPagComprar = document.querySelector('#contentCompras');
const bgTrans = document.querySelector('#pagCompras');
const bode2 = document.querySelector('body');


document.addEventListener('click', (e) => {
    let element = e.target;

    if(element.classList.contains('comprarCarrinho')) {
        bgTrans.setAttribute('class', 'activeCompra');
        contentPagComprar.removeAttribute('class');

        let acomulador = 0;

        let allComprs = document.querySelector('.containerMenuCarrinho').querySelectorAll('.produtoInCarrinho');
        for(let i of allComprs){
            let allValues = Number(i.getAttribute('value'));
            acomulador += allValues;

            i.removeAttribute('class');
            i.setAttribute('class', 'gridContenteComprs')
            document.querySelector('.produtosQueSeraoComprados').appendChild(i)         
        }

        document.querySelector('#total').innerHTML = 'Total: ' + acomulador;        

        bode2.style.overflowY = 'hidden';
    }

    if(element.classList.contains('esvaziarCarrinho')) {
        efeitoCarrinhoFechar();


        let allComprs = document.querySelector('.containerMenuCarrinho').querySelectorAll('.produtoInCarrinho')

        for(let i of allComprs){
            document.querySelector('.containerMenuCarrinho').removeChild(i)
            document.querySelector('.sectCarrinhoAll').setAttribute('id', 'hidden')
        }
    }

    if(element.classList.contains('confirm')){
        let s = document.querySelector('#swichPagamento');

        switch(s.value){
            case '1':
                document.querySelector('.ifVista').removeAttribute('id');
                document.querySelector('.ifParcelado').setAttribute('id', 'hidden');

                let acomulador = acumulaValues();

                document.querySelector('#total').innerHTML = 'Total: ' + acomulador;
                document.querySelector('#totalWithVista').innerHTML = acomulador - (acomulador * 0.05)
            break;

            case '2':
                document.addEventListener('click', (e) => {
                    let elem = e.target;

                    let valortotal = acumulaValues();

                    if(elem.classList.contains('confirmParcela')){
                        let swParcel = document.querySelector('.swichValParcela');
                        switch(swParcel.value){
                            case '2':   
                                document.querySelector('#parcelaValue').innerHTML = parseInt((valortotal / 2) + 10);
                                document.querySelector('#totalWithParcela').innerHTML = parseInt(valortotal + 20);

                            break

                            case '3':
                                document.querySelector('#parcelaValue').innerHTML = parseInt((valortotal / 3) + 10);
                                document.querySelector('#totalWithParcela').innerHTML = parseInt(valortotal + 30);
                            break
                        }
                    }

                });







                document.querySelector('.ifParcelado').removeAttribute('id')
                document.querySelector('.ifVista').setAttribute('id', 'hidden')

            break;
        }
    }
})

const closeComprs = () => { 
    document.querySelector('#pagCompras').removeAttribute('class');
    document.querySelector('#pagCompras').setAttribute('class', 'hidden');
    bode.removeAttribute('style');
}

function compraConfirmada(){
    alert('Compra Efetuada! Obrigado:)');
}

function acumulaValues(){
    let acomulador = 0;

    let contentComprs = document.querySelector('.produtosQueSeraoComprados')
    let allCompras = contentComprs.querySelectorAll('.gridContenteComprs');
    for(let i of allCompras){
        let allValues = Number(i.getAttribute('value'));

        acomulador += allValues;
    }

    return acomulador
}