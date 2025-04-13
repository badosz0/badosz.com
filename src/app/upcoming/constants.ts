import HolyTime from 'holy-time';

type Event = {
  title: string;
  subtitle: string;
  imageURL: string;
  date: string;
};

const weekly = (event: Event, weeks: number, suffix: (i: number) => string): Event[] =>
  Array.from({ length: weeks }, (_, i) => {
    const date = HolyTime.add(event.date, i, 'weeks');
    return {
      title: event.title,
      subtitle: `${event.subtitle} ${suffix(i)}`,
      imageURL: event.imageURL,
      date: date.format('YYYY-MM-DD'),
    };
  });

export const EVENTS: Event[] = [
  ...weekly(
    {
      title: 'The Last of Us',
      subtitle: 'Season 2',
      imageURL: 'https://media.themoviedb.org/t/p/w58_and_h87_face/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg',
      date: '2025-04-13',
    },
    7,

    (i) => `Episode ${i + 1}`,
  ),
  {
    title: 'You',
    subtitle: 'Season 5',
    imageURL: 'https://media.themoviedb.org/t/p/w58_and_h87_face/v9okKX3ppj0o2PqPdEz7jCdenPs.jpg',
    date: '2025-04-24',
  },
  {
    title: 'Squid Game',
    subtitle: 'Season 3',
    imageURL: 'https://media.themoviedb.org/t/p/w130_and_h195_bestv2/8pD0Alsxpb7HDRp7jSlCE9iovWb.jpg',
    date: '2025-06-27',
  },
  ...weekly(
    {
      title: 'Star Wars: Andor',
      subtitle: 'Season 2',
      imageURL: 'https://media.themoviedb.org/t/p/w58_and_h87_face/y0j9HbsWnkn1TlT6Y52ZrsvysgU.jpg',
      date: '2025-04-22',
    },
    4,

    (i) => `Episode ${i * 3 + 1}-${(i + 1) * 3}`,
  ),
  {
    title: 'Ginny & Georgia',
    subtitle: 'Season 3',
    imageURL: 'https://media.themoviedb.org/t/p/w130_and_h195_bestv2/j1yqOSVVskSYpYreNT0VeD1S3Dq.jpg',
    date: '2025-06-05',
  },
  {
    title: 'Avengers: Doomsday',
    subtitle: '',
    imageURL: 'https://media.themoviedb.org/t/p/w94_and_h141_bestv2/6eB2oh1SplddsZYCdayrIdrIGLd.jpg',
    date: '2026-04-29',
  },
  {
    title: 'Thunderbolts*',
    subtitle: '',
    imageURL: 'https://media.themoviedb.org/t/p/w94_and_h141_bestv2/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg',
    date: '2025-05-01',
  },
  {
    title: 'The Fantastic Four: First Steps',
    subtitle: '',
    imageURL: 'https://media.themoviedb.org/t/p/w94_and_h141_bestv2/f0GOTglN9lVP7gUXP1tXBboonHN.jpg',
    date: '2025-06-25',
  },
];
