import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public term = new EventEmitter<string>;

  search(term: string): void{
    this.term.emit( term );
    //console.log(term);
  }

}
