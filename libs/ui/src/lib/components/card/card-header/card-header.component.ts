import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ui-card-header',
  template: `
    <div class="flex flex-row max-h-12 mb-4">
      <div
        *ngIf="avatar"
        class="flex avatar my-auto rounded-full bg-cover flex-shrink-0 mr-4"
        [ngStyle]="{ 'background-image': 'url(' + avatar + ')' }"
      ></div>
      <div class="flex flex-col">
        <ng-content select="ui-card-title"></ng-content>
        <ng-content select="ui-card-subtitle"></ng-content>
      </div>
    </div>
  `,
  styles: ['.avatar{ height: 40px; width: 40px}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHeaderComponent {
  @Input()
  avatar: string;
}
