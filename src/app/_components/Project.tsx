'use client';

type Props = {
  name: string;
  description: string;
  href: string;
  image: string;
  role: string;
};

export function Project({ name, description, href, image, role }: Props) {
  return (
    <a
      className="bg-card rounded-[4px] p-8 flex gap-16 sm:items-center"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} className="h-80 aspect-video object-cover rounded-[2px]" alt={name} />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 sm:flex-row flex-col">
          <p className="text-sm font-bold text-white">{name}</p>
          <p className="text-sm text-tertiary">{role}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-secondary">{description}</p>
        </div>
      </div>
    </a>
  );
}
