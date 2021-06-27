import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export enum Redirect {
  externalUrl = "externalUrl",
  fileUrl = "fileUrl"
}

@Injectable({
  providedIn: "root"
})
export class RedirectGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    window.location.href = route.data[Redirect.externalUrl] || window.location.origin + route.data[Redirect.fileUrl];
    return false;
  }

}
