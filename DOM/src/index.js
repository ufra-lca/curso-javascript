//CONTROLLER
import Carro from './carro';
class App {
    constructor() {
        this.listaCarros = [];
    };

    //Inicio.
    startApp() {
        this.exibirCarro();
        this.render();
    }

    //Pega as informações add e manda para a lista de objetos.
    exibirCarro() {
        let c1 = new Carro('uno', 'fiat', '2000');
        let c2 = new Carro('gol', 'ww', '1992');
        this.listaCarros.push(c1);
        this.listaCarros.push(c2);
    }

    //Adiciona informações a serem cadastradas.
    cadastroCarro(){

    }

    //Renderiza as informações.
    render() {

        let ulElem = document.getElementById('lista-carro');
        ulElem.setAttribute('value', '');

        this.listaCarros.forEach(carro => {

            let liElement = document.createElement('li');

            let modelo = carro.getModelo();

            let fabricante = carro.getFabricante();
            
            let ano = carro.getAno();


            //criando paragrafo com o modelo.
            let pElementM = document.createElement('p');
            let textElementModelo = document.createTextNode('Modelo: ' + modelo);
            pElementM.appendChild(textElementModelo);

            //criando paragrafo com o fabricante.
            let textElementFabricante = document.createTextNode('Fabricante: ' + fabricante);
            let pElementF = document.createElement('p');
            pElementF.appendChild(textElementFabricante);

            //criando paragrafo com o ano.
            let textElementAno = document.createTextNode('Ano:'+ ano);
            let pElementA = document.createElement('p');
            pElementA.appendChild(textElementAno);

            //Juntando os paragrafos e fazendo uma lista.
            liElement.appendChild(pElementF);
            liElement.appendChild(pElementM);
            liElement.appendChild(pElementA);
            ulElem.appendChild(liElement);




        });


    }


}
const app = new App();
app.startApp();