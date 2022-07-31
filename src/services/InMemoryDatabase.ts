import { Database } from '.';
import { Entity } from '../models';

export class InMemoryDatabase<T extends Entity> implements Database<T> {
   private database: Record<string, T> = {};

   public set(payload: T): void {
      if (!payload) {
         throw new Error('Payload is null');
      }
      this.database[payload.id] = payload;
   }
   public get(id: string): T | undefined {
      return this.database[id];
   }
}
