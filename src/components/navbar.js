import React, { useState } from 'react'
import Image from "gatsby-image"
import { Link, useStaticQuery, graphql } from 'gatsby'

import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import LangContext from "../context/LangContext"

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)


    const breakpoints = useBreakpoint();

    const burguerImg = useStaticQuery(graphql`
    query {
        file(absolutePath: { regex: "/burguer.png/" }) {
                childImageSharp {
                fixed(width: 30, height: 30, quality: 95) {
                    ...GatsbyImageSharpFixed
                }
                }
            }
    }
  `)
    const burguer = burguerImg.file.childImageSharp.fixed

    return (
        <>
            <LangContext.Consumer>
                {lang => (
                    <>
                        {!breakpoints.xs || !breakpoints.sm ?
                            (<div className='navbar-button'>
                                <button className='toggle'
                                    navbarOpen={navbarOpen}
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    {navbarOpen ? (
                                        <div className="navbar">
                                            <Image fixed={burguer} className='burguer' />
                                            <nav >
                                                <ul>
                                                    <li><Link to="/">{lang.defaultLang ? 'Home' : 'Inicio'}</Link></li>
                                                    <li><Link to="/CV/#bio-extend"> {lang.defaultLang ? "About me" : "Sobre mi"}</Link></li>
                                                    <li><Link to="/#projects">{lang.defaultLang ? 'Projects' : 'Proyectos'}</Link></li>
                                                    <li> <button
                                                        className={lang.defaultLang ? 'lang-button disabled-button' : 'lang-button'}
                                                        onClick={lang.toggleLang}
                                                    >ENG</button>/<button
                                                        className={lang.defaultLang ? 'lang-button' : 'lang-button  disabled-button'}
                                                        onClick={lang.toggleLang}
                                                    >{lang.defaultLang ? 'SPA' : 'ESP'}</button></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    ) : <Image fixed={burguer} className='burguer' />}
                                </button>
                            </div>)
                            :
                            (
                                <nav>
                                    <ul>
                                        <li><Link to="/">{lang.defaultLang ? 'Home' : 'Inicio'}</Link></li>
                                        <li><Link to="/CV/#bio-extend"> {lang.defaultLang ? "About me" : "Sobre mi"}</Link></li>
                                        <li><Link to="/#projects">{lang.defaultLang ? 'Projects' : 'Proyectos'}</Link></li>
                                        <li>
                                            <button
                                                className={lang.defaultLang ? 'lang-button disabled-button' : 'lang-button'}
                                                onClick={lang.toggleLang}
                                            >ENG</button>/<button
                                                className={lang.defaultLang ? 'lang-button' : 'lang-button  disabled-button'}
                                                onClick={lang.toggleLang}
                                            >{lang.defaultLang ? 'SPA' : 'ESP'}</button></li>

                                    </ul>
                                </nav>
                            )}
                    </>
                )}
            </LangContext.Consumer>
        </>

    )
}

export default Navbar