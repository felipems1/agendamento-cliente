import { z } from 'zod'

export const createAppointmentSchema = z.object({
  customerName: z
    .string()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }),
  customerContact: z.string(),
  date: z.date(),
  motorcycleId: z.string(),
  serviceId: z.string(),
  price: z.string().optional(),
})
