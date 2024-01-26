import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "View an auction",
      "Add vehicles to your Watchlist",
      "Create vehicle alerts",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "49",
    description: [
      "View multiple online auctions",
      "Bid up to $2,000 USD without making a deposit",
      "Bid on up to five cars at a time with a deposit",
      "Save your favorite searches",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Premier",
    price: "115",
    description: [
      "Everything included in Basic",
      "Bid on multiple vehicles at the same time up to $100k USD daily",
      "Receive phone support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

const MembershipChoice = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth="md"
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          pt: 8,
          pb: 6,
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          As a Our Member, you'll be able to search our massive inventory for
          wholesale, used and repairable cars, trucks and SUVs. Unlock
          additional features by upgrading to a Basic or Premier
          Membership—you'll be able to jump right into the auction and start
          bidding in our live auctions!
        </Typography>
        <Container maxWidth="md">
          <Grid container spacing={5} component="ul" alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid
                item
                component="li"
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h3"
                        color="text.primary"
                      >
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant as "outlined" | "contained"}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default MembershipChoice;
