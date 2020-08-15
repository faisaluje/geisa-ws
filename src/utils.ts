import * as moment from 'moment'

export function getFirstDateOfMonth(date?: string | Date) {
  return moment(date || new Date())
    .set({ date: 1, hour: 0, minute: 0, second: 0, millisecond: 0 })
    .toISOString()
}

export function getLastDateOfMonth(date?: string | Date) {
  return moment(date || new Date())
    .set({ date: 31, hour: 23, minute: 59, second: 59 })
    .toISOString()
}
