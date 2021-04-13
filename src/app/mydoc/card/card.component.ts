import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  
  public typesOfShoes : string[] = ['Autocomplete', 'Badge', 'Bottom Sheet', 'Button', 'Button Toggle','Card','CheckBox','Chip','Datepicker','Dialog','Divider','Grid List','Icon','input','List','Menu','Progress bar','Progress spinner','Radio button','Ripple','Select','side Nav'];


  data=[
   
    {
      name:"Badge",
      url:"https://material.angular.io/assets/screenshots/badge.scene.png"
    },
    {
      name:"Bottom Sheet",
      url:"https://material.angular.io/assets/screenshots/bottom-sheet.scene.png"
    },
    {
      name:"Icon",
      url:"https://material.angular.io/assets/screenshots/icon.scene.png"
    },
    {
      name:"Menu",
      url:"https://material.angular.io/assets/screenshots/menu.scene.png"
    },
    {
      name:"Slider",
      url:"https://material.angular.io/assets/screenshots/slider.scene.png"
    }



  ]
  
  


  ngOnInit(): void {
  }

}
