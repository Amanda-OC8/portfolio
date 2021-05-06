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
                            (<div>
                                <ul className='lang'><li> <button
                                    className={lang.defaultLang ? 'lang-button disabled-button' : 'lang-button'}
                                    onClick={lang.toggleLang}
                                    aria-label='switch-lang'
                                >ENG</button>/<button
                                    className={lang.defaultLang ? 'lang-button' : 'lang-button  disabled-button'}
                                        onClick={lang.toggleLang}
                                        aria-label='switch-lang'
                                >{lang.defaultLang ? 'SPA' : 'ESP'}</button></li>
                                </ul>

                                <button className='toggle'
                                    navbaropen={navbarOpen ? 1 : 0}
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <nav >
                                        <Image fixed={burguer} className='burguer' aria-label='toggle-menu'/>

                                        {navbarOpen ? (
                                            <ul>
                                                <li><Link to="/CV"> {lang.defaultLang ? "About me" : "Sobre mi"}</Link></li>
                                                <li><Link to="/#projects">{lang.defaultLang ? 'Projects' : 'Proyectos'}</Link></li>
                                            </ul>
                                        ) : <ul className='hide'></ul>}

                                    </nav>
                                </button>
                            </div>)
                            :
                            (
                                <nav>
                                    <ul>
                                        <li>
                                            <button
                                                className={lang.defaultLang ? 'lang-button disabled-button' : 'lang-button'}
                                                onClick={lang.toggleLang}
                                                aria-label='switch-lang'
                                            >ENG</button>/<button
                                                className={lang.defaultLang ? 'lang-button' : 'lang-button  disabled-button'}
                                                onClick={lang.toggleLang}
                                                aria-label='switch-lang'
                                            >{lang.defaultLang ? 'SPA' : 'ESP'}</button>
                                        </li>
                                        <li><Link to="/CV"> {lang.defaultLang ? "About me" : "Sobre mi"}</Link></li>
                                        <li><Link to="/#projects">{lang.defaultLang ? 'Projects' : 'Proyectos'}</Link></li>
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