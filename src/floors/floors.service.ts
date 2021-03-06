import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WarmehausKindType } from '../enums/warmehaus.enum';
import { EntityQuery } from './floors-type.dto';
// import { FloorsInput } from './inputs/floors-input';
import { IRootFloors } from './interfaces/item.interface';

const floors = WarmehausKindType[WarmehausKindType.Floors]

@Injectable()
export class FloorsService {
  constructor(@InjectModel(floors) private itemModel: Model<IRootFloors>) { }

  async findAll(): Promise<EntityQuery[]> {
    const result = await this.itemModel.find().exec();
    return result;
  }

  async findOne(): Promise<EntityQuery> {
    return await this.itemModel.findOne();
  }
  // async findOneById(id: string): Promise<FloorsType> {
  //   const res = await this.itemModel.findById(id);
  //   console.log(res)
  //   return res
  // }
  // async delete(id: string): Promise<FloorsType> {
  //   return await this.itemModel.findByIdAndRemove(id);
  // }

  // async update(id: string, item: FloorsInput): Promise<FloorsType> {
  //   return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  // }

  // async create(createFloorDto: FloorsInput): Promise<Floors> {
  //   const createdFloor = new this.itemModel(createFloorDto);
  //   return createdFloor.save();
  // }
}
