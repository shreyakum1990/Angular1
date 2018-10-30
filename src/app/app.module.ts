import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularWorkComponent } from './angular-work/angular-work.component';
import { FirstAppComponent } from './first-app/first-app.component';
import { TypescriptIntroComponent } from './typescript-intro/typescript-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularWorkComponent,
    FirstAppComponent,
    TypescriptIntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path : '', component : HomeComponent},
      {path : 'how-angular-works', component : AngularWorkComponent},
      {path : 'first-app', component : FirstAppComponent},
      {path : 'typescript-intro', component : TypescriptIntroComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
