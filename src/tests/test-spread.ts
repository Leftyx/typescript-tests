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

export const runner = (): void => {
   const someone: Person = { firstName: 'John', lastName: 'Smith', dateOfBirth: new Date() };
   const someonesAddress: Address = { address: '107 Liverpool Road', postCode: 'N1 1LA', city: 'London' };
   const combined = {
      ...someone,
      ...someonesAddress,
   };
   console.log('Person and Address:', combined);
};
