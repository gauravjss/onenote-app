import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  recipes:RecipeModel[];

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private dsService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: RecipeModel[]) => {
        this.recipes = recipes;
      }
      );
   this.recipes = this.recipeService.getRecipes();
    /*this.dsService.getRecipes().subscribe(
      (response: RecipeModel[]) => {
        // Setting Response to the current recipe list to be displayed initially
        this.recipes = response;
        // Setting Response to the recipe list in the service which is subsequently used to edit the recipe.
        this.recipeService.setRecipes(response);
      }
    );*/
  }

  onNewRecipe(){
    this.router.navigate(['new'],
      {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
