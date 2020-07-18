import { Resolver, Query, Arg } from 'type-graphql'
import { ShippingObject } from '../objects/Shipping.object';
import { ShippingWhereInput } from '../input/ShippingWhere.input';
import { firstMall } from '../../../lib/getFirstMallData';

@Resolver()
export class ShipingResolver {
   @Query(() => [ShippingObject])
   async getShippingData(
     @Arg("where", { nullable: true }) where: ShippingWhereInput
   ) {

    try {

      const result = await firstMall();

      console.log(result);
      return result;

    } catch(e) {
      console.error(e);
    }
   }
}