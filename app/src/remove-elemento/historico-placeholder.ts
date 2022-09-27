export class PlaceholderHistorico {
  private placeholderHistorico: HTMLElement;
  private deletaImagem: HTMLElement;
  private insertTransacoes: HTMLElement;

  constructor() {
    this.placeholderHistorico = document.querySelector(
      "#placeholder-historico"
    );
    this.deletaImagem = document.querySelector(".deleta-btn");
    this.insertTransacoes = document.querySelector(".insert-transacao");
  }

  definePlaceholder(): void {
    this.insertTransacoes.childElementCount == 0
      ? (this.placeholderHistorico.innerHTML = "Não há transações")
      : (this.placeholderHistorico.innerHTML = "");
  }
}
