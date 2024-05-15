import { Container, Typography, Grid, Stack, Box , alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import HeaderIcon from "../components/icons/HeaderIcon";
import Header from "../components/Header";

const StyledText = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	"&.aboutDescription": {
		fontSize: theme.typography.h6.fontSize,
		lineHeight: 1.5,
	},
}));

const About = () => {
	return (
		<>
			<Header />
			<Box sx={(theme) => ({
				width: "100%",
				backgroundImage:
					theme.palette.mode === "light"
						? "linear-gradient(180deg, #CEE5FD, #FFF)"
						: `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
				backgroundSize: "100% 20%",
				backgroundRepeat: "no-repeat",
			})}>
				<Container
					maxWidth="lg"
					sx={{
						padding: 20,
						maxHeight: "min-content",
					}}
				>
					<Grid container spacing={4}>
						<Grid item xs={12} md={6}>
							<StyledText variant="h4" gutterBottom>
								About Us
							</StyledText>
							<StyledText
								variant="body1"
								paragraph
								className="aboutDescription"
							>
								Welcome to stocker, your one-stop shop for everything related to stock market investing. We&apos;re a team of passionate finance professionals dedicated to empowering individuals of all experience levels to make informed investment decisions.
							</StyledText>
						</Grid>
						<Grid item xs={12} md={6}>
							<Stack direction="column" alignItems="center" spacing={2}>
								<Box
									sx={{
										width: 150,
										height: 150,
									}}
								>
									<HeaderIcon width="200px" height="200px" />
								</Box>
								<StyledText variant="h6" gutterBottom>
									Our Team
								</StyledText>
								<StyledText
									variant="body1"
									paragraph
									className="aboutDescription"
								>
									We are a passionate group of individuals dedicated to creating
									a positive impact. Our team consists of experienced
									developers, designers, and marketing professionals who work
									together to bring our vision to life.
								</StyledText>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default About;
