"use strict";
const ages = [];
const answers = [];
const data = [];
// Определите в явном виде типы массивов таким
// образом, чтобы код ниже работал корректно
ages.push(22);
ages.push("32");
ages.push(173);
ages.push(`${ages[0]}`); // строка
ages.push("88");
ages.push(100);
answers.push(17);
answers.push("Typescript");
answers.push("Результат");
answers.push(77 > 66); //булевой
answers.push(`${answers[1]}`.charAt(0)); // первый символ строки "Typescript"
answers.push("2" + 567); // Результат будет строкой "2567"
data.push(Math.random()); // Math.random() возвращает число
data.push(answers[2]); // answers[2] — это строка "Результат"
// data.push(+ages[0] - 11); // ages[0] уже число, поэтому + ничего не меняет
data.push({ name: "Антон", age: 22, city: "Воронеж", hasCar: true }); // Это объект
data.push(false); // Булевое значение
