interface Person {
   firstName: string;
   lastName: string;
   dateOfBirth?: Date;
}

interface Address {
   address: string;
   postCode: string;
   city: string;
}

const extend = <T, U>(first: T, second: U): T & U => {
   return { ...first, ...second };
};

const test001 = () => {
   const someone: Person = { firstName: 'John', lastName: 'Smith', dateOfBirth: new Date() };
   const someonesAddress: Address = { address: '107 Liverpool Road', postCode: 'N1 1LA', city: 'London' };
   const combined = {
      ...someone,
      ...someonesAddress,
   };
   console.log('1. Person and Address:', combined);
};

const test002 = () => {
   const someone: Person = { firstName: 'John', lastName: 'Smith', dateOfBirth: new Date() };
   const someonesAddress: Address = { address: '107 Liverpool Road', postCode: 'N1 1LA', city: 'London' };
   const result = extend(someone, someonesAddress);

   console.log('2. Person and Address:', result);
};

export const runner = (): void => {
   test001();
   test002();
};
