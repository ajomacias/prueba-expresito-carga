import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() { }
  
  @Output() eventSearch = new EventEmitter<string>()

  handlerClickSearch(value : string){
    
    this.eventSearch.emit(value);

  }

}
