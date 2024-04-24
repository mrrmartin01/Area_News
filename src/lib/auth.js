import NextAuth from "next-auth";
import github from "next-auth/providers/github";

export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({
    providers: [
        github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
});

