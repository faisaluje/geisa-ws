import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'
import { APP_PORT } from './constants'

async function bootstrap() {
  const logger = new Logger('App')
  const app = await NestFactory.create(AppModule)
  const port = process.env.PORT || APP_PORT

  const options = new DocumentBuilder()
    .setTitle('Web Service Geisa')
    .setDescription(
      'Menyediakan log kehadiran Guru yang absen menggunakan <b>Geisa Client</b>',
    )
    .setVersion('0.1')
    .addBearerAuth()
    .setContact(
      'Geisa Online',
      'https://geisa.online',
      'geisaofficial@gmail.com',
    )
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/api', app, document, {
    customSiteTitle: 'Web Service Geisa',
    customfavIcon: 'https://report.geisa.online/favicon.ico',
  })

  logger.log(`App running on port : ${port}`)
  app.enableCors()
  await app.listen(port)
}
bootstrap()
