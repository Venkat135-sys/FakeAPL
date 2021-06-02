import { Component, OnInit } from '@angular/core';
import { CooldrinkDataService } from '../cooldrink-data.service';

import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-cooldrink',
  templateUrl: './cooldrink.component.html',
  styleUrls: ['./cooldrink.component.css']
})
export class CooldrinkComponent implements OnInit {
  
  cooldrink:Recipe[]=[]

  constructor(private cds:CooldrinkDataService){

  }
  
  ngOnInit(){
    this.cooldrink = this.cds.getCoolDrinkdata();
  }

  

}
