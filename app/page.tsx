'use client'; // Ensure this is client-side

import { useSession, signIn, signOut } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="container">
      <div className="content">
        {!session && (
          <>
            <p className="message">You are not signed in.</p>
            <button className="sign-in-btn" onClick={() => signIn('google')}>
              Sign in with Google
            </button>
          </>
        )}
        {session && (
          <>
            <p className="welcome-message">Welcome, {session.user?.name}!</p>
            <button className="sign-out-btn" onClick={() => signOut()}>
              Sign out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
