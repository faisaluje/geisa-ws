import { PtkResponse } from './ptk.response'
import { ReferenceResponse } from './reference.response'

export class SekolahResponse {
  id: string
  npsn: string
  nama: string
  bentukPendidikan?: ReferenceResponse
  alamat?: string
  lastSync?: Date
  ptk?: PtkResponse[]
}
