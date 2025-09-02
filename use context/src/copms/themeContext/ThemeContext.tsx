import { useState } from "react"
import { ChangeState } from "../context/StateContext";
import "./themeContxet.css"
import Main from "../main/Main";
import Footer from "../footer/Footer";
import Header from "../header/Header";


export default function ThemeContext() {
    const [state, setState] = useState<string>("light");
    return (
        <>
            <ChangeState.Provider value={{state, setState}}>
                <div className="div">
                    <p>ThemeContext:</p>
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </ChangeState.Provider>
        </>
    )
}