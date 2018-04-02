import { Component, OnInit, OnDestroy } from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients:IngredientModel[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientChanged
      .subscribe(
        (ingredients: IngredientModel[])=>{
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditItem(id: number){
    this.slService.startedEditing.next(id);
  }


}
