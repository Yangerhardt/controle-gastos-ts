export class ValidaTransacao {

  static validarTransacao(entrada: any): boolean {
    /* return entrada.includes("a" || "e" || "i" || "o" || "u") || entrada.trim() === "" */
    return (entrada.includes("a")
    || entrada.includes("e")
    || entrada.includes("i")
    || entrada.includes("o")
    || entrada.includes("u")
    || entrada.trim() === "") 
  }
}