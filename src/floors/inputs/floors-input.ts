import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ItemInput {
  @Field(() => String)
  readonly name: string;

  @Field(() => String)
  readonly nominal: string;

  @Field(() => Number)
  readonly price: number;
}

@InputType()
export class FloorsInput {
  @Field(() => [ItemInput], { nullable: "itemsAndList" })
  readonly films?: ItemInput[];

  @Field(() => [ItemInput], { nullable: "itemsAndList" })
  readonly cab14W?: ItemInput[];
}
