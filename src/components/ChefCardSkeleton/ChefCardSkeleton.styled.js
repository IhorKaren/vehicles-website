import { styled } from "@mui/material";

export const ChefCardWrapper = styled("div")(({ theme, isCarousel }) => {
  return {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: `${isCarousel ? "200px" : "100%"}`,
    height: `${isCarousel ? "300px" : "100%"}`,

    // padding: '20px',
    maxWidth: "350px",
    maxHeight: "400px",
    borderRadius: "20px",
    overflow: "hidden",
    background: `${theme.palette.background.paper}`,
  };
});

export const CircleWrapper = styled("div")(() => {
  return { position: "absolute", right: "10px", top: "10px" };
});

export const RectangularWrapper = styled("div")(() => {
  return { position: "absolute", bottom: "0", width: "100%", height: "30%" };
});
