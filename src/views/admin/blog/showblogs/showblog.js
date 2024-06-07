import React, {useState, useEffect} from 'react'
import fetchBlog from 'API/fetchblog'

useEffect = () => {
  const data = fetchBlog()
}

const Showblog = () => {
  return (
    <div style={{ marginBottom: '1rem', display: 'flex',gap:'1rem',fontSize:'1.2rem',width:'100%' }}>
        <div style={{width: '50%'}}>
          <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',boxShadow:'0px 0px 6px 0px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'40px'}}><span style={{color:'gray'}}>Name</span> dfgh</div>
          <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',boxShadow:'0px 0px 6px 0px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'40px'}}><span style={{color:'gray'}}>Email</span> dfgh</div>
          <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',boxShadow:'0px 0px 6px 0px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'40px'}}><span style={{color:'gray'}}>Age</span> dfgh</div>
        </div>

        <div style={{width: '50%'}}>
          <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',boxShadow:'0px 0px 6px 0px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'40px'}}><span style={{color:'gray'}}>Weight</span> dfgh</div>
          <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',boxShadow:'0px 0px 6px 0px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'40px'}}><span style={{color:'gray'}}>Height </span>dfgh</div>
          <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',boxShadow:'0px 0px 6px 0px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'40px'}}><span style={{color:'gray'}}>Gender</span> dfgh</div>
        </div>

  </div>
  )
}

export default Showblog