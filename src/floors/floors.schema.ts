import * as mongoose from 'mongoose';
import { ItemType } from './floors-type.dto';

export const FloorsSchema = new mongoose.Schema({
  films: [ItemType.prototype],
  cab14W: [ItemType.prototype]
});
