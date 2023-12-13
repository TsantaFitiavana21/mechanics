import { AUTH_KEY } from "../constants"
import { apiService } from "./axios"

export class BusService {
    async getBus () {
        try {
            const response = await apiService.get(`/buses?auth=${AUTH_KEY}`)
            return { success: response.data.status, data: response.data.buses }
        } catch (error) {
            console.error("Error during login: ", error)
            return { success: false, error }
        }
    }
}