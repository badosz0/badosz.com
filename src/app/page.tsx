import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/card';
import { cn } from '../utils/cn';
import { PAST_WORK, WORK } from './constants';

export default function Page() {
  return (
    <div className="mx-auto px-8 py-16 max-w-2xl text-md flex flex-col gap-8">
      <div>
        <p className="font-medium">Bartosz Król</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-text-secondary text-sm font-medium">Work</p>
        {WORK.map((work) => (
          <Link href={work.url} key={work.url} target="_blank">
            <Card className="flex items-center gap-4">
              <Image
                src={work.icon}
                alt={work.title}
                width={32}
                height={32}
                className={cn(work.rounded && 'rounded-md')}
              />
              <div>
                <p className="font-medium text-sm">{work.title}</p>
                <p className="text-text-secondary text-xs">{work.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-text-secondary text-sm font-medium">Past Work</p>
        {PAST_WORK.map((work) => (
          <Link href={work.url} key={work.url} target="_blank">
            <Card className="flex items-center gap-4">
              <Image
                src={work.icon}
                alt={work.title}
                width={32}
                height={32}
                className={cn(work.rounded && 'rounded-md')}
              />
              <div>
                <p className="font-medium text-sm">{work.title}</p>
                <p className="text-text-secondary text-xs">{work.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
