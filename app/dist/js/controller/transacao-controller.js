import { CriaElemento } from "../cria-elemento/cria-elemento.js";
export class TransacaoController {
    constructor() {
        this.novoElemento = new CriaElemento;
        this.nome = document.querySelector("#nome");
        this.valor = document.querySelector("#valor");
    }
}
