export default async function fetchUsers() {
  try {
    const response = await fetch("http://localhost:3001/admin/fetchusers", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}
