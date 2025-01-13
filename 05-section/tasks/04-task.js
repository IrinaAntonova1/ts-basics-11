"use strict";
// Измените тип аргумента data в функции formattedUserData
// таким образом чтобы ее вызов ниже не вызывал ошибку
function formattedUserData(data) {
    var _a;
    return `
      Имя: ${data.firstName};
      Фамилия: ${(_a = data.lastName) !== null && _a !== void 0 ? _a : "Не указана"}; // оператор nullish coalescing, чтобы подставить значение "Не указана", если поле отсутствует
      Возраст: ${data.age};
      Родной город: ${data.hometown};
    `;
}
console.log(formattedUserData({
    firstName: "Амир",
    age: 25,
    hometown: "Грозный"
}));
