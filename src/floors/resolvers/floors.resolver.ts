import { Query, Resolver } from "@nestjs/graphql";
import { FloorsCreateDto } from "../floors-type.dto";
import { FloorsService } from "../floors.service";
// import { FloorsInput } from "../inputs/floors-input";

@Resolver()
export class FloorsResolver {
  constructor(private itemService: FloorsService) { }

  @Query(() => [FloorsCreateDto])
  async floors(): Promise<FloorsCreateDto[]> {
    return this.itemService.findAll();
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