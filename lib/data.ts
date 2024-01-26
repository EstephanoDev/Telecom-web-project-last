import { FORM_API, LOCAL_URL } from "./db"
import axios from "axios"

export const fetchForms = async () => {
  try {
    const forms = await axios.get(`${LOCAL_URL}/${FORM_API}`)
    return forms.data.items
  } catch (error) {
    console.error("Error al obtener formularios:", error);
    throw error
  }
}
