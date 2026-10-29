import { apiRequest } from "./client.js";

export const authApi = {
    login: (email, password) =>
        apiRequest("/auth/login", { method: "POST", body: { email, password } }),

    register: (fullName, email, password) =>
        apiRequest("/auth/register", { method: "POST", body: { fullName, email, password } }),

    me: (token) => apiRequest("/auth/me", { token }),
};