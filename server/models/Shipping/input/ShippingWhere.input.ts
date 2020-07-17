import { Field, InputType } from 'type-graphql';

@InputType()
export class ShippingWhereInput {
  @Field({ nullable: true })
  id!: number;

  @Field({ nullable: true })
  fromDate!: Date;

  @Field({ nullable: true })
  toDate!: Date;
}