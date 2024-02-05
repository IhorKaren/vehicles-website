import { FC, useState, ChangeEvent } from "react";
import { Box } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

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
      <Typography sx={{ mb: 0 }}>Price</Typography>
      <FormGroup>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item sm={6}>
            <TextField
              label="From"
              id="from"
              size="small"
              variant="standard"
              type="number"
              value={minValue}
              onChange={onMinValueChange}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="To"
              id="to"
              size="small"
              variant="standard"
              type="number"
              value={maxValue}
              onChange={onMaxValueChange}
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
