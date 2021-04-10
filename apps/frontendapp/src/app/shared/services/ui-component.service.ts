import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiComponentService {
  vc: ViewContainerRef;

  constructor(
    private r: ComponentFactoryResolver,
    @Inject('component-creator-service') private ccs
  ) {
    ccs.onContainerCreated((container) => {
      this.vc = container;
    });
    ccs.onContainerDestroyed((container) => {
      this.vc = this.vc === container ? undefined : this.vc;
    });
  }

  loadComponent(
    component: Type<unknown>,
    inputs?: Record<string, unknown>
  ): void {
    if (!this.vc) {
      return;
    }
    this.vc.clear();

    // all created components should be S.C.A.M's. So, load module first
    /* this.loadModule();*/

    const factory = this.r.resolveComponentFactory(component);
    const componentRef = this.vc.createComponent(factory);

    if (inputs) {
      Object.keys(inputs).forEach((key) => {
        componentRef.instance[key] = inputs[key];
      });
    }
  }

  clearComponent() {
    this.vc.clear();
  }
}
