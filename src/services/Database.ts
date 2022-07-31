import { Entity } from '../models/Entity';

export interface Database<T extends Entity> {
   set(payload: T): void;
   get(id: string): T | undefined;
}
