type Props = {
  name: string;
  description: string;
  image: string;
  date: string;
  role: string;
  href: string;
};

export default function Project({ name, description, image, date, role, href }: Props): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-col space-y-2 lg:grayscale-[80%] hover:grayscale-0 transition-all duration-300 cursor-pointer"
    >
      <div className="">
        <img
          src={image}
          className="object-cover rounded-md aspect-video"
        />
      </div>
      <div className="flex flex-col ">
        <div className="text-gray-400 text-sm flex justify-between">
          <div>{date}</div>
          <div>{role}</div>
        </div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-justify leading-4">{description}</div>
      </div>
    </a>
  );
}
