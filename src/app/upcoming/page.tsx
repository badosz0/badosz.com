'use client';

import HolyTime from 'holy-time';
import { EVENTS } from './constants';

export default function Page(): JSX.Element {
  const now = new HolyTime().startOf('day');

  return (
    <div className="mx-auto max-w-3xl p-32 sm:p-64 flex flex-col gap-64">
      <div className="flex justify-between items-center w-full">
        <p className="text-text-primary-white font-medium text-2xl">Upcoming</p>
      </div>

      <div className="flex flex-col gap-8">
        {EVENTS.sort((a, b) => new HolyTime(a.date).getTime() - new HolyTime(b.date).getTime())
          .filter((c) => new HolyTime(c.date).isAfter(now))
          .map((c, i) => {
            const date = new HolyTime(c.date);
            const days = Math.floor(HolyTime.between(now, date).in('days'));

            return (
              <div className="bg-card rounded-[4px] p-8 flex justify-between" key={i}>
                <div className="flex gap-8">
                  <img src={c.imageURL} className="h-40" alt={c.title} />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-text-primary">{c.title}</p>
                    <p className="text-sm text-text-secondary">{c.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-sm font-medium text-text-secondary">
                    {HolyTime.format(c.date, 'MMMM DD') +
                      (date.get('year') !== now.get('year') ? `, ${date.get('year')}` : '')}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {days === 0 ? 'Today' : days === 1 ? 'Tomorrow' : `in ${days} days`}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
