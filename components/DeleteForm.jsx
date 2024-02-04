import { deleteTask } from "@/utils/actions"

const DeleteForm = ({id}) => {
  return (
   <form action={deleteTask}>
    <input type="hidden" name="id" value={id}/>
    <button className="btn btn-xs btn-error">X</button>
   </form>
  )
}

export default DeleteForm