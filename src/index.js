import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import SubTeams from "./Teams/SubTeams";
import OurSponsors from "./OurSponsors/OurSponsors";
import JoinTheClub from "./Club Membership & Upcoming Events/JoinTheClub/JoinTheClub";
import UpcomingEvents from "./Club Membership & Upcoming Events/UpcominEvents/UpcomingEvents";
import Gallery from "./Gallery/Gallery";
import InterviewBooking from "./Interivew Booking/InterviewBookMain";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Header />}>
					<Route
						path="/"
						element={<AboutUs />}></Route>
					<Route
						path="/Teams"
						element={<SubTeams />}></Route>
					<Route
						path="/OurSponsors"
						element={<OurSponsors />}></Route>
					<Route
						path="/JoinTheClub"
						element={<JoinTheClub />}></Route>
					<Route
						path="/UpcomingEvents"
						element={<UpcomingEvents />}></Route>
					<Route
						path="/Gallery"
						element={<Gallery />}></Route>
				</Route>
				<Route
					path="/InterviewBooking"
					element={<InterviewBooking />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
