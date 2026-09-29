import { createContext } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
};
const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {},
});

export default ThemeContext;