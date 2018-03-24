import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { ListComponentComponent } from './list-component/list-component.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
