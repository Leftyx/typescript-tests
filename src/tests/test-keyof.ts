interface BaseEvent {
   time: number;
   user: string;
}

interface EventMap {
   addToCart: BaseEvent & { quantity: number; productId: string };
   checkout: BaseEvent;
}

function sendEvent<T extends keyof EventMap>(name: T, data: EventMap[T]): void {
   console.log([name, data]);
}

export const runner = (): void => {
   sendEvent('addToCart', {
      time: 0,
      user: '',
      quantity: 0,
      productId: '',
   });

   sendEvent('checkout', {
      time: 0,
      user: 'Frank',
   });
};
