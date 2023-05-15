import ExerciseForm from "~/components/ExerciseForm"
import { createSignal, Show } from "solid-js";
import { AiOutlinePlus } from 'solid-icons/ai'

export const [modal, setModal] = createSignal(false);

const Profile = () => {

  return (
    <main class="flex min-h-screen flex-col items-center justify-center bg-dark-blue">
      <div>
        <Show when={modal()}>
          <ExerciseForm />
        </Show>
        <div class='flex w-full justify-end  py-3 h-20 lg:w-4/5'>
          <button onClick={() => setModal(true)} class="flex items-center justify-center my-4 rounded-full bg-blue-500 h-10 w-10 font-bold text-lg text-white no-underline transition hover:bg-white/20" title='add new exercise'><AiOutlinePlus /></button>
        </div>
      </div>
    </main>
  )
}

export default Profile