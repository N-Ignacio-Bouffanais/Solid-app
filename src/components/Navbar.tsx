import { signIn, signOut } from "@auth/solid-start/client"
import { getSession } from "@auth/solid-start"
import { createServerData$ } from "solid-start/server"
import { authOptions } from "~/server/auth"
import { A } from "@solidjs/router"

const Navbar = () => {
    const session = useSession()
    const user = () => session()?.user
    console.log(user)

    return (
        <header>
            <nav class="bg-dark-blue h-16 pt-2 flex items-center mx-auto w-full">
                <ul class="flex w-full mx-auto justify-evenly items-center">
                    <li class="text-white font-semibold">
                     <A href={"/"}>
                         <p class="rounded-full p-2 w-10 text-center hover:bg-gray-800">〱</p>
                     </A>
                 </li>
                 <li class="text-white font-semibold pl-14">
                     <A href={"/profile"}>
                         <p class="rounded-2xl p-2 w-20 text-center text-lg hover:bg-gray-800">Profile</p>
                     </A>
                 </li>
                 <li>
                        <div>
                         <button
                             class="rounded-full border-solid border-yellow-400 border-2 px-4 py-1.5 font-semibold text-white no-underline transition hover:bg-gray-800"
                                onClick={() => signOut({ redirectTo: "/" })}
                         >
                             Sign Out
                         </button>
                     </div>
                 </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar

export const useSession = () => {
    return createServerData$(
        async (_, { request }) => {
            return await getSession(request, authOptions)
        },
        { key: () => ["auth_user"] }
    )
}
