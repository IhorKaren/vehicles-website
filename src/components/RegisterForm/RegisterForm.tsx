import { FC, useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { route } from "../../constants/route";
import { RegisterFormValues } from "src/App.types";

type RegisterFormProps = {
  onSubmit: (user: RegisterFormValues) => void;
};

const baseSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("First Name is required!")
    .trim(),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last Name is required!")
    .trim(),
  email: Yup.string().required("Email is required!").trim(),
  password: Yup.string().min(6).required("Password is required!").trim(),
  accountType: Yup.string().required(),
});

const RegisterForm: FC<RegisterFormProps> = ({ onSubmit }) => {
  const [isBusiness, setIsBusiness] = useState(false);

  const schema = isBusiness
    ? baseSchema.shape({
        companyName: Yup.string()
          .min(4)
          .required("Company Name is required!")
          .trim(),
        companyCode: Yup.string().optional().trim(),
        companyAddress: Yup.string().optional().trim(),
      })
    : baseSchema;

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(schema),
  });

  const accountType = watch("accountType");

  const onFormSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    onSubmit(data);
    reset();
  };

  useEffect(() => {
    if (accountType === "business") {
      setIsBusiness(true);
      return;
    }
    setIsBusiness(false);
  }, [accountType]);

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          backgroundColor: "#F5F7FF",
          padding: "14px",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onFormSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                id="firstName"
                {...register("firstName")}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
                autoComplete="given-name"
                name="firstName"
                fullWidth
                label="First Name"
                autoFocus
                variant="filled"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                id="lastName"
                {...register("lastName")}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
                fullWidth
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                variant="filled"
                required
              />
            </Grid>
            {isBusiness && (
              <>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    id="companyName"
                    {...register("companyName")}
                    error={Boolean(errors.companyName)}
                    helperText={errors.companyName?.message}
                    fullWidth
                    label="Company Name"
                    name="companyName"
                    autoComplete="family-name"
                    variant="filled"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    id="companyCode"
                    {...register("companyCode")}
                    error={Boolean(errors.companyCode)}
                    helperText={errors.companyCode?.message}
                    fullWidth
                    label="Company Registration Number"
                    name="companyCode"
                    autoComplete="family-name"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    id="companyAddress"
                    {...register("companyAddress")}
                    error={Boolean(errors.companyAddress)}
                    helperText={errors.companyAddress?.message}
                    fullWidth
                    label="Company Address"
                    name="companyAddress"
                    autoComplete="family-name"
                    variant="filled"
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <TextField
                type="email"
                id="email"
                {...register("email")}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                fullWidth
                label="Email Address"
                autoComplete="email"
                variant="filled"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                id="password"
                {...register("password")}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                fullWidth
                label="Password"
                autoComplete="new-password"
                variant="filled"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel
                id="account-type-choice"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">Account Type</Typography>
                <Link component={NavLink} to={route.MEMBERSHIP} variant="body2">
                  Learn More
                </Link>
              </FormLabel>
              <Controller
                name="accountType"
                control={control}
                defaultValue="private"
                render={({ field }) => (
                  <RadioGroup row aria-label="account-type-choice" {...field}>
                    <FormControlLabel
                      value="private"
                      control={<Radio />}
                      label="Private"
                    />
                    <FormControlLabel
                      value="trader"
                      control={<Radio />}
                      label="Trader"
                    />
                    <FormControlLabel
                      value="business"
                      control={<Radio />}
                      label="Business"
                    />
                  </RadioGroup>
                )}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={NavLink} to={route.SIGN_IN} variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
