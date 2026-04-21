import Image from "next/image";

const ArtisanCard = ({ item, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={String(index * 120)}
      className="bg-secondary border border-secondary-dk rounded-sm overflow-hidden group hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-primary">
        {/* <Image
          width={400}
          height={400}
          src={item.image}
          alt={item.name}
          loading="eager"
          priority
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
        /> */}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="font-serif text-lg text-dark">{item.name}</div>

        <div className="text-[10px] tracking-[0.25em] uppercase text-accent">
          {item.role}
        </div>

        <p className="text-sm text-text leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
};

export default ArtisanCard;
