'use client';

type Props = {
  name: string;
  description: string;
  href: string;
  image: string;
};

export function Project({ name, description, href, image }: Props) {
  return (
    <a
      className="bg-card rounded-[4px] p-8 flex sm:flex-row flex-col gap-8 sm:gap-16 items-center"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={image}
        className="sm:h-[96px] max-h-[192px] w-full sm:w-auto aspect-video object-cover rounded-[4px]"
        alt={name}
      />
      <div className="flex flex-col">
        <p className="text-sm font-medium text-text-primary">{name}</p>
        <p className="text-sm font-medium text-text-secondary ">{description}</p>
      </div>
    </a>
  );
}
