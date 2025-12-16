'use client';

import HolyTime from 'holy-time';
import { Calendar, List } from 'lucide-react';
import { useQueryState } from 'nuqs';
import Card from '../../components/card';
import { cn } from '../../utils/cn';
import { UPCOMING, type UpcomingEntry } from './constants';

export default function Page() {
  const now = HolyTime.now();
  const [view, setView] = useQueryState('view', { defaultValue: 'list' });

  const groups: Record<string, UpcomingEntry[]> = {};

  for (const entry of UPCOMING) {
    const group = new HolyTime(entry.release).format('YYYY-MM', 'UTC+0');
    groups[group] ??= [];
    groups[group].push(entry);
  }

  return (
    <div className="mx-auto px-8 py-16 max-w-2xl text-md flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <p className="font-medium">Upcoming</p>
        <div className="flex items-center gap-2">
          <List
            size={20}
            className={cn(view !== 'list' && 'opacity-50', 'cursor-pointer')}
            onClick={() => setView('list')}
          />
          <Calendar
            size={20}
            className={cn(view !== 'calendar' && 'opacity-50', 'cursor-pointer')}
            onClick={() => setView('calendar')}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {view === 'list' && (
          <div className="flex flex-col gap-2">
            {UPCOMING.sort((a, b) => new HolyTime(a.release).getTime() - new HolyTime(b.release).getTime()).map(
              (upcoming, i) => (
                <Card key={i} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 flex-1">
                    <img
                      src={`upcoming/${upcoming.imageURL}`}
                      alt={upcoming.title}
                      className="aspect-250/370 w-8 rounded-sm"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium text-sm line-clamp-1">{upcoming.title}</p>
                      <p className="text-text-secondary text-xs">
                        {upcoming.type === 'show' && `${upcoming.season} - Episode ${upcoming.episode}`}
                        {upcoming.type === 'movie' && `Movie`}
                        {upcoming.type === 'game' && `Game`}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="font-medium text-xs text-end">
                      {new HolyTime(upcoming.release).format('MMMM DD, YYYY', 'UTC+0')}
                    </p>
                    <p className="font-text-secondary text-xs text-end">
                      {new HolyTime(upcoming.release).getRelativeFrom(now)}
                    </p>
                  </div>
                </Card>
              ),
            )}
          </div>
        )}

        {view === 'calendar' && (
          <div className="flex flex-col gap-4">
            {Object.entries(groups)
              .sort((a, b) => new HolyTime(`${a[0]}-01`).getTime() - new HolyTime(`${b[0]}-01`).getTime())
              .map(([group, entries]) => (
                <div key={group} className="flex flex-col gap-2">
                  <p className="font-medium text-sm">{new HolyTime(group).format('MMMM YYYY', 'UTC+0')}</p>
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2">
                    {entries.map((entry, i) => (
                      <Card key={i} className="flex flex-col gap-2 p-0 group">
                        <img
                          src={`upcoming/${entry.imageURL}`}
                          alt={entry.title}
                          className="aspect-video object-cover w-full rounded-t-xl"
                        />
                        <div className="flex flex-col px-2 pb-2">
                          <p className="font-medium text-sm line-clamp-1">{entry.title}</p>
                          <p className="text-text-secondary text-xs">
                            {entry.type === 'show' && `${entry.season} - Episode ${entry.episode}`}
                            {entry.type === 'movie' && `Movie`}
                            {entry.type === 'game' && `Game`}
                          </p>
                          <p className="text-text-secondary text-xs group-hover:hidden">
                            {new HolyTime(entry.release).format('MMMM DD, YYYY', 'UTC+0')}
                          </p>
                          <p className="text-text-secondary text-xs hidden group-hover:block">
                            {new HolyTime(entry.release).getRelativeFrom(now)}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
