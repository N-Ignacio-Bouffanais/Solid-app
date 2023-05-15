import { type VoidComponent, Suspense, Show } from "solid-js";
import { A } from "solid-start";
import { trpc } from "~/utils/trpc";
import { createSession, signOut, signIn } from "@solid-auth/base/client";

const Home: VoidComponent = () => {
  return (
    <main class="flex min-h-screen flex-col items-center justify-center bg-dark-blue">
      <div class="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Welcome
        </h1>
        <div class="flex flex-col items-center gap-2">
          <Suspense>
            <AuthShowcase />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Home;

const AuthShowcase: VoidComponent = () => {
  const session = createSession();
  return (
    <div class="flex flex-col items-center justify-center gap-4">
      <Show
        when={session()}
        fallback={
          <button
            onClick={() => signIn("github", { redirectTo: "/profile" })}
            class="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          >
            Sign in
          </button>
        }
      >
        <span class="text-xl text-white">Welcome {session()?.user?.name}</span>
        <button
          onClick={() => signOut({ redirectTo: "/" })}
          class="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        >
          Sign out
        </button>
      </Show>
    </div>
  );
};
