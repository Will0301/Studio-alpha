import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  photo = 1;
  constructor() {
   }

   next(){
     if (this.photo < 5) {
      this.photo++;
     }
     else{
       this.photo = 1;
     }
    }

     back(){
      if (this.photo > 1) {
       this.photo--;
      }
      else{
        this.photo = 5;
      }
   }

  ngOnInit(): void {
  }

}
