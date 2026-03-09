import HolyTime from 'holy-time';

export const time = (p: any, race: any) =>
  new HolyTime(p ? `${p.date}T${p.time}` : Number.POSITIVE_INFINITY).add(
    race.circuit.circuitName.toLowerCase().includes('vegas') ? 1 : 0,
    'days',
  );
