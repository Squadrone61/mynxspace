import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardTitleComponent } from './card-header/card-title/card-title.component';
import { CardSubtitleComponent } from './card-header/card-subtitle/card-subtitle.component';
import { CardImageDirective } from './card-body/card-image/card-image.directive';
import { CardFooterComponent } from './card-footer/card-footer.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    CardImageDirective,
    CardFooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    CardImageDirective,
    CardFooterComponent,
  ],
})
export class CardModule {}
