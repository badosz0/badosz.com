import { AnimateSharedLayout } from 'framer-motion';
import HomeNowPlaying from '../components/pages/home/NowPlaying';
import HomeProjects from '../components/pages/home/Projects';
import HomeWork from '../components/pages/home/Work';
import { Container } from '../components/ui/Container';
import { Link } from '../components/ui/Link';
import { Offset } from '../components/ui/Offset';

export default function HomePage(): JSX.Element {
  return (
    <Container>
      <AnimateSharedLayout>
        <main className="my-16 flex flex-col space-y-16">
          <Offset by={0}>
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
          </Offset>

          <Offset by={0.2}>
            <HomeWork/>
          </Offset>

          <Offset by={0.4}>
            <HomeProjects/>
          </Offset>

          <Offset by={0.6}>
            <HomeNowPlaying/>
          </Offset>
        </main>
      </AnimateSharedLayout>
    </Container>
  );
}
