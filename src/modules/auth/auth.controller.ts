import { Body, Controller, Get, Post, Res, UseGuards, ValidationPipe } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { AuthBody } from 'src/bodies/auth.body'
import { ErrorResponse } from 'src/responses/error.response'

import { AuthService } from './auth.service'

@ApiTags('Auth')
@Controller('/api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: 'Autentikasi untuk mendapatkan API Token Geisa',
  })
  @ApiResponse({
    status: 201,
    description: 'Authentikasi berhasil',
    type: String,
  })
  @ApiResponse({
    status: 401,
    description: 'Authentikasi Gagal',
    type: ErrorResponse,
  })
  @Post('/')
  signIn(@Body(ValidationPipe) authBody: AuthBody): Promise<string> {
    return this.authService.signIn(authBody)
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Mengecek status API Token Geisa masih valid atau tidak',
  })
  @ApiResponse({
    status: 401,
    description:
      'Token tidak valid dan tidak bisa dipakai. Login kembali untuk mendapatkan token yang baru',
    type: ErrorResponse,
  })
  @ApiResponse({
    status: 202,
    description: 'Token masih valid dan bisa dipakai',
  })
  @UseGuards(AuthGuard())
  @Get('/')
  cekToken(@Res() res: Response): void {
    res.status(202).send()
  }
}
