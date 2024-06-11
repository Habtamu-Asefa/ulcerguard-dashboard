import React, { useState, useEffect } from "react";
import fetchBlog from "API/fetchblog";

const ShowBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBlog();
        setBlogs(response);
        setError(null);
      } catch (error) {
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToList = () => {
    setSelectedBlog(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div >
      {selectedBlog ? (
        <div style={{ 
  
  margin: "0 auto", 
  padding: "1rem", 
  border: "1px solid #ccc", 
  borderRadius: "5px", 
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  fontFamily: "'Arial', sans-serif",
  width:'80%'
}}>
  <button 
    onClick={handleBackToList} 
    style={{ 
      marginBottom: "1rem", 
      padding: "0.5rem 1rem", 
      borderRadius: "5px", 
      border: "none", 
      backgroundColor: "#007BFF", 
      color: "#fff", 
      cursor: "pointer", 
      fontWeight: "bold",
      fontSize: "1rem",
      transition: "background-color 0.3s",
      
      marginTop:"1rem"
      

    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007BFF"}
  >
    Back
  </button>
  <div>
  <h2 style={{ 
    marginBottom: "0.8rem", 
    fontSize: "2.5rem", 
    fontWeight: "800", 
    color: "#333",
    fontFamily: "serif",
    display: "flex",
    justifyContent: "center",
  
  }}>
    {selectedBlog.title}
  </h2>
</div>
  <img 
    src={selectedBlog.imageURL} 
    alt={selectedBlog.title} 
    style={{ 
      width: "100%", 
      height:'500px',
      objectFit: "cover",
      borderRadius: "5px", 
      marginBottom: "1rem",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    }} 
  />
 
  <p style={{ 
    fontSize: "1.5rem", 
    lineHeight: "1.6", 
    color: "#555",
    textAlign: "justify",
    paddingRight: "1rem",
    fontFamily: "serif",
  }}>
    {selectedBlog.content}
  </p>
</div>



      ) : (
        <div>
  {blogs.map((blog) => (
    <div
      key={blog.id}
      style={{
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        fontSize: "1.2rem",
        cursor: "pointer",
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "5px"
      }}
      onClick={() => handleSelectBlog(blog)}
    >
      <img
        src={blog.imageURL}
        alt={blog.title}
        style={{ 
          width: "50px",
          height: "50px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
        }}
      />
      <div style={{ flexGrow: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0 }}>{blog.title}</h3>
        <p style={{ margin: 0 }}>{new Date(blog.date).toLocaleDateString()}</p>
      </div>
    </div>
  ))}
</div>

      )}
    </div>
  );
};

export default ShowBlog;
