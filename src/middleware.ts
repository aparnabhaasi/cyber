import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token, // Only allow users with a valid token
  },
  pages: {
    signIn: '/auth/sign-in', // Redirect here if not authenticated
  },
});

export const config = {
  matcher: ['/', '/protected-route/:path*'], // Protect these routes
};
