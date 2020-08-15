import { Module } from '@nestjs/common';
import { PtkController } from './ptk.controller';
import { PtkService } from './ptk.service';

@Module({
  controllers: [PtkController],
  providers: [PtkService]
})
export class PtkModule {}
