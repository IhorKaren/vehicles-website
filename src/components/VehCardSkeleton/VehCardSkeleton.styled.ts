import { styled, Theme } from "@mui/material";

type VehCardWrapperProps = {
  theme: Theme;
  isCarousel: boolean;
};

export const VehCardWrapper = styled("div")<VehCardWrapperProps>(({
  theme,
  isCarousel,
}) => {
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
  return {
    position: "absolute",
    bottom: "0px",
    display: "flex",
    marginTop: "auto",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    height: "40%",
  };
});
export const ButtonsSkeletonWrapper = styled("div")(() => {
  return {
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  };
});
export const TitleSkeletonWrapper = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
  };
});
