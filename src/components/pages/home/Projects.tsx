import Repository from './elements/Repository';

export default function HomeProjects(): JSX.Element {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='text-lg font-semibold border-b pb-2 mb-2'>
        Projects
      </div>
      <div className="grid grid-cols-1 gap-8">
        <Repository
          url='badosz0/holy-time'
        />
      </div>
    </div>
  );
}
