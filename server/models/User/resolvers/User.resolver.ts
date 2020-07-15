import { Resolver, Query, Mutation, Ctx, Arg } from 'type-graphql';
import { UserObject } from '../objects/User.object';
import { UserWhereInput } from '../inputs/UserWhere.input';

@Resolver()
export class UserResolver {

  @Query(() => UserObject)
  async getUser(
    @Arg("where") where: UserWhereInput
  ){

    try{

      console.log(where);

      return {};
    } catch(e) {

      console.error(e);
    }

  }

}