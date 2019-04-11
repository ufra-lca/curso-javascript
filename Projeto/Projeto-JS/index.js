let readline = require('readline-sync');

class Carro {
  constructor(modelo, fabricante, ano) {
    this._modelo = modelo;
    this._fabricante = fabricante;
    this._ano = ano;
  }

  exibirDadosCarro() {
    console.log("Modelo: ", this._modelo);
    console.log("Fabricante: ", this._fabricante);
    console.log("Ano: ", this._ano, "\n");
  };
  setModelo (modelo){this._modelo = modelo}
  setFabricante (fabricante){this._fabricante = fabricante}
  setAno (ano){this._ano = ano}
  getModelo (){return this._modelo}
  getFabricante (){return this._fabricante}
  getAno (){return this._ano}

  }



class Main {
  cadastrar(listaCarro) {
    console.log('Cadastro:');

    let modelo = readline.question('Qual o modelo?');
    let fabricante = readline.question('Qual o fabricante?');
    let ano = readline.question('Qual o ano?');

    let carro = new Carro(modelo, fabricante, ano);

    listaCarro.push(carro);
    console.log('Dados cadastrados com sucesso!')
  }
  exibirCarros(listaCarro) {
    listaCarro.map((carro, idex) => {
      console.log("ID", idex);
      carro.exibirDadosCarro()
    });

  }
  editarCarro(listaCarro) {
    this.exibirCarros(listaCarro);
    let id = parseInt(readline.question('Digite o ID para editar informações '), 10);
    let res = -1;
    while (res != 0){
      console.log('O que deseja editar?');
      console.log('0- Sair \n1- Editar Modelo \n2- Editar Fabricante \n3- Editar Ano');
      res = parseInt(readline.question(':> '))
      if(res == 0){
        console.log('---------------------------------------------------------------');
      }else if(res == 1){
        let modelo = readline.question('Qual o modelo?');
        const carro = listaCarro[id];
        carro.setModelo(modelo);
        console.log('Mudança efetuada com sucesso!')
        res = 0;
      }else if(res == 2){
        let fabricante = readline.question('Qual o fabricante?');
        const carro = listaCarro[id];
        carro.setFabricante(fabricante);
        console.log('Mudança efetuada com sucesso!')
        res = 0;
      }else if(res == 3){
        let ano = readline.question('Qual o ano?');
        const carro = listaCarro[id];
        carro.setAno(ano);
        console.log('Mudança efetuada com sucesso!')
        res = 0;
      }
      console.log('ok',res);
    }
    
    
    
    
  }

  mainStart() {
    let listaCarro = [];
    let op = 1;

    while (op != 0) {
      console.log('0- Sair \n1- cadastrar\n2- Exibir Carros\n3- Editar Carros\t');
      op = readline.question(':> ');

      if (op == 1) {
        this.cadastrar(listaCarro);

      } else if (op == 2) {
        this.exibirCarros(listaCarro);
      } else if (op == 3) {
        this.editarCarro(listaCarro);
      }
    }
  }
}

const main = new Main();
main.mainStart();
