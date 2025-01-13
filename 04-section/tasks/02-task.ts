// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum paymentType {
    "cash",
    "card",
    "credit"
  }
  
  interface ICustomer {
    firstName: string;
    lastName: string;
    dateBirthday: Date;
    deliveryCountry: string;
    deliveryCity: string;
    deliveryAddress: string;
    deliveryBuilding: number | string;
    deliveryApartment?: number;
    detiveryTime?: string;
    paymentType: paymentType;
    ordersCount: number;
    discountPercent: number;
    currency: "EUR" | "USD" | "RUB";
  }
  
  type Currency = "EUR" | "USD" | "RUB";

  // Личная информация
  interface PersonalInfo {
    firstName: string;
    lastName: string;
    dateBirthday: Date;
  }
  
  // Адрес доставки
  interface DeliveryAddress {
    country: string;
    city: string;
    address: string;
    building: number | string;
    apartment?: number;
  }
  
  // Информация о доставке
  interface DeliveryDetails {
    deliveryAddress: DeliveryAddress;
    deliveryTime?: string;
  }
  
  // Оплата и заказы
  interface paymentInfo {
    paymentType: paymentType;
    currency: Currency;
    discountPercent: number;
    ordersCount: number;
  }
  
  // Основной интерфейс клиента
  interface ICustomer {
    personalInfo: PersonalInfo;
    delivery: DeliveryDetails;
    payment: PaymentInfo;
  }