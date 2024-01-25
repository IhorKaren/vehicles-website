import defaultSrc from "@/assets/default-dish.svg";
import { AppImagePropTypes } from "./AppImage.props";
import { AppImageStyled, AppImageThumbStyled } from "./AppImage.styled";

const AppImage = ({ src, alt, defaultSrc, ...props }) => {
  const imageSrc = src || defaultSrc;

  const errorHandler = (evt) => {
    evt.target.src = defaultSrc;
  };
  return (
    <AppImageThumbStyled {...props}>
      <AppImageStyled
        src={imageSrc}
        alt={alt}
        width={props.width}
        height={props.height}
        onError={errorHandler}
        loading="lazy"
      />
    </AppImageThumbStyled>
  );
};

AppImage.propTypes = AppImagePropTypes;
AppImage.defaultProps = {
  width: 90,
  height: 90,
  borderRadius: "10px",
  defaultSrc,
};

export default AppImage;
