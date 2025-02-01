
const menuCarrinho = document.querySelector('.containerMenuCarrinho');
const pagProds = document.querySelector('.contentProdutos');
const mainFooter = document.getElementById('.mainFooter');
const carrosel = document.querySelector('.carrossel');
const menuHeader = document.querySelector('.menu');
const header = document.querySelector('.content');
const bode = document.querySelector('body');


let divContente = document.querySelector('#catchMe');
let i = 0;
let trueOrFalse = 2;
// Captura todo evento de clique dos objetos que estao na HEADER fixada:

header.addEventListener('click', (e) => {
    let element = e.target;        

    if(element.classList.contains('contato')) { 
        window.scroll(0, 10000);
    } 
    
    if(element.classList.contains('produtos')) { 
        openProds(); //abre a "página" que contem todos os produtos

        let allProds = pagProds.querySelectorAll('.gridContenteProds'); //AO USAR QUERYSELECTORALL UMA NODELIST É CRIADA COM TUSO AQUILO Q FOI SELECIONADO.
        for(let i of allProds){
            i.removeAttribute('id'); //PARA REMOVER O ID QUE ESCONDE TODA A GRID EU CRIO UM "FOR OF" PARA A CADA VOLTA RETIRAR O ATRIBUTO ID DE CADA UM.
        }
    } 


    if(element.classList.contains('carrinho')) { 
        trueOrFalse++

        if(trueOrFalse % 2 === 0){
            let allComprs = document.querySelector('.containerMenuCarrinho').querySelectorAll('.produtoInCarrinho')
            for(let i of allComprs){
                i.removeAttribute('id')
            }

            efeitoCarrinhoAbrir();    
            openCloseFooterMenu(true, false);
        }
        else{
           

            let allComprs = document.querySelector('.containerMenuCarrinho').querySelectorAll('.produtoInCarrinho')
            for(let i of allComprs){
                i.setAttribute('id', 'hidden')
            }

            efeitoCarrinhoFechar();
            openCloseFooterMenu(false, true);
        }
    } 
    
});

function closeProds(){
    let ativar = document.querySelector('#catchMe');
    ativar.removeAttribute('class');

    let contentMain = document.querySelector('#contentMain');
    contentMain.removeAttribute('class')

    bode.style.overflowY = 'scroll';
    
    let allProds = pagProds.querySelectorAll('.gridContenteProds');
    for(let i of allProds){
        i.setAttribute('id', 'prodsHIDDEN')
    }
}

function openProds(){
    let ativar = document.querySelector('#catchMe');
    ativar.setAttribute('class', 'activeProd');

    let contentMain = document.querySelector('#contentMain');
    contentMain.setAttribute('class', 'mainContentProd')


    bode.style.overflowY = 'hidden';
}

//------------------------------------------------------------------------------

document.addEventListener('click', (e) => {
    let element = e.target;

    if(element.classList.contains('vela1')){
        let vela = spawnDiv('./assets/img/quadradas/1.jpeg', 'VELA 1', 'R$15.00', 15);
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela2')){
        let vela = spawnDiv('./assets/img/quadradas/2.jpeg', 'Vela lata grande', 'R$36.00', 36);
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela3')){
        let vela = spawnDiv('./assets/img/quadradas/3.jpeg', 'Vela pote Lavanda', 'R$32.00', 32);
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela4')){
        let vela = spawnDiv('./assets/img/quadradas/4.jpeg', 'Vela lata pequena', 'R$30.00', 30);
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela5')){
        let vela = spawnDiv('./assets/img/quadradas/5.jpeg', 'Vela Coruja', 'R$15.00', 15);
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela6')){
        let vela = spawnDiv('./assets/img/quadradas/6.jpeg', 'Vela taça', 'R$40.00', 40);
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela7')){
        let vela = spawnDiv('./assets/img/quadradas/7.jpg', 'Vela Cappucino', 'R$25.00', 25);
        adcOnCarrinho(vela)
    }

    
});

function adcOnCarrinho(arg){
    arg.setAttribute('class', 'produtoInCarrinho');
    document.querySelector('.containerMenuCarrinho').insertAdjacentElement('afterbegin', arg);
    efeitoCarrinhoAbrir();   

    //para o footer de "Comprar tudo" nao se repita ao adicionar um novo item no carrinho:
    if(i === 0){
        let foot = criaFooterMenu();
        foot.setAttribute('class', 'sectCarrinhoAll')

        menuCarrinho.appendChild(foot)
        i++;
    }
}

function spawnDiv(img, p, precoString, precoValueReal){
    let novaDiv = document.createElement('div');
    let novaImg = document.createElement('img');
    novaImg.setAttribute('src', img);
    let sect = document.createElement('section');
    let novoP = document.createElement('h4');
    let preco = document.createElement('p')
    
    preco.innerText = precoString;
    novoP.innerText = p;

    novaDiv.appendChild(novaImg);
    novaDiv.setAttribute('value', precoValueReal)
    sect.appendChild(novoP);
    sect.appendChild(preco);
    novaDiv.appendChild(sect);
    return novaDiv;
}

// CRIO O FOOTER(RODAPÉ) DA ABA DO CARRINHO

function criaFooterMenu() {
    const sect = document.createElement('section');
        const btCompre = criaBtn();
        const btEsvazie = criaBtn();

        btCompre.innerText = 'Compre tudo!';
        btCompre.setAttribute('class', 'comprarCarrinho');

        btEsvazie.innerText = 'Esvaziar';
        btEsvazie.setAttribute('class', 'esvaziarCarrinho')
        
        sect.appendChild(btCompre);
        sect.appendChild(btEsvazie);
    return sect;
}

const criaBtn = () => bt = document.createElement('button');

const apagaInput = () => document.querySelector('#inputContato').value = null;

function openCloseFooterMenu(abrir, fechar){
    if(abrir){
        document.querySelector('.sectCarrinhoAll').removeAttribute('id')
    }
    if(fechar){
        document.querySelector('.sectCarrinhoAll').setAttribute('id', 'hidden')
    }
}

// -------------------------------------------------styles

function efeitoCarrinhoAbrir(){
    let carrinhoStyleWJS = document.querySelector('.carrinho');

    carrinhoStyleWJS.style.backgroundColor = '#c72923';
    carrinhoStyleWJS.style.borderRadius = '10px';
    carrinhoStyleWJS.style.padding = '10px';
    carrinhoStyleWJS.style.transition = '0.5';
}

function efeitoCarrinhoFechar(){
    let carrinhoStyleWJS = document.querySelector('.carrinho');

    carrinhoStyleWJS.style.backgroundColor = '#78100C';
    carrinhoStyleWJS.style.borderRadius = '0px';
    carrinhoStyleWJS.style.padding = '0px';
    carrinhoStyleWJS.style.transition = '0.5';
}