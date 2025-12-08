export function MovieListSkeleton() {
  const items = [1, 2, 3, 4];

  return (
    <section className="app-theme">
      <ul className="flex gap-5">
        {items.map((i) => (
          <li key={i} className="flex w-[285px] animate-pulse flex-col gap-2">
            <div className="h-[427.5px] w-[285px] rounded bg-gray-500 dark:bg-[#1E2024]" />
            <div className="h-4 w-3/5 rounded-sm bg-gray-400 dark:bg-[#272A30]" />
            <div className="h-5 w-6 rounded-sm bg-gray-400 dark:bg-[#272A30]" />
          </li>
        ))}
      </ul>
    </section>
  );
}
