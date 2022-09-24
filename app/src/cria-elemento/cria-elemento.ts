export class CriaElemento {
  private historico: HTMLElement;

  constructor() {
    this.historico = document.querySelector(".insert-transacao");
  }

  public adicionaTransacao(
    nome: string,
    valor: number,
    contador: number
  ): string {
    return (this.historico.innerHTML += this.template(nome, valor, contador));
  }

  private template(nome: string, valor: number, contador: number): string {
    return `
    <div class="transacao-container">
      <button class="deleta-btn ${contador}">x</button>
      <section class="${valor > 0 ? "transacao-pos" : "transacao-neg"}">
        <p>${nome}</p>
        <p class="valor-transacao">R$ ${valor}</p>
      </section>
    </div>
    `;
  }

  public limpaFomrulario(nome: HTMLInputElement, valor: HTMLInputElement) {
    nome.value = "";
    valor.value = "";
    nome.focus();
  }
}
