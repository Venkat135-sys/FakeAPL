import { Component, OnInit } from '@angular/core';
import { DessertsDataService } from '../desserts-data.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit  {

  desserts:Recipe[]=[]

  constructor(private ds:DessertsDataService){}

  ngOnInit(){
    this.desserts = this.ds.getDessertsdata();
  }

  

}
