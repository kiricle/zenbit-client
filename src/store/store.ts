import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { AuthService } from '../services/auth-service';
import { AuthResponse } from '../models/response/auth-response';
import { API_URL } from '../http';

export default class Store {
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    async signIn(email: string, password: string) {
        try {
            const response = await AuthService.signIn(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
        } catch (error) {
            console.log(error);
        }
    }

    async signUp(email: string, password: string) {
        try {
            const response = await AuthService.signUp(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
        } catch (error) {
            console.log(error);
        }
    }

    async signOut() {
        try {
            const response = await AuthService.signOut();
            console.log(response);
            localStorage.removeItem('token');
            this.setAuth(false);
        } catch (error) {
            console.log(error);
        }
    }

    async checkAuth() {
        try {
            const response = await axios.post<AuthResponse>(
                `${API_URL}/refresh`,
                {
                    withCredentials: true,
                }
            );
            console.log(response);
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
        } catch (error) {
            console.log(error);
        }
    }
}
