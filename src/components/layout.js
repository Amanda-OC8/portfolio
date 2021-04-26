import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"


import Scroll from '../components/scroll'
import Navbar from '../components/navbar'



const Layout = ({ location, title, children, lang }) => {
  
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  

  if (isRootPath) {
    header = (
      <>

        <h1 className="main-heading">
          <Link to="/">Amanda Ordóñez</Link>
        </h1>
        <Navbar />

      </>
    )
  } else {
    header = (
      <>
 
        <Link className="header-link-home" to="/">
          Amanda Ordóñez
        </Link>
        <Navbar />

        
      </>
    )
  }

  return (
    
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Amanda Ordóñez's Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&family=Bitter:ital,wght@0,300;0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" />
      </Helmet>
      <header className="global-header" id='header'>{header}</header>
      <main>
        {children}
        <Scroll showBelow={150} />
      </main>
      <footer>
        © {new Date().getFullYear()}, by Amanda Ordóñez. Built with Gatsby.
      </footer>
    </div>
        
    
  )
}

export default Layout
