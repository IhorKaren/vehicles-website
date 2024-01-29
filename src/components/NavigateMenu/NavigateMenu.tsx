import { toast } from "react-toastify";

import { Settings } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, List, ListItem, Typography } from "@mui/material";

import LogoText from "../../assets/logotext.png";
import { route } from "../../constants/route";
import { IconButtonStyled } from "../UserMenu/UserMenu.slyled";
import { LogoAndButtonWrapper, NavigationWrapper } from "./NavigateMenu.styled";
import { CustomLink } from "../CustomLink/CustomLink";

type NavigateMenuProps = {
  onClose: (open: boolean) => React.MouseEventHandler<HTMLDivElement>;
  onOpen: (open: boolean) => React.KeyboardEventHandler<HTMLDivElement>;
};

export const NavigateMenu: React.FC<NavigateMenuProps> = ({
  onClose,
  onOpen,
}) => {
  const user: { isAuth: boolean; roles: string[] } = {
    isAuth: false,
    roles: ["user", "seller", "admin", ""],
  };
  const isAuth: boolean = user.isAuth;
  // const roles: string = user.roles[0];

  return (
    <NavigationWrapper onClick={() => onClose} onKeyDown={() => onOpen}>
      <LogoAndButtonWrapper>
        <img src={LogoText} alt="logo" style={{ maxWidth: 200 }} />
      </LogoAndButtonWrapper>
      <nav>
        <List>
          <ListItem>
            <CustomLink to={route.HOME}>Vehicles</CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink to={route.HOME}>Accessories</CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink to={route.HOME}>Auctions</CustomLink>
          </ListItem>
        </List>
        <Divider />
        {!user && <Divider />}

        {!isAuth && (
          <List>
            <ListItem>
              <CustomLink to={route.SIGN_UP}>
                <Typography variant="h6">Sign up</Typography>
              </CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.SIGN_UP}>
                <Typography variant="h6">Sign in</Typography>
              </CustomLink>{" "}
            </ListItem>
          </List>
        )}
        {!!isAuth && (
          <List>
            <ListItem sx={{ ml: -1 }}>
              <CustomLink to={route.SIGN_IN}>
                <Settings />
                <Typography variant="h6" sx={{ ml: 1 }}>
                  Edit Profile
                </Typography>
              </CustomLink>
            </ListItem>
            <ListItem>
              <IconButtonStyled
                onClick={() => {
                  if (isAuth) {
                    // dispatch(signOut());
                    toast.success("You have successfully signed out");
                  }
                }}
              >
                <LogoutIcon sx={{ width: 30, height: 30 }} />
              </IconButtonStyled>
            </ListItem>
          </List>
        )}
      </nav>
    </NavigationWrapper>
  );
};
