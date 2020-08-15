import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { typeOrmConfig } from './configs/typeorm.config'
import { AuthModule } from './modules/auth/auth.module'
import { LogsModule } from './modules/logs/logs.module'
import { PtkModule } from './modules/ptk/ptk.module'
import { SekolahModule } from './modules/sekolah/sekolah.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    SekolahModule,
    PtkModule,
    LogsModule,
  ],
})
export class AppModule {}
