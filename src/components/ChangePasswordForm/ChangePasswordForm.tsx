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
import { ChangePasswordFormValues } from "src/App.types";

type ChangePasswordFormProps = {
  onSubmit: (data: ChangePasswordFormValues) => void;
};

const schema = Yup.object().shape({
  currentPassword: Yup.string().required("Password is required!").trim(),
  password: Yup.string().min(6).required("Password is required!").trim(),
});

const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordFormValues>({
    resolver: yupResolver(schema),
  });

  const onFormSubmit: SubmitHandler<ChangePasswordFormValues> = (data) => {
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
          Change password
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onFormSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="password"
                id="currentPassword"
                {...register("currentPassword")}
                error={Boolean(errors.currentPassword)}
                helperText={errors.currentPassword?.message}
                fullWidth
                label="Current Password"
                name="currentPassword"
                autoComplete="off"
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
                label="New Password"
                autoComplete="off"
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
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ChangePasswordForm;
