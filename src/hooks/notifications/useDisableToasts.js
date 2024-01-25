import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { disableToasts, enableToasts } from "@/redux/notifications";

export const useDisableToasts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(disableToasts());
    return () => {
      dispatch(enableToasts());
    };
  }, [dispatch]);
};
