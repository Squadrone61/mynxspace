import { Directive, Inject, OnDestroy, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[uiComponentContainer]',
})
export class ComponentContainerDirective implements OnDestroy {
  id: number; // basic id as Date.now()
  constructor(
    private vc: ViewContainerRef,
    @Inject('component-creator-service') private ccs
  ) {
    this.id = Date.now();
    ccs.registerContainer(vc, this.id);
  }

  ngOnDestroy() {
    this.ccs.destroyContainer(this.vc, this.id);
  }
}
