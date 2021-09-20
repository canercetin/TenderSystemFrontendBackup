import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category1={categoryId:1, categoryName:"Laptop"}
  category2={categoryId:2, categoryName:"Mouse"}
  category3={categoryId:3, categoryName:"Keyboard"}
  categories=[this.category1,this.category2,this.category3]
  constructor() { }

  ngOnInit(): void {
  }

}
