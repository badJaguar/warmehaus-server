import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WarmehausKindType } from '../enums/warmehaus.enum';
import { FloorsCreateDto } from './floors-type.dto';
import { FloorsInput } from './inputs/floors-input';
// import { FloorsInput } from './inputs/floors-input';
import { Floors } from './interfaces/item.interface';

const floors = WarmehausKindType[WarmehausKindType.Floors]

@Injectable()
export class FloorsService {
  constructor(@InjectModel(floors) private itemModel: Model<Floors>) { }

  async findAll(): Promise<FloorsCreateDto[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<FloorsCreateDto> {
    return await this.itemModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<FloorsCreateDto> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: FloorsInput): Promise<FloorsCreateDto> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async create(createFloorDto: FloorsInput): Promise<Floors> {
    const createdFloor = new this.itemModel(createFloorDto);
    return createdFloor.save();
  }
}
