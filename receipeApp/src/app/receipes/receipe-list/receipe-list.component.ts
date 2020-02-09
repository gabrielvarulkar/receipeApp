import { Component, OnInit } from "@angular/core";

import { Receipe } from "../receipe.model";

@Component({
  selector: "app-receipe-list",
  templateUrl: "./receipe-list.component.html",
  styleUrls: ["./receipe-list.component.css"]
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [
    new Receipe(
      "A Test Receipe",
      "This is simply a test!",
      "https://glutenfreeonashoestring.com/_main_site/wp-content/uploads/2016/03/baked-1.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
