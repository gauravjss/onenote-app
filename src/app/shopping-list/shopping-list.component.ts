import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:IngredientModel[] = [
   new IngredientModel('Eggs',2),
   new IngredientModel('Apple',2),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:IngredientModel){
    this.ingredients.push(ingredient);
  }

}
