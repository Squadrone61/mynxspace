import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from '../button/button.component';

@Component({
  selector: 'ui-dropdown',
  template: `
    <ui-button
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      (uiClick)="isOpen = !isOpen"
      >menu
    </ui-button>
    <ng-template
      cdkConnectedOverlay
      #overlay="cdkConnectedOverlay"
      (attach)="attached(overlay)"
      (overlayOutsideClick)="isOpen = false"
      [cdkConnectedOverlayOpen]="isOpen"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayHasBackdrop]="false"
      cdkConnectedOverlayPanelClass="!bg-opacity-0"
    >
      <div class="w-[12rem]">
        <div
          class="bg-white text-base float-left py-2 list-none
           text-left rounded shadow-lg mt-1 w-[12rem]"
        >
          <ng-content select="dropdown-content"></ng-content>
        </div>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  isOpen = false;

  attached(overlay: CdkConnectedOverlay) {
    const orc = overlay.overlayRef.hostElement.classList;
    orc.add('!bg-opacity-0');
  }
}

@NgModule({
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
  imports: [OverlayModule, ButtonModule],
})
export class DropdownModule {}
