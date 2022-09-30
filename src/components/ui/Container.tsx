import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export function Container({ children }: Props): JSX.Element {
  return (
    <div className="max-w-xl mx-auto px-8 md:px-0 ">
      <div className="w-full">{children}</div>
    </div>
  );
}
