export class CriaElemento {
    constructor() {
        this.historico = document.querySelector(".insert-transacao");
    }
    adicionaTransacao(nome, valor, contador) {
        return (this.historico.innerHTML += this.template(nome, valor, contador));
    }
    template(nome, valor, contador) {
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
    limpaFomrulario(nome, valor) {
        nome.value = "";
        valor.value = "";
        nome.focus();
    }
}
