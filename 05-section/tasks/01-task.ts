interface ITruck {
    brand: string;
    model: string;
    hasTrailer: boolean;
  }
  
  // Выше описан интерфейс грузовика ITruck.
  // Создайте тип обычного авто ICar убрав из
  // интерфейса поле hasTrailer
  
  type ICar2 = Omit<ITruck, "hasTrailer">;

  const car2: ICar2 = {
    brand: "Toyota",
    model: "Corolla"
  };