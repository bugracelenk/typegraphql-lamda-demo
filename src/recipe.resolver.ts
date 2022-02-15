import { Context } from "apollo-server-core";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Inject } from "typedi";
import { RecipeCreateDTO } from "./recipe.create.dto";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Resolver(() => Recipe)
export class RecipeResolver {
    constructor (@Inject('recipeService') private readonly recipeService: RecipeService) {}

    @Query(() => [Recipe], { nullable: false })
    async getAllRecipes() {
        return await this.recipeService.getAllRecipes()
    }
    
    @Query(() => Recipe, { nullable: true })
    async getRecipeWithId(@Arg('recipeId') recipeId: string, @Ctx() ctx: Context): Promise<Recipe | null> {
        return await this.recipeService.getRecipeWithId(recipeId);
    }

    @Query(() => Recipe, { nullable: true })
    async getRecipeWithTitle(@Arg('title') title: string, @Ctx() ctx: Context): Promise<Recipe | null> {
        return await this.recipeService.getRecipeWithTitle(title);
    }

    @Mutation(() => Recipe, {nullable: false})
    async createRecipe(@Arg('input') args: RecipeCreateDTO): Promise<Recipe> {
        return await this.recipeService.createRecipe(args);
    }
}