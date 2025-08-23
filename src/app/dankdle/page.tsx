'use client';

import { Utils } from 'amerkit';
import clsx from 'clsx';
import HolyTime from 'holy-time';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

type Item = {
  id: number;
  itemKey: string;
  name: string;
  type: string;
  value: number;
  emoji: string;
  tags: Record<string, string>;
  hasUse: boolean;
  rarity: string;
  marketValue: number;
  netValue: number;
  flavor: string;
  details: string;
  imageURL: string;
  skins: Record<
    string,
    {
      name: string;
      rarity: string;
      imageURL: string;
    }
  >;
};

export default function Page() {
  const { data: items } = useSWR<Item[]>('/api/dankdle');
  const [target, setTarget] = useState<Item | null>(null);
  const [guesses, setGuesses] = useState<number[]>([]);
  const [search, setSearch] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [won, setWon] = useState<boolean>(false);
  const now = new Date();
  const dankdleIndex = HolyTime.between(
    HolyTime.startOf('day', '2025-08-24', 'UTC+0'),
    HolyTime.startOf('day', now, 'UTC+0'),
  ).in('days');

  useEffect(() => {
    if (!items) {
      return;
    }

    const state = xmur3(`${now.getUTCDate()}${now.getUTCMonth()}${now.getUTCFullYear()}`);
    setTarget(items[state() % items.length]);
  }, [items]);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = setTimeout(() => setCopied(false), 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  useEffect(() => {
    if (!target) {
      return;
    }

    if (!guesses.includes(target.id)) {
      return;
    }
    const timeout = setTimeout(() => setWon(true), 2200);

    return () => {
      clearTimeout(timeout);
    };
  }, [guesses, target]);

  if (!items || !target) {
    return null;
  }

  const searchResult = items.filter(
    (item) => !guesses.includes(item.id) && item.name.toLowerCase().includes(search.toLowerCase()),
  );

  let emojis: string = '';

  for (const guess of guesses) {
    const item = items.find((item) => item.id === guess)!;

    const targetValues: any[] = [
      [target.type],
      [target.rarity],
      [target.marketValue],
      [target.hasUse ? 'Yes' : 'No'],
      [target.tags.NO_TRANSFER ? 'Yes' : 'No'],
      [Object.keys(target.skins).length],
      Object.keys(target.tags).map((v) => Utils.toTitleCase(v.replace(/_/g, ' ').toLowerCase(), false)),
    ];

    const values: any[] = [
      [item.type],
      [item.rarity],
      [item.marketValue],
      [item.hasUse ? 'Yes' : 'No'],
      [item.tags.NO_TRANSFER ? 'Yes' : 'No'],
      [Object.keys(item.skins).length],
      Object.keys(item.tags).map((v) => Utils.toTitleCase(v.replace(/_/g, ' ').toLowerCase(), false)),
    ];

    let line = '';

    for (let i = 0; i < targetValues.length; i++) {
      if (targetValues[i].every((v: any) => values[i].includes(v)) && values[i].length === targetValues[i].length) {
        line += '🟩';
      } else if (targetValues[i].some((v: any) => values[i].includes(v))) {
        line += '🟨';
      } else {
        line += '🟥';
      }
    }

    emojis += `${line}\n`;
  }

  return (
    <div className="mx-auto max-w-5xl p-32 sm:p-64 flex flex-col gap-64">
      <div className="flex flex-col">
        <p className="font-medium text-2xl">Dankdle</p>
      </div>

      <div className="flex flex-col gap-64">
        <div className="relative flex-1">
          <input
            disabled={guesses.includes(target.id)}
            type="text"
            className="bg-card w-full rounded-sm p-8"
            placeholder="Type item name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length > 0 && (
            <div className="absolute -bottom-4 translate-y-full w-full bg-card rounded-sm p-8 shadow-sm flex flex-col gap-4 z-10">
              {searchResult.slice(0, 5).map((item) => (
                <div
                  className="flex items-center gap-4 cursor-pointer hover:bg-card-secondary rounded-sm p-4"
                  key={item.id}
                  onClick={() => {
                    setGuesses([item.id, ...guesses]);
                    setSearch('');
                  }}
                >
                  <img src={item.imageURL} alt={item.name} className="size-20 object-contain" />
                  <p className="font-medium text-md">{item.name}</p>
                </div>
              ))}
              {searchResult.length === 0 && <p className="text-sm text-text-secondary">No results</p>}
            </div>
          )}
        </div>

        {won && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-card p-16 rounded-sm flex items-center justify-center gap-16 flex-col"
          >
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg"> Great Job</p>
              <p className="font-medium">
                Next item {HolyTime.relativeFromTo(now, HolyTime.next('day', now, 'UTC+0'))}!
              </p>
            </div>
            <button
              type="button"
              className="bg-green-300 px-8 py-4 rounded-sm text-sm font-semibold"
              onClick={() => {
                setCopied(true);
                navigator.clipboard.writeText(
                  `**Dankdle #${dankdleIndex}**\n` +
                    `My guesses: ${guesses.length}\n\n` +
                    `${emojis}\n` +
                    '<https://badosz.com/dankdle>',
                );
              }}
            >
              {copied ? 'Copied!' : 'Share Result'}
            </button>
          </motion.div>
        )}

        <motion.div className="flex flex-col gap-8 overflow-x-scroll" layout>
          {guesses.length > 0 && (
            <motion.div
              key="header"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              layout
            >
              <div className="grid grid-cols-8 gap-8 min-w-[890px]">
                {['Item', 'Type', 'Rarity', 'Market Value', 'Usable', 'Transferable', 'Skins', 'Tags'].map((v) => (
                  <p key={v} className="font-bold text-sm bg-card rounded-sm p-4">
                    {v}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {guesses.map((guess) => {
            const item = items.find((item) => item.id === guess)!;

            return (
              <motion.div key={`guess-${guess}`} className="grid grid-cols-8 gap-8 min-w-[890px]" layout>
                <Animate id={`image-${guess}`} index={0} key={`image-${guess}`}>
                  <img
                    src={item.imageURL}
                    alt={item.name}
                    className={clsx(
                      'bg-card w-full p-16 object-contain rounded-sm',
                      guess === target.id ? 'bg-green-200' : 'bg-red-200',
                    )}
                  />
                </Animate>
                <Animate id={`type-${guess}`} index={1} key={`type-${guess}`}>
                  <Box target={[target.type]} value={[item.type]} />
                </Animate>
                <Animate id={`rarity-${guess}`} index={2} key={`rarity-${guess}`}>
                  <Box target={[target.rarity]} value={[item.rarity]} />
                </Animate>
                <Animate id={`market-value-${guess}`} index={3} key={`market-value-${guess}`}>
                  <Box target={[target.marketValue]} value={[item.marketValue]} />
                </Animate>
                <Animate id={`has-use-${guess}`} index={4} key={`has-use-${guess}`}>
                  <Box target={[target.hasUse ? 'Yes' : 'No']} value={[item.hasUse ? 'Yes' : 'No']} />
                </Animate>
                <Animate id={`no-transfer-${guess}`} index={5} key={`no-transfer-${guess}`}>
                  <Box
                    target={[!target.tags.NO_TRANSFER ? 'Yes' : 'No']}
                    value={[!item.tags.NO_TRANSFER ? 'Yes' : 'No']}
                  />
                </Animate>
                <Animate id={`skins-${guess}`} index={6} key={`skins-${guess}`}>
                  <Box target={[Object.keys(target.skins).length]} value={[Object.keys(item.skins).length]} />
                </Animate>
                <Animate id={`tags-${guess}`} index={7} key={`tags-${guess}`}>
                  <Box
                    target={Object.keys(target.tags).map((v) =>
                      Utils.toTitleCase(v.replace(/_/g, ' ').toLowerCase(), false),
                    )}
                    value={Object.keys(item.tags).map((v) =>
                      Utils.toTitleCase(v.replace(/_/g, ' ').toLowerCase(), false),
                    )}
                  />
                </Animate>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

type AnimateProps = {
  children: React.ReactNode;
  id: string;
  index: number;
};

function Animate({ children, id, index }: AnimateProps) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.2, delay: 0.3 + index * 0.2 }}
    >
      {children}
    </motion.div>
  );
}

type BoxProps = {
  target: any[];
  value: any[];
};

function Box({ target, value }: BoxProps) {
  return (
    <div
      className={clsx(
        'font-semibold text-sm bg-card rounded-sm flex items-center justify-center p-4 text-center gap-2 h-full',
        target.every((v) => value.includes(v)) && value.length === target.length
          ? 'bg-green-200'
          : target.some((v) => value.includes(v))
            ? 'bg-yellow-200'
            : 'bg-red-200',
      )}
    >
      {value.length > 0 ? value.map((v) => v.toLocaleString()).join(', ') : 'N/A'}
      {value.length === 1 && typeof value[0] === 'number' && target[0] !== value[0]
        ? target[0] > value[0]
          ? '↑'
          : '↓'
        : ''}
    </div>
  );
}

function xmur3(base: string): () => number {
  let h = 1_779_033_703 ^ base.length;

  for (let i = 0; i < base.length; i++) {
    h = Math.imul(h ^ base.codePointAt(i)!, 3_432_918_353);
    h = (h << 13) | (h >>> 19);
  }

  return (): number => {
    h = Math.imul(h ^ (h >>> 16), 2_246_822_507);
    h = Math.imul(h ^ (h >>> 13), 3_266_489_909);
    // biome-ignore lint/suspicious/noAssignInExpressions: .
    return (h ^= h >>> 16) >>> 0;
  };
}
