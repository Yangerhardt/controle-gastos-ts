export class Transacao {
    constructor() {
        this.transacoes = [];
    }
    adicionaNaLista(id, nome, valor) {
        this.transacao = { id, nome, valor };
        this.transacoes.push(this.transacao);
        return this.transacoes;
    }
}
