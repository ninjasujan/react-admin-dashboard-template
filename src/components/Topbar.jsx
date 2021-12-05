import React from "react";
import { makeStyles } from "@mui/styles";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import Badege from "@mui/material/Badge";
import { Avatar } from "@material-ui/core";
import { badge } from "../constants/style.constant";

const useStyles = makeStyles((theme) => {
  return {
    topbar: {
      height: "50px",
      width: "100%",
      backgroundColor: theme.bgColor.primary,
      marginTop: "5px",
      top: 0,
      position: "sticky",
      zIndex: 999,
    },
    topbarWrapper: {
      height: "100%",
      padding: "0px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      fontWeight: "bold",
      fontSize: theme.logo.size,
      color: theme.logo.color,
    },
    topRightIconWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    topRightIcon: {
      paddingLeft: "10px",
      cursor: "pointer",
    },
    avatar: {
      width: "50px",
      height: "50px",
      margin: "2px 5px",
      cursor: "pointer",
      //   display: "block",
    },
  };
});

const Topbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.topbar}>
      <div className={classes.topbarWrapper}>
        <div className="topbarLeft">
          <span className={classes.logo}>Lamaadmin</span>
        </div>
        <div className="topbarRight">
          <div className={classes.topRightIconWrapper}>
            <LanguageIcon className={classes.topRightIcon} />
            <Badege
              badgeContent={4}
              color={badge.color}
              className={classes.topRightIcon}
            >
              <NotificationsNone />
            </Badege>
            <SettingsIcon className={classes.topRightIcon} />
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
