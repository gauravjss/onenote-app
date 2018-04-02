import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  ingredientChanged = new Subject<IngredientModel[]>();
  startedEditing = new Subject<number>();
  constructor() { }

  private ingredients:IngredientModel[] = [
    new IngredientModel('Eggs',2),
    new IngredientModel('Apple',2),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient:IngredientModel){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.getIngredients());
  }

  addIngredients(ingredients: IngredientModel[]){
    // Spread operator spreads the arry into a list
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.getIngredients());
  }

  updateIngredient(index: number,
                   newIngredient: IngredientModel){
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.getIngredients());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index ,1);
    this.ingredientChanged.next(this.getIngredients());
  }

}
