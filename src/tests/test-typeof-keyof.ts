const test001 = (): void => {
   const Direction = {
      Up: 0,
      Down: 1,
      Left: 2,
      Right: 3,
   } as const;

   type Values<T> = T[keyof T];

   const x: Values<typeof Direction> = Direction.Up;

   console.log('RESULT: ', x);
};

export const runner = (): void => {
   test001();
};
