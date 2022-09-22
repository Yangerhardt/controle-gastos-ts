export class CriaElemento {
  private historico: HTMLElement;

  constructor() {
    this.historico = document.querySelector("#historico") as HTMLElement;
  }

  adicionaTransacao() {
    this.historico.appendChild();
  }

  template():string { return
    `
    <div class="transacao-container">
      <button class="deleta-btn">x</button>
      <section class="transacao-pos">
        <p>teste</p>
        <p class="valor-transacao">R$ 123</p>
      </section>
    </div>
    `
  }
}
