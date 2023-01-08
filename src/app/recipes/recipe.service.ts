import { Recipe } from './recipe.model';

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://banner2.cleanpng.com/20190304/lbv/kisspng-beefsteak-t-bone-steak-vector-graphics-5c7dbb7c79ba81.5488517015517438684986.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://banner2.cleanpng.com/20190304/lbv/kisspng-beefsteak-t-bone-steak-vector-graphics-5c7dbb7c79ba81.5488517015517438684986.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
