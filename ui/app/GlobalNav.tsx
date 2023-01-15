'use client';

import { items } from '@/lib/items';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className="space-y-5">
      {items.map((item) => {
        return (
          <div key={item.name}>
            <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <div>{item.name}</div>
            </div>

            {item.items.map((item) => {
              const isActive = item.slug === selectedLayoutSegments;

              return (
                <div key={item.slug}>
                  {item.isApiRoute ? (
                      <a 
                      href={`/${item.slug}`}
                      className={clsx(
                          'block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100',
                          { 'text-zinc-400': !isActive, 'text-white': isActive },
                        )}
                      >
                        {item.name}
                      </a>
                  ) : (
                    <Link
                      href={`/${item.slug}`}
                      className={clsx(
                        'block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100',
                        { 'text-zinc-400': !isActive, 'text-white': isActive },
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
