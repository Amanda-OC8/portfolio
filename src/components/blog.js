import React from "react"
import SEO from "../components/seo"

const Blog = ({ posts, lang }) => {
    
    let post
    if (lang) {
        post = posts.nodes.filter(elm => elm.frontmatter.defaultLang === "ENG")
    } else {
        post = posts.nodes.filter(elm => elm.frontmatter.defaultLang === "SPA")
    }
    post=post[0]
    
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

    console.log(post.frontmatter.cv)

    return (
        <>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                    <h1 itemProp="headline">{post.frontmatter.cv ? 'Amanda Ordoñez' : post.frontmatter.title}</h1>
                    <p>{!post.frontmatter.cv ? date : null}</p>
            </header>
            <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                    itemProp="articleBody"
                    className={post.frontmatter.cv ? 'cv' : null}
            />
            <hr />

        </article>

        </>


    )
}

export default Blog

