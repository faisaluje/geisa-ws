import { Module } from '@nestjs/common';
import { SekolahService } from './sekolah.service';
import { SekolahController } from './sekolah.controller';

@Module({
  providers: [SekolahService],
  controllers: [SekolahController]
})
export class SekolahModule {}
