export class PlaceholderHistorico {
    constructor() {
        this.placeholderHistorico = document.querySelector("#placeholder-historico");
        this.deletaImagem = document.querySelector(".deleta-btn");
    }
    definePlaceholder() {
        if (!this.deletaImagem) {
            this.placeholderHistorico.innerHTML = "Não há transações";
        }
        else {
            this.placeholderHistorico.innerHTML = "";
        }
    }
}
