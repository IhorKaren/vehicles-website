import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ChangeProfileFormValues } from "src/App.types";

type ChangeProfileProps = {
  firstName: string;
  lastName: string;
  email: string;
  onSubmit: (data: ChangeProfileFormValues) => void;
};

const schema = Yup.object().shape({
  firstName: Yup.string().min(2, "Name must be at least 2 characters").trim(),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .trim(),
  email: Yup.string().trim(),
});

const ProfileForm: FC<ChangeProfileProps> = ({
  onSubmit,
  firstName,
  lastName,
  email,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangeProfileFormValues>({
    resolver: yupResolver(schema),
  });

  const onFormSubmit: SubmitHandler<ChangeProfileFormValues> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography component="h1" variant="h5">
          Edit profile
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
                defaultValue={firstName}
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
                defaultValue={lastName}
              />
            </Grid>

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
                defaultValue={email}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileForm;
