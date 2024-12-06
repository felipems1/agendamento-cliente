import { Separator } from '@/components/ui/separator'
import { getAllAppointment } from '@/services/api/get-all-appointment'
import { getAllMotorcycle } from '@/services/api/get-all-motorcycle'
import { redirect } from 'next/navigation'
import { CreateAppointmentForm } from './components/create-appointment-form'
import { Header } from '@/components/header'

export default async function Home() {
  const [appointmentsResponse, motorcyclesResponse] = await Promise.all([
    getAllAppointment(),
    getAllMotorcycle(),
  ])

  if (appointmentsResponse.error || motorcyclesResponse.error) {
    redirect('/error')
  }

  return (
    <>
      <Header />
      <Separator />
      <div className="mx-auto w-full max-w-xl">
        <div className="space-y-2 p-5 lg:px-0">
          <h1 className="text-2xl font-semibold">Agendamento</h1>
          <p className="text-sm text-muted-foreground">
            Agende serviços com facilidade e rapidez. Escolha o melhor horário
            para você.
          </p>
        </div>

        <CreateAppointmentForm
          appointments={appointmentsResponse.data!}
          motorcycles={motorcyclesResponse.data!}
        />
      </div>
    </>
  )
}
