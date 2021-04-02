var cartaPaulo = {
  nome: "Seiya de Pegaso",
  atributos: {
    ataque: 90,
    defesa: 80,
    magia: 80
  }
}

var cartaRafa = {
  nome: "Bulbassauro",
  atributos: {
    ataque: 80,
    defesa: 90,
    magia: 80
  }
}

var cartaGui = {
  nome: "Lord Darth Vader",
  atributos: {
    ataque: 80,
    defesa: 80,
    magia: 90
  }
}

var listaDeCartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = listaDeCartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 3)
  while(numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = listaDeCartas[numeroCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for(var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for(var i = 0; i < radioAtributo.length; i++) {
    if(radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    alert('Parabéns, você venceu a máquina!!')
  } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    alert('Você foi vencido pela máquina!!')
  } else {
    alert ('Vocês empataram!!')
  }
}