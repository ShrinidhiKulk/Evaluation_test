let person = {
  name: "John",
  age: 30,
  introduce: function(age) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old`);
  }
};

person.introduce(25); // Output: Hello, my name is John and I am 25 years old
