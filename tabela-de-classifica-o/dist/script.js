var player1 = {
  nome: "Paulo",
  vitorias: 2,
  empates: 5,
  derrotas: 1,
  pontos: 0
}

var player2 = {
  nome: "Rafa",
  vitorias: 1,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

var jogadores = [player1, player2]

player1.pontos = calculaPontos(player1)
player2.pontos = calculaPontos(player2)

exibirJogadores(jogadores)

function calculaPontos(jogador) {
  var pontos =  (jogador.vitorias * 3) + jogador.empates - jogador.derrotas
  return pontos
}

function exibirJogadores(jogadores) {
  var html = ""
  for(i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i]
    jogador.pontos = calculaPontos(jogador)
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória " + jogadores[i].nome + "</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  if(i == 0) {
    var outroJogador = jogadores[i + 1];
    outroJogador.derrotas++;
  } else {
    outroJogador = jogadores[i - 1];
    outroJogador.derrotas++;
  }
  jogador.vitorias++
  exibirJogadores(jogadores)
}

function adicionarEmpate(i) {
  for(i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i]
    jogador.empates++
  }
  exibirJogadores(jogadores)
}