import { industries } from "./Content";
import IndustryTile from "./IndustryTile";

export default function IndustryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-4 lg:px-8">

      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Built Around Your Industry, Not a One-Size-Fits-All{" "}
          <span className="block text-[#4F46E5]">Approach</span>
        </h2>
        <p className="mt-4">
          We understand your industry&apos;s challenges and build analytics
          solutions around them.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-5">
        
        <div className="md:col-span-3">
          <IndustryTile industry={industries[0]} />
        </div>
        <div className="md:col-span-2">
          <IndustryTile industry={industries[1]} />
        </div>
        <div className="md:col-span-2">
          <IndustryTile industry={industries[2]} />
        </div>
        <div className="md:col-span-3">
          <IndustryTile industry={industries[3]} />
        </div>

      </div>
    </section>
  );
}