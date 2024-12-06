'use client'

import { useFormModel } from './form.model'
import { FormProps } from './form.type'
import { FormView } from './form.view'

export function CreateAppointmentForm(props: FormProps) {
  const methods = useFormModel(props)

  return <FormView {...methods} />
}
