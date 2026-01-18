// import { loginUser } from "@/actions/server/auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',

//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//           if (!credentials) return null;
//           const { email, password } = credentials;
//         const user = await loginUser({ email, password });
//         // const user = await loginUser(credentials);
//          if (!user) return null;
//         return user;
//       },
//     }),
//   ],
// }















import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { loginUser } from "@/actions/server/auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;

        if (!email || !password) return null;

        const user = await loginUser({ email, password });

        if (!user) return null;

        return {
          id: user._id.toString(), 
          email: user.email,
          name: user.name,
        };
      },
    }),

    // Google Provider
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  }),

  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
