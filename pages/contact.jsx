import SOCIAL from "../constants/social.json";

const Contact = () => (
  <div className="p-5 md:py-20 md:w-3/6 mx-auto">
    <h2 className="tracking-tight mb-4 md:mb-16 leading-10 text-center font-black dark:text-gray-200 text-xl sm:text-5xl sm:leading-none md:text-xl">
      Let's <span class="text-primary">Talk</span>
    </h2>
    <div className="grid gap-10 md:gap-5 grid-cols-1 md:grid-cols-5 md:grid-rows-2">
      <div className="contact col-span-1 md:col-span-3">
        <h3 className="text-md font-black">
          Contact <span className="text-primary">Details</span>
        </h3>
        <h4 className="text-sm mt-5">
          <p className="text-gray-500">Mobile</p>
          <a href="tel:+919873088432">9873088432</a>
        </h4>
        <h4 className="text-sm mt-5">
          <p className="text-gray-500">Email</p>
          <a href="mailto:mp1995singh@gmail.com">mp1995singh@gmail.com</a>
        </h4>
      </div>

      <h4 className="text-md col-span-1 md:col-span-2">
        <p className="mb-5 font-black">
          Social <span className="text-primary">Media</span>
        </p>
        {SOCIAL.map((platform, index) => (
          <a
            href={platform.url}
            target="_blank"
            className={`${index + 1 !== SOCIAL.length ? "mr-5" : ""}`}
          >
            <img
              src={platform.image}
              className="w-6 inline-block"
              alt={platform.name}
            />
          </a>
        ))}
      </h4>

      <img
        src="images/coffee.gif"
        className="w-40 inline-block col-span-1 md:col-span-5 justify-self-center"
      />
    </div>
  </div>
);

export default Contact;
