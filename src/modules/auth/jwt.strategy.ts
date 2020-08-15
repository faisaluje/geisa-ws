import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { JWT_KEY } from 'src/constants'
import { JwtPayloadDto } from 'src/dtos/jwt-payload.dto'
import { Pengguna } from 'src/entities/pengguna.entity'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || JWT_KEY,
    })
  }

  async validate(payload: JwtPayloadDto): Promise<JwtPayloadDto> {
    const { username } = payload
    const pengguna = await Pengguna.findOne({ username })
    if (!pengguna) {
      throw new UnauthorizedException()
    }

    return payload
  }
}
