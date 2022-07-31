interface Coordinate {
   x: number;
   y: number;
}

function parseCoordinate(coordinate: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
   // let coordinate: Coordinate = {
   //    x: 0,
   //    y: 0
   // };
   if (typeof arg1 === 'object') {
      return { ...(arg1 as Coordinate) };
   }

   return { x: arg1 as number, y: arg2 as number } as Coordinate;
}

export const runner = (): void => {
   console.log('Coordinates #1: ', parseCoordinate({ x: 100, y: 200 }));
   console.log('Coordinates #2: ', parseCoordinate(101, 201));
};
