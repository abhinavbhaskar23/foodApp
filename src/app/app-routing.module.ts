import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodOrderComponent } from './food-order/food-order.component';

const routes: Routes = [{path: 'food-list', component: FoodListComponent},
{path: 'food-order', component: FoodOrderComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
