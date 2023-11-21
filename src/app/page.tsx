import { Emoji } from './_components/Emoji';
import { Project } from './_components/Project';
import { Work } from './_components/Work';

export default function Page(): JSX.Element {
  return (
    <div className="mx-auto max-w-3xl p-8 sm:p-16 flex flex-col gap-32">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <p className="text-white font-bold text-3xl">Bartosz Król</p>
          <div className="flex justify-between">
            {[
              ['github', 'https://github.com/badosz0'],
              ['twitter', 'https://twitter.com/badoosz'],
              ['email', 'mailto:contact@badosz.com'],
            ].map(([name, href]) => (
              <a href={href} className="text-link font-semibold" key={name}>
                {name}
              </a>
            ))}
          </div>
        </div>
        <Emoji />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-xl">Work</p>
        <Work
          name="Slice"
          description="An innovative platform revolutionizing internet browsing by enabling users to monetize their browser."
          href="https://addslice.com/"
          image="/images/work/slice.png"
          time="2023 - Present"
        />
        <Work
          name="GameGator"
          description="A consumer review & price comparison website, specialising in gaming products."
          href="https://main.gamegator.net/"
          image="/images/work/gamegator.png"
          time="2023 - Present"
        />
        <Work
          name="Bloxlink"
          description="A free, seamless Roblox integration and management service for Discord."
          href="https://blox.link/"
          image="/images/work/bloxlink.png"
          time="2022 - Present"
        />
        <Work
          name="Dank Memer"
          description="A feature-rich bot with the original twist. One of the largest bots on Discord with over 30 million users and 9 million servers."
          href="https://dankmemer.lol/"
          image="/images/work/dank-memer-bot.png"
          time="2021 - Present"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-xl">Projects</p>
        <Project
          name="holy-time"
          description="Yet another (type-safe) date time library"
          url="badosz0/holy-time"
          emoji="clock"
        />
      </div>
    </div>
  );
}
