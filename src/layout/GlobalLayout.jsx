import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Parallax from "./Parallax";

function GlobalLayout() {
	return (
		<div>
            <Parallax>
			<Header />
			<Outlet />
			<Footer />
            </Parallax>
		</div>
	);
}

export default GlobalLayout;