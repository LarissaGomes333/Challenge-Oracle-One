function pegaTexto() {
    let texto = document.getElementById("texto").value
    texto = texto.toUpperCase()
    let novoTexto = "";
    let cont;
    for (let letra of texto) {
        if (letra == "A") { letra = 'AI' }
        if (letra == "E") { letra = 'ENTER' }
        if (letra == "I") { letra = 'IMES' }
        if (letra == "O") { letra = 'OBER' }
        if (letra == "U") { letra = 'UFAT' }
        novoTexto += letra
        document.getElementById("final").innerHTML = novoTexto
        if (final != " "){
            document.getElementById("encontrada").style.display = 'none';
        }
    }
}

function descript() {
    let texto = document.getElementById("texto").value
    texto = texto.toUpperCase()
    let final = document.getElementById("final").innerHTML

    let novoTextoD = "";
    let v = 0
    let a = false
    let b = 0
    let c = false
    let e = false
    let f = 0


    for (let letra of texto) {
        if (a) {
            v += 1
            a = false
            continue
        }
        if (letra == "A" && texto[v + 1] == "I") {
            letra = "A"

            a = true
        }
        if (c){
            if (b <= 2){
                b += 1
                v += 1
                continue
            }
        }
        if (e){
            if (f <= 3){
                f += 1
                v += 1
                continue
            }
        }
        if (letra == "E" && texto[v + 1] == "N" && texto[v + 2] == "T" && texto[v + 3] == "E" && texto[v + 4] == "R" ) {
            letra = "E"
            e = true
            f = 0
         
        }

        if (letra == "I" && texto[v + 1] == "M" && texto[v + 2] == "E" && texto[v + 3] == "S") {
            letra = "I"
            c = true
            b = 0
      
        }

        console.log(letra, texto[v + 1], v + 1)
        if (letra == "O" && texto[v + 1] == "B" && texto[v + 2] == "E" && texto[v + 3] == "R") {
            letra = "O"
            c = true
            b = 0
    
        }

        if (letra == "U" && texto[v + 1] == "F" && texto[v + 2] == "A" && texto[v + 3] == "T") {
            letra = "U"
            c = true
            b = 0
        }
        novoTextoD += letra
        document.getElementById("final").innerHTML = novoTextoD

        if (final != " "){
            document.getElementById("encontrada").style.display = 'none';
        }
        v += 1
    }
}

function copiar(){
navigator.clipboard.writeText(document.getElementById("final").innerHTML)
}