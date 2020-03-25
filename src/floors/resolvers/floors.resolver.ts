import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { EntityQuery, FloorsType } from "../floors-type.dto";
import { FloorsService } from "../floors.service";
// import { FloorsInput } from "../inputs/floors-input";

@Resolver(() => FloorsType)
export class FloorsResolver {
  constructor(private itemService: FloorsService) { }

  @Query(() => FloorsType)
  async floors(): Promise<EntityQuery> {
    const result = this.itemService.findOne();
    return result;
  }

  @ResolveField('warmehausFloors', () => FloorsType)
  async warmehausFloors(@Parent() entity: EntityQuery): Promise<FloorsType> {
    return entity.warmehausFloors
  }

  // @Mutation(() => FloorsType)
  // async createFilm(@Args('input') input: FloorsInput): Promise<FloorsInput> {
  //   return this.itemService.create(input);
  // }

  // @Mutation(() => FloorsType)
  // async updateFilm(
  //   @Args('id') id: string,
  //   @Args('input') input: FloorsInput,
  // ): Promise<FloorsInput> {
  //   return this.itemService.update(id, input);
  // }

  // @Mutation(() => FloorsType)
  // async deleteFilm(@Args('id') id: string): Promise<FloorsInput> {
  //   return this.itemService.delete(id);
  // }
}