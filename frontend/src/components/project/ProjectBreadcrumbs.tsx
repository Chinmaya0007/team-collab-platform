import { ChevronRight } from "lucide-react";

const breadcrumbs = [
  "Organizations",
  "Acme Corp",
  "Projects",
];

export default function ProjectBreadcrumb() {
  return (
    <nav className="mb-6 flex items-center overflow-x-auto text-sm text-[#464555]">
      <div className="flex min-w-max items-center">
        {breadcrumbs.map((item) => (
          <div key={item} className="flex items-center">
            <button className="transition hover:text-[#3525cd]">
              {item}
            </button>

            <ChevronRight
              size={16}
              className="mx-2 text-[#777587]"
            />
          </div>
        ))}

        <span className="font-semibold text-[#191c1d]">
          API V2 Migration
        </span>
      </div>
    </nav>
  );
}