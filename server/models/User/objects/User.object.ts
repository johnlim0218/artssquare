import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class UserObject {
  @Field(type => ID)
  id!: number;
 
  @Field()
  email!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;

  @Field({ nullable: true })
  deletedAt!: Date;
}