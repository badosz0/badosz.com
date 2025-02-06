import { Project } from "./_components/Project";
import { Section } from "./_components/Section";
import { WorkExperience } from "./_components/WorkExperience";

export default function Page(): JSX.Element {
  return (
    <div className="mx-auto max-w-3xl p-32 sm:p-64 flex flex-col gap-64">
      <div className="flex justify-between items-center w-full">
        <p className="text-white font-bold text-2xl">Bartosz Król</p>
      </div>
      <Section title="Work Experience" className="flex flex-col gap-8">
        <WorkExperience
          name="Slice"
          image="/images/logos/slice.svg"
          title="Full Stack Engineer"
          time="2023 - Present"
        />
        <WorkExperience
          name="Dank Memer"
          image="/images/logos/memer.webp"
          title="Chief Technology Officer"
          time="2021 - Present"
        />
      </Section>

      <Section title="Projects" className="flex flex-col gap-8">
        <Project
          name="Brickver"
          description="A platform where you can showcase your LEGO collection, discover new sets, and connect with other LEGO fans!"
          href="https://brickver.com/"
          image="/images/work/brickver.png"
          role="Founder, CTO"
        />
        <Project
          name="Slice"
          description="An innovative platform revolutionizing internet browsing by enabling users to monetize their browser."
          href="https://addslice.com/"
          image="/images/work/slice.png"
          role="Full Stack Engineer"
        />
        <Project
          name="GameGator"
          description="A consumer review & price comparison website, specialising in gaming products."
          href="https://gamegator.net/"
          image="/images/work/gamegator.png"
          role="Full Stack Engineer"
        />
        <Project
          name="Dank Memer"
          description="A feature-rich bot with the original twist. One of the largest bots on Discord with over 30 million users and 9 million servers."
          href="https://dankmemer.lol/"
          image="/images/work/dank-memer-bot.png"
          role="Lead Software Engineer"
        />
        <Project
          name="Bloxlink"
          description="A free, seamless Roblox integration and management service for Discord. Acquired by Roblox."
          href="https://blox.link/"
          image="/images/work/bloxlink.png"
          role="Lead Full Stack Engineer"
        />
      </Section>
    </div>
  );
}
