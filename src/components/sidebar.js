import React from 'react'
import Link from 'gatsby-link'

const Sidebar = (props) => (
<div
    style={{
      border: '2px solid #e6e6e6',
      maxWidth: 900,
      padding: '0.5rem',
      marginBottom: '25px'
    }}
    >
    <h4><center><strong>{props.title}</strong></center></h4>  
    <a href="mailto:tyler.y.gu@gmail.com" target="_top">tyler.y.gu@gmail.com</a><br/>
    <b>778-874-2331</b>
</div>

);

export default Sidebar