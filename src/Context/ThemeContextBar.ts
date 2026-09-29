import { createContext } from "react";
type ThemeContextBarType = {
    sidbar: string;
    setsidbar: (sidebar: string) => void;
    iconsidbar: string;
    seticonsidbar: (iconsidbar: string) => void;
};
const ThemeContextBar = createContext<ThemeContextBarType>({
    sidbar: "out",
    setsidbar: () => {},
    iconsidbar:"out",
    seticonsidbar: () => {}
});

export default ThemeContextBar;