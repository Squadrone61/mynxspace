import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { settingsIcon } from '@app/svg/settings';
import { socialsIcons } from '@app/svg/socials';
import { slogoIcon } from '@app/svg/slogo';

@NgModule({
  declarations: [],
  imports: [
    SvgIconsModule.forRoot({
      icons: [slogoIcon, settingsIcon, ...socialsIcons],
    }),
  ],
  exports: [SvgIconsModule],
})
export class IconsModule {}
