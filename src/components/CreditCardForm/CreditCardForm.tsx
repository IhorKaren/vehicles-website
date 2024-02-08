import { FC, ChangeEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CreditCardFormValues } from "src/App.types";
import { cardNumberChanger } from "../../utils/cardNumberChanger";
import { cardDateChanger } from "../../utils/cardDateChanger";

type CreditCardFormProps = {
  onSubmit: (data: CreditCardFormValues) => void;
};

const schema = Yup.object().shape({
  holder: Yup.string().required("Name on card required!").trim(),
  number: Yup.string().required("Number is required!").trim(),
  expiration: Yup.string().required("Date is required!").trim(),
  cvc: Yup.string().min(3).max(4).required("CVC code is required!").trim(),
});

const CreditCardForm: FC<CreditCardFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<CreditCardFormValues>({
    resolver: yupResolver(schema),
  });

  const onFormSubmit: SubmitHandler<CreditCardFormValues> = (data) => {
    onSubmit(data);
    reset();
  };

  const onCvcCodeChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void,
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");

    if (value.length > 4) {
      return;
    }

    onChange(value);
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
          Register to bid
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onFormSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="text"
                id="holder"
                {...register("holder")}
                error={Boolean(errors.holder)}
                helperText={errors.holder?.message}
                fullWidth
                label="Name on card"
                name="holder"
                autoComplete="off"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="number"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    type="text"
                    id="number"
                    label="Credit Card Number"
                    variant="filled"
                    placeholder="XXXX XXXX XXXX XXXX"
                    fullWidth
                    error={Boolean(errors.number)}
                    helperText={errors.number?.message}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      cardNumberChanger(e, onChange)
                    }
                    value={value ? value : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={5} sm={6}>
              <Controller
                control={control}
                name="expiration"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    type="text"
                    id="expiration"
                    label="Expiration"
                    variant="filled"
                    placeholder="MM/YY"
                    fullWidth
                    error={Boolean(errors.expiration)}
                    helperText={errors.expiration?.message}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      cardDateChanger(
                        e,
                        onChange,
                        () => clearErrors("expiration"),
                        setError,
                      )
                    }
                    value={value ? value : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={5} sm={6}>
              <Controller
                control={control}
                name="cvc"
                render={({ field: { value, onChange } }) => (
                  <TextField
                    type="text"
                    id="cvc"
                    label="CVC (3 or 4 digit code)"
                    variant="filled"
                    placeholder="CVC"
                    fullWidth
                    error={Boolean(errors.cvc)}
                    helperText={errors.cvc?.message}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      onCvcCodeChange(e, onChange)
                    }
                    value={value ? value : ""}
                  />
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
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreditCardForm;
