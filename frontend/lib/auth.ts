import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'

// TODO: Configure Cognito provider when CDK stack is deployed
export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: 'cognito',
      name: 'Cognito',
      type: 'oauth',
      wellKnown: `${process.env.COGNITO_ISSUER}/.well-known/openid_configuration`,
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      idToken: true,
      checks: ['pkce', 'state'],
      authorization: {
        params: {
          scope: 'openid email profile',
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name || profile.email,
          email: profile.email,
        }
      },
    },
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
        token.idToken = account.id_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.idToken = token.idToken as string
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
}

export default NextAuth(authOptions)
