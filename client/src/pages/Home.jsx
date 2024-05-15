import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Footer from "../components/Footer";
import Watchlist from "../components/Watchlist";

export default function Home() {
	return (
		<>
			<CssBaseline />
			<Header />
			<Hero />
			<Box sx={{ bgcolor: "background.default" }}>
				<Watchlist />
				<Divider />
				<Highlights />
				<Divider />
				<Footer />
			</Box>
		</>
	);
}
