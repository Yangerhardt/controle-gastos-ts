import { AtualizarSaldo } from "./atualizar-saldo/atualizar-saldo.js";
import { CriaElemento } from "./cria-elemento/cria-elemento.js";
import { PlaceholderHistorico } from "./remove-elemento/historico-placeholder.js";
import { RemoveElemento } from "./remove-elemento/remove-elemento.js";
import { Transacao } from "./transacao/transacao.js";
import { ValidaTransacao } from "./valida-transacao/valida-transacao.js";
let transacoes = JSON.parse(localStorage.getItem("itens")) || [];
const form = document.querySelector(".form");
let nome = document.querySelector("#nome");
let valor = document.querySelector("#valor");
let erro = document.querySelector(".erro");
const novoElemento = new CriaElemento();
const transacao = new Transacao();
const atualizaSaldo = new AtualizarSaldo();
const placeholderHistorico = new PlaceholderHistorico();
let id = 0;
transacoes.forEach((transacao) => {
    novoElemento.adicionaTransacao(transacao.nome, transacao.valor);
    RemoverElemento();
});
atualizaSaldo.atualiza(transacoes);
placeholderHistorico.definePlaceholder();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (ValidaTransacao.validarTransacao(valor.value)) {
        erro.innerHTML = "Valor inválido";
    }
    else {
        erro.innerHTML = "";
        if (valor.value.indexOf(",") > 0) {
            const valorCorreto = valor.value.replace(",", ".");
            valor.value = valorCorreto;
        }
        AdicionarTransacao();
        placeholderHistorico.definePlaceholder();
    }
});
function AdicionarTransacao() {
    novoElemento.adicionaTransacao(nome.value, parseFloat(valor.value));
    transacoes = transacao.adicionaNaLista(id++, nome.value, parseFloat(valor.value));
    const atualizaSaldo = new AtualizarSaldo();
    atualizaSaldo.atualiza(transacoes);
    novoElemento.limpaFomrulario(nome, valor);
    RemoverElemento();
}
function RemoverElemento() {
    const deletaImagem = document.querySelectorAll(".deleta-btn");
    const removerElemento = new RemoveElemento();
    deletaImagem.forEach((elemento) => elemento.addEventListener("click", () => {
        removerElemento.removerItem(transacoes, elemento);
        if (transacoes.length == 0) {
            id = 0;
        }
    }));
}
