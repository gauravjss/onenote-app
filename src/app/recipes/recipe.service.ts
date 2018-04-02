import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from './recipe.model';
import {IngredientModel} from '../shared/ingredient.model'
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<RecipeModel[]>();

  constructor() { }

  private  recipes:RecipeModel[] = [
    new RecipeModel('Chicken Burger',
      'Big Fat Burger',
      'https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e2/guid/WW-Feta-Chicken-Burgers/b83e3206-f74a-459d-bfc6-c5718dc9bcd0.jpg',
      [new IngredientModel('Chicken',1),
      new IngredientModel('Buns',2)]),
    new RecipeModel('Veggie Burger',
      'Vegan is the best - Go Green ! ',
      'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_veggie-burger.jpg',
      [new IngredientModel('Potato cake with buns',1),
      new IngredientModel('fries',10)])
  ];

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
}
