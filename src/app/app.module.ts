import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TestComponent } from './components/test/test.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LikesComponent } from './components/likes/likes.component';
import { LifeCycleComponent } from './components/lifecycle/lifecycle.component';
import { PersonComponent } from './components/person/person.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    TestComponent,
    CoursesComponent,
    LikesComponent,
    LifeCycleComponent,
    PersonComponent,
    SignupComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
