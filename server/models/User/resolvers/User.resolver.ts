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
      console.log(where);
      const result = await firstMall();
      console.log('--------------------------');
      console.log(result);

      return {};
    } catch(e) {

      console.error(e);
    }

  }

}