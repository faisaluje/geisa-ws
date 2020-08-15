import { HakAkses } from 'src/types/hak-akses.type'

export class JwtPayloadDto {
  id: string
  nama: string
  username: string
  peran: number
  hakAkses: HakAkses
  kodeWilayah: string
  instansi: string
}
