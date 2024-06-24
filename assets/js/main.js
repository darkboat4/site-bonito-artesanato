
const menuCarrinho = document.querySelector('.containerMenuCarrinho');
const pagProds = document.querySelector('.contentProdutos');
const mainFooter = document.getElementById('.mainFooter');
const carrosel = document.querySelector('.carrossel');
const menuHeader = document.querySelector('.menu');
const header = document.querySelector('.content');
const bode = document.querySelector('body');


let divContente = document.querySelector('#catchMe');
let i = 0;
let trueOrFalse = 1;
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
        trueOrFalse++;
        const carrinhoMenu = document.querySelector('.containerMenuCarrinho');
        let allProdsinCarrinho = carrinhoMenu.querySelectorAll('.produtoInCarrinho');

        if(trueOrFalse % 2 === 0){
            alert('true')
        }
        else{
            alert('false')
        }

        console.log(allProdsinCarrinho)
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
    console.log(element)

    if(element.classList.contains('vela1')){
        let vela = spawnDiv('./assets/img/quadradas/1.jpeg', 'VELA 1');
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela2')){
        let vela = spawnDiv('./assets/img/quadradas/2.jpeg', 'VELA 2');
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela3')){
        let vela = spawnDiv('./assets/img/quadradas/3.jpeg', 'VELA 3');
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela4')){
        let vela = spawnDiv('./assets/img/quadradas/4.jpeg', 'VELA 4');
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela5')){
        let vela = spawnDiv('./assets/img/quadradas/5.jpeg', 'VELA 5');
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela6')){
        let vela = spawnDiv('./assets/img/quadradas/6.jpeg', 'VELA 6');
        adcOnCarrinho(vela)
    }

    if(element.classList.contains('vela7')){
        let vela = spawnDiv('./assets/img/quadradas/7.jpg', 'VELA 7');
        adcOnCarrinho(vela)
    }

    
});

function adcOnCarrinho(arg){
    arg.setAttribute('class', 'produtoInCarrinho');
    document.querySelector('.containerMenuCarrinho').insertAdjacentElement('afterbegin', arg)

    //para o footer de "Comprar tudo" nao se repita ao adicionar um novo item no carrinho:
    if(i === 0){
        let foot = criaFooterMenu();
        foot.setAttribute('class', 'sectCarrinhoAll')

        menuCarrinho.appendChild(foot)
        i++;
    }
}

function spawnDiv(img, p){
    let novaDiv = document.createElement('div');
        let novaImg = document.createElement('img');
        novaImg.setAttribute('src', img);
        let sect = document.createElement('section');
        let novoP = document.createElement('p');
        novoP.innerText = p;
        novaDiv.appendChild(novaImg);
        sect.appendChild(novoP);
        novaDiv.appendChild(sect)
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

const tchauBroxa = () => document.querySelector('#inputContato').value = null;
