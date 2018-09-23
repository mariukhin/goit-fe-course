'use strict';
class Hamburger {
  
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  addTopping(topping) {
    if(!this._toppings.includes(topping)){
      return this._toppings.push(topping);
    } 
  }

  removeTopping(topping) {
    if(this._toppings.includes(topping)){
      this._toppings = this._toppings.filter(item => item !== topping);
      return this._toppings;
    }
  }

  getToppings(){
    return this._toppings;
  }

  getSize(){
    return this._size;
  }

  getStuffing() {
    return this._stuffing;
  }

  calculatePrice(){
    const sizeobj = Hamburger.SIZES[this._size];
    const stuffobj = Hamburger.STUFFINGS[this._stuffing];
    const toppingobj = Hamburger.TOPPINGS;
    let resulttopping = this._toppings.reduce((acc, value) => acc + toppingobj[value].price, 0);
    
    return sizeobj.price + stuffobj.price + resulttopping;
  }

  calculateCalories() {
    const sizeobj = Hamburger.SIZES[this._size];
    const stuffobj = Hamburger.STUFFINGS[this._stuffing];
    const toppingobj = Hamburger.TOPPINGS;
    let resulttopping = this._toppings.reduce((acc , value) => acc + toppingobj[value].calories, 0);
    
    return sizeobj.calories + stuffobj.calories + resulttopping;
  }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  }
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
