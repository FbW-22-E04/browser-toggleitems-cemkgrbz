const rome = document.querySelector(".rome")
const athens = document.querySelector(".athens")
const bangkok = document.querySelector(".bangkok")
const amsterdam = document.querySelector(".amsterdam")
const cala = document.querySelector(".cala")
const hideButton = document.querySelector(".hide")
const list = document.querySelector(".destinations")

const slRome = document.querySelector(".sl-rome")
const slAthens= document.querySelector(".sl-athens")
const slBangkok = document.querySelector(".sl-bangkok")
const slAmsterdam = document.querySelector(".sl-amsterdam")
const slCala = document.querySelector(".sl-cala")

// rome.classList.add("active")

hideButton.addEventListener("click", () => {
    list.classList.toggle("d-none")
    slRome.classList.add("d-none")
    slAthens.classList.add("d-none")
    slBangkok.classList.add("d-none")
    slAmsterdam.classList.add("d-none")
    slCala.classList.add("d-none")
    if(list.classList.contains("d-none")) {
        hideButton.innerHTML = "Show destinations"
    } else {
        hideButton.innerHTML = "Hide destinations"

    }
})


rome.addEventListener("click", () => {
    rome.classList.add("active")
    slRome.classList.remove("d-none")
    athens.classList.remove("active")
    slAthens.classList.add("d-none")
    bangkok.classList.remove("active")
    slBangkok.classList.add("d-none")
    amsterdam.classList.remove("active")
    slAmsterdam.classList.add("d-none")
    cala.classList.remove("active")
    slCala.classList.add("d-none")

})

athens.addEventListener("click", () => {
    athens.classList.add("active")
    slAthens.classList.remove("d-none")
    rome.classList.remove("active")
    slRome.classList.add("d-none")
    bangkok.classList.remove("active")
    slBangkok.classList.add("d-none")
    amsterdam.classList.remove("active")
    slAmsterdam.classList.add("d-none")
    cala.classList.remove("active")
    slCala.classList.add("d-none")
})


bangkok.addEventListener("click", () => {
    bangkok.classList.add("active")
    slBangkok.classList.remove("d-none")
    rome.classList.remove("active")
    slRome.classList.add("d-none")
    athens.classList.remove("active")
    slAthens.classList.add("d-none")
    amsterdam.classList.remove("active")
    slAmsterdam.classList.add("d-none")
    cala.classList.remove("active")
    slCala.classList.add("d-none")

})

amsterdam.addEventListener("click", () => {
    amsterdam.classList.add("active")
    slAmsterdam.classList.remove("d-none")
    rome.classList.remove("active")
    slRome.classList.add("d-none")
    athens.classList.remove("active")
    slAthens.classList.add("d-none")
    bangkok.classList.remove("active")
    slBangkok.classList.add("d-none")
    cala.classList.remove("active")
    slCala.classList.add("d-none")

})

cala.addEventListener("click", () => {
    cala.classList.add("active")
    slCala.classList.remove("d-none")
    rome.classList.remove("active")
    slRome.classList.add("d-none")
    athens.classList.remove("active")
    slAthens.classList.add("d-none")
    bangkok.classList.remove("active")
    slBangkok.classList.add("d-none")
    amsterdam.classList.remove("active")
    slAmsterdam.classList.add("d-none")
})