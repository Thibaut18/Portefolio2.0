import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import GlobalLayout from "../layout/GlobalLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Cv from "../pages/Cv"

function Routes() {
	const routes = [
		{
			path: "/",
			element: <Navigate to="/homepage" replace />,
		},
		{
			path: "/",
			element: <GlobalLayout />,
			children: [
				{
					path: "homepage",
					element: <Home />,
				},
				{
                    path: "about", 
                    element: <About />, 
                },
				{
                    path: "projects", 
                    element: <Projects />, 
                },
				{
                    path: "contact", 
                    element: <Contact />, 
                },
				{
                    path: "cv", 
                    element: <Cv />, 
                },
				{
					path: "*",
					element: <ErrorPage />,
				},
			],
		},
	];
	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
}

export default Routes