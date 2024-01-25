import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";

import { AppButton } from "@/shared";
import { CenterBox, ImageBox } from "./ErrorsPage.styled";

export const ErrorsPage = ({ img, text }) => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <CenterBox>
        <ImageBox component="img" src={img} />
        <Typography variant="h5" component="h1">
          {text}
        </Typography>

        <AppButton onClick={handleBackHome} sx={{ mt: 2 }} label="GO TO HOME" />
      </CenterBox>
    </Container>
  );
};

ErrorsPage.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
