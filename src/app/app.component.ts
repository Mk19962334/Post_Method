import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  Studentdata!: FormGroup;
  constructor(private fb:FormBuilder, private api:SharedService){
  
  }
  title = 'Post_Method';
  ngOnInit(): void {

    this.Studentdata = this.fb.group({
      firstname: [''],
      lastname: [''],
     
    });
  
  }

  PostData(){

    this.api.PostDetails(this.Studentdata.value).subscribe(res=>{
      console.log(res)
    })

  }
 
}
