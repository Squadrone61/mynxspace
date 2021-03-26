import { Controller, Get, Header, Res } from '@nestjs/common';
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
}
