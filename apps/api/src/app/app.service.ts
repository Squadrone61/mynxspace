import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { createReadStream } from 'fs';

@Injectable()
export class AppService {
  async getStaticFile(filename: string) {
    return createReadStream(join(__dirname, 'assets', filename));
  }
}
