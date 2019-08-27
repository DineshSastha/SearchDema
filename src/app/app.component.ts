import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
 
   books =[ 
    {"title": "Abc","author":"xyz","year":"2016"},
    {"title": "Naveen","author":"xyz","year":"2016"},
    {"title": "Dinesh","author":"xyz","year":"2016"},
    {"title": "Hello","author":"xyz","year":"2016"}
  ]

  
  ngOnInit()
    {
      
      
    }
  

}
