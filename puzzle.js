const grade = document.getElementById("grade")

for (var i = 0; i<4; i++){
    for (var j = 0; j<6; j++){
        var newPeca = document.createElement("div")
        newPeca.id="x"+j+"y"+i;
        newPeca.style.top=i*50+"px";
        newPeca.style.left=j*50+"px";
        newPeca.style.backgroundPositionX=((j*25/(6-1))*100)+"%";
        newPeca.style.backgroundPositionY=((i*25/(4-1))*100)+"%";
        newPeca.setAttribute("onclick","clicarPeca(this)")
        grade.appendChild(newPeca)

    }
}

var escolhido = null
var escolhido2 = null
function clicarPeca(argElemento) {
    if (escolhido==null) {
        escolhido = argElemento
    } else if (escolhido2==null) {
        escolhido2 = argElemento
        trocarPeca()
    }
}

function embaralhar(argIte) {
    for (var i = 0; i < argIte; i++){
        var escolhidoX=0
        var escolhidoY=0

        var escolhido2X=0
        var escolhido2Y=0
        
        while (escolhidoX == escolhido2X && escolhidoY == escolhido2Y) {
            escolhidoX = Math.round(Math.random() * (6-1))
            escolhidoY = Math.round(Math.random() * (4-1))

            escolhido2X = Math.round(Math.random() * (6-1))
            escolhido2Y = Math.round(Math.random() * (4-1))

        }
        escolhido = document.getElementById("x"+escolhidoX+"y"+escolhidoY)
        escolhido2 = document.getElementById("x"+escolhido2X+"y"+escolhido2Y)
        trocarPeca()
    }
}

function trocarPeca(){
    var escolhidoTrocadoTop = escolhido.style.top
    var escolhidoTrocadoLeft = escolhido.style.left

    escolhido.style.top = escolhido2.style.top
    escolhido.style.left = escolhido2.style.left

    escolhido2.style.top = escolhidoTrocadoTop
    escolhido2.style.left = escolhidoTrocadoLeft

    escolhido = null
    escolhido2 = null

    validar()

}

function validar() {
    var puzzleGameOk = true
    for (var i = 0; i<4; i++){
        for (var j = 0; j<6; j++){
            var posXesperada = j*50+"px"
            var posYesperada = i*50+"px"

            var pecaVerificada = document.getElementById("x"+j+"y"+i)
            if (pecaVerificada.style.left != posXesperada || pecaVerificada.style.top != posYesperada) {
                puzzleGameOk = false
            }
        }
    }

    if (puzzleGameOk) {
        window.alert("Congratulations !")
    }
}

embaralhar(100)