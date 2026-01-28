"use client";

import Link from "next/link";
import { Search, History, Plus, MapPin } from "lucide-react";

const chips = ["Paris 2023", "Cats", "Receipts", "Birthday"];

const people = [
  { name: "James", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzzcVBxcFAcy6OP1b-vSSCtRkFEc_rbHQdVzF49Kx62MLUoS3-ITlAvtqRiY85Nz_rSylKxvqBfoYFf6kIYf6HnC7a5I86x8tffGmLSAbUGNzj2yu8oei0ct2kLA1coAabQZ9CEEJnIvd3sN7p6iGtuhQV9ntDcvrQhj2GqkGi4m4cK6qev8h03z5dOsiDq8fYXL_dcDaMi6oRMzUUVQPTLKD6b4X5XxuOQl-Ypp__8hOy3AlBbudnVfsEkNWSxAWG6sItKc7uy6E", alt: "Portrait of a smiling man with a beard" },
  { name: "Elena", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjB94ucU1UyfNchUbCAjkIXghiI8ziCSTBB8CkiAXixz-OUj3otUYRKfadJOVZdX5B7ZfzgWtGydFdP2gQeyPZ1xv0vHcFrGliZCInbhfFB-yUAoKRMa5m4kvFJpWExE_HG0a5z3B1TOZmAUXLoCbX0oQUQg2nUoSQJgAVPSJwojmlui1d3GcApm38j8d6unFmeh58l_D6ko9pidgNfEqcFJvUQ6oghXUIrc-aUWlGY4fpfw9frwYDGjYiiLSd2iue7KXJTrng2Ws", alt: "Portrait of a young woman" },
  { name: "Marcus", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfBDqBDduQlab7mfJNcNxBkl7q1BaT2bYy7mQoJJRoPVL_jrDuC7LrKM_s0iczWrbMqoPLmvIUqp6qen04tthDYzLCjxZcaTtZgOx8S2oMrvHcrjqAU00TZaTta6oEkw-nYW2GxDfedNiwtBnmu2gIxcI6rePL3Vu1p310Ci3CvJx-G48bFuK_q4nu-igDTwP55N1Nu9e_iBaLyfOs3GlGpEy_k1gcp87kfuIwDzzUlURwFvnmWjBM29yzbKAqDq5_6iQv-KACa00", alt: "Portrait of a man smiling" },
  { name: "Luna", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOEM-1m5Q1cDXF19mZSnCMD6o-Vi-3ztUXCUi-vLFg30KaKW6sY3a3j5l0C8UnqPStTEW71lQuyPfiICp0ndv0_WWPSiTHM0GlWw_ALPN4YSuwa75OlITHZwW8yofd5oLfImzXHrey_FBDZtFKars644p_XFzy3EJUtvPlmD9QcvEsjXSdkT-F-PYm9YUnZ0WvCpXaThTbOrRGYlgFvaUj32iKXkIKa20SAnhBvQa0XQgEXk__9V3Fbn9WSmrlZOeCtCxr0Symtm0", alt: "Close up of a cat" },
  { name: "Sophia", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1dtlSSAD9a292bdsmNuzhhw8Kz7-jqpane8m2hHhm0ujRGvgYdi-NAz3lNV4bDK-n-o9mkB04QrWMrt7xIgY5pwF3rJBT6q9EN4A6yrzTj7LOaUkshXpoTo6uNyrHw2FY1IwhSf1MhPAQ0DySwZHSsFBK3XoBlhKBjfTNWT1abnVcKca-OLvcvQ1mFV9V8kU3W8kV-s9O6l1GmdqjVcQXhUSPnnIf8Fcw0DhAw_3neWH0g4ra5aiFF8rsPxJ4SiWBkCRPOJLjAqw", alt: "Portrait of a woman with curly hair" },
];

const places = [
  { name: "Kyoto", count: "142 photos", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxp4OCoXrOjlCQRsO4F8wjCv1VzchQCxZ01exNyprNv6OYaNyw-JhCk796mvipHTk0a05N1qmBpVs8-o3T9p0ka9a_1awKgZrmVsUT3f2F8FNElLH4Sa801l5H7EqLVMbtPI-TbAVEiBU8Sc5o4EbqpkX8Qm090sTbGeto1SqH2ZEs_Z2RHJ3VS0EKHQedEzg-s3UD34caTvpt41v4SINGMr7Licmtt9dTjYD_SxguvbbCP83VxKh2OEZXQ_bbgHWY1wdTRWa_o8w", alt: "Scenic view of Kyoto" },
  { name: "New York", count: "89 photos", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCofAjRPw9ZnOHkuSrIRhT6l2IIVs9HTdH_cg1IGMYnUD1y-aPHF8hZszCNgN-GEdIHCR4zMK1xcwe2SlJPyzocp_x8FiYIuggfrrjQ8GKaIc8LWJgRrcW4RNcu5j4yZesXAhTLjkVU2PRF8TT6raMIaOTH89kCMb0bKqwI1K-tOjpBe8HC9ylGuoZ-0S_MaJyHiv-1tDWEWq4Zg33R1shGDEhDCDMj9oAJx62N1Cd6x7tH8BpjqnrqOJ6fENCQhXvAfPPlAjc2kKQ", alt: "City skyline of New York" },
  { name: "Paris", count: "320 photos", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC58Y8IyO98knF0r0ZVKP8g7YOZuJFezcA1t8hCA4sWnCplyLXFE-ybrWpT2cy3Tv2VhkDMQny5KeJAPxpxLpF82sDWUmNQkkXI-wjuSzMD8MRbci-kgrvpMDapOZOkjbJM8EbMm0EkqfbXsl19U_8JeKxhey0_RWtsvCt8VSpx2h9TUwxliSp_IyEKGPHkKq-n-V_zMS2H6cSsq00ugPA0ZwV0o0bnQfCIygQ52UW99Y7O51pdCUcaTVt58BoelC0ObHco10kaCps", alt: "Eiffel tower in Paris" },
];

const things = [
  { label: "Food", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV1pAZ155m73F2GrLKMJd0wzMXTkypwSDOqDCYZCRh05VeP7utshT4NVwmD_9KU362UIW-pkXdAV1_NNM6vm5btxf8rXuoySJMAAeccuR3n3S3aq_NGK9h4sWV0xNwTCBrrMN5lOyIEQ9QO_tcck2sQIj1Po0fJiteHcm4UQm1hZgjdkoRTcqcU0KuGUmiYdUPtsplWWTxE4J6mJS5l-hGcJOGReGJ6ij1mpZx2meYBd-JhUyRpWz1mRTyuNX0Xow4aOOQMnaVN8k", alt: "Delicious pancakes" },
  { label: "Documents", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdBIkqmrvTVF7Kj-j0c5L4F-N0JEZuG8uPXUMxYBq60HoOREIvg4gbNilZPohokYBJ96VjMcz0nR4WZvU4Laam3hW7rtFCzCBfuBqs5ausw3z09Q3Ql37EimPac_k75G8MpkEvUSi6ou0_XAF3hsnmTPXr_p3u1q36Msn-relH92Q0SCaxFMMcw_7KjTqrCIX8ecOh0fhuIz3YeEJrmZcDOcGm2WWA6L7XUyOPIcXQV2ShZO5vV5ZD9i-AfeuoexenetZkqFClL7s", alt: "Stack of documents" },
  { label: "Nature", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhTFUrdXxKXP9TX1i0L86EBmcKDRCLrSEx68ouTV43YS4GQ7tQYhgh7M_S-AFns44FRBrvb0QCkUFC8JR9B3FFFRuPeFd2KJ71kTszqgSc0Wf3hDfZf8FjyFzZuBw3zC5qrn0RCVSJquvZTHSH7qrJ9K0kFa-v1LmRLUtQijS4z-6ADldBqna7LZZJQZsaB6Gsveat3G5EEwL_5Nl6MRNkcwd_sTOLmLjiJakNRZBSHwjMAkpGVKT6C5oqY7Xh4fkxAEXLo3FlOzE", alt: "Beautiful sunset" },
  { label: "Hiking", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs9tL7GwcOVsCAaQMQZUBOeXxneQ6AaWDA8ZDcvrKdnNmwjZz89RBK_TY9l713WR3v5yhqApypq8pl0K8Tc0JAWPYM7lRCdA2O4XNBz84rk2Loj4_j98TcVKxZ4ZbecyP10eB7ivMStl75uatL05Dq4VvKHwgNVJYn0s5TpNVX_n5MgKn5fA3BCeHcBexkelBU9ba-4iLM9dhyxq3IaRnp2a5m4C1BQxedM0aTjQD1cXq8sokbCX8CA6w9cM3wNgbIqLcGT1XeNRo", alt: "Person hiking" },
  { label: "Animals", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm9F9OJgyYm6F-_qnh-m5BvCd7vQd5vyumZ-J0u_TSwqK6BIktKUhf6xxkBg_RWEO0mJ1IydCbBRY3rSaepUdOOUF5QIikPFf3HKCuhWbW3nhrVGJu7DhF0tkqw-ymj3fRYjvl92rGkc7FCxhPRAFivyFLpVIotVqIxwSLA7AwO4bGcq4i88FUoiKayeeAW9hfMpG-d06AIlNVROjIK7FnzO_IuqDK8QOIM_5DZeZN9gR4E0EVt0PtCYjuNfdo1PYO-5rbXkVk5aM", alt: "A cute cat" },
  { label: "Gadgets", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA65ywUAibARMxXT14MlwmUuBVKAX2idreNuGoJAOai_vxX3WCajtKKPQnVuK9HD1A2ZYF__F7w2HbGpzvghynHV2_9a3fLA7lM19R3Rau1-O7Q6RM8vhTSYgs9mk05MEPfqft7txO4Ba5XcsLr91EnMKrkbYx2EoeuXvEjX8U1AxU5QLE5hIjqKkmNZzdP5SyBvUswdFANIaCOebk0k5npenRLUL0_P06IkaMGs4zPGBwAvKBnzvH9UWnXxDAmwGAfJDtMGjsPW2c", alt: "Camera lens" },
];

export function ExploreScreen() {
  return (
    <div className="mx-auto max-w-5xl flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="relative mx-auto w-full max-w-2xl">
          <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#137fec]" />
          <input
            type="text"
            placeholder="Search 'wedding', 'hiking', or 'Paris'..."
            className="block w-full rounded-2xl border-0 bg-white py-4 pl-12 pr-4 text-lg text-slate-900 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] placeholder:text-slate-400 focus:ring-2 focus:ring-[#137fec] focus:outline-none transition-all dark:bg-[#1a2634] dark:text-white dark:shadow-none"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {chips.map((c) => (
            <button
              key={c}
              type="button"
              className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-[#1a2634] dark:text-slate-300 dark:hover:bg-slate-700"
            >
              <History className="size-[18px]" />
              {c}
            </button>
          ))}
        </div>
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            People & Pets
          </h2>
          <Link
            href="/app/explore/people"
            className="text-sm font-medium text-[#137fec] transition-colors hover:text-blue-600"
          >
            View all
          </Link>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x no-scrollbar">
          <div className="flex flex-col items-center gap-2 snap-start shrink-0 group cursor-pointer">
            <div className="flex size-24 items-center justify-center rounded-full border-2 border-dashed border-slate-300 bg-slate-100 transition-colors group-hover:border-[#137fec] dark:border-slate-600 dark:bg-slate-800">
              <Plus className="size-8 text-slate-400 transition-colors group-hover:text-[#137fec]" />
            </div>
            <span className="text-sm font-medium text-slate-500">Add face</span>
          </div>
          {people.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-2 snap-start shrink-0 group cursor-pointer"
            >
              <div
                className="size-24 rounded-full overflow-hidden border-2 border-transparent bg-cover bg-center transition-all group-hover:border-[#137fec] group-hover:scale-110"
                style={{ backgroundImage: `url(${p.image})` }}
                role="img"
                aria-label={p.alt}
              />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Places
          </h2>
          <Link
            href="/app/explore/map"
            className="text-sm font-medium text-[#137fec] transition-colors hover:text-blue-600"
          >
            View map
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {places.map((p) => (
            <div
              key={p.name}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.image})` }}
                role="img"
                aria-label={p.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-lg font-semibold leading-tight">{p.name}</h3>
                <p className="text-xs text-white/80">{p.count}</p>
              </div>
            </div>
          ))}
          <Link
            href="/app/explore/map"
            className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800"
          >
            <div
              className="absolute inset-0 opacity-50 bg-cover bg-center dark:opacity-30"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCFOMZA8Wp2-yRjqEXtPQmNkNg_C4GzV0V2rKIoS6vizQxoko2gHoG-3HPAPdoUJS3kk_lQJ75vxDtu9i7vbS8iDWBSCUzeY6djNpqmy3SAkN_KUZ-5cMDBSdTfQhDnppJbm17Ha-egvxvBpz8Sibf2jdiWz62ZWbXTOUsVW_9GeMfiRFjpJQ2NRC1Aickqw5RS9-6Z3aGLhL_N7hOtJShNDsGlioQdCY2DaEJDieBeNTbRmgKRx-affPxvZFFosNyBhHnVPh3p3rY)",
              }}
              aria-hidden
            />
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-[#137fec] shadow-sm dark:bg-slate-700">
                <MapPin className="size-5" />
              </div>
              <span className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                Your Map
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-10">
        <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
          Things
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {things.map((t) => (
            <div key={t.label} className="group cursor-pointer">
              <div className="relative mb-2 aspect-square overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${t.image})` }}
                  role="img"
                  aria-label={t.alt}
                />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
              </div>
              <span className="pl-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
