export class ValidaTransacao {
    static validarTransacao(entrada) {
        return (entrada.includes("a")
            || entrada.includes("e")
            || entrada.includes("i")
            || entrada.includes("o")
            || entrada.includes("u")
            || entrada.trim() === "");
    }
}
