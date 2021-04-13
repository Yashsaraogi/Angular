import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  typesOfShoes : string[] = ['Autocomplete', 'Badge', 'Bottom Sheet', 'Button', 'Button Toggle','Card','CheckBox','Chip','Datepicker','Dialog','Divider','Grid List','Icon','input','List','Menu','Progress bar','Progress spinner','Radio button','Ripple','Select','side Nav'];
  constructor() { }

  ngOnInit(): void {
  }

}
