import { Navigate } from "react-router-dom"

type ProtectedRouteProps = { 
    children: React.ReactNode; 
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) =>{
    const currentUser = localStorage.getItem("currentUser"); 
    if (!currentUser) { return <Navigate to="/" replace />; 

    } 
    return children;
 }; 
export default ProtectedRoute;