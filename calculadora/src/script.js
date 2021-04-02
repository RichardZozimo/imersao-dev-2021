let primeiroValor = parseFloat(prompt("Digite o primeiro valor:"))
let segundoValor = parseFloat(prompt("Digite o segundo valor:"))

let operacao = prompt("Escolha sua operação,\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Exponenciação")

switch(operacao){
  case '1':
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
    break;
  case '2':
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
    break;
  case '3':
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
    break;
  case '4':
    var resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
    break;
  case '5':
    var resultado = Math.pow(primeiroValor, segundoValor)
    document.write("<h2>" + primeiroValor + " ^ " + segundoValor + " = " + resultado + "</h2>")
    break;
  default:
    document.write("<h2>Invalida</h2>")
}

