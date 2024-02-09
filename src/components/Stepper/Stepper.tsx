import { ReactNode, FC } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

const steps = ["Application Step", "Final Step"];

type StepperProps = {
  children: ReactNode;
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
};

const HorizontalStepper: FC<StepperProps> = ({
  children,
  activeStep,
  handleNext,
  handleBack,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: ReactNode;
          } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      Step {activeStep + 1} {children}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default HorizontalStepper;
