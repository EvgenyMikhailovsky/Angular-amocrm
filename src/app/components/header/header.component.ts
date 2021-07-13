import { Component, OnInit } from "@angular/core";

@Component({
  selector: "main-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  items = [
    {
      text: "Home",
      path: "/"
    },
    {
      text: "Support",
      path: "/support"
    },
    {
      text: "Cars",
      path: "/cars"
    }
  ];

  currentPath = "";

  ngOnInit() {

  }
}