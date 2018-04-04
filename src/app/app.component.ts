import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  }
)
export class AppComponent implements OnInit{
  loadedFeature: string = 'recipe';

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDUCJPjU1-eU8oXGAcIL_ljVWUXffgljko',
      authDomain: 'gaurav-recipe-book.firebaseapp.com'
    });
  }
}
