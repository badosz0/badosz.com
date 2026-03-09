'use client';

import HolyTime from 'holy-time';
import { useState } from 'react';
import useSWR from 'swr';
import Card from '../../components/card';
import { Driver } from './components/driver';
import { Race } from './components/race';
import { time } from './utils';

export default function Page() {
  const { data: futureRaces } = useSWR(`https://f1api.dev/api/${new Date().getFullYear()}`);
  const { data: drivers } = useSWR('https://f1api.dev/api/current/drivers-championship');
  const [moreDrivers, setMoreDrivers] = useState(false);
  const [moreRaces, setMoreRaces] = useState(false);
  const now = HolyTime.now();

  if (!futureRaces || !drivers) {
    return null;
  }

  return (
    <div className="mx-auto px-8 py-16 max-w-2xl text-md flex flex-col gap-8">
      <div>
        <p className="font-medium">F1</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-text-secondary text-sm font-medium">Next Race</p>
        <Race race={futureRaces.races.find((race: any) => time(race.schedule.race, race).isAfter(now))} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-text-secondary text-sm font-medium">Future Races</p>
        {futureRaces.races
          .filter((race: any) => time(race.schedule.race, race).isAfter(now))
          .slice(1)
          .slice(0, moreRaces ? futureRaces.races.length : 3)
          .sort((a: any, b: any) => time(a.schedule.race, a).getTime() - time(b.schedule.race, b).getTime())
          .map((race: any) => (
            <Race key={race.raceId} race={race} />
          ))}
        <Card className="flex items-center justify-center" onClick={() => setMoreRaces(!moreRaces)}>
          <p className="text-text-secondary text-xs">{moreRaces ? 'Show Less' : 'Show More'}</p>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-text-secondary text-sm font-medium">Drivers Championship</p>
        {drivers.drivers_championship
          .sort((a: any, b: any) => b.points - a.points)
          .slice(0, moreDrivers ? drivers.drivers_championship.length : 3)
          .map((driver: any, i: number, drivers: any[]) => (
            <Driver key={i} driver={driver} pointReference={drivers[0].points} i={i} />
          ))}
        <Card className="flex items-center justify-center" onClick={() => setMoreDrivers(!moreDrivers)}>
          <p className="text-text-secondary text-xs">{moreDrivers ? 'Show Less' : 'Show More'}</p>
        </Card>
      </div>
    </div>
  );
}
