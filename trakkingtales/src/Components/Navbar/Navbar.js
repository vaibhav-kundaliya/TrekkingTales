import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo_img from "../../Assests/images/logo.png";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

const ElevationScroll = ({ children }) => {
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 10,
      target: window,
   });
   return React.cloneElement(children, {
      elevation:1,
      style: {
         background: trigger ? "#FFFFFF" : "rgba(255,255,255,0.7)",
         transition: "background-color 0.3s ease",
      },
   });
};

function ResponsiveAppBar() {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <>
         <ElevationScroll>
            <AppBar>
               <Container
                  sx={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "space-between",
                  }}
               >
                  <Typography component="img" src={logo_img} width={84} />
                  <Box
                     sx={{
                        display: "flex",
                     }}
                  >
                     <MenuItem
                        component={Link}
                        to={"/"}
                        sx={{
                           color: "navbar.main",
                           ":hover": {
                              color: "navbar.hover",
                              backgroundColor: "transparent",
                           },
                        }}
                     >
                        <HomeIcon /> Home
                     </MenuItem>
                     <MenuItem
                        component={Link}
                        to={"/blogs"}
                        sx={{
                           color: "navbar.main",
                           ":hover": {
                              color: "navbar.hover",
                              backgroundColor: "transparent",
                           },
                        }}
                     >
                        <HistoryEduIcon /> Blogs
                     </MenuItem>
                     <MenuItem
                        component={Link}
                        to={"/dashboard"}
                        sx={{
                           color: "navbar.main",
                           ":hover": {
                              color: "navbar.hover",
                              backgroundColor: "transparent",
                           },
                        }}
                     >
                        <DashboardIcon /> Dashboard
                     </MenuItem>
                     <MenuItem
                        component={Link}
                        to={"/subscription"}
                        sx={{
                           color: "navbar.main",
                           ":hover": {
                              color: "navbar.hover",
                              backgroundColor: "transparent",
                           },
                        }}
                     >
                        <SubscriptionsIcon /> Subscription
                     </MenuItem>
                     <MenuItem
                        onClick={handleClick}
                        sx={{
                           color: "navbar.main",
                           ":hover": {
                              color: "navbar.hover",
                              backgroundColor: "transparent",
                           },
                        }}
                     >
                        <Tooltip title="Profile">
                           <AccountCircleIcon />
                        </Tooltip>
                     </MenuItem>
                     <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                           "aria-labelledby": "basic-button",
                        }}
                     >
                        <MenuItem sx={{color:"navbar.main"}} onClick={handleClose} component={Link} to={"/profile"}>
                           Profile
                        </MenuItem>

                        <MenuItem sx={{color:"navbar.main"}} onClick={handleClose} component={Link} to={"/logout"}>
                           Sign In/Sign Up
                        </MenuItem>
                     </Menu>
                  </Box>
               </Container>
            </AppBar>
         </ElevationScroll>
      </>
   );
}
export default ResponsiveAppBar;
