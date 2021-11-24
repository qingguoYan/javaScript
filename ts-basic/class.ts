class People {
  name: string;
  constructor(name) {
    this.name = name;
  }
  state = {};
  age = 1;

  eat() {
    console.log(this.name + 'eat');
  }
}

const people = new People('yanqingguo');
console.log(people);
