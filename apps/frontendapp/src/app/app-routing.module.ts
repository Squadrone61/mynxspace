import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

const devRoutes: Routes = environment.production
  ? []
  : [
      {
        path: 'playground',
        loadChildren: () =>
          import('./modules/playground/playground.module').then(
            (m) => m.PlaygroundModule
          ),
      },
    ];

const routes: Routes = [...devRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
