'use server'

import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FORM_API, LOCAL_URL } from "./db";
import { Form } from "@/app/models/Form";

export const addForm = async (formData: FormData): Promise<void> => {
  try {
    // Convertir formData a un objeto
    const formObject = Object.fromEntries(formData);

    // Crear una nueva instancia de la clase Form (si existe)
    const newForm = new Form(formObject);

    // Realizar la solicitud POST con Axios
    await axios.post(`${LOCAL_URL}/${FORM_API}`, newForm);

  } catch (error) {
    // Manejar errores, por ejemplo, lanzar una excepción o realizar algún registro
    console.error("Error al agregar formulario:", error);
    throw new Error("Error al agregar formulario");
  }
  revalidatePath("/Formularios")
  redirect("/Formularios")

  // This line will be reached after the try-catch block
};

export const deleteForm = async ({ formId }: any) => {
  try {
    await axios.delete(`${LOCAL_URL}/${FORM_API}/${formId}`)
  } catch (error) {
    console.error('Error al eliminar Formulario', error)
    throw new Error("Error Al Eliminar Fomulario")
  }
  revalidatePath('/Formularios')
  redirect('/Formularios')

}
export const EditForm = async (formData: FormData) => {
  const formId = formData.get('id')
  const Ubicacion = formData.get('Ubicacion')
  const data = { Ubicacion: Ubicacion }
  console.log(data)
  try {
    await axios.patch(`${LOCAL_URL}/${FORM_API}/${formId}`, data)
  } catch (e) {
    console.error('Error al Editer Formulario', e)
    throw new Error("Error al editar Fomulario")
  }
  revalidatePath('/Formularios')
  redirect('/Formularios')
}
