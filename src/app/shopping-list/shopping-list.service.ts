import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  ingredientAdded = new Subject<IngredientModel[]>();

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
    this.ingredientAdded.next(this.getIngredients());
  }

  addIngredients(ingredients: IngredientModel[]){
    // Spread operator spreads the arry into a list
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.getIngredients());
  }

}
