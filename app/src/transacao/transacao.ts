import { NovaTransacao } from "../interfaces/transacao-bloco.js";

export class Transacao {
  private transacoes: Array<NovaTransacao> = [];
  public transacao: NovaTransacao

  public adicionaNaLista(id: number, nome: string, valor: number) {
    this.transacao = {id, nome, valor}
    this.transacoes.push(this.transacao);
    
    console.log(this.transacao);
    console.log(this.transacoes);    
    
    return this.transacoes;
  }
}
