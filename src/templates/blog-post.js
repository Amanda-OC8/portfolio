import React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import LangContext from "../context/LangContext"
import Blog from "../components/blog"


const BlogPostTemplate = ({ data, location }) => {
  const posts = data.allMarkdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  


  return (
    <LangContext.Consumer>
      {lang => (
        <>
          <Layout location={location} title={siteTitle} lang={lang}>
            <Blog posts={posts} lang={lang.defaultLang} />
          </Layout>
        </>
      )}
    </LangContext.Consumer>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
   $slug: String ) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
    filter: {fields: {slug: {regex: $slug}}}) {
      nodes {
        excerpt
        html
        fields {
          slug
        }
        id
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          summary
          keywords
          defaultLang
          cv
        }
      }
    }
  }
`
