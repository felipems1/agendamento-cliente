'use client'

import { useEffect, useState } from 'react'
import { CreateAppointmentType, FormProps, ServiceSelect } from './form.type'
import { createAppointmentSchema } from './form.schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { getServiceByMotorcycleId } from '@/services/api/get-services-by-motorcycleId'
import { getPriceService } from '@/services/api/get-price-service'
import { createAppointment } from '@/services/api/create-appointment'
import { FORM_MESSAGES } from './form.messages'
import { toast } from '@/hooks/use-toast'

export const useFormModel = ({ motorcycles, appointments }: FormProps) => {
  const [price, setPrice] = useState<number>(0)
  const [services, setServices] = useState<ServiceSelect[]>([])

  const motorcyclesData = motorcycles.map((motorcycle) => ({
    label: motorcycle.model,
    value: motorcycle.id,
  }))

  const dates = appointments.map((appointment) => new Date(appointment.date))

  const form = useForm<CreateAppointmentType>({
    resolver: zodResolver(createAppointmentSchema),
  })

  const serviceId = form.watch('serviceId')
  const motorcycleId = form.watch('motorcycleId')

  useEffect(() => {
    if (motorcycleId) {
      getServiceByMotorcycleId(motorcycleId).then((response) => {
        const servicesData =
          response.data?.map((motorcycle) => ({
            label: motorcycle.name,
            value: motorcycle.id,
          })) || []

        setServices(servicesData)
      })
    }

    if (motorcycleId && serviceId) {
      getPriceService(motorcycleId, serviceId).then((response) => {
        const price = response.data?.price ?? 0
        setPrice(price)
      })
    }
  }, [motorcycleId, serviceId])

  const onSubmit = async (data: CreateAppointmentType) => {
    const { customerContact } = data

    const formatPhone = customerContact.replace(/\D/g, '')

    const result = await createAppointment({
      ...data,
      customerContact: formatPhone,
    })

    if (!result.success) {
      toast(FORM_MESSAGES.error)
      return
    }

    form.reset({
      customerContact: '',
      customerName: '',
      motorcycleId: '',
      serviceId: '',
    })
    setPrice(0)
    toast(FORM_MESSAGES.success)
  }

  return { price, services, motorcyclesData, dates, form, onSubmit }
}
