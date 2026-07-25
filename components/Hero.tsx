import Image from "next/image";
import { Play } from "lucide-react";

const stats = [
  { value: "250+", label: "Partners & Customers" },
  { value: "500+", label: "Projects Completed" },
  { value: "100+", label: "Awards & Recognitions" },
];

const Hero = () => {
  return (
    <section className="pt-40 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Copy */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-display font-semibold text-foreground leading-tight">
            Turn Your Business Data Into Smarter Decisions
          </h1>
          <p className="text-[#191919] mt-6 max-w-2xl">
            Transform raw business data into interactive dashboards, insightful
            reports, and actionable recommendations, helping your organization
            improve performance, reduce inefficiencies, and drive sustainable
            growth.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <button className="bg-[#4F46E5] hover:bg-[#4338CA] border-[#F9FAF9] text-white rounded-lg px-3 h-11 text-sm transition-colors cursor-pointer">
              Get Started
            </button>
            <button className="flex items-center gap-2 border rounded-lg px-3 h-11 text-sm text-[#191919] border-[#C8C6F7] transition-colors cursor-pointer">
              Watch Demo
              <Play className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden aspect-4/3">
            <Image
              src="/hero_img.png"
              alt="Business owner reviewing data on a tablet"
              width={600}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid sm:grid-cols-3 gap-4 mt-16">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 border border-[#B8B8B8] rounded-2xl px-5 py-4 bg-white">

            <div className="w-9 h-9 rounded-full bg-[#4F46E5] flex items-center justify-center shrink-0">
              <Image src="/profile.png" alt="" width={18} height={18} />
            </div>

            <div>
              <p className="heading text-2xl font-semibold text-[#191919] leading-none">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
