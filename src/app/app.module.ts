import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RenderCarIdComponent } from './components/render-car-id/render-car-id.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HomeComponent,
    RenderCarIdComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
          {path: 'link/home', component: HomeComponent},
          {path: 'link/cars', component: CarsComponent, children: [
              {path: ':id', component: RenderCarIdComponent}
            ]}
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
