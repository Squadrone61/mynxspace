import { Directive, Inject, OnDestroy, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[uiComponentContainer]',
})
export class ComponentContainerDirective implements OnDestroy {
  constructor(
    private vc: ViewContainerRef,
    @Inject('component-creator-service') private ccs
  ) {
    ccs.registerContainer(vc);
  }

  ngOnDestroy() {
    this.ccs.destroyContainer(this.vc);
  }
}
