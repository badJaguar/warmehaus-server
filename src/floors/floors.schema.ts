import * as mongoose from 'mongoose';
import { EntityQuery } from './floors-type.dto';


export const FloorsSchema = new mongoose.Schema({
  warmehausFloors: EntityQuery.prototype
});
