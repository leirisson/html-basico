const input = document.querySelector('input')

// keydown - quando uma tecla é precionada
// input.addEventListener("keydown", (e) => {
//     console.log(e.key)
// })


// KEYPRESS - quando uma tecla do ti´p caractere é pressionada
// letras, número, pontos, etc...
input.addEventListener('keypress', (e) => {
    console.log(e.key)
})

