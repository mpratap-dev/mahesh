import DESIGNS from "../constants/portfolio.json";
import Image from "next/image";

const Design = () => (
  <div className="md:p-10 p-5">
    <h2 className="tracking-tight mb-2 md:mb-8 leading-10 font-black dark:text-gray-200 sm:text-5xl sm:leading-none md:text-xl">
      UI <span className="text-primary">Designs</span>
    </h2>
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 rounded-lg">
      {DESIGNS.map((design) => (
        <a
          href={design.url}
          key={design.name}
          target="_blank"
          className="rounded-lg border-2 border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden grid"
        >
          <Image
            src={design.image}
            height={200}
            width={350}
            alt={design.name}
            className="h-full"
          />
        </a>
      ))}
    </div>
    <h4 className="text-xs mt-5 justify-center flex items-center">
      For more please visit
      <a
        href="https://www.instagram.com/mpratap.dev/"
        target="_blank"
        className="mx-3 grid"
      >
        <Image
          src="/svgs/instagram.svg"
          height={20}
          width={20}
          className="w-5 inline-block"
          alt="instagram"
        />
      </a>
    </h4>
  </div>
);

export default Design;
