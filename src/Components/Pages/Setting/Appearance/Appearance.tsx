import { FaRegCircle } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import ThemeContext from "../../../../Context/ThemeContext";
import { useContext,useState } from "react";
import './Appearance.css';
import ThemeContextBar from "../../../../Context/ThemeContextBar";

const Appearance  = (()=>{
    const { theme, setTheme } = useContext(ThemeContext);
    const { sidbar, setsidbar} = useContext(ThemeContextBar);
    const [message, setMessage] = useState("");
    const handleDesktopSetting = () => {
        if (window.innerWidth <= 650) {
            setMessage("These changes are only available on desktop.");
            setTimeout(() => {
                setMessage("");
            }, 2500);
    
            return;
        }
        setsidbar(sidbar === "in" ? "out" : "in")
    };
    return(
        <div>
            <div>
                <h2>Them</h2>
                <p>Choose your preferred dashboard theme  </p>
                <div className="divapeartheme">
                    <div onClick={() => setTheme("light")}>
                        {theme === "light" ? <FaCircle /> : <FaRegCircle />}
                        light
                    </div>
                    <div onClick={() => setTheme("dark")}>
                        {theme === "dark" ? <FaCircle /> : <FaRegCircle />}
                        dark
                    </div>
                </div>
            </div>
            <div>
            <h2>Layout</h2>
            <p>Customize the dashboard layout</p>
            <div className="appearancediv">
                <div>
                    <div>
                        <h4>Fixed Sidebar</h4>
                        <p>Keep the sidebar visible while navigating</p>
                    </div>
                    <input type="checkbox"  checked={sidbar === "in"} onChange={ handleDesktopSetting}/>
                </div>
                    {message && (
                        <div className="desktopMessage">
                            {message}
                        </div>
                    )}
            </div>
        </div>
    </div>
    )
})

export default Appearance;