import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Badge } from "@mui/material";
import styled from "@emotion/styled";
import {
  IconButtonStyled,
  LinkStyled,
  ListItemStyled,
  ListStyled,
} from "./UserMenu.slyled";
import { route } from "../../constants/route";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid #FFF`,
    padding: "0 4px",
    backgroundColor: "#363945",
    color: "white",
  },
}));

export const UserMenu = () => {
  const user = { isAuth: true, roles: ["user", "seller", "admin", ""] };
  const isAuth = user.isAuth;
  const roles = user.roles;

  const navigate = useNavigate();

  const avatar = "src/assets/logo.png";

  return (
    <>
      {!roles.includes("admin") && (
        <Avatar
          src={avatar}
          sx={{ width: 35, height: 35, mr: 1, cursor: "pointer" }}
          onClick={() => navigate(route.USER_ACCOUNT)}
        />
      )}
      <ListStyled>
        {!roles.includes("admin") && (
          <>
            <ListItemStyled>
              <LinkStyled to={route.NOTIFICATIONS}>
                <StyledBadge badgeContent={0} color="error">
                  <NotificationsIcon sx={{ width: 30, height: 30 }} />
                </StyledBadge>
              </LinkStyled>

              <LinkStyled to={route.FAVORITE_VEHICLES}>
                <StyledBadge
                  // badgeContent={favoriteVehicles.length}
                  // badgeContent={favoriteVehiclesLength}
                  color="success"
                >
                  <FavoriteIcon sx={{ width: 30, height: 30 }} />
                </StyledBadge>
              </LinkStyled>
            </ListItemStyled>
          </>
        )}
      </ListStyled>
      <ListItemStyled>
        <IconButtonStyled
          onClick={
            () => console.log("openUserCart")
            // () => dispatch(openUserCart())
          }
        >
          <StyledBadge badgeContent={0} color="success">
            <ShoppingCartIcon sx={{ width: 30, height: 30 }} />
          </StyledBadge>
        </IconButtonStyled>
      </ListItemStyled>

      <ListItemStyled>
        <IconButtonStyled
          onClick={() => {
            if (isAuth) {
              // dispatch(signOut());
              // toast.success('You have successfully signed out');
            }
          }}
        >
          <LogoutIcon sx={{ width: 30, height: 30 }} />
        </IconButtonStyled>
      </ListItemStyled>
    </>
  );
};
