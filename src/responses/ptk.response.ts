import { ReferenceResponse } from './reference.response'

export class PtkResponse {
  id: string
  nama: string
  jenisKelamin?: string
  nuptk?: string
  nip?: string
  jenisPtk?: ReferenceResponse
  statusKepegawaian?: string
}
