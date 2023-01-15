'use client';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import clsx from "clsx";
import {LoginLink} from "@/ui/LoginLink";

export default function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user &&
    user.picture ? (
      <div
          className={clsx(
              'block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100','text-white',
          )}
      >
        <img src={user.picture} alt={user.name ?? 'No name provided'} />
          <h1
              className={clsx(
                  'text-lg'
              )}
          >{user.name}</h1>
        <p>{user.email}</p>
      </div>
    ) :(
       <LoginLink/>
    )
  );
}
