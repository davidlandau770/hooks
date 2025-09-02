import App from "../app/App";
import ThemeContext from "../themeContext/ThemeContext";

export default function UseContext() {
    return (
        <div className="body">
            <App />
            <hr />
            <ThemeContext />
        </div>
    )
}
