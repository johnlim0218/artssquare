import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class ShippingObject {
  @Field(type => ID)
  id!: number;

  @Field()
  productName!: string;

  @Field()
  recipient!: string;

  @Field()
  address!: string;

  @Field()
  date!: string;

}