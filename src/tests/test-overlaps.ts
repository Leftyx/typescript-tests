const checkOverlap = (range1: Range, range2: Range): boolean => {
   const compare = (max: number, min: number): boolean => {
      // console.log(`${max} - ${min} = ${max - min >= 0}`);
      return max - min >= 0;
   };

   return compare(range1.max, range2.min) && compare(range2.max, range1.min) ? true : false;
};

class Range {
   public min: number;
   public max: number;
   public include = false;

   constructor(min: number, max: number, include: boolean) {
      this.min = include ? min : min + 0.00001;
      this.max = include ? max : max - 0.00001;
      this.include = include;
   }
}

const test001 = () => {
   const range1: Range = new Range(5, 10, false);
   const range2: Range = new Range(2, 5, false);

   const result = checkOverlap(range1, range2);

   console.log('is overlapping', result);
};

const test002 = () => {
   const range1: Range = new Range(-1000, 0, true);
   const range2: Range = new Range(0, 100, true);

   const result = checkOverlap(range1, range2);

   console.log('is overlapping', result);
};

const test003 = () => {
   const range1: Range = new Range(5, 10, true);
   const range2: Range = new Range(11, 15, true);

   const result = checkOverlap(range1, range2);

   console.log('is overlapping', result);
};

export const runner = (): void => {
   test001();
   test002();
   test003();
};
