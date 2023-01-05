import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5), // {name: 'Apples', amount: 5},
    new Ingredient('Tomatoes', 10), // {name: 'Tomatoes', amount: 10}
  ];
  constructor() {}
  ngOnInit() {}
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
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
