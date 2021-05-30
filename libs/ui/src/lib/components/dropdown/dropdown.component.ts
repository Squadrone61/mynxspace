import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from '../button/button.component';
import { btnOptions } from '../../models';

@Component({
  selector: 'ui-dropdown',
  template: `
    <ui-button
      class="inline-block"
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      (uiClick)="isOpen = true"
      [options]="btnOptions"
      ><ng-content select="[dropdown-button]"></ng-content>
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
        <div class="rounded shadow-lg mt-1 pb-3 w-[12rem] grid grid-cols-1">
          <ng-content select="dropdown-content"></ng-content>
        </div>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() btnOptions: Partial<btnOptions>;
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
