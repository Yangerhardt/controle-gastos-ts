import { AtualizarSaldo } from "../atualizar-saldo/atualizar-saldo.js";
import { PlaceholderHistorico } from "./historico-placeholder.js";

export class RemoveElemento {
  private novoItem: NodeListOf<Element>;
  private atualizarSaldo = new AtualizarSaldo();
  private placeholder = new PlaceholderHistorico();


  public removerItem(lista: Array<any>, divBotao: Element) {
    this.novoItem = document.querySelectorAll(".deleta-btn")
    this.novoItem.forEach((elemento, index) => {
      if (elemento == divBotao) {
        elemento.parentElement.remove();
        lista.splice(index, 1)
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
