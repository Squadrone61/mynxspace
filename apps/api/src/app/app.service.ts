import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class AppService {
  async getStaticFile(filename: string) {
    const buffer = fs.readFileSync(path.join(__dirname, 'assets', filename));
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
  }
}
