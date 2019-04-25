//CONTROLLER
import Carro from './carro';
class App {
    constructor() {
        this.listaCarros = [];
        this.formElem = document.getElementById("add-form");
        this.ulElem = document.getElementById("lista-carro")
        this.startApp();
        
    };

    //Inicio.
    startApp (){
        //this.exibirCarro();
        console.log("form",this.formElem);
        this.formElem.onsubmit = event => {
            this.clickCadastrar(event);
        }
        this.render();
    }
    clickCadastrar(event) {
        event.preventDefault();
        this.cadastroCarro();

    }
    //Pega as informações add e manda para a lista de objetos 0.1v
    exibirCarro() {
        let c1 = new Carro('uno', 'fiat', '2000');
        let c2 = new Carro('gol', 'ww', '1992');
        let c3 = new Carro('fiat','uno','2008')
        this.listaCarros.push(c1);
        this.listaCarros.push(c2);
        this.listaCarros.push(c3);
    }

    //Pega informações dos input do cadastro 0.1v
    cadastroCarro() {
        let inputTextF = document.getElementById('fabricante');
        let fabricante = inputTextF.value;
        let inputTextM = document.getElementById('modelo');
        let modelo = inputTextM.value;
        let inputTextA = document.getElementById('ano');
        let ano = inputTextA.value;
    
        this.listaCarros.push(new Carro(modelo ,fabricante,ano));
        console.log(this.listaCarros);
        this.render();
        
    }

    //Renderiza as informações.
    renderItemCarro(carro){
        let liElement = document.createElement('li');

        //criando paragrafo com o modelo.
        let pElementM = document.createElement('p');
        let textElementModelo = document.createTextNode('Modelo: ' + carro.getModelo());
        pElementM.appendChild(textElementModelo);

        //criando paragrafo com o fabricante.
        let textElementFabricante = document.createTextNode('Fabricante: ' + carro.getFabricante());
        let pElementF = document.createElement('p');
        pElementF.appendChild(textElementFabricante);

        //criando paragrafo com o ano.
        let textElementAno = document.createTextNode('Ano:' + carro.getAno());
        let pElementA = document.createElement('p');
        pElementA.appendChild(textElementAno);

        //Juntando os paragrafos e fazendo uma lista.
        liElement.appendChild(pElementF);
        liElement.appendChild(pElementM);
        liElement.appendChild(pElementA);
        return liElement;

    }
    render () {
        this.ulElem.innerHTML = '';
        this.listaCarros.forEach(carro => { 
            this.ulElem.appendChild(this.renderItemCarro(carro));
        });
        
    }
}
const app = new App();



window.app = app;
/*window.deleteCarro = deleteCarro;
window.editCarro = editCarro;
window.carros = carros;*/
