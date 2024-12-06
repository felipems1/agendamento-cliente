import { API_BASE_URL } from '@/config/api-config'
import { Motorcycle } from '@/types/motorcycle'

interface IResponse {
  data: Motorcycle[] | null
  error?: string
}

export async function getAllMotorcycle(): Promise<IResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/motorcycle`)

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
