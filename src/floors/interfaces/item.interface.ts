import { Document } from 'mongoose';

export interface IFloorItem extends Document {
  readonly id?: number;
  readonly name: string;
  readonly nominal: string;
  readonly price: number;
}

export interface IRootFloors extends Document {
  readonly id?: string;
  readonly warmehausFloors: IFloors
}

export interface IFloors extends Document {
  readonly cab14W?: IFloorItem[];
  readonly films?: IFloorItem[];
}

