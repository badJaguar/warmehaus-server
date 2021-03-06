import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ItemType {
  @Field(() => Number)
  id?: number

  @Field(() => String)
  name: string;

  @Field(() => String)
  nominal: string;

  @Field(() => Number)
  price: number;
}

@ObjectType()
export class FloorsType {
  @Field(() => [ItemType])
  films?: ItemType[];

  @Field(() => [ItemType])
  cab14W?: ItemType[];
}

@ObjectType()
export class EntityQuery {
  @Field(() => ID)
  id?: string

  @Field(() => FloorsType)
  warmehausFloors: FloorsType
}