import { API_BASE_URL } from '@/config/api-config'
import { CreateAppointmentValues } from '@/types/appointment'

interface IResponse {
  success: boolean
  error?: string
}

export async function createAppointment(
  data: CreateAppointmentValues,
): Promise<IResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/appointment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorMessage = `Failed: ${response.status} ${response.statusText}`
      return { success: false, error: errorMessage }
    }

    return { success: true }
  } catch {
    return { success: false, error: 'An unexpected error occurred.' }
  }
}
