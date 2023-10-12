import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
    } from "react-router-dom"
    
    
import Register from "../components/Register";
import Signin from "../components/Signin";
    
    const router = createBrowserRouter([
    {
    path: "/",
    element: <Main/>,
    children: [
    {
    path: "/register",
    element: <Register />,
    },
    {
    path: "/signin",
    element: <Signin />,
    }
    ]
    }
    ]);
    
    function Router() {
    return <RouterProvider router={router} />
    }
    
    function Main() {
    const navigate = useNavigate()
    
    return <div>
    <h1 >This is login page</h1>
    
    <button onClick={() => navigate('/register')}>signup</button>
    <button onClick={()=> navigate('/signin')} > signin </button>
    
    <Outlet />
    
    
    </div>
    }
    
    export default Router