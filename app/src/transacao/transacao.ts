export class Transacao {
  private transacoes: Array<any> = [];
  public id: number;
  public nome: string;
  public valor: number;

  public adicionaNaLista(id: number, nome: string, valor: number) {
    this.transacoes.push({ id, nome, valor });
    console.log(this.transacoes);
  }
}
