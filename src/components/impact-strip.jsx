import { stats } from "@/constants";

const ImpactStrip = () => {
  return (
    <section className="bg-secondary-dk">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((item, i) => (
            <div
              key={i}
              className="
                group relative text-center px-6 py-12
                border-r border-secondary-dk last:border-none
                bg-secondary hover:bg-secondary-dk
                transition-all duration-300
              "
            >
              <span
                className="
                  absolute bottom-0 left-0 w-full h-[2px]
                  bg-accent scale-x-0 group-hover:scale-x-100
                  origin-left transition-transform duration-300
                "
              />

              <div
                data-aos="fade-up"
                className="text-3xl md:text-4xl font-serif font-semibold text-primary"
              >
                {item.value}
              </div>

              <div
                data-aos="fade-up"
                className="mt-2 text-xs tracking-[0.2em] uppercase text-muted"
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStrip;
