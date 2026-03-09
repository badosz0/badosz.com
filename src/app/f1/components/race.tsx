import { Constants } from 'amerkit';
import Image from 'next/image';
import Card from '../../../components/card';
import { COUNTRY_MAP, SESSIONS } from '../constants';
import { time } from '../utils';

const SPECIAL_IMAGE_CODES: Record<string, string> = {
  miami: 'Miami',
  silverstone: 'Great Britain',
  austin: 'USA',
  vegas: 'Las Vegas',
  yas_marina: 'Abu Dhabi',
};

const SPECIAL_CIRCUIT_CODES: Record<string, string> = {
  jeddah: 'jeddah',
  montmelo: 'catalunya',
  spa: 'spafrancorchamps',
  madring: 'madring',
  hungaroring: 'hungaroring',
  interlagos: 'interlagos',
  yas_marina: 'yasmarinacircuit',
};

export function Race({ race }: { race: any }) {
  const id = race.circuit.circuitId;
  const city = race.circuit.city;
  const country = COUNTRY_MAP[race.circuit.country] ?? race.circuit.country;
  const countryImageCode = SPECIAL_IMAGE_CODES[id] ?? country.toLowerCase().replace(/ /g, '_');
  const circuitCode = SPECIAL_CIRCUIT_CODES[id] ?? city.replace(/ /g, '').toLowerCase();
  const year = new Date().getFullYear();
  return (
    <Card className="flex items-center gap-4 relative ">
      <img
        alt="Background"
        src={`https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/${countryImageCode}.webp`}
        className="absolute z-0 inset-0 rounded-xl opacity-15 object-cover h-full w-full"
      />
      <Image
        src={Constants.countries.find((c) => c.name === country)?.twemojiImageURL ?? ''}
        alt={race.circuit.country}
        width={32}
        height={32}
        className="z-1"
      />
      <div className="z-1">
        <p className="font-medium text-sm">{race.circuit.circuitName}</p>
        <div className="text-text-secondary text-xs">
          {Object.entries(race.schedule)
            .filter(([id, { date }]: any) => date && SESSIONS[id])
            .sort((a: any, b: any) => time(a[1], race).getTime() - time(b[1], race).getTime())
            .map(([id, d]: any) => {
              if (!d.time) {
                return null;
              }
              return (
                <div key={id} className="flex items-center gap-2 ">
                  <p className="text-text-secondary text-xs tabular-nums">{time(d, race).format('MMMM DD, HH:mm')}</p>
                  <p className="text-text-secondary text-xs ">{SESSIONS[id] ?? id}</p>
                </div>
              );
            })}
        </div>
      </div>
      <img
        src={`https://media.formula1.com/image/upload/c_lfill,w_3392/v1740000000/common/f1/${year}/track/${year}track${circuitCode}blackoutline.svg`}
        alt={race.circuit.circuitName}
        width={64}
        height={64}
        className="absolute right-4 opacity-50"
      />
    </Card>
  );
}
