import { Controller, Get, Header, Redirect, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/cv')
  @Header('Content-Type', 'application/pdf')
  async getCV(@Res() res) {
    const stream = await this.appService.getStaticFile('SafaAkyuzCV.pdf');
    stream.pipe(res);
  }

  @Get('/important')
  @Redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 302)
  async redirect() {
    return;
  }
}
