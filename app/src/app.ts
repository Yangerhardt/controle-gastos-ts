import { AtualizarSaldo } from "./atualizar-saldo/atualizar-saldo.js";
import { CriaElemento } from "./cria-elemento/cria-elemento.js";
import { RemoveElemento } from "./remove-elemento/remove-elemento.js";
import { Transacao } from "./transacao/transacao.js";

let transacoes: Array<any> =
  /* JSON.parse(localStorage.getItem("itens")) || */ [];
const form: HTMLElement = document.querySelector(".form");
let nome: HTMLInputElement = document.querySelector("#nome");
let valor: HTMLInputElement = document.querySelector("#valor");
let placeholderHistorico: HTMLElement = document.querySelector("#placeholder-historico");
const novoElemento = new CriaElemento();
const transacao = new Transacao();
const atualizaSaldo = new AtualizarSaldo();
let id = 0

form.addEventListener("submit", (event) => {
  event.preventDefault();
  placeholderHistorico.innerHTML = "";

  novoElemento.adicionaTransacao(nome.value, parseFloat(valor.value));

  transacoes = transacao.adicionaNaLista(
    id++,
    nome.value,
    parseFloat(valor.value)
  );


  // O PROBLEMA AQUI ESTÁ EM QUE O SALDO ESTÁ SENDO EXIBIDO DUAS VEZES
  atualizaSaldo.atualiza(transacoes);
  novoElemento.limpaFomrulario(nome, valor);

  const deletaImagem = document.querySelectorAll(".deleta-btn");
  
  const removerElemento = new RemoveElemento()
  deletaImagem.forEach(elemento => elemento.addEventListener("click", () => {
    removerElemento.removerItem(transacoes, elemento)
    
    if (transacoes.length == 0) {
      id = 0
    }
  }))
});
