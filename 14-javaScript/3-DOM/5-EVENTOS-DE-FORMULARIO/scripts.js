const form = document.querySelector("form")



// forma 1
// form.addEventListener('submit', () => {

// })


// forma 2
form.onsubmit = (e) => {
    e.preventDefault();
    
    console.log('formulario enviado !')
}