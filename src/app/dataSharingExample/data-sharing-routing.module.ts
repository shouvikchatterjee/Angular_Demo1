import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { SiblingComponent } from './components/sibling/sibling.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'sibling',
    component: SiblingComponent   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataSharingRoutingModule { }