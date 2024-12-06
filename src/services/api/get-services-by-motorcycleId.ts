import { API_BASE_URL } from '@/config/api-config'
import { Service } from '@/types/service'

interface IResponse {
  data: Service[] | null
  error?: string
}

export async function getServiceByMotorcycleId(
  motorcycleId: string,
): Promise<IResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/service/${motorcycleId}/services`,
    )

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
