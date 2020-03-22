import { Document } from 'mongoose';

export interface Item {
  readonly id?: number;
  readonly name: string;
  readonly nominal: string;
  readonly price: number;
}

export interface Floors extends Document {
  readonly id?: string;
  readonly cab14W?: [Item];
  readonly films?: [Item];
}
