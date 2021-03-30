import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import PostList from '../components/postlist'
import SEO from "../components/seo"
import LangContext from "../context/LangContext"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <LangContext.Consumer>
        {lang => (
          <>
            <Layout location={location} title={siteTitle} lang={lang.defaultLang}>
              <SEO title="All posts" />
              <Bio lang={lang.defaultLang} />
              <p>
                No blog posts found. Add markdown posts to "content/blog" (or the
                directory you specified for the "gatsby-source-filesystem" plugin in
                gatsby-config.js).
        </p>

            </Layout>
          </>
        )}
      </LangContext.Consumer >
    )
  }

  return (
    <LangContext.Consumer>
      {lang => (
        <>
          <Layout location={location} title={siteTitle} lang={lang.defaultLang}>
            <SEO title="Amanda Ordóñez' Portfolio" />
            <Bio id='about' lang={lang.defaultLang} />
            <PostList data={data} lang={lang.defaultLang} />
          </Layout>
        </>
      )}
    </LangContext.Consumer>

  )
}

export default BlogIndex

export const pageQuery = graphql`
query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } filter: {frontmatter: {cv: {eq: false}}}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          summary
          keywords
          defaultLang
          cv
          featuredimage {
            src {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`
