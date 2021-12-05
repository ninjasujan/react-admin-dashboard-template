import React from "react";
import { makeStyles } from "@material-ui/core";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles((theme) => {
  return {
    featured: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    featuredItem: {
      flex: 1,
      padding: "25px",
      margin: "5px",
    },
    featuredTitle: {
      fontSize: "20px",
    },
    featuredMoneyContainer: {
      margin: "10px 0",
      display: "flex",
      alignItems: "center",
    },
    featuredMoney: {
      fontSize: "30px",
      fontWeight: 600,
    },
    featuredMoneyRate: {
      marginLeft: "20px",
    },
  };
});

const FeaturedInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.featured}>
      <Paper className={classes.featuredItem} elevation={3}>
        <span className={classes.featuredTitle}>Renenue</span>
        <div className={classes.featuredMoneyContainer}>
          <span className={classes.featuredMoney}>$2,415</span>
          <span className={classes.featuredMoneyRate}>
            -11.4
            <ArrowDownward
              color="green"
              style={{ color: "green", fontSize: "16px" }}
            />
          </span>
        </div>
        <span className={classes.featuredSub}>Compared to last month</span>
      </Paper>
      <Paper className={classes.featuredItem} elevation={3}>
        <span className={classes.featuredTitle}>Cost</span>
        <div className={classes.featuredMoneyContainer}>
          <span className={classes.featuredMoney}>$1,295</span>
          <span className={classes.featuredMoneyRate}>
            +01.4 <ArrowUpward style={{ color: "green", fontSize: "16px" }} />
          </span>
        </div>
        <span className={classes.featuredSub}>Compared to last month</span>
      </Paper>
      <Paper className={classes.featuredItem} elevation={3}>
        <span className={classes.featuredTitle}>Sales</span>
        <div className={classes.featuredMoneyContainer}>
          <span className={classes.featuredMoney}>$2,105</span>
          <span className={classes.featuredMoneyRate}>
            +14.4 <ArrowUpward style={{ color: "red", fontSize: "16px" }} />
          </span>
        </div>
        <span className={classes.featuredSub}>Compared to last month</span>
      </Paper>
    </div>
  );
};

export default FeaturedInfo;
