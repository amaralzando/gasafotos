"use client";

import Link from "next/link";
import { User, MapPin, Play, Heart } from "lucide-react";

const categories = [
  {
    href: "/app/people",
    icon: User,
    title: "People & Pets",
    count: "1,240 items",
    colorClass: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    href: "/app/places",
    icon: MapPin,
    title: "Places",
    count: "85 locations",
    colorClass:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    href: "/app/videos",
    icon: Play,
    title: "Videos",
    count: "432 items",
    colorClass:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    href: "/app/favorites",
    icon: Heart,
    title: "Favorites",
    count: "215 items",
    colorClass: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  },
];

export function CategoriesSection() {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        Categories
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map(({ href, icon: Icon, title, count, colorClass }) => (
          <Link
            key={href}
            href={href}
            className="group flex cursor-pointer items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition-colors hover:border-[#137fec]/50 dark:border-slate-700 dark:bg-slate-800"
          >
            <div
              className={`flex size-12 items-center justify-center rounded-lg ${colorClass}`}
            >
              <Icon className="size-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-900 transition-colors group-hover:text-[#137fec] dark:text-white">
                {title}
              </h4>
              <p className="text-xs text-slate-500">{count}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
