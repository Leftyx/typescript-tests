export enum Colours {
   Red = '\x1b[31m%s\x1b[0m',
   Green = '\x1b[32m%s\x1b[0m',
   Yellow = '\x1b[33m%s\x1b[0m',
   Blue = '\x1b[34m%s\x1b[0m',
   Magenta = '\x1b[35m%s\x1b[0m',
}

// export interface ILogger {
//    log(message: string, colour: Colours | undefined): void;
// }

export const logConsole = (colour: Colours | undefined, message: string, ...optionalParams: any[]): void => {
   if (colour) {
      console.log(colour, message, optionalParams);
   } else {
      console.log(message, optionalParams);
   }
};
