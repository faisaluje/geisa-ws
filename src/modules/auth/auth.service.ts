import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AuthBody } from 'src/bodies/auth.body'
import { JwtPayloadDto } from 'src/dtos/jwt-payload.dto'
import { Pengguna } from 'src/entities/pengguna.entity'
import { HakAkses } from 'src/types/hak-akses.type'

import { PasswordService } from './password.service'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private passwordService: PasswordService,
  ) {}

  async signIn(authBody: AuthBody): Promise<string> {
    const jwtPayload = await this.validateUserPassword(authBody)

    return this.jwtService.sign(jwtPayload)
  }

  async validateUserPassword(authBody: AuthBody): Promise<JwtPayloadDto> {
    const { username, password } = authBody

    const pengguna = await Pengguna.findOne({ username })
    if (
      !pengguna ||
      !this.passwordService.validatePassword(pengguna.password, password)
    ) {
      throw new UnauthorizedException()
    }

    return {
      id: pengguna.penggunaId,
      nama: pengguna.nama,
      username: pengguna.username,
      peran: pengguna.peranId,
      hakAkses: pengguna.hakAkses || HakAkses.MONITORING,
      kodeWilayah: pengguna.wilayah?.kodeWilayah.trim() || null,
      instansi: pengguna.wilayah?.nama || 'BKD',
    }
  }
}
