import { Project } from './_components/Project';
import { Section } from './_components/Section';

export default function Page(): JSX.Element {
  return (
    <div className="mx-auto max-w-3xl px-16 py-64 sm:px-64 flex flex-col gap-64">
      <div className="flex flex-col">
        <p className="text-text-primary font-medium text-md">Bartosz Król</p>
        <p className="text-text-secondary font-medium text-md">Software Engineer</p>
      </div>

      <Section title="Projects" className="flex flex-col gap-8">
        <Project
          name="Brickver"
          description="A platform where you can showcase your LEGO collection, discover new sets, and connect with other LEGO fans!"
          href="https://brickver.com/"
          image="/images/work/brickver.png"
        />
        <Project
          name="Top.gg"
          description="A platform to spice up your Discord experience with diverse range of Discord Bots and Apps."
          href="https://top.gg/"
          image="/images/work/top.png"
        />
        <Project
          name="Slice"
          description="An innovative platform revolutionizing internet browsing by enabling users to monetize their browser."
          href="https://addslice.com/"
          image="/images/work/slice.png"
        />
        <Project
          name="GameGator"
          description="A consumer review & price comparison website, specialising in gaming products."
          href="https://gamegator.net/"
          image="/images/work/gamegator.png"
        />
        <Project
          name="Dank Memer"
          description="One of the largest bots on Discord with over 30 million users and 9 million servers."
          href="https://dankmemer.lol/"
          image="/images/work/dank-memer.png"
        />
        <Project
          name="Bloxlink"
          description="A free, seamless Roblox integration and management service for Discord. Acquired by Roblox."
          href="https://blox.link/"
          image="/images/work/bloxlink.png"
        />
      </Section>
    </div>
  );
}
