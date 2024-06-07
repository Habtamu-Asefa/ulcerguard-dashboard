export async function registerBlog(content) {
    try {
      const response = await fetch("http://localhost:3001/admin/registerblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( content ),
      });
  
      if (!response.ok) {
        console.log("content", content)
        throw new Error(`HTTP error - ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.error("Error registering blog -", err);
      throw err;
    }
  }
  
