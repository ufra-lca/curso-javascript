import "./main.css";

//CONTROLLER

import Carro from "./carro";
class App {
  constructor() {
    this.listaCarros = [];
    this.formElem = document.getElementById("add-form");
    this.ulElem = document.getElementById("lista-carro");
    this.id = 0;
    this.startApp();
    this.deleteCarro = this.deleteCarro.bind(this);
    this.editCarro = this.editCarro.bind(this);
  }

  //Inicio.
  startApp() {
    console.log("form", this.formElem);
    this.formElem.onsubmit = event => {
      this.clickCadastrar(event);
    };
    this.render();
  }
  clickCadastrar(event) {
    event.preventDefault();
    this.cadastroCarro();
  }

  //Deletar carro
  deleteCarro(id) {
    const carroToDelete = document.getElementById(`${id}`);
    if (carroToDelete) {
      carroToDelete.remove();
    }
    const idToDelete = this.listaCarros.findIndex(element => element.id === id);
    this.listaCarros.splice(idToDelete);
    console.log(this.listaCarros);
  }

  //Editar carro
  editCarro(id) {
    const carroToEdit = document.getElementById(`${id}`);
    if (carroToEdit) {
      let inputTextF = document.getElementById("fabricante");
      let fabricante = inputTextF.value;
      let inputTextM = document.getElementById("modelo");
      let modelo = inputTextM.value;
      let inputTextA = document.getElementById("ano");
      let ano = inputTextA.value;

      carroToEdit.childNodes[0].nodeValue = `${App.setModelo(
        modelo
      )} ${App.setFabricante(fabricante)} ${App.setAno(ano)}`;
    }
    const idToEdit = this.listaCarros.findIndex(element => element.id === id);
    this.listaCarros[idToEdit] = Carro;
    console.log(this.listaCarros);
  }

  //Pega informações dos input do cadastro 0.1v
  cadastroCarro() {
    let id = this.id;
    let inputTextF = document.getElementById("fabricante");
    let fabricante = inputTextF.value;
    let inputTextM = document.getElementById("modelo");
    let modelo = inputTextM.value;
    let inputTextA = document.getElementById("ano");
    let ano = inputTextA.value;

    this.listaCarros.push(new Carro(id, modelo, fabricante, ano));
    this.id = this.id + 1;
    this.render();
  }

  //Renderiza as informações.
  renderItemCarro(carro) {
    let liElement = document.createElement("li");
    liElement.setAttribute("id", `${carro.getId()}`);

    //criando paragrafo com o modelo.
    let pElementM = document.createElement("p");
    let textElementModelo = document.createTextNode(
      "Modelo: " + carro.getModelo()
    );
    pElementM.appendChild(textElementModelo);

    //criando paragrafo com o fabricante.
    let textElementFabricante = document.createTextNode(
      "Fabricante: " + carro.getFabricante()
    );
    let pElementF = document.createElement("p");
    pElementF.appendChild(textElementFabricante);

    //criando paragrafo com o ano.
    let textElementAno = document.createTextNode("Ano:" + carro.getAno());
    let pElementA = document.createElement("p");
    pElementA.appendChild(textElementAno);

    //criando botão delete
    const deleteButton = document.createElement("button");
    const deleteNode = document.createTextNode("Delete");
    deleteButton.appendChild(deleteNode);
    deleteButton.setAttribute("onclick", `deleteCarro(${carro.id})`);

    //Criando botão edit
    const editButton = document.createElement("button");
    const editNode = document.createTextNode("Edit");
    //const textSPace = document.createTextNode("    ");
    editButton.appendChild(editNode);
    editButton.setAttribute("onclick", `editCarro(${carro.id})`);
    console.log(editButton);

    //Juntando os paragrafos e fazendo uma lista.
    liElement.appendChild(pElementF);
    liElement.appendChild(pElementM);
    liElement.appendChild(pElementA);
    liElement.appendChild(editButton);
    liElement.appendChild(deleteButton);
    return liElement;
  }
  render() {
    this.ulElem.innerHTML = "";
    this.listaCarros.forEach(carro => {
      this.ulElem.appendChild(this.renderItemCarro(carro));
    });
  }
}
const app = new App();

window.app = app;

window.deleteCarro = app.deleteCarro;
window.editCarro = app.editCarro;
//window.carros = carro;
