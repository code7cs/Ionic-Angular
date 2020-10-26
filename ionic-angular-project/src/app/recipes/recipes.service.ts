import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/brown-rice-bibimbap-c99986ac.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    }, {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://img.hellofresh.com/f_auto,fl_lossy,h_300,q_auto,w_450/hellofresh_s3/image/5ea70fe14c4efb3fb12140f1-af8fa452.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];
  constructor() { }

  getAllRecipe() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    }
  }
}
