import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakedataService } from '../fake.service';
 
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  chefs:any[]=[];
  constructor(private fakeObj:FakedataService,private router:Router) { }
 
  ngOnInit(): void {
    this.fakeObj.getChef().subscribe(
      chefDetails=>{
        this.chefs=chefDetails;
        console.log(this.chefs);
      },
      err=>{
        console.log('err: ',err)
      }
    )
    
  }
  onSelectId(id){
    this.router.navigateByUrl('test/'+id)
  }
 
}
