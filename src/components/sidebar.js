import React from 'react'
import Link from 'gatsby-link'

import '../styles/dropdown.css'

const Sidebar = (props) => (
  <div
    style={{
      border: '2px solid #e6e6e6',
      maxWidth: 900,
      padding: '0.5rem',
      marginBottom: '25px',
      margin: '16px'
    }}
  >
    <center><h4><strong>{props.title}</strong></h4>
      <div className="dropdown"><i style={{ fontSize: "40px" }} className="far fa-envelope"></i><br />
        <div className="dropdown-content"><a href="mailto:tyler.y.gu@gmail.com" target="_top">tyler.y.gu@gmail.com</a></div>
      </div>
      <br/>
      <div className="dropdown">
        <i style={{ fontSize: "40px" }} className="dropdown fas fa-phone"></i>
        <div className="dropdown-content"><b>778-874-2331</b></div>
      </div>
    </center>
  </div>
);

export default Sidebar