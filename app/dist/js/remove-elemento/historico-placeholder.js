export class PlaceholderHistorico {
    constructor() {
        this.placeholderHistorico = document.querySelector("#placeholder-historico");
        this.deletaImagem = document.querySelector(".deleta-btn");
        this.insertTransacoes = document.querySelector(".insert-transacao");
    }
    definePlaceholder() {
        if (this.insertTransacoes.childElementCount == 0) {
            this.placeholderHistorico.innerHTML = "Não há transações";
        }
        else {
            this.placeholderHistorico.innerHTML = "";
        }
    }
}
