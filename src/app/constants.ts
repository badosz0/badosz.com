type WorkEntry = {
  title: string;
  description: string;
  icon: string;
  url: string;
  rounded?: boolean;
};

export const WORK: WorkEntry[] = [
  {
    title: "Brickver",
    description:
      "A platform where you can showcase your LEGO collection, discover new sets, and connect with other LEGO fans!",
    icon: "/icons/brickver.png",
    url: "https://brickver.com",
    rounded: true,
  },
  {
    title: "Dank Memer",
    description:
      "One of the largest bots on Discord with over 30 million users and 9 million servers.",
    icon: "/icons/dank-memer.webp",
    url: "https://dankmemer.lol",
  },
  {
    title: "Maki",
    description:
      "Maki.gg is the ultimate all-in-one Discord platform that empowers you to grow and manage your community effortlessly with powerful moderation and engagement tools built for scale.",
    icon: "/icons/maki.png",
    url: "https://maki.gg",
    rounded: true,
  },
];

export const PAST_WORK: WorkEntry[] = [
  {
    title: "Top.gg",
    description:
      "A platform to spice up your Discord experience with diverse range of Discord Bots and Apps.",
    icon: "/icons/topgg.webp",
    url: "https://top.gg",
  },
  {
    title: "Slice",
    description:
      "An innovative platform revolutionizing internet browsing by enabling users to monetize their browser.",
    icon: "/icons/slice.png",
    url: "https://addslice.com/",
  },
  {
    title: "GameGator",
    description:
      "A consumer review & price comparison website, specialising in gaming products.",
    icon: "/icons/gamegator.jpg",
    url: "https://gamegator.net/",
    rounded: true,
  },
  {
    title: "Bloxlink",
    description:
      "A free, seamless Roblox integration and management service for Discord. Acquired by Roblox.",
    icon: "/icons/bloxlink.png",
    url: "https://blox.link/",
    rounded: true,
  },
];
