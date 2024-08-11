import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './user.type';
import { CreateUserInput, UpdateUserInput } from './user.dto';

@Resolver(of => UserType)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => [UserType])
  async users() {
    return this.userService.findAll();
  }

  @Query(returns => UserType)
  async user(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(returns => UserType)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Mutation(returns => UserType)
  async updateUser(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(returns => UserType)
  async removeUser(@Args('id') id: string) {
    return this.userService.remove(id);
  }
}
