import { Resolver, Query, Arg } from 'type-graphql'
import { ShippingObject } from '../objects/Shipping.object';
import { ShippingWhereInput } from '../input/ShippingWhere.input';
import { firstMall } from '../../../lib/getFirstMallData';

@Resolver()
export class ShipingResolver {
   @Query(() => ShippingObject)
   async getShippingData(
     @Arg("where", { nullable: true }) where: ShippingWhereInput
   ) {

    try {


      console.log(where);
      const result = await firstMall();

      console.log(result);
      return {};

    } catch(e) {
      console.error(e);
    }
   }
}