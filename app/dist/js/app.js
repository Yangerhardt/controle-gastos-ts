import { AtualizarSaldo } from "./atualizar-saldo/atualizar-saldo.js";
import { CriaElemento } from "./cria-elemento/cria-elemento.js";
import { RemoveElemento } from "./remove-elemento/remove-elemento.js";
import { Transacao } from "./transacao/transacao.js";
let transacoes = [];
const form = document.querySelector(".form");
let nome = document.querySelector("#nome");
let valor = document.querySelector("#valor");
let placeholderHistorico = document.querySelector("#placeholder-historico");
const novoElemento = new CriaElemento();
const transacao = new Transacao();
const atualizaSaldo = new AtualizarSaldo();
let id = 0, contador = 0;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    placeholderHistorico.innerHTML = "";
    if (transacoes.length == 0) {
        contador = 0;
    }
    novoElemento.adicionaTransacao(nome.value, parseFloat(valor.value), contador++);
    transacoes = transacao.adicionaNaLista(id++, nome.value, parseFloat(valor.value));
    atualizaSaldo.atualiza(transacoes);
    novoElemento.limpaFomrulario(nome, valor);
    const deletaImagem = document.querySelectorAll(".deleta-btn");
    const removerElemento = new RemoveElemento();
    deletaImagem.forEach(elemento => elemento.addEventListener("click", () => {
        removerElemento.removerItem(transacoes, elemento);
        if (transacoes.length == 0) {
            id = 0;
        }
    }));
});
