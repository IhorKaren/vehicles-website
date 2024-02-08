import { ChangeEvent } from "react";

export const cardNumberChanger = (
  e: ChangeEvent<HTMLInputElement>,
  onChange: (value: string) => void,
) => {
  let value = e.target.value.replace(/[^\d\s]/g, "");

  if (value.length > 19) {
    return;
  }

  if (value.length === 4 || value.length === 9 || value.length === 14) {
    value += " ";
  }

  onChange(value);
};
