import { type SolidAuthConfig } from "@solid-auth/base";
import GitHub from "@auth/core/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";
import { serverEnv } from "~/env/server";

declare module "@auth/core/types" {
  export interface Session {
    user?: {
      id?: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: SolidAuthConfig = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: serverEnv.GITHUB_ID,
      clientSecret: serverEnv.GITHUB_SECRET,
    }),
  ],
  debug: false,
};
