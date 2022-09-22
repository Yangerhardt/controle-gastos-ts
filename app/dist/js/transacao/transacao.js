export class Transacao {
    constructor() {
        this.transacoes = [];
    }
    adicionaNaLista(id, nome, valor) {
        this.transacoes.push({ id, nome, valor });
        console.log(this.transacoes);
    }
}
