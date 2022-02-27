import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path : 'driver',
    loadChildren : () => import('../driver/driver.module').then(m => m.DriverModule)
  },
  {
    path : 'client',
    loadChildren : () => import('../client/client.module').then(m => m.ClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
