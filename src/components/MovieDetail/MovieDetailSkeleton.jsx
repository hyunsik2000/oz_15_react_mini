export function MovieDetailSkeleton() {
  return (
    <section className="max-auto flex w-5xl animate-pulse flex-col items-center sm:flex-row">
      <div className="h-[768px] w-full p-[10px_20px] sm:w-[50%]">
        <div className="h-full w-full bg-gray-400 dark:bg-[#272A30]" />
      </div>

      <ul className="flex w-full flex-col gap-4 p-[10px_20px] sm:w-[50%]">
        <li className="flex-between">
          <p className="flex-between h-10 w-4/5 rounded bg-gray-500 text-xl md:text-3xl lg:text-4xl dark:bg-[#1E2024]" />
          <p className="flex-between h-8 w-1/10 rounded bg-gray-500 text-xl md:text-xl lg:text-2xl dark:bg-[#1E2024]" />
        </li>

        <li className="flex flex-wrap items-center gap-4 gap-y-2">
          <span className="h-7 w-1/6 rounded bg-gray-500 dark:bg-[#1E2024]" />
          <span className="h-7 w-1/6 rounded bg-gray-500 dark:bg-[#1E2024]" />
          <span className="h-7 w-1/6 rounded bg-gray-500 dark:bg-[#1E2024]" />
          <span className="h-7 w-1/6 rounded bg-gray-500 dark:bg-[#1E2024]" />
          <span className="h-7 w-1/6 rounded bg-gray-500 dark:bg-[#1E2024]" />
        </li>

        <li>
          <div className="flex flex-col gap-2">
            <p className="h-8 w-full rounded bg-gray-400 dark:bg-[#272A30]" />
            <p className="h-8 w-full rounded bg-gray-400 dark:bg-[#272A30]" />
            <p className="h-8 w-[80%] rounded bg-gray-400 dark:bg-[#272A30]" />
            <p className="h-8 w-[50%] rounded bg-gray-400 dark:bg-[#272A30]" />
          </div>
        </li>
      </ul>
    </section>
  );
}
