import { AtualizarSaldo } from "./atualizar-saldo/atualizar-saldo.js";
import { CriaElemento } from "./cria-elemento/cria-elemento.js";

import { RemoveElemento } from "./remove-elemento/remove-elemento.js";
import { Transacao } from "./transacao/transacao.js";

let transacoes = JSON.parse(localStorage.getItem("itens")) || [];
const form = document.querySelector(".form");
let nome: HTMLInputElement = document.querySelector("#nome");
let valor: HTMLInputElement = document.querySelector("#valor");
let placeholderHistorico: HTMLElement = document.querySelector(
  "#placeholder-historico"
);
const novoElemento = new CriaElemento();
const transacao = new Transacao();
const atualizaSaldo = new AtualizarSaldo();
let id = 0;

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  placeholderHistorico.innerHTML = "";

  novoElemento.adicionaTransacao(nome.value, valor.valueAsNumber);

  transacoes = transacao.adicionaNaLista(
    id++,
    nome.value,
    valor.valueAsNumber
  );

  atualizaSaldo.atualiza(transacoes);
  novoElemento.limpaFomrulario(nome, valor);

  const deletaImagem: HTMLElement = document.querySelector(".deleta-btn");
  const removerElemento = new RemoveElemento();
  deletaImagem.addEventListener("click", () =>
    removerElemento.removerItem(transacoes)
  );

});
