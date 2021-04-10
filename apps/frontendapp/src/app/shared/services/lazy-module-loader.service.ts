/*
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LazyModuleLoaderService {
  private lazyMap: Map<string, Promise<unknown>> = new Map();

  getLazyModule(key: string): Promise<unknown> {
    return this.lazyMap.get(key);
  }

  doesThisExist(key: string): boolean {
    return this.lazyMap.has(key);
  }

  loadLazyModule(key: string, src: string): Observable<any> {
    return of(
      this.lazyMap.set(
        key,
        import(src).then((m) => m[key])
      )
    ).pipe(take(1));
  }
}
*/
