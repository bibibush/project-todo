import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const error = new Error("Unauthorized");

        if (!email || !password) {
          throw error;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: email as string,
          },
        });

        if (!user || !user.hashedPassword) {
          throw error;
        }

        const isCorrectPassword = await bcrypt.compare(
          password as string,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw error;
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 5,
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;

      return session;
    },
  },
});
