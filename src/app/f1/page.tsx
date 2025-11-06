'use client';

import { Constants } from 'amerkit';
import HolyTime from 'holy-time';
import Image from 'next/image';
import useSWR from 'swr';
import Card from '../../components/card';

const SESSIONS: Record<string, string> = {
  race: 'Race',
  qualy: 'Qualifying',
  sprintQualy: 'Sprint Qualifying',
  sprintRace: 'Sprint',
};

const COUNTRY_MAP: Record<string, string> = {
  'Great Britain': 'United Kingdom',
};

const time = (p: any) => new HolyTime(p ? `${p.date}T${p.time}` : Number.POSITIVE_INFINITY);

export default function Page() {
  const { data: nextRace } = useSWR('https://f1api.dev/api/current/next');
  const { data: futureRaces } = useSWR('https://f1api.dev/api/2025');
  const now = HolyTime.now();

  if (!nextRace || !futureRaces) {
    return null;
  }

  return (
    <div className="mx-auto px-8 py-16 max-w-2xl text-md flex flex-col gap-8">
      <div>
        <p className="font-medium">F1</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-text-secondary text-sm font-medium">Next Race</p>
        <Card className="flex items-center gap-4">
          <Image
            src={
              Constants.countries.find(
                (country) =>
                  country.name === (COUNTRY_MAP[nextRace.race[0].circuit.country] ?? nextRace.race[0].circuit.country),
              )?.twemojiImageURL ?? ''
            }
            alt={nextRace.race[0].circuit.country}
            width={32}
            height={32}
          />
          <div>
            <p className="font-medium text-sm">{nextRace.race[0].circuit.circuitName}</p>
            <div className="text-text-secondary text-xs">
              {Object.entries(nextRace.race[0].schedule)
                .filter(([id, { date }]: any) => date && SESSIONS[id])
                .sort((a: any, b: any) => time(a[1]).getTime() - time(b[1]).getTime())
                .map(([id, d]: any) => (
                  <div key={id} className="flex items-center gap-2">
                    <p className="text-text-secondary text-xs tabular-nums">{time(d).format('MMMM DD, HH:mm')}</p>
                    <p className="text-text-secondary text-xs">{SESSIONS[id] ?? id}</p>
                  </div>
                ))}
            </div>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-text-secondary text-sm font-medium">Future Races</p>
        {futureRaces.races
          .filter((race: any) => time(race.schedule.race).isAfter(now) && race.raceId !== nextRace.race[0].raceId)
          .sort((a: any, b: any) => time(a.schedule.race).getTime() - time(b.schedule.race).getTime())
          .map((race: any, i: number) => (
            <Card className="flex items-center gap-4" key={i}>
              <Image
                src={
                  Constants.countries.find(
                    (country) => country.name === (COUNTRY_MAP[race.circuit.country] ?? race.circuit.country),
                  )?.twemojiImageURL ?? ''
                }
                alt={race.circuit.country}
                width={32}
                height={32}
              />
              <div>
                <p className="font-medium text-sm">{race.circuit.circuitName}</p>
                <div className="text-text-secondary text-xs">
                  {Object.entries(race.schedule)
                    .filter(([id, { date }]: any) => date && SESSIONS[id])
                    .sort((a: any, b: any) => time(a[1]).getTime() - time(b[1]).getTime())
                    .map(([id, d]: any) => (
                      <div key={id} className="flex items-center gap-2">
                        <p className="text-text-secondary text-xs tabular-nums">{time(d).format('MMMM DD, HH:mm')}</p>
                        <p className="text-text-secondary text-xs">{SESSIONS[id] ?? id}</p>
                      </div>
                    ))}
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
