import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: RecipeModel;
  id: number;

  constructor(private slService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onEditRecipe(){
    this.router.navigate(['edit'],
      {relativeTo: this.route});
   /* this.router.navigate(['../',this.id,'edit'],
      {relativeTo: this.route});*/
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  onAddToShoppingList(){

    /*This approach would emit event each time an ingredient is added.
    this.recipeReceived.ingredients.forEach(
      (ingredient: IngredientModel)=>{
          this.slService.addIngredient(ingredient);
      }
    ); */

    // Better Approach of emitting event just once
   this.slService.addIngredients(this.recipe.ingredients);

  }

}
