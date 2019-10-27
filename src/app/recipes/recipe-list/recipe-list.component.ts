import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'A test' ,
      'This is a test',
      'https://www.seriouseats.com/2019/08/20190809-burst-tomato-xo-pasta-vicky-wasik21-.jpg'
    )];
  constructor() { }

  ngOnInit() {
  }

}
