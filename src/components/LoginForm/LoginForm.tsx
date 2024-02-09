import { FC } from "react";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { route } from "../../constants/route";
import { LoginFormValues } from "src/App.types";

type LoginForm = {
  onSubmit: (user: LoginFormValues) => void;
};

const schema = Yup.object().shape({
  email: Yup.string().required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const LoginForm: FC<LoginForm> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });

  const onFormSubmit: SubmitHandler<LoginFormValues> = (data) => {
    onSubmit(data);
    reset();
  };

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
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onFormSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="email"
                id="email"
                {...register("email")}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                variant="filled"
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
                name="password"
                label="Password"
                autoComplete="new-password"
                variant="filled"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={NavLink} to={route.SIGN_UP} variant="body2">
                Not registered yet? Register
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
