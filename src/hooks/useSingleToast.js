import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export const useSingleToast = (errorObject) => {
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (errorObject?.message && !hasShownToast.current) {
      toast.info(errorObject.message);
      hasShownToast.current = true;
    }

    return () => {
      hasShownToast.current = false;
    };
  }, [errorObject]);
};
