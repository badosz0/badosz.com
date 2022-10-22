import Project from './elements/Project';

export default function HomeWork(): JSX.Element {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='text-lg font-semibold border-b pb-2 mb-2'>
        Work
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Project
          name='Bloxlink'
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
      </div>
    </div>
  );
}
