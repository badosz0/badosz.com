import { cn } from "../utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: Props) {
  return (
    <div className={cn("bg-bg-secondary rounded-xl p-4", className)}>
      {children}
    </div>
  );
}
