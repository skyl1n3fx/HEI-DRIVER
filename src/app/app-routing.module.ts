import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P404Component } from './shared/p404/p404.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo : 'welcome'
  },
  { // Página de inicio del proyecto
    path: 'welcome',
    loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  { // Página de error
    path : 'not-found',
    component : P404Component
  },
  {
    path : '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
