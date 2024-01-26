import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addForm } from "@/lib/actions"

function AddForm() {
  return (
    <>
      <form action={addForm}>
        <Label>Ubicacion</Label>
        <Input type="text" name="Ubicacion" />
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}

export default AddForm
