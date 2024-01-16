const relative = document.querySelector('.relative')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')


function abrir(){

    bar2.classList.toggle('open') // Primeiro passo da animação = apagar o do meio e juntar os dois das pontas
    if (bar2.classList.contains('open')){
        relative.classList.toggle('off') // div Relative liga/desliga o hover que aumenta tamanho
        setTimeout(() => {
            bar2.style.display = 'none'
        }, 600);
        bar1.classList.toggle('open')
        bar3.classList.toggle('open')
        setTimeout(() => {
            bar1.classList.toggle('format')
            bar3.classList.toggle('format')
        }, 300);
    } else {
        bar1.classList.toggle('format')
        bar3.classList.toggle('format')
        setTimeout(() => {
            bar1.classList.toggle('open')
            bar3.classList.toggle('open')
            setTimeout(() => {
                bar2.style.display = 'block'
                setTimeout(() => {
                    relative.classList.toggle('off')
                }, 300);
            }, 50);
        }, 400);
    }
}