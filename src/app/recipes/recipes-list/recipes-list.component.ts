import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[]= [
    new Recipe('Lemon Chicken','Lemon Chicken and Spaghetti Squash','http://keeprecipes.com/sites/keeprecipes/files/imagecache/recipe_large/6531_1485980632_0.jpg'),
    new Recipe('Lemon Chicken','Lemon Chicken and Spaghetti Squash','http://keeprecipes.com/sites/keeprecipes/files/imagecache/recipe_large/6531_1485980632_0.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
