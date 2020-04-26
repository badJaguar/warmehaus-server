import { Query, Resolver } from "@nestjs/graphql";
import { EntityQuery } from "../floors-type.dto";
import { FloorsService } from "../floors.service";
// import { FloorsInput } from "../inputs/floors-input";

@Resolver()
export class FloorsResolver {
  constructor(private itemService: FloorsService) { }

  @Query(() => EntityQuery)
  async floors(): Promise<EntityQuery> {
    const result = this.itemService.findOne();
    return result;
  }

  // @Mutation(() => EntityQuery)
  // async updateItem(
  //   @Args('id') id: string,
  //   @Args('type') type: ItemInput,
  // ): Promise<EntityQuery> {
  //   return this.itemService.bulkCreate(id, type);
  // }

  // @ResolveField('warmehausFloors', () => FloorsType)
  // async warmehausFloors(@Parent() entity: EntityQuery): Promise<FloorsType> {
  //   return entity.warmehausFloors
  // }

  // @Mutation(() => FloorsType)
  // async createFilm(@Args('input') input: FloorsInput): Promise<FloorsInput> {
  //   return this.itemService.create(input);
  // }


  // @Mutation(() => FloorsType)
  // async deleteFilm(@Args('id') id: string): Promise<FloorsInput> {
  //   return this.itemService.delete(id);
  // }
}