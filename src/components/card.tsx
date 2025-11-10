import { cn } from '../utils/cn';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Card({ children, className, onClick }: Props) {
  return (
    <div className={cn('bg-bg-secondary rounded-xl p-4', onClick && 'cursor-pointer', className)} onClick={onClick}>
      {children}
    </div>
  );
}
