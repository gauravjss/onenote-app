import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {

  isRecipeEmpty = false;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().length === 0 ? this.isRecipeEmpty = true : this.isRecipeEmpty = false ;
  }

}
