'use client'

import { Form } from '@/app/models/Form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table'
import { EditForm, deleteForm } from '@/lib/actions'

function FormTable({ forms }: any) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Ubicacion</TableCell>
            <TableCell>Accion</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {forms.map((form: Form) => (
            <TableRow key={form.id}>
              <TableCell>{form.Ubicacion}</TableCell>
              <TableCell><form action={() => {
                deleteForm({ formId: form.id })
              }}>
                <Button type='submit'>
                  Eliminar
                </Button>
              </form>
              </TableCell>
              <TableCell>
                <form action={EditForm}>
                  <input type="hidden" name="id" value={form.id} />
                  <Input type='text' name='Ubicacion' />
                  <Button type='submit'>Enviar</Button>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>

  )
}

export default FormTable
