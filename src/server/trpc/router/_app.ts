import { router } from "../utils";
import example from "./example";
import exercise from "./exercise";

export const appRouter = router({
  example,
  exercise,
});

export type IAppRouter = typeof appRouter;
