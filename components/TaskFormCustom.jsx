"use client"
import { createTaskCustom } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import {toastMsg} from "@/utils/toastMsg"
import { useEffect } from "react";
const SubmitBtn =()=>{
      const { pending } = useFormStatus();
    return (
      <button type="submit" className="btn btn-primary join-item" disabled={pending}>
        {pending ? "wait..." : "create"}
      </button>
    );
}

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state,formAction]=useFormState(createTaskCustom,initialState)

  // const renderMessage = () => {
  //   if (state.message === "error") {
  //     toast.error("there was an error");
  //   } else if (state.message) {
  //     toast.success("task created");
  //   }
  // };
  useEffect(()=>{
    toastMsg(state);
  },[state])

  return (
    <form action={formAction}>
    {/* {renderMessage()} */}
    {/* {toastMsg(state)} */}
      <div className="join w-full">
        <input
          type="text "
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
          autoComplete="off"
          autoFocus
        />
        <SubmitBtn />
      </div>
    </form>
  );
};
export default TaskForm;
