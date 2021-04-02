var numeroSecreto = parseInt(Math.random() * 10 + 1)
var checkpoint = parseInt(Math.random() * 10 + 1)
while(checkpoint == numeroSecreto) {
  var checkpoint = parseInt(Math.random() * 10 + 1)
}

var tentativas = 3

while(tentativas > 0){
  var palpite = parseInt(prompt("Digite um numero de 1 a 10:"))
  var bonus = 0
  
  if (numeroSecreto == palpite){
      var pontos = (tentativas * 100) + 200
      document.querySelector('#result').innerHTML = 'Parabéns!!<br> Você fez ' + pontos + " pontos!!<br>E ganhou mais " + bonus + " com o número bônus";
    break
  } else if(palpite == checkpoint && palpite > numeroSecreto) {
    alert("Parabéns!! Você encontrou um número bonus!\nO numero secreto é menor, você ainda tem " + (tentativas) + " tentativa(s)")
    bonus = bonus + 200
    tentativas = tentativas + 1
  } else if(palpite == checkpoint && palpite < numeroSecreto) {
    alert("Parabéns!! Você encontrou um número bonus!\nO numero secreto é maior, você ainda tem " + (tentativas) + " tentativa(s)")
    bonus = bonus + 200
    tentativas = tentativas + 1
  } else if(palpite > numeroSecreto) {
    alert("o numero secreto é menor, você ainda tem " + (tentativas - 1) + " tentativa(s)")
    tentativas = tentativas - 1
  } else if(palpite < numeroSecreto) {
    alert("o numero secreto é maior, você ainda tem " + (tentativas -1) + " tentativa(s)")
    tentativas = tentativas - 1
  }
}

if(palpite != numeroSecreto) {
  document.querySelector('#result').innerHTML = "Que pena!!<br> O número era o " + numeroSecreto + "<br>O valor bonus era " + checkpoint;
}