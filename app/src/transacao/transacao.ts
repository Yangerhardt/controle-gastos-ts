import { CriaElemento } from "../cria-elemento/cria-elemento.js";

export class Transacao {
  private transacoes: Array<any> = [];
  constructor(public id: number, public nome: string, public valor: number) {}

  public adiciona(id: number, nome: string, valor: number) {
    this.transacoes.push({id, nome, valor})
    
    const criaElemento = new CriaElemento
  }
}
