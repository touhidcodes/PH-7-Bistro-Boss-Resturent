import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/router.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<HelmetProvider>
				<div className='max-w-screen-xl mx-auto'>
					<RouterProvider router={router} />
				</div>
			</HelmetProvider>
		</AuthProvider>
	</React.StrictMode>
);
