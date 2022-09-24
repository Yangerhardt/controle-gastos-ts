import { NovaTransacao } from "../interfaces/transacao-bloco.js";

export class Transacao {
  private transacoes: Array<NovaTransacao> = [];

  public adicionaNaLista(id: number, nome: string, valor: number) {
    const transacao = {id, nome, valor}
    this.transacoes.push(transacao);
    
    console.log(transacao);
    console.log(this.transacoes);    
    
    return this.transacoes;
  }
}
