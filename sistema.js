let numeroParticipantes = 99
        if(numeroParticipantes <100 ) {
            console.log("Cadastro permitido")
        } else{
            console.log("Cadastro não permitido, número de participantes esgotado")
}

let dataEvento = 12/25/2021
if (dataEvento >12/27/2021) {
    console. log ("Evento permitido")
} else {
  console.log("Cadastro não permitido, data inválida")  
}

let idadeParticipante = 18
if(idadeParticipante >= 18) {
    console.log("Participante cadastrado")
} else{
    console.log("Participante não cadastrado por conta da idade")
}

let listaParticpantes = ["João", "Pedro", "Thiago", "Matheus", "Felipe", "André", "Lucas", "Elias", "Davi", "Paulo"]

for(let contador = 0; contador < listaParticpantes.length; contador++) {
    console.log(listaParticpantes[contador])
}