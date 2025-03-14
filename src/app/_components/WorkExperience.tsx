type Props = {
  name: string;
  image: string;
  title: string;
  time: string;
};

export function WorkExperience({ name, image, title, time }: Props) {
  return (
    <div className="bg-card rounded-[4px] p-8 flex gap-8 items-center">
      <img src={image} className="size-40" alt={name} />
      <div className="flex flex-col flex-1">
        <p className="text-sm font-bold text-white">{name}</p>
        <div className="flex md:justify-between md:items-center md:flex-row flex-col">
          <p className="text-sm text-secondary">{title}</p>
          <p className="text-sm text-secondary tabular-nums">{time}</p>
        </div>
      </div>
    </div>
  );
}
