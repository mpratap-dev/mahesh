import DESIGNS from "../constants/portfolio.json";

const Design = () => (
  <div className="md:p-10 p-5">
    <h2 className="tracking-tight mb-2 md:mb-8 leading-10 font-black dark:text-gray-200 sm:text-5xl sm:leading-none md:text-xl">
      UI <span className="text-primary">Designs</span>
    </h2>
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 rounded-lg">
      {DESIGNS.map((design, index) => (
        <a
          href={design.url}
          key={design.name+index}
          style={{ height: 225 }}
          target="_blank"
          className="rounded-lg border-2 border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden grid"
        >
          <img height={225} className="h-full" src={design.image} alt={design.name} />
        </a>
      ))}
    </div>
    <h4 className="mt-10 justify-center flex items-center">
      For more please visit
      <a
        href="https://www.instagram.com/mpratap.dev/"
        target="_blank"
        className="mx-3 grid"
      >
        <img
          src="/svgs/instagram.svg"
          height={30}
          width={30}
          className="w-5 inline-block"
          alt="instagram"
          placeholder="blur"
          blurDataURL="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
      </a>
    </h4>
  </div>
);

export default Design;
