// API/deleteBlog.js
const deleteBlog = async (id) => {
  const response = await fetch(`http://localhost:3001/admin/blogs/${id}`, {
    method: "DELETE",
    //sending token
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to delete blog: ${errorMessage}`);
  }

  return response.json();
};

export default deleteBlog;
