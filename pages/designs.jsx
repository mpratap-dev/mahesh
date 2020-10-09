import DESIGNS from "../constants/portfolio.json";

const Design = () => (
  <div className="md:p-10 p-5">
    <h2 className="tracking-tight mb-2 md:mb-8 leading-10 font-black dark:text-gray-200 sm:text-5xl sm:leading-none md:text-xl">
      UI <span className="text-primary">Designs</span>
    </h2>
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 p-5 bg-gray-100 rounded-lg">
      {DESIGNS.map((design) => (
        <a href={design.url} target="_blank">
          <img
            src={design.image}
            alt="foryou"
            className="rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
          />
        </a>
      ))}
    </div>
    <h4 className="text-xs mt-5 text-center">
      For more please visit
      <a
        href="https://www.instagram.com/mpratap.dev/"
        target="_blank"
        className="mx-3"
      >
        <img
          src="svgs/instagram.svg"
          className="w-5 inline-block"
          alt="instagram"
        />
      </a>
    </h4>
  </div>
);

export default Design;
