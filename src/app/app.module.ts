import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from "@angular/forms";
import { AddCarComponent } from './add-car/add-car.component';
import {BackgroundDirective} from "./directives/background.directive";
import { MyDirectiveDirective } from './directives/my-directive.directive';
import {MyComponent} from "./my/my.component";
import {PowPipe} from "./pow.pipe";
import { MyTestPipePipe } from './my-test-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    BackgroundDirective,
    MyDirectiveDirective,
    MyComponent,
    PowPipe,
    MyTestPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
