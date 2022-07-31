// The any type represents all possible JavaScript values: primitives, objects, arrays, functions, errors, symbols;

// All types are assignable to unknown
const testAllOk = () => {
   let value: unknown;

   value = true; // OK
   value = 42; // OK
   value = 'Hello World'; // OK
   value = []; // OK
   value = {}; // OK
   value = Math.random; // OK
   value = null; // OK
   value = undefined; // OK
   value = new TypeError(); // OK
   value = Symbol('type'); // OK

   console.log('unknown value: ', value);
};

// The unknown type is only assignable to the any type and the unknown type itself
const testNotOk = () => {
   let value: unknown;

   const value1: unknown = value; // OK
   const value2: any = value; // OK
   // const value3: boolean = value;   // Error
   // const value4: number = value;    // Error
   // const value5: string = value;    // Error
   // const value6: object = value;    // Error
   // const value7: any[] = value;     // Error

   console.log('unknown value: ', value1, value2);
};

const isNumberArray = (value: unknown): value is number[] => {
   return Array.isArray(value) && value.every((element) => typeof element === 'number');
};

const testUnknownFunction = () => {
   console.log('Is number array:', isNumberArray('Hello Wolrd'));
   console.log('Is number array:', isNumberArray(['a', 'b', 'c']));
   console.log('Is number array:', isNumberArray([1, 2, 3]));
};

// Cannot assign unknown to a type
const testFunctionParamUnknown = (value: unknown): void => {
   if (value === null || value === undefined) {
      throw Error('Null Or Undefined');
   }
   let myLuckyNumber = 0;
   myLuckyNumber = 10;
   // myLuckyNumber = value;  // Error

   console.log('Lucky #: ', myLuckyNumber);
};

// but can assign any to a type
const testFunctionParamAny = (value: any): void => {
   if (value === null || value === undefined) {
      throw Error('Null Or Undefined');
   }
   let myLuckyNumber = 0;
   myLuckyNumber = 10;
   myLuckyNumber = value;
   console.log('Lucky #: ', myLuckyNumber);
};

export const runner = (): void => {
   testAllOk();
   testNotOk();
   testUnknownFunction();
   testFunctionParamUnknown('Hello There');
   testFunctionParamAny('Hello There');
};
