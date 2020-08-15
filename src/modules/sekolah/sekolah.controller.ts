import { Controller, Get, Param } from '@nestjs/common'
import { ApiExcludeEndpoint } from '@nestjs/swagger'
import { SekolahResponse } from 'src/responses/sekolah.response'

import { SekolahService } from './sekolah.service'

@Controller('/api/sekolah')
export class SekolahController {
  constructor(private sekolahService: SekolahService) {}

  @ApiExcludeEndpoint()
  @Get('/:npsn')
  getSekolah(@Param('npsn') npsn: string): Promise<SekolahResponse> {
    return this.sekolahService.getSekolah({ npsn })
  }
}
