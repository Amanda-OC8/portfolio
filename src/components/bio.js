/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import {Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Bio = ({ lang }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/Profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summaryENG
            summarySPA
          }
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed
    
  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && lang ? (
        <p>
          Created by <strong>{author.name}</strong> {author?.summaryENG || null}
          {` `} You can see more on <a href={`https://github.com/${social?.github || ``}`} target="_blank" rel="noreferrer">github</a>, <a href={`https://www.linkedin.com/in/${social?.linkedin || ``}`} target="_blank" rel="noreferrer">linkedin</a> or in <Link to="/CV">this webpage</Link>
          
        </p>
      ) :
       author?.name && !lang && (
          <p>
            Creado por <strong>{author.name}</strong> {author?.summarySPA || null}
            {` `} Puedes ver más en <a href={`https://github.com/${social?.github || ``}`} target="_blank" rel="noreferrer">github</a>, <a href={`https://www.linkedin.com/in/${social?.linkedin || ``}`} target="_blank" rel="noreferrer">linkedin</a> o en esta <Link to="/CV">misma página</Link>

          </p>
        )}
    </div>
  )
}

export default Bio
