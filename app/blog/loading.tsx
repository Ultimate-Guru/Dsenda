export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20" aria-busy="true">
      <div className="ml-4 h-10 w-2/3 animate-spin rounded bg-[#acacd4]" />
      <div className="mt-10 h-96 animate-pulse rounded-2xl bg-[#acacd4]" />
      <p className="mt-6 text-sm text-[#191919]">Loading articles...</p>
    </main>
  );
}
