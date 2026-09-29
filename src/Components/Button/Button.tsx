
type ButtonType = {
    children?: React.ReactNode;
    fun?: () => void;
    className?:string;
};
const Button = (({fun,children,className}:ButtonType) =>{
    return(
        <button onClick={fun} className={className}>{children}</button>
    )
})

export default Button;