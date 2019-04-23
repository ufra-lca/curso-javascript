export default class Carro{
    constructor(modelo,fabricante, ano){
        this._modelo = modelo;
        this._fabricante = fabricante;
        this._ano = ano;
    }
    getModelo(){
        return this._modelo;
    }
    setModelo(modelo){
        this._modelo = modelo;
    }

}