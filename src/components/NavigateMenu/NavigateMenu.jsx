import { AiTwotoneFileImage } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Settings } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, List, ListItem, Typography } from "@mui/material";

import LogoText from "@/assets/logotext.png";
import { CustomLink } from "@/components/CustomLink/CustomLink";
import { route } from "@/constants/route";
import { signOut } from "@/redux/auth/operations";
import { selectIsAuth, selectRoles, selectUser } from "@/redux/auth/selectors";
import { IconButtonStyled } from "../UserMenu/UserMenu.slyled";
import { NavigateMenuPropTypes } from "./NavigateMenu.props";
import { LogoAndButtonWrapper, NavigationWrapper } from "./NavigateMenu.styled";

export const NavigateMenu = ({ onClose, onOpen }) => {
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  // const isAuth = useSelector(selectIsAuth);
  // const roles = useSelector(selectRoles);

  const user = { isAuth: false, roles: ["user", "chef", "admin", ""] };
  const isAuth = user.isAuth;
  const roles = user.roles[0];

  return (
    <NavigationWrapper onClick={onClose()} onKeyDown={onOpen()}>
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

        {!!isAuth && (
          <List>
            <ListItem>
              <CustomLink to={route.SIGN_UP}>
                <Typography variant="h6" >
                  Sign up
                </Typography>
              </CustomLink>
            </ListItem>
            <ListItem>
              <CustomLink to={route.SIGN_UP}>
                <Typography variant="h6">
                  Sign in
                </Typography>
              </CustomLink>{" "}
            </ListItem>
          </List>
        )}
        {!isAuth && (
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

NavigateMenu.propTypes = NavigateMenuPropTypes;
