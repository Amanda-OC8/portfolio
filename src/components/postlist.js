import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"



const PostList = ({ data, lang }) => {
    let posts
    if (lang) {
        posts = data.allMarkdownRemark.nodes.filter(elm => elm.frontmatter.defaultLang === "ENG")
    } else {
        posts = data.allMarkdownRemark.nodes.filter(elm => elm.frontmatter.defaultLang === "SPA")
    }
    
   

    return (
        <>
            <ol style={{ listStyle: `none` }} id='projects'>

                {posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    const featuredimage = post.frontmatter.featuredimage
                    const techs = post.frontmatter.keywords || []

                    // To translate the date 
                    let date = post.frontmatter.date
                    if (!lang) {
                        let months = {
                            'January': 'enero', 'February': 'febrero', 'March': 'marzo', 'April': 'abril',
                            'May': 'mayo', 'June': 'junio', 'July': 'julio', 'August': 'agosto', 'September': 'septiembre',
                            'October': 'octubre', 'November': 'noviembre', 'December': 'diciembre'
                        }
                        let [month, day, year] = date.split(' ')
                        const template = `${day.substring(0, 2)} de #month de ${year}`
                        date = template.replace(/#(\w+)/g, match => months[month] || match);
                    }
                    
                    // Create the slug for the two languages: get both to filter
                    const regex = /[\$\^\/\\]/g;
                    const slugName = post.fields.slug.substring(1)
                    const globalSlug = post.fields.slug.substring(0, slugName.search(regex) + 2)
                    console.log(slugName)
                    return (
                        <li key={globalSlug}>
                            <article
                                className="post-list-item"
                                itemScope
                                itemType="http://schema.org/Article"
                            >
                                <header>
                                    <h2>
                                        <Link to={globalSlug} itemProp="url">
                                            <span itemProp="headline">{title}</span>
                                        </Link>
                                    </h2>
                                    {featuredimage && (
                                        <Img
                                            fluid={featuredimage.src.childImageSharp.fluid}
                                            alt={featuredimage.alt}
                                        />
                                    )}
                                    <small>{date}</small>
                                </header>
                                <section>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: post.frontmatter.summary || post.excerpt,
                                        }}
                                        itemProp="description"
                                    />


                                </section>
                            </article>
                            <div className='techs-list'>
                                {techs.length !== 0 && techs.map((elm, idx) => <div className='tags' key={idx}>{elm}</div>)}
                            </div>
                        </li>
                    )
                })}
            </ol>


        </>


    )
}

export default PostList

