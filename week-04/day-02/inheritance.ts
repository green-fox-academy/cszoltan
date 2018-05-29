'use strict';
export { };

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(n?: string, a?: number, g?: string) {
    if (n === undefined) {
      this.name = 'Jane Doe';
      this.age = 30;
      this.gender = 'female';
    } else {
      this.name = n;
      this.age = a;
      this.gender = g;
    }
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old ${this.gender}`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(n?: string, a?: number, g?: string, p?: string) {
    
    if (p === undefined) {
      super();
      this.previousOrganization = 'The School of Life';
    } else {
      super(n, a, g);
      this.previousOrganization = p;
    }
    this.skippedDays = 0;
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old ${this.gender} from ${this.previousOrganization}, who skipped ${this.skippedDays} days`);
  }

  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor extends Person {
  level: string;

  constructor(n?: string, a?: number, g?: string, l?: string) {
    if (l === undefined) {
      super();
      this.level = 'intermediate';
    } else {
      super(n, a, g);
      this.level = l;
    }
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old ${this.gender} ${this.level} mentor.`);
  }
}

class Sponsor extends Person {
  company: string;
  hiredStudents: number;

  constructor(n?: string, a?: number, g?: string, c?: string) {
    
    if (c === undefined) {
      super();
      this.company = 'Google';
    } else {
      super(n, a, g);
      this.company = c;
    }
    this.hiredStudents = 0;
  }

  getGoal() {
    console.log('MY goal is: Hire brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old ${this.gender}, who represents ${this.company} and hired ${this.hiredStudents} students`);
  }

  hire() {
    this.hiredStudents++;
  }
}

class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(n: string) {
    this.name = n;
    this.students = [];
    this.mentors = [];
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  addMentor(mentor: Mentor) {
    this.mentors.push(mentor);
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students, and ${this.mentors.length} mentors.`);
  }
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);
student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
