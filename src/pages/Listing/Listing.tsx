import { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import HorizontalStepper from "../../components/Stepper/Stepper";
import ListingForm from "../../components/ListingForm/ListingForm";

const Listing = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: "40px",
      }}
      maxWidth="sm"
    >
      <Box mb={3}>
        <Typography component="h1" variant="h5" mb={2}>
          Tell us about your car
        </Typography>
        <Typography variant="body2" mb={2}>
          Please give us some basics about yourself and the car you’d like to
          sell. We’ll also need details about the car’s title status as well as
          6 photos that highlight the car’s exterior and interior condition.
        </Typography>
        <Typography variant="body2">
          We’ll respond to your application within a business day. Once
          accepted, we’ll ask for more details and high-res photos, then work
          with you to build a custom and professional listing and get the
          auction live.
        </Typography>
      </Box>
      <HorizontalStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      >
        <ListingForm onSubmit={onSubmit} activeStep={activeStep} />
      </HorizontalStepper>
    </Container>
  );
};

export default Listing;
