import { Controller, Get, Res, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/cv')
  async getCV(@Res() res: Response) {
    const buffer = await this.appService.getStaticFile('SafaAkyuzCV.pdf');
    return buffer.pipe(res);
  }
}
