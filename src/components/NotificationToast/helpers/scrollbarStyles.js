export const scrollbarStyles = (theme) => ({
  overflow: "scroll",
  position: "relative",
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    width: "4px",
    backgroundColor: theme.palette.primary.light,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "4px",
  },
  scrollbarWidth: "thin",
  scrollbarColor: `${theme.palette.primary.main} ${theme.palette.primary.light}`,
});
