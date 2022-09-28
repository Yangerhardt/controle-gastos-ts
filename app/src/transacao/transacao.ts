import { NovaTransacao } from "../interfaces/transacao-bloco.js";

export class Transacao {
  private transacoes: Array<NovaTransacao> =
    JSON.parse(localStorage.getItem("itens")) || [];
  public transacao: NovaTransacao;

  public adicionaNaLista(id: number, nome: string, valor: number) {
    this.transacao = { id, nome, valor };
    this.transacoes.push(this.transacao);

    return this.transacoes;
  }
}
