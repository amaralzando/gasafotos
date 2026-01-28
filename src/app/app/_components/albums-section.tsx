"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

const albums = [
  {
    id: "1",
    title: "Summer 2023",
    updated: "Updated yesterday",
    count: 124,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTn8sqjzCecATAyky0efagktpbkpL_gn5c5Gv2THAh9cRDtqz7u-sdHhghNeFC50uEqsvLFXJd12LMKQA1hUDt6muKXqMYnPvCN8neTq5DCOWLFS87Ecy9vquw7V7m0JrtNeCYnQ1EzpcwImugXCJqYUm947mwTG-KMG79Vxo6F07mtfx9dT5nZNfhjd9a5_9y5D8arNtT0tX85MYFGKxJALHocP8yN-r-lTZvwytZgo7tX9BjSuik1jCk8o8hHebFQFqGIPR1BQ",
  },
  {
    id: "2",
    title: "Architecture Project",
    updated: "Updated 3 days ago",
    count: 45,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRO27AR1cbPsl74lSniCo-42SsARtfcW642QmhQtRJiDLIEx5NvWJnm2bBKqYwfnTWfqBxpODrIwXa7x_brQ4EqbhspyEcOzig5FO6mZuiy24pEnUj0dCjyVIrUF8fscxUokrcg966gPwIpiuW2Evzt4fbHu0JBmzXiq9vsixn95s4f0zoVaJeijGt6Pjy6VIm0wVsIC5z8Bx4-dSlEtYtLaC7SHNJdloFA-O7FCMW43VMx6andfVuKYrH3n6vQ4fS34mbZgZFIG0",
  },
  {
    id: "3",
    title: "Family Reunion",
    updated: "Updated last week",
    count: 89,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAH2orjXeLRqPSrtJhW5N6iNyka3Odaw8S5jQ3dTl-wwD9U_sACXt5-OcyZvCFOJL8F3enVnMDELiIcQpCNm4lT5Q8pg-ZmDCg45-gnmqPu7iegNwUI3FJ4ikkUcOqy-pGb9y7WbJ3toW47XqNbVZzJd84LAaXpF_cA19IWejFswlYtqevBQ8beyxq5dFFfXun9E37Req4_9fblgOw-cVn2v5Ndx1v5wQ6020BzPwKlb-U2c7m_1lV5e38PjlbRP9a_-uiN7zRG3IM",
  },
  {
    id: "4",
    title: "Hiking Adventures",
    updated: "Updated 2 weeks ago",
    count: 32,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtue7q6VqiYTIEJ4KYvRvHCRSVW6KttpUKLy0L6uo3CYPWZTXjXwYl_-FnQx69WxNk8rqyfCu7TJncLKwsPkryPbIFS_RCVNMxMyB3j2yn-HnFyqquMiLdbOvxg94qmj0RH2kcHtfnwqU64RJmEqAVKPELGi1b3TuRCaO5CYuU2qQ12k3IsRV8x_2SAg58N6pRxIiKqAoqLyrmT1MZPfVR_Tq62hKhgj4mES3LHWc0r6Njb6tgEbjBAvRa7fcTlg4S4xCEDuFAeik",
  },
  {
    id: "5",
    title: "Art Inspiration",
    updated: "Updated 1 month ago",
    count: 18,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrI6pLnXcZP0A3zR33MQiTELT5bSj8lUPHEX4jve2hbh4DY-7EUJVbRzlA6jiFLbChaTw_nrqypYffiSklY3dBe94egvtPa6-ZMi9WpMrESMz6126T3sBR6fBUOcyb4Pb8vaxDQtLhgm88Q_Yaxo1WHcea9s9JZj-gO9DFC7ukKFEl99PZq9qC9au8kjzfy6DvyFOEPSbj26BUgDhTq9LXQFrRJ9lVMQEcCQnGcQE5Cj_KJgMXSHuNNH1IwhhvcPcvAm6Y3ny_Bnw",
  },
];

export function AlbumsSection() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Albums
        </h2>
        <button
          type="button"
          className="flex items-center gap-1.5 text-sm font-medium text-[#137fec] transition-colors hover:text-blue-600"
        >
          <Plus className="size-[18px]" />
          Create new
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {albums.map((a) => (
          <Link key={a.id} href={`/app/albums/${a.id}`} className="group">
            <div className="relative mb-3 aspect-square overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${a.image})` }}
                aria-hidden
              />
              <div className="absolute top-2 right-2 rounded-full bg-black/50 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                {a.count}
              </div>
            </div>
            <h3 className="text-base font-semibold leading-tight text-slate-900 transition-colors group-hover:text-[#137fec] dark:text-white">
              {a.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {a.updated}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
