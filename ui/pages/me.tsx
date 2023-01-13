import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user &&
    user.picture && (
      <div>
        <img src={user.picture} alt={user.name ?? 'No name provided'} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
