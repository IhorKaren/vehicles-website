import { AppContainer } from "@/shared";
import styled from "@emotion/styled";

const navBarHeight = "64px";
const footerHeight = "89px";
export const UserPageWrapperStyled = styled(AppContainer)({
  width: "100%",
  minHeight: `calc(100vh - ${navBarHeight} - ${footerHeight})`,
});
