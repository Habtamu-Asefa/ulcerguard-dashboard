export default async function fetchUsers() {
  try {
    const response = await fetch("http://localhost:3001/admin/fetchusers");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
