export class PlaceholderHistorico {
  private placeholderHistorico: HTMLElement;
  private deletaImagem: HTMLElement;

  constructor() {
    this.placeholderHistorico = document.querySelector(
      "#placeholder-historico"
    );
    this.deletaImagem = document.querySelector(".deleta-btn");
  }


  definePlaceholder(): void {
    if (!this.deletaImagem) {
      // testar (!this.deletaImagem)
      this.placeholderHistorico.innerHTML = "Não há transações";
    } else {
      this.placeholderHistorico.innerHTML = ""
    }
  }
}