import { Colours, logConsole } from './logger';

class Subscribable<MessageType> {
   private subscribers: Set<(message: MessageType) => void> = new Set();

   public subscribe(cb: (message: MessageType) => void): () => void {
      this.subscribers.add(cb);
      return () => {
         this.subscribers.delete(cb);
      };
   }

   public publish(message: MessageType): void {
      this.subscribers.forEach((subscriber) => {
         subscriber(message);
      });
   }
}

export const runner = (): void => {
   const subscribers = new Subscribable<string>();
   subscribers.subscribe((message: string) => {
      logConsole(Colours.Red, '>> Subscribers 1', message);
   });
   subscribers.subscribe((message: string) => {
      logConsole(Colours.Yellow, '>> Subscribers 2', message);
   });
   const subscriber3 = subscribers.subscribe((message: string) => {
      logConsole(Colours.Green, '>> Subscribers 3', message);
   });

   for (let index = 1; index <= 5; index++) {
      subscribers.publish(`This is message n# ${index}`);
      if (index === 3) {
         subscriber3();
      }
   }
};
