const getBlogs = async () => {
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