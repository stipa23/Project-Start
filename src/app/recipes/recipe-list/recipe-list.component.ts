import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output()  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test' ,'https://banner2.cleanpng.com/20190304/lbv/kisspng-beefsteak-t-bone-steak-vector-graphics-5c7dbb7c79ba81.5488517015517438684986.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test' ,'https://banner2.cleanpng.com/20190304/lbv/kisspng-beefsteak-t-bone-steak-vector-graphics-5c7dbb7c79ba81.5488517015517438684986.jpg')
  ];
  constructor(){  }
  ngOnInit(): void {}
    
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }


}
