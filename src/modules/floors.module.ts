import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { propertyOf, WarmehausKindType } from '../enums/warmehaus.enum';
import { FloorsSchema } from '../floors/floors.schema';
import { FloorsService } from '../floors/floors.service';
import { FloorsResolver } from '../floors/resolvers/floors.resolver';

export const floors = propertyOf<typeof WarmehausKindType>("Floors");

@Module({
  imports: [MongooseModule.forFeature([{ name: floors, schema: FloorsSchema, collection: "kinds" }])],
  providers: [FloorsResolver, FloorsService],
})
export class FloorsModule { }