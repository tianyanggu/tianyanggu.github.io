import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <div className="blog-post-container">
     <Helmet title={`Tianyang - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image {
          publicURL
          childImageSharp {
            sizes(maxWidth: 1240 ) {
              srcSet
            }
          }
        }
      }
    }
  }
`
;