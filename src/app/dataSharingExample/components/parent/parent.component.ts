import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  list = [];
  id = 1;
  interval;
  numberOfTicks = 0;
  c = console.log;

  constructor(private changeDetectrorRef:ChangeDetectorRef) {
    this.interval = setInterval(()=>{
      this.numberOfTicks++;
      //console.log('numberOfTicks:', this.numberOfTicks);
      // require view to be updated
      // this.changeDetectrorRef.markForCheck();
      // this.changeDetectrorRef.detectChanges();
    },1000);
   }

  ngOnInit(): void {
    this.c('parent ngOnInit');
  }

  ngOnDestroy(){
    this.c('parent ngOnDestroy');
    clearInterval(this.interval);
  }

  deleteItem(id){    
    let newArr=[];
    for(let i=0;i<this.list.length;i++){
      if(id == this.list[i].id){
        this.list.splice(i,1);   
        break;     
      }
    }
    
    for(let i=0;i<this.list.length;i++){      
      newArr.push(this.list[i].id);      
    }
    /* newArr = this.list;
    newArr.sort((a,b)=>{return a.id - b.id}); */
    
    if(newArr.length>0){
      //this.id=Math.max.apply(null,newArr);
      this.id=newArr[newArr.length-1];
    }else{
      this.id=0;
    }
    this.id++;    
  }
  
  addToList(e){
    const val = e.target.value;
    let obj = {};
    if(val){
      obj = {'id':this.id,'value':val};
      this.list.push(obj);
      this.id++;
    }    
    e.target.value = '';
  }

  updateView(){
    
  }
}