'use strict';

// function Account(login, email, friendsCount){
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;
// }
// Account.prototype.getAccountInfo = function() {
//     console.log(`Login: ${this.login} | Email: ${this.email} | FriendsCount: ${this.friendsCount}`);
// };

// const maks = new Account('Max', 'maxim.sdsw@dwd.wew', 10);
// const shon = new Account('Shon', 'dqdwdq@feds.we', 4);
// const menya = new Account('Menya', 'm123ssdw@sds.dc', 16);

// maks.getAccountInfo();
// shon.getAccountInfo();
// menya.getAccountInfo();

// function StringBuilder(string = "") {
//     this.value = string;
// }
// StringBuilder.prototype.showValue = function(params) {
//     console.log(`Value: ${this.value}`);
// };
// StringBuilder.prototype.append = function(str) {
//     this.value += str;
// };
// StringBuilder.prototype.prepend = function(str) {
//     let newVal;
//     newVal = str.concat(this.value);
//     this.value = newVal;
//     return newVal;
// };
// StringBuilder.prototype.pad = function(str) {
//     let newVal, resVal;
//     newVal = str.concat(this.value);
//     resVal = newVal.concat(str);
//     this.value = resVal;
//     return resVal;
// }
// const myString = new StringBuilder('.');
  
// myString.append('^'); 
// myString.showValue(); // '.^'
  
// myString.prepend('^'); 
// myString.showValue(); // '^.^'
  
// myString.pad('='); 
// myString.showValue(); // '=^.^='

class Car {
    constructor(maxSpeed, value) {
        this._maxSpeed = maxSpeed;
        this._value = value;

        this._speed = 0;
        this._running = false;
        this._distance = 0;
    }
    get value(){
        console.log(this._value);
    }
    set value(val){
        this._value = val;
        console.log(this._value);
    }
    turnOn() {
        this._running = true;
        console.log('The car is on!');
    }
  
    turnOff() {
        this._running = false;
        console.log('The car is off!');
    }
    
    accelerate(spd) {
        if(spd<= this._maxSpeed){
            this._speed = spd;
            console.log(`Your speed is ${this._speed}`);
        }else{
            console.log('This speed is too high!');
        }
    }
    
    decelerate(spd) {
        if(spd<= this._maxSpeed && spd > 0){
            this._speed = spd;
            console.log(`Your speed is ${this._speed}`);
        }else{
            console.log(`Your speed is not valid`);
        }
    }
  
    drive(hours) {
        if(this._running){
            this._distance = hours*this._speed;
            console.log(`Your distance is ${this._distance} kilometres`);
        }else{
            console.log('Turn on your engine!');
        }
    }
    static getSpecs(car){
        this._maxSpeed = car._maxSpeed;
        this._running = car._running;
        this._distance = car._distance;
        console.log(`maxSpeed: ${car._maxSpeed}, running: ${car._running}, distance: ${car._distance}`);
    }
}

// const audi = new Car(120);
// audi.turnOn();
// audi.accelerate(120);
// audi.decelerate(30);
// audi.turnOff();
// audi.drive(5);

// const someCar = new Car(100);
// someCar.turnOn();
// someCar.decelerate(100);
// someCar.drive(2);
// Car.getSpecs(someCar);

const myCar = new Car(50, 2000);
  
myCar.value; // 2000
myCar.value = 4000;
myCar.value; // 4000






