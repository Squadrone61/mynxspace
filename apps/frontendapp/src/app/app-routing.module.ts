import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { environment } from "../environments/environment";
import { RedirectGuard } from "./shared/providers/redirect.guard";
import { NoopComponent } from "./noop.component";

const devRoutes: Routes = environment.production
  ? []
  : [
    {
      path: "playground",
      loadChildren: () =>
        import("./modules/playground/playground.module").then(
          (m) => m.PlaygroundModule
        )
    }
  ];

const routes: Routes = [
  ...devRoutes,
  {
    path: "",
    loadChildren: () =>
      import("./modules/main/main.module").then((m) => m.MainModule)
  },
  {
    path: "ui-examples",
    loadChildren: () =>
      import("./modules/ui-examples/ui-examples.module").then(
        (m) => m.UiExamplesModule
      )
  },
  {
    path: "shop3d",
    loadChildren: () =>
      import("./modules/shop-3d/shop-3d.module").then((m) => m.Shop3dModule)
  },
  {
    path: "secret",
    component: NoopComponent,
    canActivate: [RedirectGuard],
    data: { externalUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
  },
  {
    path: "cv",
    component: NoopComponent,
    canActivate: [RedirectGuard],
    data: { fileUrl: "/assets/SafaAkyuzCV.pdf" }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
