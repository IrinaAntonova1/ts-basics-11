"use strict";
let cars = null;
var CarBrands;
(function (CarBrands) {
    CarBrands["Mercedes"] = "mercedes";
    CarBrands["BMW"] = "bmw";
    CarBrands["Tesla"] = "tesla";
})(CarBrands || (CarBrands = {}));
// Используя Enum укажите переменной cars
// такой тип при котором она может принимать
// следующие значения: "mercedes", "bmw", "tesla",
// null.
// Код ниже должен вызвать ошибку
// cars = "nissan";
