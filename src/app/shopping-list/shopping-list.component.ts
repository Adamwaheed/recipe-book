import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shopping-list/Ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [
    new Ingredient("Apples",8),
    new Ingredient("Tomato",4),
    new Ingredient("Orange",2)
  ]

  constructor() { }

  ngOnInit() {
  }

}
