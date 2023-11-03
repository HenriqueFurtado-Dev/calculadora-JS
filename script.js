// Selecionar todos os botões com a classe "button"
var display = document.getElementById('display');
var buttons = document.querySelectorAll('.button');
const minusAc = document.querySelector(".minus-ac");
const minusDe = document.querySelector(".minus-de")
const equal = document.querySelector(".equal")


minusAc.addEventListener('click', () => {
    display.value = ""
})

minusDe.addEventListener('click', () => {
    let newValue = display.value.toString().slice(0, -1);
    display.value = newValue
})

// Adicionar um event listener a todos os botões
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        addToDisplay(event.target.value);
    });
});

equal.addEventListener('click', () => {
    let result = eval(display.value);
    display.value = result
})

function addToDisplay(value) {
    display.value += value;
}