import {Component} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {RecipeModel} from '../../recipes/recipe.model';
import {RecipeService} from '../../recipes/recipe.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isCollapsed = true;
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  constructor(private dsService: DataStorageService,
              private recService: RecipeService,
              private authService: AuthService){}

  onSaveData(){
    this.isCollapsed = !this.isCollapsed;
    this.dsService.storeRecipes()
      .subscribe(
        (response) =>{
            console.log(response);
        }
      );
  }

  onFetchData(){
    this.isCollapsed = !this.isCollapsed;
    this.dsService.getRecipes().subscribe(
      (response: RecipeModel[]) => {
        console.log(response);
        this.recService.setRecipes(response);
      }
    );
  }

  onLogout(){
    this.authService.logout();
    this.isCollapsed = !this.isCollapsed;
  }

  onCollapsedToggle(){
    this.isCollapsed = !this.isCollapsed;
  }
}
