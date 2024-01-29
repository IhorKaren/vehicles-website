import React, { ReactNode } from "react";
import { MainStyled } from "./Main.styled";
type MainProps = {
  children: ReactNode;
};
export const Main: React.FC<MainProps> = ({
  children,
}: MainProps): JSX.Element => {
  return <MainStyled>{children}</MainStyled>;
};
