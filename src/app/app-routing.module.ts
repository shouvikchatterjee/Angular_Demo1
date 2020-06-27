import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LifeCycleComponent } from './components/lifecycle/lifecycle.component';
import { LikesComponent } from './components/likes/likes.component';
import { PersonComponent } from './components/person/person.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestComponent } from './components/test/test.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'courses',component:CoursesComponent},
{path:'lifecycle',component:LifeCycleComponent},
{path:'likes',component:LikesComponent},
{path:'person',component:PersonComponent},
{path:'quiz',component:QuizComponent},
{path:'signup',component:SignupComponent},
{path:'test',component:TestComponent},
{path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }