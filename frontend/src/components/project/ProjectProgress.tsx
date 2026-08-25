export default function ProjectProgress() {
  const progress = 50;

  return (
    <section className="rounded-xl border border-[#c7c4d8] bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h3 className="text-lg font-semibold text-[#191c1d]">
            Project Progress
          </h3>

          <p className="mt-1 text-sm text-[#464555]">
            Projected Finish: Oct 12
          </p>
        </div>

        <span className="text-3xl font-semibold text-[#3525cd]">
          {progress}%
        </span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-[#e1e3e4]">
        <div
          className="h-full rounded-full bg-[#3525cd]"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-3 flex justify-between text-xs text-[#777587]">
        <span>Started Sep 12</span>
        <span>Due Oct 12</span>
      </div>
    </section>
  );
}