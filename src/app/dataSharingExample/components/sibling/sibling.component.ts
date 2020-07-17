import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SiblingComponent implements OnInit {
  interval;
  counter = 0;
  constructor(public dataProvider:DataService, private cdf:ChangeDetectorRef) {
    this.cdf.detach();
    //this.cdf.detectChanges();
   }

  ngOnInit(): void {       
    console.log('sibling ngOnInit');
    this.interval=setInterval(()=>{
      // this.cdf.detach();
      // this.cdf.markForCheck();      
      // this.cdf.detectChanges();
      this.counter++;
      // console.log('counter:', this.counter);      
    },1000);
  }
  ngOnDestroy(){
    console.log('sibling ngOnDestroy');
    clearInterval(this.interval);
  }

}
