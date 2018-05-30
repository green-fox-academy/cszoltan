'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  days: string[];

  constructor() {
    this.days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  }

  getDowBooking(): string {
    return this.days[Math.floor(Math.random() * this.days.length)];
  }

  getCodeBooking(): string {
    let output: string = '';
    for (let i: number = 0; i < 8; i++) {
      if ((Math.random() * 36) < 10) {
        output += `${Math.floor(Math.random() * 10)}`;
      } else {
        output += String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      }
    }
    return output;
  }

  print(): void {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }
}

let books: Reservation = new Reservation();
let bookings: number = Math.floor(Math.random() * 20 + 1);

for (let i: number = 0; i < bookings; i++) {
  books.print();
}
