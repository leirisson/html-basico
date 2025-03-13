const guests = document.querySelector("ul")

// criando o elemento
const newGuest = document.createElement('li')
newGuest.classList.add('guest') // ADICIONANDO CLASSE


const guestName = document.createElement('span')
guestName.textContent = "Leirisson"


newGuest.appendChild(guestName)


guests.appendChild(newGuest)