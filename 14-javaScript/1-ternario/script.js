// let age = 19
// age >= 18 ? console.log('pode dirigir') : console.log('não pode dirigir')


// 1 - Verificação de múltiplos
// Crie uma função que receba um número e retorne "Múltiplo de 3" 
// se for divisível por 3, 
// senão retorne "Não é múltiplo de 3".
function multiplo(valor){

    const resultado = valor % 3 === 0 ? console.log('Múltiplo de 3') : console.log('Não é múltiplo de 3')

    return resultado
}

multiplo(15)

// 2 - Classificação de temperatura
// Crie uma função que receba uma temperatura e retorne "Quente"
// se for maior que 30°C, "Agradável"
// se estiver entre 15°C e 30°C, e "Frio" se for menor que 15°C.
function temperatura(temp){

    const clima =  temp > 30 ? 'Quente' : temp > 15 && temp <= 30 ?  'Agradavel' : 'frio' 

    return console.log(clima)

}

temperatura(45)


// 3 - Número positivo, negativo ou zero
// Crie uma função que receba um número e retorne "Positivo" se for maior que zero,
// "Negativo" se for menor que zero 
// e "Zero" caso contrário.

function positivo(num){
    const resultado = num < 0 ? console.log('negativo') : num > 0 ? console.log('positivo') : console.log('zero')

    return resultado
}

positivo(0)


// 4 Desconto para clientes VIP
// Crie uma função que receba um valor de compra e um booleano indicando se o cliente é VIP. 
// Se for VIP, aplique um desconto de 10%, senão mantenha o valor original.


function handleVip(vip, valor){

    const onVip = vip ? valor - (valor * 0.10) : valor 

    return console.log('valor: ' + onVip)
}

handleVip(false, 100)
handleVip(true, 100)

// Comparação de strings
// Crie uma função que receba duas palavras e retorne "São iguais"
// se forem exatamente iguais (mesmo texto e capitalização) e "São diferentes" caso contrário.

function equalsWord(word1,word2){
    const result = word1.toLowerCase() === word2.toLowerCase() ? console.log('São iguais') : console.log('São diferentes')
    return result
}

equalsWord('Leirisson','Leirisson')