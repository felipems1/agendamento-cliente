export interface Appointment {
  id: number
  customerName: string
  customerContact: string
  date: Date
  serviceId: string
  motorcycleId: string
}

export type CreateAppointmentValues = Omit<Appointment, 'id'>
