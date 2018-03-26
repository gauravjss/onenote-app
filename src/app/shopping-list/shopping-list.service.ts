import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  ingredientAdded = new EventEmitter<IngredientModel[]>();

  constructor() { }

  private ingredients:IngredientModel[] = [
    new IngredientModel('Eggs',2),
    new IngredientModel('Apple',2),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:IngredientModel){
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.getIngredients());
  }

  addIngredients(ingredients: IngredientModel[]){
    // Spread operator spreads the arry into a list
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.getIngredients());
  }

}
