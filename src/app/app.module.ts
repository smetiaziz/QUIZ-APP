import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainQuizComponent } from './pages/main-quiz/main-quiz.component';
import { QuestionComponent } from './pages/question/question.component';
import { OptionsComponent } from './pages/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    MainQuizComponent,
    QuestionComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
