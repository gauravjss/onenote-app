import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
import {RecipeModel} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes(){
    const token = this.authService.getToken();
    return this.http.put(
      'https://gaurav-recipe-book.firebaseio.com/recipes.json?auth='+token,
      this.recipeService.getRecipes());
  }

  getRecipes(){
    const token = this.authService.getToken();

    return this.http.get(
      'https://gaurav-recipe-book.firebaseio.com/recipes.json?auth='+token
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
