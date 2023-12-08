import { apiService } from "./axios"
import { AUTH_KEY } from "../constants"

export class LoginService {
    static async login(username, password)  {
        try {
            const response = await apiService.get(`/login?auth=${AUTH_KEY}&username=${username}&password=${password}`)
            return { success: response.data.status, data: response.data }
        } catch (error) {
            console.error("Error during login: ", error)
            return { success: false, error }
        }
    }
}
