import Image from "next/image";

const Blog = ({ blogs }) => (
  <div className="md:p-10 p-5">
    <h2 className="tracking-tight mb-2 md:mb-8 leading-10 font-black dark:text-gray-200 sm:text-5xl sm:leading-none md:text-xl">
      Tech <span className="text-primary">Blogs</span>
    </h2>
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
      {blogs.map((blog) => (
        <a
          href={blog.url}
          class="rounded-lg border-2 border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden"
        >
          <Image height={230} width={500} src={blog.cover_image} />
          <h4 className="p-4 m-0">{blog.title}</h4>
        </a>
      ))}
    </div>
  </div>
);

export async function getStaticProps(context) {
  const res = await fetch("https://dev.to/api/articles?username=mpratapdev");
  const blogs = await res.json();
  return { props: { blogs } };
}

export default Blog;
