import React from "react";

const Pagination = ({ total = 4, current = 1, onChange }) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  const goPrev = () => onChange?.(Math.max(1, current - 1));
  const goNext = () => onChange?.(Math.min(total, current + 1));

  return (
    <div className="w-full flex justify-center mt-6" dir="rtl">
      <div className="flex items-center gap-6">
        {/* التالي (left side in RTL) */}
        <button
          type="button"
          onClick={goNext}
          disabled={current >= total}
          className={`${current >= total ? "text-gray-400" : "text-primary"} font-extrabold disabled:opacity-40 disabled:cursor-not-allowed text-lg`}
        >
          <span className="inline-flex flex-col items-start leading-none">
            <span>التالي</span>
            <span className="mt-1 h-[2px] w-12 bg-primary rounded" />
          </span>
        </button>

        {/* Pages pill */}
        <div className="rounded-full bg-green-50 px-3 py-2">
          {/* row-reverse so active (current=1) sits visually at the right end like the image */}
          <div className="flex flex-row-reverse items-center gap-6 bg-E4FFEB rounded-full h-9 px-3 ">
            {pages.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => onChange?.(p)}
                aria-current={p === current ? "page" : undefined}
                className={
                  p === current
                    ? "bg-primary text-white rounded-full w-12 h-9 flex items-center justify-center font-extrabold"
                    : "text-gray-600 font-extrabold text-lg w-12 h-9"
                }
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* السابق (right side in RTL) */}
        <button
          type="button"
          onClick={goPrev}
          disabled={current <= 1}
          className={`${current <= 1 ? "text-gray-400" : "text-primary"} font-bold disabled:opacity-40 disabled:cursor-not-allowed text-lg`}
        >
          السابق
        </button>
      </div>
    </div>
  );
};

export default Pagination;