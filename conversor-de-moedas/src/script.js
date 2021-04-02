const botao = 
         document.querySelector ('button')

botao.onclick = function converte() {
  var valorDolar = document.getElementById('valorEntrada').value;
  
  let valorReal = valorDolar * 5.5; 
  document.querySelector('#valor-dolar').innerHTML = 'Seu valor em reais é R$' + valorReal.toFixed(2) + ".";
}