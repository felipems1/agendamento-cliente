import { Appointment } from '@/types/appointment'
import { Motorcycle } from '@/types/motorcycle'
import { createAppointmentSchema } from './form.schema'
import { z } from 'zod'
import { useFormModel } from './form.model'

export interface FormProps {
  appointments: Appointment[]
  motorcycles: Motorcycle[]
}

export interface ServiceSelect {
  label: string
  value: string
}

export type CreateAppointmentType = z.infer<typeof createAppointmentSchema>

export type FormViewProps = ReturnType<typeof useFormModel>
