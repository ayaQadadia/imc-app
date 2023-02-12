import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "../../../../lib/prisma";
import {compare} from "bcrypt";

export const authOptions = {
    providers: [
        CredentialsProvider({
            credentials: {},
            async authorize(credentials, _) {
                const {email, password} = credentials
                if (!email || !password) {
                    throw new Error("Missing username or password");
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });
                // if user doesn't exist or password doesn't match
                if (!user || !(await compare(password, user.password))) {
                    throw new Error("Invalid username or password");
                }
                return user;
            },
        }),
    ],
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
    debug: true
}
export default NextAuth(authOptions);