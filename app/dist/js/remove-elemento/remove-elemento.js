import { AtualizarSaldo } from "../atualizar-saldo/atualizar-saldo.js";
import { PlaceholderHistorico } from "./historico-placeholder.js";
export class RemoveElemento {
    constructor() {
        this.atualizarSaldo = new AtualizarSaldo();
        this.placeholder = new PlaceholderHistorico();
        this.novoItem = document.querySelectorAll(".deleta-btn");
    }
    removerItem(lista, divBotao) {
        this.novoItem.forEach(elemento => {
            if (elemento == divBotao) {
                elemento.parentElement.remove();
            }
            ;
        });
        this.removerArray(lista);
        this.atualizarSaldo.atualiza(lista);
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
