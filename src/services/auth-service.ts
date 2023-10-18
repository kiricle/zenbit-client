import { AxiosResponse } from 'axios';
import $api from '../http';
import { AuthResponse } from '../models/response/auth-response';

export class AuthService {
    static async signIn(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/sign-in', {
            email,
            password,
        });
    }

    static async signUp(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/sign-up', {
            email,
            password,
        });
    }

    static async signOut(): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/sign-out');
    }
}
