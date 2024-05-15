import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";

export default function Watchlist() {
	const res = fetch(
		`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=AL1DUXEH4AP5HPDS`
	)
		.then((response) => response.json())
		.then((data) => console.log(data.Information))
		.catch((err) => console.log(err));

	console.log(res.Symbol);

	return (
		<>
			<Box
				id="image"
				sx={(theme) => ({
					mt: { xs: 8, sm: 10 },
					alignSelf: "center",
					height: { xs: 200, sm: 700 },
					width: "100%",
					backgroundImage:
						theme.palette.mode === "light"
							? 'url("/static/images/templates/templates-images/hero-light.png")'
							: 'url("/static/images/templates/templates-images/hero-dark.png")',
					backgroundSize: "cover",
					borderRadius: "10px",
				})}
			>
				<Card sx={{ minWidth: 275 }}>
					<CardContent>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							Word of the Day
						</Typography>
						<Typography variant="h5" component="div"></Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							adjective
						</Typography>
						<Typography variant="body2">
							well meaning and kindly.
							<br />
							{'"a benevolent smile"'}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Learn More</Button>
					</CardActions>
				</Card>
				<Typography>Watchlist</Typography>
			</Box>
		</>
	);
}
