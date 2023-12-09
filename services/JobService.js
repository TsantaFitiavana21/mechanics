import { AUTH_KEY } from "../constants"
import { apiService } from "./axios"

export class JobService {
    static async getJobs (userConnected) {
        try {
            const response = await apiService.get(`/jobs?auth=${AUTH_KEY}&username=${userConnected}&type=all`)
            return { success: response.data.status, data: response.data }
        } catch (error) {
            console.error("Error during login: ", error)
            return { success: false, error }
        }
    }
}