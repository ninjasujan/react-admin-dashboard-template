import React from "react";
import { makeStyles } from "@mui/styles";
import LineStyle from "@material-ui/icons/LineStyle";
import Timeline from "@material-ui/icons/Timeline";
import TrendingUp from "@material-ui/icons/TrendingUp";
import UsersIcon from "@mui/icons-material/PeopleOutline";
import ProductIcon from "@mui/icons-material/ProductionQuantityLimits";
import TransactionIcon from "@mui/icons-material/Receipt";
import MailIcon from "@mui/icons-material/MailOutline";
import ChatIcon from "@mui/icons-material/Chat";
import MessageIcon from "@mui/icons-material/Message";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssessmentIcon from "@mui/icons-material/Assessment";

const useStyles = makeStyles((theme) => {
  return {
    sidebar: {
      flex: 1,
      height: "calc(100vh - 50px)",
      position: "sticky",
      top: 0,
      backgroundColor: theme.sidebar.bgColor,
    },
    sidebarWrapper: {
      padding: "30px",
      color: "#555",
    },
    sidebarMenu: {
      marginTop: "15px",
    },
    sidebarTitle: {
      color: theme.sidebar.sidebarMenuTitle,
      fontSize: "13px",
    },
    sidebarList: {
      listStyle: "none",
      padding: "5px",
    },
    sidebarListItem: {
      padding: "5px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      borderRadius: "10px",
      "&:hover": {
        backgroundColor: "#e4e4fa",
      },
      "&.active": {
        backgroundColor: "#e4e4fa",
      },
    },
    sidebarIcon: {
      marginRight: "5px",
      fontSize: "20px",
    },
  };
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <div className={classes.sidebarMenu}>
          <h3 className={classes.sidebarTitle}>Dashboard</h3>
          <ul className={classes.sidebarList}>
            <li className={`${classes.sidebarListItem} active`}>
              <LineStyle className={classes.sidebarIcon} />
              Home
            </li>
            <li className={classes.sidebarListItem}>
              <Timeline className={classes.sidebarIcon} />
              Analytics
            </li>
            <li className={classes.sidebarListItem}>
              <TrendingUp className={classes.sidebarIcon} />
              Analytics
            </li>
          </ul>
        </div>
        <div className={classes.sidebarMenu}>
          <h3 className={classes.sidebarTitle}>Quick Menu</h3>
          <ul className={classes.sidebarList}>
            <li className={classes.sidebarListItem}>
              <UsersIcon className={classes.sidebarIcon} />
              Users
            </li>
            <li className={classes.sidebarListItem}>
              <ProductIcon className={classes.sidebarIcon} />
              Product
            </li>
            <li className={classes.sidebarListItem}>
              <TransactionIcon className={classes.sidebarIcon} />
              Transaction
            </li>
          </ul>
        </div>
        <div className={classes.sidebarMenu}>
          <h3 className={classes.sidebarTitle}>Notification</h3>
          <ul className={classes.sidebarList}>
            <li className={classes.sidebarListItem}>
              <MailIcon className={classes.sidebarIcon} />
              Mail
            </li>
            <li className={classes.sidebarListItem}>
              <ChatIcon className={classes.sidebarIcon} />
              Feedback
            </li>
            <li className={classes.sidebarListItem}>
              <MessageIcon className={classes.sidebarIcon} />
              Message
            </li>
          </ul>
        </div>
        <div className={classes.sidebarMenu}>
          <h3 className={classes.sidebarTitle}>Staff</h3>
          <ul className={classes.sidebarList}>
            <li className={classes.sidebarListItem}>
              <WorkOutlineIcon className={classes.sidebarIcon} />
              Manage
            </li>
            <li className={classes.sidebarListItem}>
              <BarChartIcon className={classes.sidebarIcon} />
              Analytics
            </li>
            <li className={classes.sidebarListItem}>
              <AssessmentIcon className={classes.sidebarIcon} />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
