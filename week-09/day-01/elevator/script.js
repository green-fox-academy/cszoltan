'use strict';

class ElevatorController {

}

class ElevatorModel {

  constructor(floor, people) {
    this.maxFloor = floor;
    this.maxPeople = people;
    this.people = 0;
    this.floor = 1;
  }
  checkPeople() {
    return this.maxPeople >= this.people && this.people >= 0;
  }
  checkFloor() {
    return this.maxFloor >= this.floor && this.floor >= 0;
  }
  addPeople() {
    if (this.checkPeople()) {
      this.people++;
    }
  }
  removePeople() {
    if (this.checkPeople()) {
      this.people--;
    }
  }
  removeFloor() {
    if (this.checkFloor()) {
      this.floor--;
    }
  }
  addFloor() {
    if (this.checkFloor()) {
      this.floor++;
    }
  }
}
