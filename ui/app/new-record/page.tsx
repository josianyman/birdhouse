'use client';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { LoginLink } from '@/ui/LoginLink';
import clsx from "clsx";

export default function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user &&
    user.email ? (
      <div
          className={clsx(
              'block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100','text-white',
          )}
      >
          <h1
              className={clsx(
                  'text-lg'
              )}
          >Ilmoita pesintä</h1>
      </div>
    ) :(
        <LoginLink></LoginLink>
    )
  );
}
