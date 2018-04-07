import { Injectable } from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
import {RecipeModel} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes(){
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization','Token');

   /* return this.httpClient.put(
      'https://gaurav-recipe-book.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        observe: 'body',
        params: new HttpParams().set(
          'auth',token
        )
        /!*headers: headers*!/
      });*/

    const req = new HttpRequest('PUT', 'https://gaurav-recipe-book.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true,
       /* params: new HttpParams().set(
          'auth',token
        )*/});
    return this.httpClient.request(req);
  }

  getRecipes(){
    const token = this.authService.getToken();

    /*this.httpClient.get<RecipeModel[]>(
      'https://gaurav-recipe-book.firebaseio.com/recipes.json?auth='+token)*/
    return this.httpClient.get<RecipeModel[]>(
      'https://gaurav-recipe-book.firebaseio.com/recipes.json?auth='+token,
        {
          observe: 'body',
          responseType: 'json'
      }
    ).map(
      (recipes) => {
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
