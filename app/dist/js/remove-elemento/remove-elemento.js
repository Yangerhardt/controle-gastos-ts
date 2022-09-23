import { AtualizarSaldo } from "../atualizar-saldo/atualizar-saldo.js";
import { PlaceholderHistorico } from "./historico-placeholder.js";
export class RemoveElemento {
    constructor() {
        this.atualizarSaldo = new AtualizarSaldo();
        this.placeholder = new PlaceholderHistorico();
        this.novoItem = document.querySelector(".transacao-container");
    }
    removerItem(entrada) {
        this.novoItem.remove();
        this.removerArray(entrada);
        this.atualizarSaldo.atualiza(entrada);
        console.log(entrada);
        this.placeholder.definePlaceholder();
    }
    removerArray(entrada) {
        entrada.forEach((elemento) => {
            entrada.splice(elemento.id, 1);
        });
        entrada.forEach((elemento, index) => {
            elemento.id = index;
        });
    }
}
