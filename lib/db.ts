import PocketBase from "pocketbase";

export const LOCAL_URL = 'http://127.0.0.1:8090/api/collections'
export const FORM_API = 'Formulario/records'
export const USER_API = 'users/auth-with-password'
export const pb = new PocketBase('https://127.0.0.1:8090')
