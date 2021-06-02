import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fake.service';
import { Post } from '../models/post.model';



@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})

export class TestingComponent implements OnInit {


  postdata : Post[]=[]

  constructor(private fake:FakedataService) { }

  ngOnInit(): void {
     this.fake.getData().subscribe(
      datapost=>{
        this.postdata = datapost;
      },
      error=>{
        console.log(error);
        
      }
    )
  }

    

  
 
}
