export class AtualizarSaldo {
  private saldoFinal: number = 0;
  private receitaFinal: number = 0;
  private gastoFinal: number = 0;


  public atualiza(entrada: any[]) {
    entrada.forEach((elemento) => {
      this.saldoFinal += parseFloat(elemento.valor);
      if (elemento.valor > 0) {
        this.receitaFinal += parseFloat(elemento.valor)
      } else if (elemento.valor < 0) {
        this.gastoFinal += parseFloat(elemento.valor)
      }
    });

    document.querySelector(".saldo-num").innerHTML = `R$ ${this.saldoFinal}`;
    document.querySelector(".receita").innerHTML = `R$ ${this.receitaFinal}`;
    document.querySelector(".gasto").innerHTML = `R$ ${this.gastoFinal}`;
    localStorage.setItem("itens", JSON.stringify(entrada));
  }
}
