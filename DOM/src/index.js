//CONTROLLER
import Carro from './carro';
class App {
    constructor(){
        this.listaCarros = [];
    };
    startApp(){
        this.adicionaCarro();
        this.render();
    }

    adicionaCarro(){
        let c1 = new Carro('uno', 'fiat','2000');
        let c2 = new Carro('gol','ww', '1992');
        this.listaCarros.push(c1);
        this.listaCarros.push(c2);
    }

    render(){

        let ulElem = document.getElementById('lista-carro');
        ulElem.setAttribute('value', '');
        
        this.listaCarros.forEach( carro => { 
            let liElement = document.createElement('li');
            let modelo = carro.getModelo();
            
            let textElent = document.createTextNode('modelo: ' + modelo);
            liElement.appendChild(textElent);
            ulElem.appendChild(liElement);
            
        });


    }


}
const app = new App();
app.startApp();