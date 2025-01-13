"use strict";
// 1. Создайте несколько переменных:
// Имя, Фамилия, Пол, Возраст, Родной город,
// Почтовый индекс,Семейное положение
// женат/замужем (да/нет), Есть ли домашние
// животные? (да/нет)
// 2. Явно определите тип переменных
// 3. Присвойте каждой переменной значение
// соответствующее лично вам
// 4. Выведите данные в консоль 
const nameMe = "Ирина";
const surname = "Антонова";
const gender = "Женский";
const ageMe = 26;
const homeTown = "Батайск";
const postalCode = 346892;
const maritalStatus = true;
const myPets = true;
console.log(`Имя: ${nameMe}`);
console.log(`Фамилия: ${surname}`);
console.log(`Пол: ${gender}`);
console.log(`Возраст: ${ageMe}`);
console.log(`Город: ${homeTown}`);
console.log(`Почтовый индекс: ${postalCode}`);
console.log(`Семейное положение: ${maritalStatus ? "Замужем/женат" : "Не замужем/холост"}`);
console.log(`Есть питомцы: ${myPets ? "Да" : "Нет"}`);
