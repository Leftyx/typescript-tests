import { Entity } from './Entity';

export interface Vehicle extends Entity {
   model: string;
   description?: string;
}
