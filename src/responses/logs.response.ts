import { ApiProperty } from '@nestjs/swagger'

export class LogsResponse {
  @ApiProperty()
  npsn?: string

  @ApiProperty()
  namaSekolah?: string

  @ApiProperty()
  bentukPendidikanId?: number

  @ApiProperty()
  namaBentukPendidikan?: string

  @ApiProperty()
  nip?: string

  @ApiProperty()
  nuptk?: string

  @ApiProperty()
  namaPtk: string

  @ApiProperty()
  jenisKelamin?: string

  @ApiProperty()
  jenisPtkId?: number

  @ApiProperty()
  namaJenisPtk: string

  @ApiProperty()
  dateTime?: Date
}
