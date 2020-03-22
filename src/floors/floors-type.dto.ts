import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
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
export class FloorsCreateDto {
  @Field(() => ID)
  id?: string

  @Field(() => [ItemType], { nullable: "itemsAndList", name: "films" })
  films?: [ItemType];

  @Field(() => [ItemType], { nullable: "itemsAndList", name: "cab14W" })
  cab14W?: [ItemType];
}
