import { Service } from "typedi";
import { RecipeCreateDTO } from "./recipe.create.dto";
import { Recipe, RecipeModel } from "./recipe.model";

@Service()
export class RecipeService {

    async getAllRecipes(): Promise<Recipe[] | null> {
        return RecipeModel.find();
    }

    async getRecipeWithId(recipeId: string): Promise<Recipe | null> {
        return await RecipeModel.findById(recipeId);
    }
    
    async getRecipeWithTitle(title: string): Promise<Recipe | null> {
        return await RecipeModel.findOne({ title });
    }

    async createRecipe(args: RecipeCreateDTO): Promise<Recipe> {
        return await RecipeModel.create(args);
    }

}