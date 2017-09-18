import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { LoginComponent } from './login/login.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MapPageComponent } from './map-page/map-page.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes =[
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:'client-home',
        component: ClientHomeComponent
      },
      {
          path: 'business-home',
          component: BusinessHomeComponent
      },
      {
          path: 'statistics',
          component: StatisticsComponent
      },
      {
          path:'AHN-maps',
          component: MapPageComponent
      },
      {
          path:'sign-in',
          component: SignInComponent
      }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
