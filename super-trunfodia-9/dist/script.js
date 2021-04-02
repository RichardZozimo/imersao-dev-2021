var orc = {
  nome: "Orc",
  imagem: "http://images1.wikia.nocookie.net/wowwiki/images/1/1e/3D-Orc.png",
  atributos: {
    força: 23,
    agilidade: 17,
    intelecto: 17,
    stamina: 22
  }
}

var tauren = {
  nome: "Tauren",
  imagem: "https://i.pinimg.com/originals/f8/0d/dc/f80ddc79dee47a9c05e3cc8d8c8c967f.jpg",
  atributos: {
    força: 25,
    agilidade: 15,
    intelecto: 15,
    stamina: 22
  }
}

var troll = {
  nome: "Troll",
  imagem: "https://i.pinimg.com/originals/08/af/ef/08afef0e8e2749d60e0fada2dd0e5d9d.jpg",
  atributos: {
    força: 21,
    agilidade: 22,
    intelecto: 16,
    stamina: 21
  }
}

var mortoVivo = {
  nome: "Morto Vivo",
  imagem: "https://i.pinimg.com/originals/dd/20/96/dd209651b814993ab4a8c87f46a62e8a.jpg",
  atributos: {
    força: 19,
    agilidade: 18,
    intelecto: 18,
    stamina: 21
  }
}

var humano = {
  nome: "Humano",
  imagem: "https://static.wikia.nocookie.net/classic-wowwiki/images/3/35/Human_paladin.jpg/revision/latest/top-crop/width/360/height/450?cb=20181028014014",
  atributos: {
    força: 25,
    agilidade: 25,
    intelecto: 25,
    stamina: 25
  }
}

var elfoNoturno = {
  nome: "Elfo Noturno",
  imagem: "https://static.wikia.nocookie.net/wowwiki/images/7/75/NightElfMale.jpg/revision/latest/scale-to-width-down/340?cb=20070924191822",
  atributos: {
    força: 17,
    agilidade: 25,
    intelecto: 20,
    stamina: 19
  }
}

var anao = {
  nome: "Anão",
  imagem: "https://c4.wallpaperflare.com/wallpaper/459/19/780/warcraft-world-of-warcraft-armor-dwarf-wallpaper-preview.jpg",
  atributos: {
    força: 22,
    agilidade: 19,
    intelecto: 19,
    stamina: 24
  }
}

var gnome = {
  nome: "Gnomo",
  imagem: "https://i.pinimg.com/originals/1d/ef/94/1def944201ed3638b395b3086b6aaeef.jpg",
  atributos: {
    força: 15,
    agilidade: 23,
    intelecto: 23,
    stamina: 19
  }
}

var cartas = [orc, troll, tauren, mortoVivo, humano, anao, gnome, elfoNoturno]

var cartaMaquina
var cartaJogador      

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
  
    sortearCarta()
}