const input = document.querySelector("input")
const form = document.querySelector("form")


// input.addEventListener("input", (e) => {
//     const value = input.value
//     const regex = /\D+/g
//     // retornar o padrão encontrado na string
//     // console.log(value.match(regex))
//     // testa se atende o padrão
//     // const isValid = regex.test(value) // test() => retorna verdadeiro ou falso
//     // console.log(isValid)
// })


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const regex = /\D+/g
    const value = input.value


    if(regex.test(value)){
        alert('Deu certo !')
    } else {
        alert('Deu eraado')
    }


    // const value = input.value.replace(regex, "")
    // console.log(value)



})