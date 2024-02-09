import { FC, useState, useEffect } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
// import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import DropZone from "../DropZone/DropZone";
import { ListingFormValues } from "src/App.types";
import { years } from "../VehiclesFilter/data";

type ListingFormProps = {
  activeStep: number;
  onSubmit: (data: unknown) => void;
};

const schema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required!"),
  phone: Yup.string().required("Phone is required!"),
  seller: Yup.string().required("Seller type is required!"),
  vin: Yup.string().required("VIN is required!"),
  make: Yup.string().required("Make is required!"),
  model: Yup.string().required("Model is required!"),
  year: Yup.number().required("Year is required!"),
  transmission: Yup.string().required("Transmission is required!"),
  mileage: Yup.string().required("Mileage  is required!"),
});

const ListingForm: FC<ListingFormProps> = ({ activeStep, onSubmit }) => {
  const [formInputs, setFormInputs] = useState({
    isDealer: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<ListingFormValues>({
    resolver: yupResolver(schema),
  });

  const sellerType = watch("seller");

  const onFormSubmit: SubmitHandler<ListingFormValues> = (data) => {
    onSubmit(data);
    reset();
  };

  useEffect(() => {
    if (sellerType === "dealer") {
      setFormInputs((p) => ({ ...p, isDealer: true }));
      return;
    } else {
      setFormInputs((p) => ({ ...p, isDealer: false }));
      return;
    }
  }, [sellerType]);

  return (
    <Box component="form" onSubmit={handleSubmit(onFormSubmit)}>
      {activeStep === 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography variant="h6">Your Info</Typography>
            <FormControl>
              <FormLabel id="dealer-or-private">
                Dealer or private party?
              </FormLabel>
              <Controller
                name="seller"
                control={control}
                defaultValue="private"
                render={({ field }) => (
                  <RadioGroup
                    row
                    aria-labelledby="dealer-or-private"
                    {...field}
                  >
                    <FormControlLabel
                      value="private"
                      control={<Radio />}
                      label="Private Party"
                    />
                    <FormControlLabel
                      value="dealer"
                      control={<Radio />}
                      label="Dealer"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
            {formInputs.isDealer && (
              <FormControl
                sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}
              >
                <TextField
                  type="text"
                  id="fullName"
                  label="Are there any additional fees the buyer will have to pay?"
                  variant="filled"
                  fullWidth
                  {...register("fullName")}
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName?.message}
                  name="fullName"
                />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      id="fullName"
                      fullWidth
                      label="Dealership name"
                      variant="filled"
                      {...register("fullName")}
                      error={Boolean(errors.fullName)}
                      helperText={errors.fullName?.message}
                      name="fullName"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      id="phone"
                      fullWidth
                      {...register("phone")}
                      error={Boolean(errors.phone)}
                      helperText={errors.phone?.message}
                      name="phone"
                      label="Dealership website"
                      variant="filled"
                    />
                  </Grid>
                </Grid>
              </FormControl>
            )}
            <FormControl>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="text"
                    id="fullName"
                    fullWidth
                    label="Full Name"
                    variant="filled"
                    {...register("fullName")}
                    error={Boolean(errors.fullName)}
                    helperText={errors.fullName?.message}
                    name="fullName"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="text"
                    id="phone"
                    fullWidth
                    {...register("phone")}
                    error={Boolean(errors.phone)}
                    helperText={errors.phone?.message}
                    name="phone"
                    label="
              Contact phone number"
                    variant="filled"
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography variant="h6">Car Details</Typography>
            <FormControl
              sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}
            >
              <TextField
                type="text"
                id="vin"
                label="VIN"
                variant="filled"
                fullWidth
                {...register("vin")}
                error={Boolean(errors.vin)}
                helperText={errors.vin?.message}
                name="vin"
              />
              <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                  <TextField
                    type="text"
                    id="make"
                    fullWidth
                    label="Make"
                    variant="filled"
                    {...register("make")}
                    error={Boolean(errors.make)}
                    helperText={errors.make?.message}
                    name="make"
                  />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <TextField
                    type="text"
                    id="model"
                    fullWidth
                    label="Model"
                    variant="filled"
                    {...register("model")}
                    error={Boolean(errors.model)}
                    helperText={errors.model?.message}
                    name="model"
                  />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <FormControl variant="filled" fullWidth>
                    <InputLabel id="year-select">Year</InputLabel>
                    <Controller
                      name="year"
                      control={control}
                      render={({ field }) => (
                        <Select
                          labelId="year-select"
                          id="year-select"
                          label="Age"
                          {...field}
                          value={field.value || ""}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                maxHeight: "200px",
                              },
                            },
                          }}
                        >
                          {years.map((year) => (
                            <MenuItem value={year} key={year}>
                              {year}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <FormControl variant="filled" fullWidth>
                    <InputLabel id="transmission-select">
                      Transmission
                    </InputLabel>
                    <Controller
                      name="transmission"
                      control={control}
                      render={({ field }) => (
                        <Select
                          labelId="transmission-select"
                          id="transmission-select"
                          label="Age"
                          {...field}
                          value={field.value || ""}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                maxHeight: "200px",
                              },
                            },
                          }}
                        >
                          <MenuItem value="automatic">Automatic</MenuItem>
                          <MenuItem value="manual">Manual</MenuItem>
                        </Select>
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    type="number"
                    id="mileage"
                    label="Mileage"
                    fullWidth
                    variant="filled"
                    {...register("mileage")}
                    error={Boolean(errors.mileage)}
                    helperText={errors.mileage?.message}
                    name="mileage"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  multiline
                  rows={4}
                  maxRows={6}
                  id="mileage"
                  label="Special options/equipment"
                  fullWidth
                  variant="filled"
                  {...register("mileage")}
                  error={Boolean(errors.mileage)}
                  helperText={errors.mileage?.message}
                  name="mileage"
                  placeholder="For example: sport package, long-range battery, FSD or other important factory-installed features"
                />
              </Grid>
            </FormControl>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography variant="h6">Photos</Typography>
          <Typography variant="body2">
            Please upload at least 6 photos of the exterior and interior of the
            car.
          </Typography>
          <DropZone />
        </Box>
      )}
    </Box>
  );
};

export default ListingForm;
