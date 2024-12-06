import { API_BASE_URL } from '@/config/api-config'
import { Appointment } from '@/types/appointment'

interface IResponse {
  data: Appointment[] | null
  error?: string
}

export async function getAllAppointment(): Promise<IResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/appointment`)

    if (!response.ok) {
      const errorMessage = `Failed: ${response.status} ${response.statusText}`
      return { data: null, error: errorMessage }
    }

    const data = await response.json()
    return { data }
  } catch {
    return {
      data: null,
      error: 'An unexpected error occurred.',
    }
  }
}
