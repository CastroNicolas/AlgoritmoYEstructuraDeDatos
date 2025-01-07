class People {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  hi() {
    return `Hi my name is ${this.name} ${this.lastName} and I'm ${this.age} years old.`;
  }
  bye() {
    return "Bye";
  }
}

const people = new People("John", "Doe", 30);
console.log(people.hi()); //people.hi();
console.log(people.bye()); //people.bye();

// herencia

class Student extends People {
  constructor(name, lastName, age, carrer) {
    super(name, lastName, age);
    this.carrer = carrer;
  }
  hi() {
    return super.hi() + "and I'm studying " + this.carrer;
  }
}

const student = new Student("Nico", "Castro", 30, "Computer Science");

console.log(student.hi());
