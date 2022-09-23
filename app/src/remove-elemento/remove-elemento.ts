import { AtualizarSaldo } from "../atualizar-saldo/atualizar-saldo.js";
import { NovaTransacao } from "../interfaces/transacao-bloco.js";
import { PlaceholderHistorico } from "./historico-placeholder.js";

export class RemoveElemento {
  private novoItem: HTMLElement;
  private atualizarSaldo = new AtualizarSaldo();
  private placeholder = new PlaceholderHistorico();

  constructor() {
    this.novoItem = document.querySelector(".transacao-container");
  }

  public removerItem(entrada: Array<any>) {
    this.novoItem.remove();

    this.removerArray(entrada);

    this.atualizarSaldo.atualiza(entrada);

    console.log(entrada);

    this.placeholder.definePlaceholder();
  }

  private removerArray(entrada: Array<NovaTransacao>) {
    entrada.forEach((elemento) => {
      entrada.splice(elemento.id, 1);
    });

    entrada.forEach((elemento, index) => {
      elemento.id = index;
    });
  }
}
