import { Vehicle } from '../models';
import { InMemoryDatabase } from '../services';

// Generic Function
const getLastElementOfArray = <T>(elements: T[]): T => {
   return elements[elements.length - 1];
};

// class Person {
//    public firstName: string;
//    public lastName: string;

//    constructor(firstName: string, lastName: string) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//    }
// }

const testInMemoryDatabase = () => {
   const myDatabase = new InMemoryDatabase<Vehicle>();
   const vehicle: Vehicle = { id: '001', model: 'Ferrari' };
   myDatabase.set(vehicle);
   // const person = new Person('John', 'Smith');
   // myDatabase.set(person);
   const theVehicle = myDatabase.get('001');
   console.log(theVehicle?.model);
};

const testGenericFunction = () => {
   const lastOfString = getLastElementOfArray(['a', 'b', 'c']);
   console.log(lastOfString);

   const lastOfNumber = getLastElementOfArray([1, 2, 3]);
   console.log(lastOfNumber);
};

export const runner = (): void => {
   testInMemoryDatabase();
   testGenericFunction();
};
