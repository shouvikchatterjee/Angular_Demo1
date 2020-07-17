import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() dataForChild;
  @Output() deleteThisItem: EventEmitter<any> = new EventEmitter();
  c = console.log;
  constructor() { }

  ngOnInit(): void {
    this.c('child ngOnInit');
  }
  ngOnDestroy() {
    this.c('child ngOnDestroy');
  }

  sendToParent(id) {
    this.deleteThisItem.emit(id);
  }

}
