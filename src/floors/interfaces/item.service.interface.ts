import { FloorsCreateDto } from "../floors-type.dto";
import { ItemInput } from "../inputs/floors-input";
import { Item } from "./item.interface";

export interface IItemService {
  findAll(): Promise<FloorsCreateDto[]>
  findOne(id: string): Promise<FloorsCreateDto>
  delete(id: string): Promise<FloorsCreateDto>
  update(id: string, item: ItemInput): Promise<FloorsCreateDto>
  create(createItemDto: ItemInput): Promise<Item>
}