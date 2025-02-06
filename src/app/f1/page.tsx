"use client";

import { Constants } from "amerkit";
import clsx from "clsx";
import HolyTime from "holy-time";
import { useState } from "react";
import useSWR from "swr";

const COUNTRY_MAP: Record<string, string> = {
  USA: "United States",
  UK: "United Kingdom",
  UAE: "United Arab Emirates",
};

const time = (p: any) =>
  new HolyTime(p ? `${p.date}T${p.time}` : Number.POSITIVE_INFINITY);

export default function Page(): JSX.Element {
  const { data } = useSWR<any>("https://api.jolpi.ca/ergast/f1/current.json");
  const now = new HolyTime();
  const [view, setView] = useState<string>("All");

  if (!data) {
    return <></>;
  }

  const calendar: {
    time: HolyTime;
    title: string;
    subtitle: string;
    flag: string;
  }[] = [];

  for (const race of data.MRData.RaceTable.Races) {
    const country =
      COUNTRY_MAP[race.Circuit.Location.country] ??
      race.Circuit.Location.country;
    const flag = Constants.countries.find(
      (c) => c.name === country
    )!.twemojiImageURL;

    calendar.push({
      time: time(race),
      title: race.raceName,
      subtitle: "Race",
      flag,
    });

    for (const [id, name] of [
      ["FirstPractice", "First Practice"],
      ["SecondPractice", "Second Practice"],
      ["ThirdPractice", "Third Practice"],
      ["Qualifying", "Qualifying"],
      ["Sprint", "Sprint"],
    ]) {
      if (!race[id]) {
        continue;
      }

      calendar.push({
        time: time(race[id]),
        title: race.raceName,
        subtitle: name,
        flag,
      });
    }
  }

  return (
    <div className="mx-auto max-w-3xl p-32 sm:p-64 flex flex-col gap-64">
      <div className="flex justify-between items-center w-full">
        <p className="text-white font-bold text-2xl">F1</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          {["All", "Races"].map((v, i) => (
            <p
              key={i}
              className={clsx(
                "text-sm cursor-pointer font-bold select-none",
                view === v ? "text-secondary" : "text-tertiary"
              )}
              onClick={() => setView(v)}
            >
              {v}
            </p>
          ))}
        </div>
        {calendar
          .sort((a, b) => a.time.getTime() - b.time.getTime())
          .filter((c) => c.time.isAfter(now))
          .filter((c) => view === "All" || c.subtitle === "Race")
          .map((c, i) => (
            <div
              className="bg-card rounded-[4px] p-8 flex justify-between"
              key={i}
            >
              <div className="flex gap-8">
                <img src={c.flag} className="h-40" alt={c.title} />
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-white">{c.subtitle}</p>
                  <p className="text-sm text-secondary">{c.title}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm font-bold text-white">
                  {c.time.format("MMMM DD")}
                </p>
                <p className="text-sm text-secondary">
                  {c.time.format("h:mm A")}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
