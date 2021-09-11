import Image from "next/image";
import moment from "moment";

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
            <div className="p-4">
              <h4 className="m-0">{blog.title}</h4>
              <span class="text-xs text-gray-500">
                {moment(blog.published_at).format("MMMM Do, YYYY")}
              </span>
              <hr class="my-3 w-20 border-indigo-200" />
              <p class="text-sm text-gray-700 mb-1">{blog.description}</p>
              <div>
                {blog.tag_list.map((tag) => (
                  <span class="text-xs mr-2 text-primary">#{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
    </div>
    <h4 className="mt-10 justify-center flex items-center">
      For more please visit
      <a
        href="https://medium.com/@mpratap-dev"
        target="_blank"
        className="ml-3"
      >
        <Image
          src="/svgs/medium.svg"
          height={30}
          width={30}
          className="w-5 inline-block invert"
          alt="instagram"
        />
      </a>
      <a href="https://dev.to/mpratapdev" target="_blank" className="ml-3">
        <Image
          src="/svgs/dev.svg"
          height={30}
          width={30}
          className="w-5 inline-block invert"
          alt="instagram"
        />
      </a>
    </h4>
  </div>
);

export async function getServerSideProps() {
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
