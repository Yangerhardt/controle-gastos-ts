export class AtualizarSaldo {
    constructor() {
        this.saldoFinal = 0;
        this.receitaFinal = 0;
        this.gastoFinal = 0;
    }
    atualiza(entrada) {
        entrada.forEach((elemento) => {
            this.saldoFinal += parseFloat(elemento.valor);
            if (elemento.valor > 0) {
                this.receitaFinal += parseFloat(elemento.valor);
            }
            else if (elemento.valor < 0) {
                this.gastoFinal += parseFloat(elemento.valor);
            }
        });
        document.querySelector(".saldo-num").innerHTML = `R$ ${this.saldoFinal}`;
        document.querySelector(".receita").innerHTML = `R$ ${this.receitaFinal}`;
        document.querySelector(".gasto").innerHTML = `R$ ${this.gastoFinal}`;
    }
}
