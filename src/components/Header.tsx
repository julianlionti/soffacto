import {
  AppBar,
  Button,
  Hidden,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import LogoTrans from "../assets/images/logo_trans.png";
import { useT } from "../translations";

const Logo = styled("img")(({ theme }) => ({
  height: 70,
  [theme.breakpoints.up("sm")]: {
    height: 80,
  },
}));

const TitleMenu = styled("div")(({ theme }) => ({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 160,
}));

export const Header = () => {
  const t = useT();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Logo src={LogoTrans} alt="Soffacto Logo" />
        <TitleMenu>
          <Hidden smDown>
            <Button color="inherit">{t("about")}</Button>
            <Button color="inherit">{t("services")}</Button>
          </Hidden>
        </TitleMenu>
        <Hidden smUp>
          <IconButton size="large" edge="end" color="inherit" aria-label="menu">
            <Icon>menu</Icon>
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
