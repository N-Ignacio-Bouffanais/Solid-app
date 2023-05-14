import { z } from "zod";
import { router, protectedProcedure } from "../utils";

export default router({
  create: protectedProcedure
    .input(
      z.object({
        days: z.string().min(5).max(9),
        name: z.string().min(3).max(25),
        reps: z.number().min(1).max(40),
        weight: z.number().min(2).max(180),
        sets: z.number().min(1).max(8),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const result = await ctx.prisma.exercise.create({
        data: {
          days: input.days,
          name: input.name,
          reps: input.reps,
          sets: input.sets,
          weight: input.weight,
          user: {
            connect: {
              id: ctx.session!.user.id,
            },
          },
        },
      });
      return result;
    }),
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const exercises = await ctx.prisma.exercise.findMany({
      where: {
        userId: ctx.session?.user.id,
      },
    });
    return exercises;
  }),
});
