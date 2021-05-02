import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Injectable()
export class UiComponentService {
  vc: ViewContainerRef;
  cid: number;
  constructor(
    private r: ComponentFactoryResolver,
    @Inject('component-creator-service') private ccs
  ) {
    ccs.onContainerCreated((container, id) => {
      this.vc = container;
      this.cid = id;
    });
    ccs.onContainerDestroyed((container, id) => {
      this.vc = this.cid === id ? undefined : this.vc;
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
