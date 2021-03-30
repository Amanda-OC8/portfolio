// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

//Provider to swicth language-theme
import React from "react"

import { LangProvider } from "./src/context/LangContext"

export const wrapRootElement = ({ element }) => (
    <LangProvider>{element}</LangProvider>
)