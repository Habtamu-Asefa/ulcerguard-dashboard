const fetchBlog = async () => {
  const response = await fetch("http://localhost:3001/admin/fetchBlogs", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }); // Update with your actual API endpoint
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const data = await response.json();
  return data;
};

export default fetchBlog;
