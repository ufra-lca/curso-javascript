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
    getFabricante(){
        return this._fabricante;
    }
    setFabricante(fabricante){
        this._fabricante = fabricante;
    }
    getAno(){
        return this._ano;
    }
    setAno(ano){
        this._ano = ano;
    }
}