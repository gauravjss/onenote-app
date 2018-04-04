import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from './recipe.model';
import {IngredientModel} from '../shared/ingredient.model'
import {Subject} from 'rxjs/Subject';
import {AuthService} from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<RecipeModel[]>();

  constructor() { }

  private  recipes: RecipeModel[] = [];

  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes.slice()[index];
  }

  addRecipe(recipe: RecipeModel){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel){
    console.log(index,newRecipe);
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
    console.log(...this.recipes,'service');
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: RecipeModel[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
