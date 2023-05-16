import ExerciseForm from "~/components/ExerciseForm";
import { createSignal, Show } from "solid-js";
import { AiOutlinePlus } from 'solid-icons/ai';
import Protected from "~/components/Protected";


export const [modal, setModal] = createSignal(false);

export const { routeData, Page } = Protected((session) => {
  const image = session.user?.image
  const name = session.user?.name
  return (
    <main class="flex min-h-screen flex-col items-center bg-dark-blue">
      <div class="w-4/5 flex flex-col items-center mt-6">
        {image && <picture>
          <img class="rounded-full" src={image} alt="profile image" width={70} height={70} />
        </picture>}
        {name && <p class='text-white my-2'>{name}</p>}
        <Show when={modal()}>
          <ExerciseForm />
        </Show>
        <div class='flex w-full justify-end  py-3 h-20 lg:w-4/5'>
          <button onClick={() => setModal(true)} class="flex items-center justify-center my-4 rounded-full bg-blue-500 h-10 w-10 font-bold text-lg text-white no-underline transition hover:bg-white/20" title='add new exercise'><AiOutlinePlus /></button>
        </div>
      </div>
    </main>
  )
})

export default Page;