import React from "react";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core";

import AppLayout from "../../components/layout/AppLayout";
import { getPatients } from "../../services/Dashboard/Patients";
import AppTextFeild from "../../components/form/AppTextField";
import AppBottomNavigation from "../../components/layout/AppBottomNavigation";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: "70vh",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

function DashboardPage(props: any) {
  const classes = useStyles();

  return (
    <AppLayout title="Dashboard" footer={null} leftIcon={null} rightIcon={null}>
      <AppTextFeild label="Search records" variant="outlined" />
      <List className={classes.root} subheader={<li />}>
        {["20/12/2020", "19/12/2020", "18/12/2020"].map((date) => (
          <li key={`section-${date}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{date}</ListSubheader>
              {getPatients().map((p) => (
                <ListItem button>
                  <ListItemText
                    primary="John Doe"
                    secondary="Here where you live"
                  />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
      <AppBottomNavigation
        goTo={(route: string) => props.history.push(route)}
      />
    </AppLayout>
  );
}

export default withRouter(DashboardPage);
