import React from "react";
import { makeStyles } from "@mui/styles";
import Home from "../pages/Home/Home";

const useStyles = makeStyles((theme) => {
  return {
    pageWrapper: {
      flex: 4,
    },
  };
});

const PageWrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageWrapper}>
      <Home />
    </div>
  );
};

export default PageWrapper;
