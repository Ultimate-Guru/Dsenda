type Props = { page: number; totalPages: number; onChange: (p: number) => void };

function pageList(page: number, total: number): (number | "…")[] {
  if (total <= 6) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set([1, 2, page - 1, page, page + 1, total]);
  const nums = [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  nums.forEach((n, i) => {
    if (i > 0 && n - nums[i - 1] > 1) out.push("…");
    out.push(n);
  });
  return out;
}

export default function Pagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;
  return (
    <nav
      aria-label="Blog pages"
      className="flex items-center justify-between rounded-2xl border border-[#191919]/10 bg-white px-5 py-4 text-sm"
    >
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="text-[#191919]/70 disabled:opacity-30"
      >
        ← Newer posts
      </button>
      <ul className="flex items-center gap-3">
        {pageList(page, totalPages).map((n, i) =>
          n === "…" ? (
            <li key={`gap-${i}`} className="text-[#191919]/50">…</li>
          ) : (
            <li key={n}>
              <button
                onClick={() => onChange(n)}
                aria-current={n === page ? "page" : undefined}
                className={
                  n === page
                    ? "font-semibold text-[#191919]"
                    : "text-[#191919]/60 hover:text-[#4F46E5]"
                }
              >
                {n}
              </button>
            </li>
          )
        )}
      </ul>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="font-medium text-[#191919] disabled:opacity-30"
      >
        Older posts →
      </button>
    </nav>
  );
}
