import React from "react"

const defaultState = {
    defaultLang: true,
    toggleLang: () => { },
}

const LangContext = React.createContext(defaultState)


class LangProvider extends React.Component {
    state = {
        defaultLang: true,
    }

    toggleLang = () => {
        let defaultLang = !this.state.defaultLang
        localStorage.setItem("defaultLang", JSON.stringify(defaultLang))
        this.setState({ defaultLang })
    }

   
    render() {
        const { children } = this.props
        const { defaultLang } = this.state
        return (
            <LangContext.Provider
                value={{
                    defaultLang,
                    toggleLang: this.toggleLang,
                }}
            >
                {children}
            </LangContext.Provider>
        )
    }
}

export default LangContext

export { LangProvider }