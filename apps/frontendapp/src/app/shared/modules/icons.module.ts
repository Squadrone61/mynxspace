import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { baseIcons } from '@app/svg/base';
import { socialsIcons } from '@app/svg/socials';

@NgModule({
  declarations: [],
  imports: [
    SvgIconsModule.forRoot({
      icons: [...baseIcons, ...socialsIcons],
    }),
  ],
  exports: [SvgIconsModule],
})
export class IconsModule {}
