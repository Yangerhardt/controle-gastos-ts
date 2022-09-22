import { CriaElemento } from "./cria-elemento/cria-elemento.js";
import { Transacao } from "./transacao/transacao.js";
const form = document.querySelector(".form");
let nome = document.querySelector("#nome");
let valor = document.querySelector("#valor");
const novoElemento = new CriaElemento();
const transacao = new Transacao();
let id = 0;
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    novoElemento.adicionaTransacao(nome.value, parseFloat(valor.value));
    novoElemento.limpaFomrulario(nome, valor);
    transacao.adicionaNaLista(id++, nome.value, parseFloat(valor.value));
});
