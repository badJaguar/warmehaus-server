import * as mongoose from 'mongoose';
import { FloorsType } from './floors-type.dto';


export const FloorsSchema = new mongoose.Schema({
  warmehausFloors: FloorsType.prototype
  // kinds: {
  //   films: [ItemType.prototype],
  //   cab14W: [ItemType.prototype]
  // }
});
