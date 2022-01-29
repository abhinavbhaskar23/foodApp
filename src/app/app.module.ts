import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodOrderComponent } from './food-order/food-order.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodOrderComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
