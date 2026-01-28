"use client";

import { CheckCircle, HardDrive, Minimize2, ChevronRight, ArrowRight } from "lucide-react";

export function ConfiguracoesScreen() {
  return (
    <div className="mx-auto max-w-5xl w-full px-4 py-8 md:px-12 lg:px-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Storage management
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Manage your storage plan, backup preferences, and account details.
        </p>
      </div>

      <div className="mb-8 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center gap-4">
          <div
            className="size-16 flex-shrink-0 rounded-full border-2 border-white bg-cover bg-center shadow-md dark:border-slate-700"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOS67oLI5EyZWdVboPUmUno8cLEU-o8w7tpWZNO6QbbGS0gLUHv4L0d8I3GGyPx-mwhmnyul9ie-1FbQe7x1nFZGqf71PAydGuUP4Le3JmDGSCJKVtcffAvgD0s30QvCvdv0Lmhy-W1-a_pgkvfopTET_cwEoBRtAbE21U8o1iO0FJM0YoWXFvX8N4BcNGcCcOO0V1KSl3Th0CEB_wfgBqDMrg5unIUBw1zqAOsCjaWfmC-805A63ZbIeNFWr95hdl6Pf25i035Bo")',
            }}
            role="img"
            aria-label="User profile"
          />
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Jane Doe
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              janedoe@example.com • Free Plan
            </p>
          </div>
        </div>
        <button
          type="button"
          className="hidden rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 sm:block"
        >
          Manage Account
        </button>
      </div>

      <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Storage used
              </h3>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                6.7 GB of 15 GB
              </span>
            </div>
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
              <div
                className="absolute left-0 top-0 h-full bg-[#137fec]"
                style={{ width: "45%" }}
              />
              <div
                className="absolute top-0 h-full bg-blue-300 dark:bg-blue-400 opacity-80"
                style={{ left: "45%", width: "10%" }}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-[#137fec]" />
                <span>Photos & Videos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-blue-300 dark:bg-blue-400" />
                <span>Drive & Gmail</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-slate-200 dark:bg-slate-600" />
                <span>Free space</span>
              </div>
            </div>
          </div>
          <div className="flex min-w-[200px] flex-col gap-3">
            <button
              type="button"
              className="w-full rounded-lg bg-[#137fec] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
            >
              Get more storage
            </button>
            <p className="text-center text-xs text-slate-500">
              Plans start at $1.99/mo
            </p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-slate-200 dark:border-slate-700" />

      <section className="mb-10">
        <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
          Backup settings
        </h3>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="font-medium text-slate-900 dark:text-white">
              Back up & sync
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Automatically upload photos and videos from this device
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked="true"
            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[#137fec] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#137fec] focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden
              className="pointer-events-none inline-block size-5 translate-x-5 transform rounded-full bg-white shadow ring-0 transition duration-200"
            />
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-4">
            <p className="font-medium text-slate-900 dark:text-white">
              Upload size
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Choose the quality of the uploaded items
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="relative flex cursor-pointer rounded-lg border-2 border-slate-200 p-4 shadow-sm transition-all focus:outline-none has-[:checked]:border-[#137fec] has-[:checked]:bg-blue-50/50 dark:border-slate-700 dark:has-[:checked]:bg-primary/10">
              <input
                type="radio"
                name="upload-quality"
                className="sr-only"
                aria-labelledby="quality-orig-label"
                aria-describedby="quality-orig-desc"
              />
              <span className="flex flex-1 flex-col">
                <span
                  id="quality-orig-label"
                  className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white"
                >
                  <HardDrive className="size-5 text-[#137fec]" />
                  Original quality
                </span>
                <span
                  id="quality-orig-desc"
                  className="mt-1 text-sm text-slate-500 dark:text-slate-400"
                >
                  Stores photos & videos at no change to their quality. Counts
                  against storage.
                </span>
              </span>
            </label>
            <label className="relative flex cursor-pointer rounded-lg border-2 border-[#137fec] bg-blue-50/30 p-4 shadow-sm dark:bg-primary/5">
              <input
                type="radio"
                name="upload-quality"
                defaultChecked
                className="sr-only"
                aria-labelledby="quality-saver-label"
                aria-describedby="quality-saver-desc"
              />
              <span className="flex flex-1 flex-col">
                <span
                  id="quality-saver-label"
                  className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white"
                >
                  <Minimize2 className="size-5 text-[#137fec]" />
                  Storage saver
                </span>
                <span
                  id="quality-saver-desc"
                  className="mt-1 text-sm text-slate-500 dark:text-slate-400"
                >
                  Stores more at a slightly reduced quality. Good for prints up
                  to 24x16in.
                </span>
              </span>
              <CheckCircle className="absolute right-4 top-4 size-5 text-[#137fec] fill-[#137fec]" />
            </label>
          </div>
          <div className="mt-4 flex items-center justify-between border-b border-slate-100 py-3 dark:border-slate-800">
            <div>
              <p className="font-medium text-slate-900 dark:text-white">
                Mobile data usage
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Daily limit for backup
              </p>
            </div>
            <div className="flex cursor-pointer items-center gap-2 text-slate-600 dark:text-slate-300">
              <span className="text-sm font-medium">No limit</span>
              <ChevronRight className="size-5" />
            </div>
          </div>
        </div>
      </section>

      <hr className="my-8 border-slate-200 dark:border-slate-700" />

      <section className="mb-20">
        <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
          Privacy & Sharing
        </h3>
        <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-slate-900 dark:text-white">
                Group similar faces
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Help contacts recognize you in photos
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked="false"
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#137fec] focus:ring-offset-2 dark:bg-slate-700 dark:focus:ring-offset-slate-900"
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden
                className="pointer-events-none inline-block size-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200"
              />
            </button>
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-slate-900 dark:text-white">
                Partner sharing
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Share photos with a partner automatically
              </p>
            </div>
            <div className="flex cursor-pointer items-center gap-2 text-[#137fec] transition-colors hover:underline">
              <span className="text-sm font-medium">Set up</span>
              <ArrowRight className="size-5" />
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-slate-900 dark:text-white">
                Remove geo-location
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Hide location data in links shared by link
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked="false"
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#137fec] focus:ring-offset-2 dark:bg-slate-700 dark:focus:ring-offset-slate-900"
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden
                className="pointer-events-none inline-block size-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
