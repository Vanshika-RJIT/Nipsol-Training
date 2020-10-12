import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
import { AllUsersComponent } from "./all-users/all-users.component";
import { HomeComponent } from "./home/home.component";
import { CovidMeterComponent } from "./covid-meter/covid-meter.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "AddUser", component: AddUserComponent },
  { path: "AllUsers", component: AllUsersComponent },
  {
    path: "CovidMeter",
    component: CovidMeterComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  AddUserComponent,
  AllUsersComponent
];
