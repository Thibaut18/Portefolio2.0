import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import GlobalLayout from "../layout/GlobalLayout";
import Home from "../pages/Home";

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
			],
		},
	];
	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
}

export default Routes