import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
}

// // ARRAY
// ["audi", "mečka", "bmw", "itd"]

// // OBject

// {
//   marka: "audi",
//   model: "a3",
//   motor: 1.6
// }

// onIngredientAdded(ingredient: Ingredient){
//   this.ingredients.push(ingredient);
// }

// ime funkcije => onIngredientAdded
// ingredient => vrijednost koju funkicja prima
// :Ingredient => tip vrijednosti koju funkcija prima
// {} => tijelo funkcije (body)
