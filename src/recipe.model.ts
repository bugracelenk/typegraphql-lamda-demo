import { getModelForClass, prop as Property } from "@typegoose/typegoose";
import { Field as GqlField, ObjectType as GqlType } from "type-graphql";

@GqlType()
export class Recipe {
    @GqlField(_type => String)
    readonly _id!: string;

    @GqlField(_type => String)
    @Property({ required: true })
    title!: string;

    @GqlField(_type => String, { nullable: true })
    @Property({ required: false })
    description?: string;

    @GqlField(_type => Date, { nullable: true })
    @Property({ required: false, type: Date})
    creationDate?: Date;

    @GqlField(_type => [String])
    @Property({ required: true, type: [String] })
    ingredients!: string[];
}

export const RecipeModel = getModelForClass(Recipe, { schemaOptions: { timestamps: true }});