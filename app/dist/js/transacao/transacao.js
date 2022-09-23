export class Transacao {
    constructor() {
        this.transacoes = [];
    }
    adicionaNaLista(id, nome, valor) {
        const transacao = { id, nome, valor };
        this.transacoes.push(transacao);
        console.log(transacao);
        console.log(this.transacoes);
        return this.transacoes;
    }
}
