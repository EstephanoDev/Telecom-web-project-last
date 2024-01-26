import { fetchForms } from "@/lib/data"
import FormTable from "./_components/formTable"
import AddForm from "./_components/addForm"

async function HomePage() {
  const forms = await fetchForms()
  return (
    <div>
      <AddForm />
      <FormTable forms={forms} />
    </div>
  )
}

export default HomePage
