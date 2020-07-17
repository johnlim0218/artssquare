import { Resolver, Query, Mutation, Ctx, Arg } from 'type-graphql';
import { UserObject } from '../objects/User.object';
import { UserWhereInput } from '../inputs/UserWhere.input';
import { firstMall } from '../../../lib/getFirstMallData';

@Resolver()
export class UserResolver {

  @Query(() => UserObject)
  async getUser(
    @Arg("where") where: UserWhereInput
  ){

    try{
      

      return {};
    } catch(e) {

      console.error(e);
    }

  }

}