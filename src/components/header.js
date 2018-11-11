import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: '#f5f5f5',
      borderBottom: '2px solid #e6e6e6',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        padding: '1.45rem 1.0875rem',
      }}
   >
     <h1 style={{margin: 0, textAlign: 'center',fontSize: '24px'}}>
        <Link to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Tianyang (Tyler) Gu
        </Link>
        <br/>
      </h1>
      <center><h6> A Software Developer from Rainy Vancouver, Canada</h6></center>
    </div>
  </div>
);

export default Header