import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, children, className }: Props): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-secondary font-bold text-sm">{title}</p>
      <div className={className}>{children}</div>
    </div>
  );
}
