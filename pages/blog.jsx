import Image from "next/image";

const Blog = ({ blogs }) => (
  <div className="md:p-10 p-5">
    <h2 className="tracking-tight mb-2 md:mb-8 leading-10 font-black dark:text-gray-200 sm:text-5xl sm:leading-none md:text-xl">
      Tech <span className="text-primary">Blogs</span>
    </h2>
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
      {Array.isArray(blogs) &&
        blogs.map((blog) => (
          <a
            href={blog.url}
            key={blog.id}
            className="rounded-lg border-2 border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden"
          >
            <Image height={230} width={500} src={blog.cover_image} />
            <h4 className="p-4 m-0">{blog.title}</h4>
          </a>
        ))}
    </div>
    <h4 className="text-xs mt-5 justify-center flex items-center">
      For more please visit
      <a
        href="https://medium.com/@mpratap-dev"
        target="_blank"
        className="ml-3"
      >
        <Image
          src="/svgs/medium.svg"
          height={20}
          width={20}
          className="w-5 inline-block invert"
          alt="instagram"
        />
      </a>
      <a href="https://dev.to/mpratapdev" target="_blank" className="ml-3">
        <Image
          src="/svgs/dev.svg"
          height={20}
          width={20}
          className="w-5 inline-block invert"
          alt="instagram"
        />
      </a>
    </h4>
  </div>
);

export async function getStaticProps() {
  const API_KEY = "Gn3TzXTnmpEt8wwJxk3yYwDz";
  const URL = "https://dev.to/api/articles/me";
  const response = await fetch(URL, {
    headers: {
      "api-key": API_KEY,
    },
  });
  const blogs = await response.json();
  return { props: { blogs } };
}

export default Blog;
