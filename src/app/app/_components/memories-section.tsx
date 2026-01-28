"use client";

import Link from "next/link";

const memories = [
  {
    id: "1",
    title: "1 Year Ago",
    subtitle: "Birthday Celebration",
    badge: "Recent Highlight",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASxRmXqdpOVqORcMuEF_EaO4JdUgI7BRkP4hmdtwaGtM2Plj_mZXYEKGA8ukUvJFUoeZcelB07El1qcixQ7kTsUTAUVYUZ8AmvM8JcrcDjAmsJ-mTONQSdBvZInvFeaKBGjD8JKDVlSKOrtU_ENHODvxrM7eSZZsStXBYLxnZrCi5HYwLXL5qoATnrQARp8YVEdKqsiJqWv6FkwI3hUJqE6Bn0H4ua5k5ZEoAvpGCF-wg2f10brBUCzStE93cGZefRyA5zTO7zcew",
  },
  {
    id: "2",
    title: "Trip to Beach",
    subtitle: "Maui, Hawaii",
    badge: "Trip",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhZLYOKhiC-Gd_zLc1QYNbDnSh8RLJtiEl66joaVodDXXLuAlYhDKPPZpjtcTyKGUVGdXgTeqfp8vzJtdGsgaGyUzdOGDvb42RdJuAk1wi9rWAh-KUUKKgrKD_U6w2bDPkCRlzSb1idMm68pnoUtgRxOErLB2hzwQL5z-gRz8Ek5rbLPzX4bHgdBS9qEDQaEj7B1ofE0IVff_7a-FqhwrYCRpFNoJARLXEvevrPfAMUZKtoLxm9MlYJ4AyTfPtJee6pm6wLEIijzI",
  },
  {
    id: "3",
    title: "This day in 2022",
    subtitle: "Sunday Park",
    badge: "On this day",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMNOGSvOOaulG9Fzieh_WWU2i4WkhIJESTdyIcsR5c6Gx-Xzor04KT2xSD0t3xpQFm9MsXvyU5RKvATDMufIKPNrfu3pyQyqJ2z_1cIm1LFlLEtHC36lprUCixEd_uGefXqTs7zUjhcffHgr801QpRdOywtrbom48T4uvgeic1v2PfnvscOmK0BInmDIrm4Uvz7nn1UtEZLV2Px85T3uBl2qvklSm4Nstey0erzoc8pQaaZEMBvGLAabYPoytVKPyyeTndRgV7GuY",
  },
  {
    id: "4",
    title: "Winter 2021",
    subtitle: "Aspen Trip",
    badge: "Season",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCp9Saz1gTNAxa2RRa7QsJ9L4ECsYSmX-HNF7Thulu_-M4ZMWbKBRVZvLMwmKTSN9joLuuGlVkH16kySGGnmCEkF8-14fV1dwFl95-5hJ2htGmsnQ7v37dDUSbBzIjupN98rJtiNF7jKeMlWdSqKbGJLi4bLj6QmjO_hCsqdXYAfQHL5pcrvsMniPQEp0NqhSVJAIjnj8Jbrn0wJ6G82EzvaWiSTTA9HR-VJI21QlApulR8cSKAaNYpXqkaOBC_32kHgPWeCgNVzA",
  },
];

export function MemoriesSection() {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Memories
        </h2>
        <Link
          href="/app/memories"
          className="text-sm font-medium text-[#137fec] transition-colors hover:text-blue-600"
        >
          View all
        </Link>
      </div>
      <div className="-mx-2 flex gap-4 overflow-x-auto px-2 pb-4 snap-x snap-mandatory no-scrollbar">
        {memories.map((m) => (
          <div
            key={m.id}
            className="group relative flex w-60 flex-shrink-0 cursor-pointer snap-center overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-lg aspect-[3/4]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${m.image})` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 w-full p-4">
              <span className="mb-2 inline-block rounded-md border border-white/10 bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                {m.badge}
              </span>
              <h3 className="text-lg font-bold leading-tight text-white">
                {m.title}
              </h3>
              <p className="mt-1 text-xs text-white/80">{m.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
