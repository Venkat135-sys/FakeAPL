import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fake.service';

@Component({
  selector: 'app-chef-data',
  templateUrl: './chef-data.component.html',
  styleUrls: ['./chef-data.component.css']
})
export class ChefDataComponent implements OnInit {

  chefs:any={};
 
  constructor(private ar:ActivatedRoute,private fakeObj:FakedataService) { }
 
  ngOnInit(): void {
    let id=this.ar.snapshot.params.id
    this.chefs=this.fakeObj.getChefById(id).subscribe(
      data=>{
        this.chefs=data;
      },
      err=>{console.log('err is',err)}
    )
  }


}
