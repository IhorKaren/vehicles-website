import { useCallback, useEffect, useState } from "react";

import { getBrowserLocation } from "@/shared/AppMap/utils/geo";

const useMapCenter = (initialCenter) => {
  const [center, setCenter] = useState(initialCenter);

  const onPlaceSelect = useCallback((coordinates) => {
    setCenter(coordinates);
  }, []);

  useEffect(() => {
    getBrowserLocation()
      .then((curLoc) => {
        setCenter(curLoc);
      })
      .catch((defLoc) => setCenter(defLoc));
  }, []);

  return { center, onPlaceSelect };
};

export default useMapCenter;
