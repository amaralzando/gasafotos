"use client";

import Link from "next/link";
import { Check, Plus, Heart } from "lucide-react";

const todayPhotos: { src: string; alt: string; className?: string }[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvP-2LSI1g6I6ly4yTu1MuOcZI8J7PAG5Unz7ZkY2aeBPxQsfX7DT1XYC3cbsthngG6fkDAv0zcTtNeH3Xnkm12FdJJvjaz5sPTu-JHviRn1JjJ91qzGXIUSXvYcUO9T7-C5gRAaI57FqTx8y6tYI0xGXd_3Tm-42iaIzdA9-Dnd0ZjhLovVOimVo1DZQ4-k79l1LMdxRoeslCZ7nB_Khu3LrMQm9m3zYVoiGUBEB2nPXHTSNSB8YxpoH4IniZnzNaO8Ta-JPJ6r0",
    alt: "Camera lens on a table",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSOj4o7FgJHPc1ovtNWJWN2OSRpXnPFq2yi5s2S3OrkyG4He6bweCZnD_hWH_safOZBTMRE5wK6XRLyPnMyR38xfNVEdjUDHBdaqhVZgDDvZOozq9jXG7HbgMEwXl_2MKgSp0PvD-O5m0tpFEBu8IiqzoF7nQ4w5S99fxUxEvedYgDy98G7r9g9SVro-iduTPy-lnGwwAUDwjcjH7ZLaJ2PHCTzb4_LxQbt457SlL957AM3pwztjksKY0F0TQYko13Y1cGjU-F8jU",
    alt: "Mountain landscape during hiking",
    className: "md:col-span-2 md:aspect-[16/10]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB50jrG_tgCoY2oiSufLK1DKc7cAeKrYLxYvOEm3sXFX_VsTaNZXgcteJR3fGsKfJi0SKiYWGSOvNvkRBD2v0oSVK87hN9TFWIiFfoJq8kE7KAgb4wGrlzcdsCJPehBE9CnIr-rTosGnLfbd_2XmKzwlsxKJrh1rV3L7T1xHQc5vRrQZVlxHr4BQcWDw9yNGcy5sogQd07t2EgjBerbZlEAumtKxo0n--4gmNjhvjiNZIpYtwPyKWi_BO6neFJjIfwgqMvV3kEkOUs",
    alt: "Portrait of a woman smiling",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQGBldEuRCTicJkdKH-NwpLCTyaEQngnn8gJwO-CC7aLAa_uH8CIkp7NEWNYQmjKBmTnuAm6oR40cxfGkiqvdaQhhI4ioyZm_e859v5vVZcCg1Fee3L8gg5yjx2D534C81CG-RqpTCbL0ldHKr2A53z0h9cODSWHQ74EOww0noznUAAXPkJ3VCEfxs4Rh9g6WWWqflrMcKkccE1X60B69g4ApdgME7e0nsfJ3JrYOEedWh0rrezI4vb_u6-qoLCERVkcDoxiwp6VQ",
    alt: "Group of friends running in mountains",
  },
];

const yesterdayPhotos = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjgumruacsFMLeY8u1U31NmEvqU0nggOcRNQDTlCKcUX2aPA8oTyQmrY_0uDrawtfY8kTni8oRLaoOkt_6LDuSa1hIXe4TstxUMDdpWBk3o02ddD8caGYwRKXZkSSalbU-FAfXcVT61V9Ons6koAildE9-kLMMAAFp5_jxwscPhVcj3nNFCcTqcZu_G1PUVA13E3P-aFTeGszqPAWFJc0jLJwGmjYzq-TeFOmsTrXDhSAZSTjh8TXbgVtd2fhEYythMshFycWMBpQ",
    alt: "Cozy coffee cup and book",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT7X1sfurqqssZon8x0abh8hSWy53zHaAG6FqtInFFF9750EQY7Ft4-MvsmcYVx_JrZLGtrwArhW2WTx7WBynkVyq-OcntfKjsFVBreWDZ9g8lMQndTIv6fZrPh1__kwPHCdlOR6p-jL3BgMlXMERI5vjKIfn0CE0sJOSXKswqncvDg9IoZfMzmLUvlR_i642FwtWsUYwkLEUI6f5NZtR6yE4LzTeaUlLB88QmLFh4GpVntKx4hHvYuZrfwkYm40ETaQlqaIq0N04",
    alt: "Camera on a wooden desk",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATz0NmGjCQWp4bZdQk5zWzFm6Po3Ll778TAyr5o3A6kZ3AXN_0Z1wisOwPnFE-5_sZaLxWHwAtY47setUY5L9FszWKTYd7FjTCCCGqTBIwlJq2M5833aToZWDEm-Mvgvh3z5pBbFeAtPTG-6Dsu_SWWpHyzrXI90KfnNcVQnbc8o8X98vYgHmMKUNn6TI9cXFEymfEyIaA2anT6hiQKuEJbM3Hit2dJSOuXHMeV4HgrV1BcR00RMeD4FioUQ5FaNPIaOXdWre5DOw",
    alt: "Abstract yellow geometric pattern",
  },
];

const octoberPhotos: { src: string; alt: string; span: string; favorites?: number }[] = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFPXAxC8Oo7ENSTJ4qatKPhuRjuuP7HQ5Z6D7bb4UbARsu7BGmyEGARGGairuiGYEsLUdv2cx2LUp2wPAQVXBCMYGrdIJzAobnry1BN0WiPC1GK8GW4nPElxxt_4hQhESlPhefZY2-NDzZfEKiySd5JBWT0U26yadEvlaabCJxvAEMrKKdKxqeeDdWqRtghoMT4GVEMFTMn8RpVyWPsvLA12j5s3aLvZCAU040ECT_-0ZNEfO7sYmGeZXV10NxfEIjU8_UohocIjM", alt: "Close up of blooming flower", span: "col-span-1 md:col-span-2 row-span-2", favorites: 12 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMUwACQS2k7qslIOGMK_SLEUQUqZ5CENxhsbzId8MY-u0xCzrNMKl16Jo7fHvAkCcQ73Hhiy6UoJ_DntBX-1IwQRygfmVzSrJoT_4ghaiBV7dAaYB95t6feti00zEIN8IetZgbdh_p6UmXFq0WfxM9x1GDhCf7XV5gbSILoW68j6nf8L2rvqiFbpWKcsWcpY30FBPz54W__2M56ctibqsV3DA1bTDV56mgkZemPcJr65e7gi1n_-yWOmUGe7z0P-AuoTCfWabgZu8", alt: "Colorful abstract architecture detail", span: "col-span-1 row-span-1" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOGSlGf3oFM4JE3BZheVxO3ZKNY3oJkCQi70pu9EcCx0YLIj2fLpyaS0qFAJwL6R3CxzA7YrZebCUN4jYqxV5LxKzwhJEExJ-hmwT5wK0bN6JhQc5heqyOpeTFUxXV5wvJIeOtuBtAL_HkfEEy4_VMlkeyBFg9i6HSQes1emwcH521jIgBX3HKwSIhZQ6E5unKEefyhvTNoBFzIP4S5TL9K8pfN1WX1miv6rKcKLdRYuplnRr6FWt8YGttL1pF5AeXy15MeoZFMJw", alt: "Mountain view with misty clouds", span: "col-span-1 row-span-1" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGG0q1U_TUENzRJpPC2_PzvaGZjl4S2bjXIE6hqqb89rRA8BmdF-bBnFYYmKpul-z_4-Bz07EIlwuw64QLduIuFaGptKR27Ayeat-NiuGVTurArGUzyjUSWUmu9pQPregAcTsD9DKZ6hYDOl5YCFT9sgvMI2GBNSdh8nClCogAzQRjlqXyFO3rYG_puFd1O3MgWd0R4oVNt4Lx67r0li96oqS8m1HDMlTuIDDfvohwMzqHvfHZA2CfJN9u2PT6WsVxUA23mByEh54", alt: "Boat on a lake with mountains", span: "col-span-1 md:col-span-2 row-span-1" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0xbvryM3yNxfBgM93k5RxYr1csyUvuymlhwlWtSsLcA5q7tAgj0QXFMZspduVZR4Jl6aBuo8CUujjW1Hf7cJ5XJeDmyhyBfcrDgBsYN-t0pz0LJXRCCyNBFIZl2lpxN0xkipk9hABY2mcZwJbJxZu3LgolJM2vHT2DbVm1-3PJd48bSGHVHBCvu8QsIXyI45wW13w263jmrmQZRXzCUCyiqU66jvTl9RUEoAkH9f34gJCDRfOwuIBtBOj_b92I3vM-AFIkZpTMTE", alt: "Palm trees silhouette at sunset", span: "col-span-1 row-span-1" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCliJ-572fVgsGwshFGRNDIyAgMS9u5sthqmdKrhdCPjPcFDTgL5hkFMgjOR0h0vBu_HvV7ePJFzjkxShgAfbKmQ_a82R48m6Od9BHxYYMcb2fA0dZEspwCIr7YBlNooK1vQR-VPar04qCuyzTotqHKwf4FGBmBtXtUctAeFcHORjLrL3EkjUp3h1N1L3hix7OKlDBnMlvOBTOzHumqaH31xvDPTOWdpAa-1iVHoR85cSNcDwz5BB08EhedpdUgARmjTvcPVLuxZR4", alt: "Traveler walking on a path", span: "col-span-1 row-span-1" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD_n1B4H4je8-wucwt4ijVVk45RHfvAuJCv9bHuVhyOIlApi4L6zpHoPtBqwij4B0ElXumWIHvckOV_X0UY7zp-zlLC95KXOjSX7ZpyLrrNFeScUpQvO4u0dBGKqYj_4VA_AMJO5zoO9HozvP6kY6mMpKpGq-gv2fPFBjH1Zw9uHXZbCAAkA6yJ7k38m8QIMqogZph7CrId7kK6VoxKmRSLqME3vczdpaDWN3sKYvFPhgLIC_5Vs-sgjTbyK4DDqqmSkKMLJWShs", alt: "Dog running in the park", span: "col-span-1 row-span-1" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLOmtTsxXR975l6nPCokCED_ic3KN3PE9iwdUEUgDb4PjSlml8zagTT8EAqdeiXXSNmZmsE4sh0UZTt_NODQPZO04CpGiLjHFviewvOJNJyDPhNibvoyOLFAoYV_P1WiAc7OypGi5pszsJEfO-9uTIz7uEcMD7KhwrF4DQTjAdoTcWnJMgnt7n-2lhtjCG2aM2slJrULqhOMCS1qOg0KpJldo6HKU59Ct8RZgJ_vfM562qxdLZpnrjpt5RxmgD_a2B4__4I60JNRE", alt: "Workspace with laptop and coffee", span: "col-span-1 row-span-1" },
];

function PhotoCard({
  src,
  alt,
  className = "",
  favorites,
}: {
  src: string;
  alt: string;
  className?: string;
  favorites?: number;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800 cursor-pointer ${className}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
      />
      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      <div className="absolute top-2 left-2 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="flex size-6 items-center justify-center rounded-full border-2 border-white/80 bg-black/20 text-white transition-colors group-hover:bg-[#137fec] group-hover:border-[#137fec]">
          <Check className="size-4" />
        </div>
      </div>
      {favorites != null && (
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
          <Heart className="size-3.5" />
          {favorites}
        </div>
      )}
    </div>
  );
}

export function FotosScreen() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
          Timeline
        </h2>
        <div className="flex rounded-lg bg-slate-200 dark:bg-slate-800 p-0.5">
          <button
            type="button"
            className="rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-800 shadow-sm dark:bg-slate-600 dark:text-white"
          >
            Day
          </button>
          <button
            type="button"
            className="rounded-md px-3 py-1 text-xs font-medium text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            Month
          </button>
          <button
            type="button"
            className="rounded-md px-3 py-1 text-xs font-medium text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            Year
          </button>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="sticky top-0 z-10 mb-4 w-full bg-[#f6f7f8]/95 py-2 text-xl font-bold text-slate-900 dark:bg-[#101922]/95 dark:text-white backdrop-blur-sm">
          Today
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {todayPhotos.map((p, i) => (
            <Link
              key={i}
              href={`/app/foto/${i + 1}`}
              className={`aspect-[4/5] ${p.className ?? ""}`}
            >
              <PhotoCard src={p.src} alt={p.alt} className="h-full" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="sticky top-0 z-10 mb-4 w-full bg-[#f6f7f8]/95 py-2 text-xl font-bold text-slate-900 dark:bg-[#101922]/95 dark:text-white backdrop-blur-sm">
          Yesterday
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4">
          {yesterdayPhotos.map((p, i) => (
            <div key={i} className="aspect-square">
              <Link href={`/app/foto/10${i}`}>
                <PhotoCard src={p.src} alt={p.alt} className="h-full" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="sticky top-0 z-10 mb-4 w-full bg-[#f6f7f8]/95 py-2 text-xl font-bold text-slate-900 dark:bg-[#101922]/95 dark:text-white backdrop-blur-sm">
          October 2023
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 xl:grid-cols-6 auto-rows-[200px]">
          {octoberPhotos.map((p, i) => (
            <Link key={i} href={`/app/foto/20${i}`} className={`${p.span} block h-full`}>
              <PhotoCard
                src={p.src}
                alt={p.alt}
                className="h-full"
                favorites={p.favorites}
              />
            </Link>
          ))}
        </div>
      </section>

      <div className="flex flex-col items-center justify-center py-12 text-slate-400">
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
          <Check className="size-8" />
        </div>
        <p className="font-medium">You&apos;re all caught up!</p>
      </div>

      <Link
        href="/app/fotos/upload"
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2 rounded-2xl bg-[#137fec] p-4 text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-110 hover:bg-blue-600 active:scale-95"
        aria-label="Create New"
      >
        <Plus className="size-7" />
      </Link>
    </div>
  );
}
