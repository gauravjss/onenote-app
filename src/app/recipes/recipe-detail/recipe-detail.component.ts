import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input()recipeReceived:RecipeModel;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addToShoppingList(){

    /*This approach would emit event each time an ingredient is added.
    this.recipeReceived.ingredients.forEach(
      (ingredient: IngredientModel)=>{
          this.slService.addIngredient(ingredient);
      }
    ); */

    // Better Approach of emitting event just once
    this.slService.addIngredients(this.recipeReceived.ingredients);

  }

}
