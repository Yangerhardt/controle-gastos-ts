export class Transacao {
    constructor() {
        this.transacoes = [];
    }
    adicionaNaLista(id, nome, valor) {
        this.transacao = { id, nome, valor };
        this.transacoes.push(this.transacao);
        console.log(this.transacao);
        console.log(this.transacoes);
        return this.transacoes;
    }
}
