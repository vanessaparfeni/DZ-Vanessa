let age = Number(prompt('Введите свой возраст: '))
if (age < 3) {
    console.log('Вы ребенок !')
} else if (age < 12 - 18) {
    console.log('Вы подросток !')
} else if (age < 18 - 59) {
    console.log('Вы взрослый !')
} else if (age < 60 - 70) {
    console.log('Вы пожилой человек !')
}


// -------------------------------------------------------------------------------------------------------

let age = +prompt("Укажите возраст")
function ageX(x) {
    if (x < 18) alert("Школьник")
    else alert("Студент")
}
ageX(age)

console.log(age)


// ---------------------------------------------------------------------------------------------------------


let a = +prompt('Первое число')
let operator = prompt('оператор (+,-,*,/)')
let b = +prompt('Второе число')

switch (operator) {
    case '+':
        alert(a + b)
        break;
    case '-':
        alert(a - b)
        break;
    case '*':
        alert(a * b)
        break;
    case '/':
        alert(a / b)
        break;
}


// ---------------------------------------------------------------------------------------------------------

let welcomeMessage = 'Добро пожаловать,администратор!'
let username = prompt('Введите своё имя:')
if (username != 'Admin') {
    alert('Доступ запрещён!')
}
else if (username = 'Admin') {
    alert(welcomeMessage)
}