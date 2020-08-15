import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { LOGGING_DB, NAME_DB, PASS_DB, PORT_DB, SYNC_DB, URL_DB, USER_DB } from 'src/constants'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || URL_DB,
  port: (process.env.DB_PORT as any) || PORT_DB,
  username: process.env.DB_USERNAME || USER_DB,
  password: process.env.DB_PASSWORD || PASS_DB,
  database: process.env.DB_DATABASE || NAME_DB,
  entities: [__dirname + '/../entities/*.entity.{js,ts}'],
  synchronize: SYNC_DB,
  logging: LOGGING_DB,
  connectTimeout: 30000,
  acquireTimeout: 30000,
}
