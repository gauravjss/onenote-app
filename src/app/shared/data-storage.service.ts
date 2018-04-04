import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
import {RecipeModel} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService) { }

  storeRecipes(){
    return this.http.put(
      'https://gaurav-recipe-book.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
  }

  getRecipes(){
    return this.http.get(
      'https://gaurav-recipe-book.firebaseio.com/recipes.json'
    ).map(
      (response: Response) => {
        const recipes: RecipeModel[] = response.json();
        for (let recipe of recipes){
          if(!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    );
  }

}
