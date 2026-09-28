import type { CategoryCount } from "@/types/blog";

type Props = {
  categories: CategoryCount[];
  total: number;
  active: string | null;
  onSelect: (name: string | null) => void;
};

export default function CategoryList({ categories, total, active, onSelect }: Props) {
  const item = (label: string, count: number, value: string | null) => {
    const isActive = active === value;
    return (
      <li key={label}>
        <button
          onClick={() => onSelect(value)}
          aria-pressed={isActive}
          className={`flex w-full items-center justify-between py-1.5 text-left text-sm ${
            isActive ? "font-semibold text-[#191919]" : "text-[#191919]/60 hover:text-[#4F46E5]"
          }`}
        >
          <span>{label}</span>
          <span className="text-xs text-[#191919]/40">{count}</span>
        </button>
      </li>
    );
  };

  return (
    <div>
      <h3 className="border-l-2 border-[#191919] pl-2 text-xs font-medium text-[#191919]">
        Categories
      </h3>
      <ul className="mt-3">
        {item("All posts", total, null)}
        {categories.map((c) => item(c.name, c.count, c.name))}
      </ul>
    </div>
  );
}
