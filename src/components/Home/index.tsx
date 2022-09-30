import { Container } from '@web/components/ui/Container';
import { Link } from '../ui/Link';
import Project from './Project';

export function HomePage(): JSX.Element {
  return (
    <Container>
      <main className="my-16 flex flex-col space-y-16">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-3xl font-bold">Bartosz Król</div>
            <div className="flex justify-between text-gray-600">
              <Link href={'/github'}>github</Link>
              <Link href={'/twitter'}>twitter</Link>
              <Link href={'mailto:contact@badosz.com'}>email</Link>
            </div>
          </div>
          <div>
            <img
              src="/images/qr/qrcode.png"
              className="w-14 h-14"
              width={56}
              height={56}
              alt="qr code"
            />
          </div>
        </div>
        <div className='flex flex-col space-y-2'>
          <div className='text-lg font-semibold border-b-2 pb-2 mb-2'>
            Work
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Project
              name='BloxLink'
              description='A free, seamless Roblox integration and management service for Discord.'
              date='2022 - now'
              role='Full-Stack'
              image='/images/projects/bloxlink.png'
              href='https://blox.link/'
            />
            <Project
              name='Dank Memer'
              description='A feature-rich bot with the original twist. One of the largest bots on Discord with over 30 million users and 9 million servers.'
              date='2021 - now'
              role='Developer'
              image='/images/projects/dank-memer-bot.png'
              href='https://dankmemer.lol/'
            />
            <Project
              name='dankmemer.lol'
              description='A website for Dank Memer Discord bot with a feature-filled community page.'
              image='/images/projects/dank-memer-community.png'
              date='2021 - now'
              role='Back-End'
              href='https://dankmemer.lol/community'
            />
            <Project
              name='MilkScript'
              description='A dynamic programming language. Work in progress.'
              image='/images/projects/milkscript.png'
              date='2020 - now'
              role='Founder'
              href='https://github.com/badosz0/milkscript'
            />
            <Project
              name='Curfe'
              description='A skill and luck based game about being a currency. Made in 48 hours for Ludum Dare game jam.'
              image='/images/projects/curfe.png'
              date='2019'
              role=' Developer'
              href='https://badosz.itch.io/curfe'
            />
            <Project
              name='Dear President,'
              description='A skill point & click game. Made in 48 hours for Ludum Dare game jam.'
              image='/images/projects/dear-president.png'
              date='2019'
              role=' Developer'
              href='https://badosz.itch.io/dear-president'
            />
            <Project
              name='Salio'
              description='A small and minimalistic, but still super hard platformer game about getting a tiny fellow through numerous rooms filled with various obstacles.'
              image='/images/projects/salio.png'
              date='2018 - 2019'
              role='Developer'
              href='https://store.steampowered.com/app/875810/Salio/'
            />
          </div>
        </div>
      </main>
    </Container>
  );
}
