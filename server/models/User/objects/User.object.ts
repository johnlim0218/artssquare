import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class UserObject {
  @Field(type => ID)
  id: number;

  constructor(
    id: number,
    email: string
    ){
    this.id = id;
    this.email = email;
  }

  @Field()
  email: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}