interface Greetable {
   name: string;
   hobby?: string;
   greet(phrase: string): void;
}

// User Class
class User implements Greetable {
   constructor(public name: string, private age: number, public hobby?: string) {
      this.name = name;
      this.age = age;
   }

   greet(phrase: string): void {
      console.log(phrase + " " + this.name);
   }
}

class Admin extends User {
   constructor(private permission: string[], name: string, age: number) {
      super(name, age);
   }
}

const user = new User("Max", 30);
console.log(user.name);

// Interfaces
interface CalculationContainer {
   res: number;
   print(): void;
}

type CalculationResult = CalculationContainer[];

const result: CalculationResult = [];
