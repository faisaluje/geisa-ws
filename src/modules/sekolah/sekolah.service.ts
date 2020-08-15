import { Injectable } from '@nestjs/common'
import { LogMesin } from 'src/entities/logMesin.entity'
import { Sekolah } from 'src/entities/sekolah.entity'
import { SekolahOption } from 'src/options/sekolah.option'
import { SekolahResponse } from 'src/responses/sekolah.response'

@Injectable()
export class SekolahService {
  async getSekolah(sekolahOptions: SekolahOption): Promise<SekolahResponse> {
    const query = Sekolah.createQueryBuilder('sekolah')
    query.leftJoinAndSelect(
      'sekolah.ptks',
      'ptk',
      'ptk.jenis_keluar_id IS NULL',
    )
    query.leftJoinAndMapMany(
      'ptk.logMesins',
      LogMesin,
      'log',
      'log.id_pada_dapodik = ptk.id_dapodik',
    )
    query.where('sekolah.npsn = :npsn', { npsn: sekolahOptions.npsn })

    const sekolah = await query.getOne()

    return {
      id: sekolah.sekolahId,
      npsn: sekolah.npsn,
      nama: sekolah.nama,
      bentukPendidikan: {
        id: sekolah.bentukPendidikanId,
        nama: sekolah.bentukPendidikanIdStr,
      },
      alamat: sekolah.alamatJalan,
      lastSync: sekolah.lastSync,
      ptk: sekolah.ptks.map(val => ({
        id: val.idDapodik,
        nama: val.namaDapodik,
        jenisKelamin: val.jenisKelamin,
        nip: val.nip,
        nuptk: val.nuptk,
        jenisPtk: { id: val.jenisPtkId, nama: val.jenisGuru },
        statusKepegawaian: val.statusKepegawaian,
      })),
    }
  }
}
