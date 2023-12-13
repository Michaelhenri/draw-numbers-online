function generateNumber() {

    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const numDrawn = document.querySelector('.number-drawn')

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    numDrawn.innerHTML = result;

   // alert(result)
}