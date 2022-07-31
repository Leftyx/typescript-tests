export const runner = (): void => {
   const values1: ReadonlyArray<string> = ['a', 'b', 'c'];
   console.log('Readonly Array 1:', values1);

   const values2: readonly string[] = ['a', 'b', 'c'];
   console.log('Readonly Array 2:', values2);

   // Error cause it is read-only
   // values1.push('x');
   // values2.push('x');

   console.log('Readonly Array 2:', values2);
};
