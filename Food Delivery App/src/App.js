import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import { lazy, Suspense } from "react";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const App = () => (
    <div>
        <Header />
        <Outlet />
        {/* Whenever their is a change in the path, then outlet will be filled with the children according to the path. */}
    </div>
);
const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
    //Taking Configurations
    {
        path: "/", // Root path
        element: <App />,
        children: [
            {
                path: "/", //if this is path
                element: <Body />, //Then load this
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); // RP : Provide the confi. to our React APP