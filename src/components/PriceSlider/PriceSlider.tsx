import { FC, useState, ChangeEvent } from "react";
import { Box } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

type PriceSliderProps = {
  min: number;
  max: number;
};

const PriceSlider: FC<PriceSliderProps> = ({ min, max }) => {
  const [value, setValue] = useState<number[]>([min, max]);
  const [minValue, setMinValue] = useState(`${min}`);
  const [maxValue, setMaxValue] = useState(`${max}`);

  const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = parseInt(e.target.value);

    if (newMinValue < min) {
      return;
    }

    if (newMinValue >= 0) {
      setMinValue(newMinValue.toString());

      setValue((prevValue) => {
        const newValue = [...prevValue];
        newValue[0] = newMinValue;
        return newValue;
      });
    }

    setMinValue(newMinValue.toString());
  };

  const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = parseInt(e.target.value);

    if (newMaxValue > max) {
      return;
    }

    if (newMaxValue <= max) {
      setMaxValue(newMaxValue.toString());

      setValue((prevValue) => {
        const newValue = [...prevValue];
        newValue[1] = newMaxValue;
        return newValue;
      });
    }

    setMaxValue(newMaxValue.toString());
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onRangeChange = (e: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
    setMinValue(e.target.value[0]);
    setMaxValue(e.target.value[1]);
  };

  return (
    <Box>
      <Typography sx={{ mb: 1 }}>Price</Typography>
      <FormGroup>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item sm={6}>
            <InputLabel htmlFor="from">
              <Typography variant="body2">From</Typography>
            </InputLabel>
            <Input
              id="from"
              size="small"
              type="number"
              value={minValue}
              onChange={onMinValueChange}
              startAdornment={
                <InputAdornment sx={{ pb: "3px" }} position="start">
                  $
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item sm={6}>
            <InputLabel htmlFor="to">
              <Typography variant="body2">To</Typography>
            </InputLabel>
            <Input
              id="to"
              size="small"
              type="number"
              value={maxValue}
              onChange={onMaxValueChange}
              startAdornment={
                <InputAdornment sx={{ pb: "3px" }} position="start">
                  $
                </InputAdornment>
              }
            />
          </Grid>
        </Grid>
        <Box sx={{ px: 1 }}>
          <Slider
            value={value}
            onChange={onRangeChange}
            //   valueLabelDisplay="auto"
            min={min}
            max={max}
          />
        </Box>
      </FormGroup>
    </Box>
  );
};

export default PriceSlider;
