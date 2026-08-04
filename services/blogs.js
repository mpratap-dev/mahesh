export const getBlogs = async () => {
  const URL = "https://dev.to/api/articles?username=mpratapdev";
  const response = await fetch(URL);
  const blogs = await response.json();
  return blogs;
}