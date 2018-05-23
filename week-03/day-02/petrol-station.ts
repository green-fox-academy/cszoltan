/*
Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100
*/

class Station {
  gasAmount: number = 5000;

  refill (car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount = car.capacity;
  }

}

class Car {
  gasAmount: number;
  capacity: number;

  constructor () {
    this.gasAmount = 0;
    this.capacity = 100;
  }
}
