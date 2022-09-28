import { AtualizarSaldo } from "../atualizar-saldo/atualizar-saldo.js";
import { PlaceholderHistorico } from "./historico-placeholder.js";
export class RemoveElemento {
    constructor() {
        this.atualizarSaldo = new AtualizarSaldo();
        this.placeholder = new PlaceholderHistorico();
    }
    removerItem(lista, divBotao) {
        this.novoItem = document.querySelectorAll(".deleta-btn");
        this.novoItem.forEach((elemento, index) => {
            if (elemento == divBotao) {
                elemento.parentElement.remove();
                lista.splice(index, 1);
            }
        });
        lista.forEach((elemento, index) => {
            elemento.id = index;
        });
        this.atualizarSaldo = new AtualizarSaldo();
        this.atualizarSaldo.atualiza(lista);
        this.placeholder.definePlaceholder();
    }
}
