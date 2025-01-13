interface IUserData {
    firstName: string;
    lastName?: string; // опционально
    age: number;
    hometown: string;
  }
  
  // Измените тип аргумента data в функции formattedUserData
  // таким образом чтобы ее вызов ниже не вызывал ошибку
  
  function formattedUserData(data: IUserData): string {
    return `
      Имя: ${data.firstName};
      Фамилия: ${data.lastName ?? "Не указана"}; // оператор nullish coalescing, чтобы подставить значение "Не указана", если поле отсутствует
      Возраст: ${data.age};
      Родной город: ${data.hometown};
    `;
  }
  
  console.log(formattedUserData({
      firstName: "Амир",
      age: 25,
      hometown: "Грозный"
    })
  );
  