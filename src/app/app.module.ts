import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormComponent} from './components/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
