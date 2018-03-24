import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()recipeWasSelected = new EventEmitter<RecipeModel>();

  recipes:RecipeModel[] = [
    new RecipeModel('Plum Cake',
      'Yumylicious Plum Cake',
      'https://i.ytimg.com/vi/6nhrAsI_x2Y/maxresdefault.jpg'),
    new RecipeModel('Another Plum Cake',
      'Yumylicious Plum Cake',
      'https://i.ytimg.com/vi/6nhrAsI_x2Y/maxresdefault.jpg')
  ];

  onRecipeSelected(recipeEl:RecipeModel){
      this.recipeWasSelected.emit(recipeEl);
  }
  constructor() { }

  ngOnInit() {
  }

}
