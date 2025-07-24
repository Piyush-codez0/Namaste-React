import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter, Outlet } from "react-router-dom";


const App = () => (
    <div>
        <Header />
        <Outlet />  {/* Whenever their is a chance in the path, then outlet will be filled with the children according to the path. */} 
    </div>
)

const appRouter = createBrowserRouter([  //Taking Configurations
    {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",  //if this is path
            element: <Body />  //Then load this
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ],
    errorElement: <Error />
    }  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);   // RP : Provide the confi. to our React APP