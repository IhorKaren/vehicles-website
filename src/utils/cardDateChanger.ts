import { ChangeEvent } from "react";
import { UseFormSetError } from "react-hook-form";
import { CreditCardFormValues } from "../App.types";

export const cardDateChanger = (
  e: ChangeEvent<HTMLInputElement>,
  onChange: (value: string) => void,
  clearErrors: (name?: string | string[]) => void,
  setError: UseFormSetError<CreditCardFormValues>,
) => {
  const value = e.target.value.replace(/[^0-9]/g, "");
  clearErrors("expiration");

  const expDateFormatter =
    value.replace(/\//g, "").substring(0, 2) +
    (value.length > 2 ? "/" : "") +
    value.replace(/\//g, "").substring(2, 4);

  if (expDateFormatter.length > 1) {
    const month = expDateFormatter;

    if (parseInt(month) > 12) {
      setError("expiration", { message: "Invalid month" });
      onChange(expDateFormatter);
      return;
    }
  }

  if (expDateFormatter.length > 2) {
    const date = expDateFormatter.split("/");
    const year = date[1];
    const currentYear = new Date().getFullYear().toString().slice(2);

    if (year.length > 1 && parseInt(currentYear) > parseInt(year)) {
      setError("expiration", { message: "Invalid year" });
      onChange(expDateFormatter);
      return;
    }
  }

  onChange(expDateFormatter);
};
