import {
  AppBar,
  Hidden,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import LogoTrans from "../assets/images/logo_trans.png";

const Logo = styled("img")(({ theme }) => ({
  height: 70,
  [theme.breakpoints.up("sm")]: {
    height: 80,
  },
}));

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo src={LogoTrans} alt="Soffacto Logo" />
          <div style={{ flex: 1 }} />
          <Hidden smUp>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
