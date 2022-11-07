import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ShowComponentComponent } from './show-component/show-component.component';




@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ShowComponentComponent
=======
  
>>>>>>> c3d5791cda4b1e95c59444ed488dbbe810a3bd38
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
