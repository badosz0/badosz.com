import HomeNowPlaying from '../components/pages/home/NowPlaying';
import HomeProjects from '../components/pages/home/Projects';
import { Container } from '../components/ui/Container';
import { Link } from '../components/ui/Link';

export default function HomePage(): JSX.Element {
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
        <HomeNowPlaying/>
        <HomeProjects/>
      </main>
    </Container>
  );
}
