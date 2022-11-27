import { createBrowserRouter } from "react-router-dom";
import Main from "../../Loayout/Main/Main";
import CategoryProducts from "../../pages/CategoryProducts/CategoryProducts/CategoryProducts";
import Home from "../../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryProducts></CategoryProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
        ]
    }
])

export default router;