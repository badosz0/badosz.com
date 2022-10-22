import { AnimateSharedLayout, motion } from 'framer-motion';
import HomeNowPlaying from '../components/pages/home/NowPlaying';
import HomeProjects from '../components/pages/home/Projects';
import HomeWork from '../components/pages/home/Work';
import { Container } from '../components/ui/Container';
import { Link } from '../components/ui/Link';

export default function HomePage(): JSX.Element {
  return (
    <Container>
      <AnimateSharedLayout>
        <main className="my-16 flex flex-col space-y-16">
          <motion.div
            layout
            initial={{ scale: 1, opacity: 0, y: 5 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.75, type: 'spring' }}
          >
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
          </motion.div>

          <motion.div
            layout
            initial={{ scale: 1, opacity: 0, y: 5 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.75, type: 'spring' }}
          >
            <HomeWork/>
          </motion.div>

          <motion.div
            layout
            initial={{ scale: 1, opacity: 0, y: 5 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.75, type: 'spring' }}
          >
            <HomeProjects/>
          </motion.div>

          <motion.div
            layout
            initial={{ scale: 1, opacity: 0, y: 5 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.75, type: 'spring' }}
          >
            <HomeNowPlaying/>
          </motion.div>
        </main>
      </AnimateSharedLayout>
    </Container>
  );
}
