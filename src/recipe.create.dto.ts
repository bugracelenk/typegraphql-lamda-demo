import { Field, InputType } from "type-graphql";

@InputType()
export class RecipeCreateDTO {
    @Field()
    title!: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    creationDate?: Date;

    @Field(_type => [String], { nullable: false})
    ingredients!: string[]
}