import { FloorsType } from "../floors-type.dto";
import { ItemInput } from "../inputs/floors-input";
import { IFloorItem } from "./item.interface";

export interface IItemService {
  findAll(): Promise<FloorsType[]>
  findOne(id: string): Promise<FloorsType>
  delete(id: string): Promise<FloorsType>
  update(id: string, item: ItemInput): Promise<FloorsType>
  create(createItemDto: ItemInput): Promise<IFloorItem>
}