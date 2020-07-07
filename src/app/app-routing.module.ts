import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
