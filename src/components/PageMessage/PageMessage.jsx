import { Typography } from "@mui/material";

import imageError from "@/assets/error.svg";
import imageNoData from "@/assets/no-data.svg";
import imagePayment from "@/assets/payment-preparing.svg";
import { PageMessagePropTypes } from "./PageMessage.props";
import { PageMessageImage, PageMessageStyled } from "./PageMessage.styled";

const images = {
  error: imageError,
  "no-data": imageNoData,
  payment: imagePayment,
};

const PageMessage = ({
  image,
  message,
  variant,
  imageProps,
  messageProps,
  ...props
}) => {
  return (
    <PageMessageStyled {...props}>
      <PageMessageImage
        component="img"
        src={image ? image : images[variant]}
        width={400}
        height={400}
        {...imageProps}
      />
      <Typography {...messageProps}>{message}</Typography>
    </PageMessageStyled>
  );
};

PageMessage.propTypes = PageMessagePropTypes;
PageMessage.defaultProps = {
  variant: "error",
  message: "Oops! Something went wrong.",
};

export default PageMessage;
