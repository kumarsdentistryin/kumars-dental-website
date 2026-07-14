import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/schema";

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {index > 0 && <span className="text-gray-400" aria-hidden>/</span>}
              {isLast ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="text-red-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
