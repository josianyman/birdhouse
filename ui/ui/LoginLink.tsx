
import clsx from 'clsx';
import React from 'react';

export const LoginLink = () => (
    <div
        className={clsx(
            'block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100','text-white',
        )}
    >

        <h1
            className={clsx(
                'text-lg'
            )}
        >Tuntematon käyttäjä</h1>
        <></>
        <a
            className={clsx(
                'text-blue-600'
            )}
            href={`/api/auth/login`}
        >
            Kirjaudu sisään
        </a>
    </div>
)
