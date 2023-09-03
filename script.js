let age = Number(prompt('Введите свой возраст: '))
if (age < 3) {
    console.log('Вы ребенок !')
} else if (age < 12-18) {
    console.log('Вы подросток !')
} else if (age < 18-59) {
    console.log('Вы взрослый !')
} else if (age < 60-70) {
    console.log('Вы пожилой человек !')
}