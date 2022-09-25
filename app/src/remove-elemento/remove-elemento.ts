import { AtualizarSaldo } from "../atualizar-saldo/atualizar-saldo.js";
import { NovaTransacao } from "../interfaces/transacao-bloco.js";
import { PlaceholderHistorico } from "./historico-placeholder.js";

export class RemoveElemento {
  private novoItem;
  private atualizarSaldo = new AtualizarSaldo();
  private placeholder = new PlaceholderHistorico();

  constructor() {
    this.novoItem = document.querySelectorAll(".deleta-btn");
  }

  public removerItem(lista: Array<any>, divBotao: Element) {
    this.novoItem.forEach(elemento => {
      
      if(elemento  == divBotao) {
        elemento.parentElement.remove()
      };
    })

    this.removerArray(lista);    

    this.atualizarSaldo.atualiza(lista);
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
