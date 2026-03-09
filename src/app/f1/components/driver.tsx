import Card from '../../../components/card';

const TEAM_COLORS: Record<string, string> = {
  ferrari: '#5B0011',
  mercedes: '#087E6A',
  mclaren: '#804000',
  red_bull: '#142848',
  haas: '#667074',
  rb: '#0038C2',
  audi: '#741500',
  alpine: '#004E70',
  williams: '#0A2146',
  cadillac: '#58585B',
  aston_martin: '#0F4331',
};

const SPECIAL_TEAM_LOGOS: Record<string, string> = {
  red_bull: 'redbullracing',
  rb: 'redbullracing',
  aston_martin: 'astonmartin',
};

export function Driver({ driver, pointReference, i }: { driver: any; pointReference: number; i: number }) {
  const teamLogo = SPECIAL_TEAM_LOGOS[driver.teamId] ?? driver.teamId;

  const year = new Date().getFullYear();
  return (
    <Card className="flex items-center gap-4 pb-0 relative">
      <div
        className="absolute z-0 inset-0 rounded-xl h-full w-full opacity-20"
        style={{ backgroundColor: TEAM_COLORS[driver.teamId] }}
      />
      <img
        className="z-1"
        src={`https://df0603krefnld.cloudfront.net/drivers/headshots/${driver.driver.surname
          .split(' ')
          .at(-1)
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')}.png`}
        alt={driver.driver.surname}
        width={48}
        height={48}
      />
      <div className="pb-4 z-1">
        <p className="font-medium text-sm">
          {driver.driver.name} {driver.driver.surname}
        </p>
        <div className="text-text-secondary text-xs">
          {driver.points} Point{driver.points === 1 ? '' : 's'} {i === 0 ? '' : `(-${pointReference - driver.points})`}
        </div>
      </div>
      <img
        src={`https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/${year}/${teamLogo}/${year}${teamLogo}logowhite.webp`}
        alt={driver.teamId}
        width={32}
        height={64}
        className="absolute right-4 pb-4"
      />
    </Card>
  );
}
