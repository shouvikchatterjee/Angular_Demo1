import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { SiblingComponent } from './components/sibling/sibling.component';
import { DataSharingRoutingModule } from './data-sharing-routing.module';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    SiblingComponent
  ],
  imports: [
    CommonModule,   
    DataSharingRoutingModule
  ]
})
export class DataSharingModule { }