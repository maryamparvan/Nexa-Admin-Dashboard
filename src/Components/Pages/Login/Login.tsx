import Button from "../../Button/Button";
import { useEffect, useState } from "react";
import UserService from "../../../Service/UserService/UserService";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import './Login.css';

type typedata = {
    password: string;
    email : string;
    id:number;
}
const Login = (() =>{
    const [email, setemail] = useState<string>("")
    const [pass, setpass] = useState<string>("")
    const [data, setdata] = useState<typedata[]>([])
    const [load, setload] = useState<string>();
const [loadingUsers, setLoadingUsers] = useState(true);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const datau = await UserService();
                setdata(datau);
            } catch (error) {
                console.error("Failed to load users:", error);
                setload("Unable to connect to login service");
            } finally {
                setLoadingUsers(false);
            }
        };
        fetchdata();
    }, []);
    const login = () => {
        const user = data.find(
          (item) => item.email === email && item.password === pass
        );
        if (user) {
          setload("login success");
          localStorage.setItem( "currentUser", JSON.stringify(user));
          window.dispatchEvent(new Event("currentUserChanged"))
          navigate('./Dashboard')
        } else {
            setload("Email or password is incorrect");
        }
      };
      const demo = () => {
        const demoUser = data[1];
        if (!demoUser) {
            setload("Please wait, loading demo account...");
            return;
        }
        localStorage.setItem("currentUser", JSON.stringify(demoUser));
        window.dispatchEvent(new Event("currentUserChanged"));
        navigate("/Dashboard");
    };
    return(
        <div className="loginPage">
            <div className="divlog">
                <h3>NEXA ADMIN </h3>
                <div>
                    <p>Welcome back 👋</p>
                    <p> Sign in to access your dashboard</p>
                </div>
                <div className="classdivv">
                    <label >Email :</label>
                    <input type="email" value={email}  onChange={(e) => setemail(e.target.value) } />
                </div>
                <div className="passwordInput">
                    <label >Password :</label>
                    <input type={showPassword ? "text" : "password"} value={pass} onChange={(e) => setpass(e.target.value)} />
                    <Button  fun={() => setShowPassword(!showPassword)} className="passwordInputbutton" >
                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                    </Button>
                </div>
                <br />
                <div className="buttonslog">
                    <span>{load}</span>
                    <Button className="buttonsign" fun={login}>Sign in</Button>
                    <Button className="buttondemo" fun={demo} >
                        {loadingUsers ? "Loading..." : "Try Demo Account"}
                    </Button>
                </div>
            </div>
        </div>
    )
})

export default Login;