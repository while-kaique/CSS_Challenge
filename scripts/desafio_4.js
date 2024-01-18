var contador = 1
setInterval(() => {
    var box = document.querySelector(`#slide${contador}`)
    box.checked = true
    contagem()
}, 3000);

function contagem(){
    contador++
    if (contador === 6){contador = 1}
}