import React from "react";
import { makeStyles } from "@material-ui/styles";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import PageWrapper from "../../components/PageWrapper";

const useStyles = makeStyles((theme) => {
  return {
    wrpper: {
      display: "flex",
    },
  };
});

const Landing = () => {
  const classes = useStyles();
  return (
    <div>
      <Topbar />
      <div className={classes.wrpper}>
        <Sidebar />
        <PageWrapper />
      </div>
    </div>
  );
};

export default Landing;
