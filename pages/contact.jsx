import SOCIAL from "../constants/social.json";
import Image from "next/image";

const Contact = () => (
  <div className="p-5 md:py-20 md:px-5 md:w-3/6 mx-auto h-full px-20">
    <div className="container">
      <h2 className="tracking-tight mb-12 md:mb-4 md:mb-16 leading-10 font-black dark:text-gray-200 text-xl sm:text-5xl sm:leading-none md:text-xl text-left md:text-center">
        Let's <span class="text-primary">Talk</span>
      </h2>
      <div className="grid gap-10 md:gap-5 grid-cols-1 md:grid-cols-6 md:grid-rows-2">
        <div className="contact col-span-1 md:col-span-3 text-md">
          <h3 className="text-lg font-black">
            Contact <span className="text-primary">Details</span>
          </h3>
          <h4 className="mt-5">
            <p className="text-gray-500">Mobile</p>
            <a href="tel:+919873088432">9873088432</a>
          </h4>
          <h4 className="mt-5">
            <p className="text-gray-500">Email</p>
            <a href="mailto:mp1995singh@gmail.com">mp1995singh@gmail.com</a>
          </h4>
        </div>

        <h4 className="text-lg col-span-1 md:col-span-3">
          <p className="mb-5 font-black">
            Social <span className="text-primary">Media</span>
          </p>
          {SOCIAL.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              className={`${index + 1 !== SOCIAL.length ? "mr-5" : ""}`}
            >
              <Image
                height="24"
                width="24"
                src={platform.image}
                className={`w-6 inline-block ${platform.classes}`}
                alt={platform.name}
              />
            </a>
          ))}
        </h4>

        <div className="inline-block col-span-1 md:col-span-5 justify-self-center w-40">
          <Image
            height="160"
            width="160"
            src="/images/chat.gif"
            className="multiply-background dark:rounded-full invert"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
