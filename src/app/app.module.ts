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
import { CarrComponent } from './carr/carr.component';
import { AddCarrComponent } from './add-carr/add-carr.component';
import {CarrsService} from "./carrs.service";
import {ConsoleService} from "./console.service";

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
    MyTestPipePipe,
    CarrComponent,
    AddCarrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CarrsService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
