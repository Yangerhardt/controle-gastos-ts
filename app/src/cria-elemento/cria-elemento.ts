export class CriaElemento {
  private historico: HTMLElement;

  constructor() {
    this.historico = document.querySelector(".insert-transacao");
  }

  public adicionaTransacao(nome: string, valor: number) {
      this.historico.innerHTML += this.template(nome, valor);
  }

  private template(nome: string, valor: number): string {
    
    return `
    <div class="transacao-container">
      <button class="deleta-btn">x</button>
      <section class="${valor > 0 ? "transacao-pos" : "transacao-neg"}">
        <p>${nome}</p>
        <p class="valor-transacao">R$ ${valor}</p>
      </section>
    </div>
    `;
  }

  public limpaFomrulario(nome: HTMLInputElement, valor: HTMLInputElement) {
    nome.value = ""
    valor.value = ""
    nome.focus()
  }

}
