import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home.component";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}