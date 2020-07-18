import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class ShippingObject {
  // @Field(type => ID)
  // id!: number;

  @Field()
  orderNumber!: string;

  @Field()
  productName!: string;

  @Field()
  recipient!: string;
  
  @Field({ nullable: true })
  phone!: string;
  
  @Field()
  cellPhone!: string;

  @Field()
  addressStreet!: string;

  @Field()
  address!: string;

  @Field()
  addressDetail!: string;

  @Field(type => [String])
  options!: string[];

  @Field(type => [String])
  inputs!: string[];
}