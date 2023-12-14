function generateNumber() {

    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const numDrawn = document.querySelector('.number-drawn')
    const textNumDrawn = document.querySelector('.text-draw-h2')

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    numDrawn.innerHTML = result;
    textNumDrawn.innerHTML = "Número Sorteado"


    // alert(result)
}