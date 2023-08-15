import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Categories from "../pages/Home/Categories/Categories";
import NewsLaout from "../layout/NewsLaout";
import News from "../pages/News/news/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/login/Login/Login";
import Rageistar from "../pages/login/Rageistar/Rageistar";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shaerd/terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Rageistar></Rageistar>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:3000/categorizes/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLaout></NewsLaout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute>
                    <News></News>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    }
])
export default router;