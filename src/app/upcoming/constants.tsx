export type UpcomingEntry =
  | {
      title: string;
      type: 'movie' | 'game';
      release: string;
      imageURL: string;
    }
  | {
      title: string;
      type: 'show';
      season: string;
      episode: number;
      release: string;
      imageURL: string;
    };

const movie = (title: string, release: string, imageURL: string) => ({
  title,
  type: 'movie' as const,
  release,
  imageURL,
});

const show = (title: string, season: string, releases: string[], imageURL: string) =>
  releases.map((release, index) => ({
    title,
    type: 'show' as const,
    season,
    episode: index + 1,
    release,
    imageURL,
  }));

const game = (title: string, release: string, imageURL: string) => ({
  title,
  type: 'game' as const,
  release,
  imageURL,
});

export const UPCOMING: UpcomingEntry[] = [
  movie('Scream 7', '2026-02-26', 'scream.jpg'),
  movie('The Mandalorian and Grogu', '2026-05-22', 'mando.jpg'),
  movie('Toy Story 5', '2026-06-26', 'toy.jpg'),
  movie('Spider-Man: Brand New Day', '2026-07-31', 'spiderman.jpg'),
  movie('The Hunger Games: Sunrise on the Reaping', '2026-11-20', 'hunger.jpg'),
  movie('Dune: Part Three', '2026-12-18', 'dune.webp'),
  movie('Avengers: Doomsday', '2026-12-18', 'avengers.jpg'),
  ...show(
    'The Boys',
    'Season 5',
    ['2026-04-08', '2026-04-08', '2026-04-15', '2026-04-22', '2026-04-29', '2026-05-06', '2026-05-13', '2026-05-20'],
    'boys.jpg',
  ),
  game('Grand Theft Auto VI', '2026-11-19', 'gta.jpg'),
];
