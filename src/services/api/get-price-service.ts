import { API_BASE_URL } from '@/config/api-config'

interface IResponse {
  data: { price: number } | null
  error?: string
}

export async function getPriceService(
  motorcycleId: string,
  serviceId: string,
): Promise<IResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/service/price/${motorcycleId}/${serviceId}`,
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
