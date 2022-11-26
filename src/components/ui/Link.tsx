import { ReactNode } from 'react';
import { default as NextLink } from 'next/link';
import clsx from 'clsx';

type Props = {
	href: string;
  children: ReactNode;
  underline?: boolean;
};

export function Link({ children, href, underline = false }: Props): JSX.Element {
  return (
    <NextLink href={href}>
      <a
        target="_blank"
        className={clsx('text-blue-500 font-semibold', underline && 'underline')}
      >
        {children}
      </a>
    </NextLink>
  );
}

