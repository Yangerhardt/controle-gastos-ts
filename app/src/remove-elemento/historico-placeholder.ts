export class PlaceholderHistorico {
  private placeholderHistorico: HTMLElement;
  private deletaImagem: HTMLElement;
  private insertTransacoes: HTMLElement

  constructor() {
    this.placeholderHistorico = document.querySelector(
      "#placeholder-historico"
    );
    this.deletaImagem = document.querySelector(".deleta-btn");
    this.insertTransacoes = document.querySelector(".insert-transacao")
  }


  definePlaceholder(): void {
    if (this.insertTransacoes.childElementCount == 0 ) {
      // testar (!this.deletaImagem)
      this.placeholderHistorico.innerHTML = "Não há transações";
    } else {
      this.placeholderHistorico.innerHTML = ""
    }
  }
}