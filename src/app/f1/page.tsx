'use client';

import { Constants } from 'amerkit';
import clsx from 'clsx';
import HolyTime from 'holy-time';
import { useState } from 'react';
import useSWR from 'swr';

const COUNTRY_MAP: Record<string, string> = {
  USA: 'United States',
  UK: 'United Kingdom',
  UAE: 'United Arab Emirates',
};

const time = (p: any) => new HolyTime(p ? `${p.date}T${p.time}` : Number.POSITIVE_INFINITY);

export default function Page(): JSX.Element {
  const { data: races } = useSWR<any>('https://api.jolpi.ca/ergast/f1/current.json');
  const { data: drivers } = useSWR<any>('https://api.jolpi.ca/ergast/f1/current/driverstandings.json');
  const now = new HolyTime();
  const [racesView, setRacesView] = useState<string>('All');
  const [driversView, setDriversView] = useState<string>('Top 5');

  if (!races || !drivers) {
    return <></>;
  }

  const calendar: {
    time: HolyTime;
    title: string;
    subtitle: string;
    flag: string;
  }[] = [];

  for (const race of races.MRData.RaceTable.Races) {
    const country = COUNTRY_MAP[race.Circuit.Location.country] ?? race.Circuit.Location.country;
    const flag = Constants.countries.find((c) => c.name === country)!.twemojiImageURL;

    calendar.push({
      time: time(race),
      title: race.raceName,
      subtitle: 'Race',
      flag,
    });

    for (const [id, name] of [
      ['FirstPractice', 'First Practice'],
      ['SecondPractice', 'Second Practice'],
      ['ThirdPractice', 'Third Practice'],
      ['Qualifying', 'Qualifying'],
      ['SprintQualifying', 'Sprint Qualifying'],
      ['Sprint', 'Sprint'],
    ]) {
      if (!race[id]) {
        continue;
      }

      calendar.push({
        time: time(race[id]),
        title: race.raceName,
        subtitle: name,
        flag,
      });
    }
  }

  return (
    <div className="mx-auto max-w-3xl p-32 sm:p-64 flex flex-col gap-64">
      <div className="flex justify-between items-center w-full">
        <p className="text-text-primary-white font-medium text-2xl">F1</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          {['Top 5', 'All'].map((v, i) => (
            <p
              key={i}
              className={clsx(
                'text-sm cursor-pointer font-medium select-none',
                driversView === v ? 'text-text-primary' : 'text-text-secondary',
              )}
              onClick={() => setDriversView(v)}
            >
              {v}
            </p>
          ))}
        </div>
        {drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(
          0,
          driversView === 'Top 5' ? 5 : undefined,
        ).map((d: any, i: number, a: any[]) => (
          <div className="bg-card rounded-[4px] p-8 flex justify-between" key={d.Driver.driverId}>
            <div className="flex gap-8">
              <img
                src={`/images/f1/drivers/${d.Driver.permanentNumber}.avif`}
                className="h-40"
                alt={d.Driver.givenName}
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium text-text-primary">
                  {d.Driver.givenName} {d.Driver.familyName}
                </p>
                <p className="text-sm text-text-secondary">{d.Constructors[0].name}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm font-medium text-text-secondary">
                {d.points} Point{d.points === 1 ? '' : 's'}
              </p>
              <p className="text-sm text-text-secondary">
                {d.wins} Win{d.wins === 1 ? '' : 's'}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          {['All', 'Races'].map((v, i) => (
            <p
              key={i}
              className={clsx(
                'text-sm cursor-pointer font-medium select-none',
                racesView === v ? 'text-text-primary' : 'text-text-secondary',
              )}
              onClick={() => setRacesView(v)}
            >
              {v}
            </p>
          ))}
        </div>
        {calendar
          .sort((a, b) => a.time.getTime() - b.time.getTime())
          .filter((c) => c.time.isAfter(now))
          .filter((c) => racesView === 'All' || c.subtitle === 'Race')
          .map((c, i) => (
            <div className="bg-card rounded-[4px] p-8 flex justify-between" key={i}>
              <div className="flex gap-8">
                <img src={c.flag} className="h-40" alt={c.title} />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-text-primary">{c.subtitle}</p>
                  <p className="text-sm text-text-secondary">{c.title}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm font-medium text-text-secondary">{c.time.format('MMMM DD')}</p>
                <p className="text-sm text-text-secondary">{c.time.format('DDDD, h:mm A')}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
