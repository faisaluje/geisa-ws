import { Injectable } from '@nestjs/common'
import { md5, sha1 } from 'locutus/php/strings'

@Injectable()
export class PasswordService {
  validatePasswordMd5(
    encryptedPassword: string,
    plainPassword: string,
  ): boolean {
    return encryptedPassword === md5(plainPassword)
  }

  validatePasswordSha1(
    encryptedPassword: string,
    plainPassword: string,
  ): boolean {
    return encryptedPassword === sha1(plainPassword)
  }

  validatePassword(encryptedPassword: string, plainPassword: string): boolean {
    const isMd5 = this.validatePasswordMd5(encryptedPassword, plainPassword)
    if (!isMd5) {
      return this.validatePasswordSha1(encryptedPassword, md5(plainPassword))
    }

    return isMd5
  }
}
